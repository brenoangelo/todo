
import { TaskListTable } from './components/TaskListTable'
import { Header } from './components/Header'
import { Input } from './components/Input'

import './global.scss'
import styles from './App.module.scss'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className="container">
        <Input />

        <TaskListTable />
      </main>
    </div>
  )
}
