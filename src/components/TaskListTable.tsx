import styles from './TaskListTable.module.scss';
import { TaskWrapper } from './TaskWrapper';

const TASKS = [
  {
    title: 'Integer urna interdum massa libero auctor neque',
    isFinished: false,
  },
  {
    title: 'Integer urna interdum massa libero auctor neque',
    isFinished: false,
  },
  {
    title: 'Integer urna interdum massa libero auctor neque',
    isFinished: true,
  },
  {
    title: 'Integer urna interdum massa libero auctor neque',
    isFinished: false,
  },
  {
    title: 'Integer urna interdum massa libero auctor neque',
    isFinished: true,
  },
  {
    title: 'Integer urna interdum massa libero auctor neque',
    isFinished: false,
  },
];

export function TaskListTable() {
  return (
    <div className={styles.taskContainer}>
      <header className={styles.tableHeader}>
        <span>
          Tarefas criadas
          <span>5</span>
        </span>

        <span>
          Concluídas
          <span>2 de 5</span>
        </span>
      </header>

      <div className={styles.tableList}>
        {TASKS.map((task, index) => (
          <TaskWrapper title="banan" isFinished={index === 0}/>
        ))}
      </div>
    </div>
  );
}
