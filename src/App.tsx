import { v4 as uuidv4 } from 'uuid';

import { TaskListTable } from './components/TaskListTable';
import { Header } from './components/Header';
import { Input } from './components/Input';

import './global.scss';
import styles from './App.module.scss';
import { useState } from 'react';

type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(task: string) {
    const newTask = {
      id: uuidv4(),
      title: task,
      isDone: false,
    };

    setTasks((tasks) => [newTask, ...tasks]);
  }

  function handleFinishAndUndoFinishTask(id: string, finish: boolean) {
    const tasksCopy = Array.from(tasks);
    const taskExists = tasksCopy.find((item) => item.id === id);

    if (!taskExists) {
      return;
    }

    tasksCopy.splice(
      tasksCopy.findIndex((item) => item.id === id),
      1,
      { ...taskExists, isDone: finish },
    );

    setTasks(tasksCopy);
  }

  function handleDeleteTask(id: string) {
    const taskExists = tasks.find((item) => item.id === id);

    if (!taskExists) {
      return;
    }

    setTasks((tasks) => tasks.filter((item) => item.id !== id));
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className="container">
        <Input handleCreateNewTask={handleCreateNewTask} />

        <TaskListTable
          tasks={tasks}
          handleFinishAndUndoFinishTask={handleFinishAndUndoFinishTask}
          handleDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
}
