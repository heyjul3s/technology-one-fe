import { Header, Login } from './components';

import styles from './app.module.css';

export function App() {
  return (
    <main>
      <Header />

      <div className={styles['app-layout']}>
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

        <Login />
      </div>
    </main>
  );
}
