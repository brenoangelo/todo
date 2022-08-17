import styles from './TaskWrapper.module.scss';

import IconCheck from '../assets/icon-check.svg';
import IconCheckUnfilled from '../assets/icon-check-unfilled.svg';

interface TaskWrapperProps {
  title: string;
  isFinished: boolean;
}

export function TaskWrapper({ title, isFinished }: TaskWrapperProps) {
  return (
    <div className={styles.taskWrapper}>
      <span className={styles.statusIcon}>
        {isFinished ? <img src={IconCheck} /> : <img src={IconCheckUnfilled} />}
      </span>

      <p>{title}</p>

      <span className={styles.trashIcon}></span>
    </div>
  );
}
