import { Logo } from "./Logo";

import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  )
}