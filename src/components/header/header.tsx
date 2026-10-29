import logo from '../../assets/Turtle-Cove-Logo.svg';

import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles['header-logo']} href="/">
        <img alt="Turtle Cove home" height={40} src={logo} width={163} />
      </a>
    </header>
  );
}
