import { Button } from './Button';

import iconPlus from '../assets/icon-plus.svg';
import styles from './Input.module.scss';
import { FormEvent, useState } from 'react';

interface InputProps {
  handleCreateNewTask: (task: string) => void;
}

export function Input({ handleCreateNewTask }: InputProps) {
  const [newTask, setNewTask] = useState('');

  function createNewTask(event: FormEvent) {
    event.preventDefault();

    if (newTask.trim() === '') {
      return;
    }

    handleCreateNewTask(newTask);
    setNewTask('');
  }

  return (
    <form onSubmit={createNewTask} className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => setNewTask(event.target.value)}
        value={newTask}
        maxLength={144}
      />
      <Button type="submit">
        Criar
        <img src={iconPlus} />
      </Button>
    </form>
  );
}
