import { Header } from './components/Header';
import { Input } from './components/Input';

import './global.scss';
import styles from './App.module.scss';
import { TaskListView } from './components/TodoListView';

type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className="container">
        <TaskListView />
      </main>
    </div>
  );
}
