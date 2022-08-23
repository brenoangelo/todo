import styles from './TaskListTable.module.scss';
import { TaskWrapper } from './TaskWrapper';

type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

interface TaskListTableProps {
  tasks: Task[];
  handleFinishAndUndoFinishTask: (id: number, finish: boolean) => void;
  handleDeleteTask: (id: number) => void;
}

export function TaskListTable({
  tasks,
  handleFinishAndUndoFinishTask,
  handleDeleteTask,
}: TaskListTableProps) {
  const tasksCount = tasks.length;
  const finishedTasksCount = tasks.reduce((acc, task) => {
    acc += task.isDone ? 1 : 0;

    return acc;
  }, 0);

  return (
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
            isFinished={task.isDone}
            handleFinishAndUndoFinishTask={handleFinishAndUndoFinishTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}
