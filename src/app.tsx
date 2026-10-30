import { Header, Login, LoginTurtleScene } from './components';

import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles['app-layout']}>
        <div className={styles['app-intro']}>
          <h1 className={styles['app-intro-title']}>Welcome to Turtle Cove!</h1>
          <p>Sign in to access your personalised island of features!</p>
          <p>
            New here?{' '}
            <a className={styles['app-intro-register']} href="/register">
              Register
            </a>{' '}
            to explore endless possibilities
          </p>
          <p className={styles['app-intro-tagline']}>Your adventure awaits – dive in!</p>
        </div>

        <div className={styles['app-login']}>
          <Login />
        </div>

        <LoginTurtleScene />
      </main>
    </div>
  );
}
