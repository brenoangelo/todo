import { useEffect, useState } from 'react';
import styles from './TaskListTable.module.scss';
import { TaskWrapper } from './TaskWrapper';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { Input } from './Input';
import AxiosAdapter from '../infra/AxiosAdapter';
import TodoHttpGateway from '../gateways/TodoHttpGateway';

const httpClient = new AxiosAdapter()
const todoGateway = new TodoHttpGateway(httpClient, 'http://localhost:3333')

type Task = {
  id: string;
  title: string;
  done: boolean;
};

export function TaskListView() {
  const [storage, setStorage] = useLocalStorage<Task[]>();
  const [tasks, setTasks] = useState<Task[]>([]);

  const tasksCount = tasks.length;
  const finishedTasksCount = tasks.reduce((acc, task) => {
    acc += task.done ? 1 : 0;

    return acc;
  }, 0);

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    const data = await httpClient.get('http://localhost:3333/tasks');

    setTasks(data);
  }

  async function handleCreateNewTask(task: string) {
    try {
      const newTask = {
        title: task,
        done: false,
      }

      const data = await todoGateway.addItem(newTask)

      setTasks((state) => {
        const newTaskList = [data, ...state];

        return newTaskList;
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function handleFinishAndUndoFinishTask(id: string, finish: boolean) {
    const tasksCopy = structuredClone(tasks);
    const taskIndex = tasksCopy.findIndex((item) => item.id === id);

    if (taskIndex < 0) {
      return;
    }

    try {
      const taskUpdated = {
        ...tasksCopy[taskIndex],
        done: finish,
      }

      await todoGateway.updateItem(taskUpdated, id)

      tasksCopy[taskIndex] = {
        ...tasksCopy[taskIndex],
        done: finish
      }

      setTasks(tasksCopy);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDeleteTask(id: string) {
    const taskIndex = tasks.findIndex((item) => item.id === id);

    if (taskIndex < 0) {
      return;
    }

    await todoGateway.removeItem(id)

    setTasks((tasks) => tasks.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Input handleCreateNewTask={handleCreateNewTask} />
      <div className={styles.taskContainer}>
        <header className={styles.tableHeader}>
          <span>
            Tarefas criadas
            <span>{tasksCount}</span>
          </span>

          <span>
            Concluídas
            <span>{`${finishedTasksCount} de ${tasksCount}`}</span>
          </span>
        </header>

        <div className={styles.tableList}>
          {tasks.map((task) => (
            <TaskWrapper
              key={task.id}
              taskId={task.id}
              title={task.title}
              isFinished={task.done}
              handleFinishAndUndoFinishTask={handleFinishAndUndoFinishTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
