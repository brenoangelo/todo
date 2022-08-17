import { Button } from './Button';

import iconPlus from '../assets/icon-plus.svg';
import styles from './Input.module.scss';

export function Input() {
  return (
    <div className={styles.inputWrapper}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <Button>
        Criar
        <img src={iconPlus} />
      </Button>
    </div>
  );
}
