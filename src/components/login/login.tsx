import { LoginForm } from './login-form';
import { LoginFormSso } from './login-form-sso';

import turtle from '../../assets/Turtle.svg';
import styles from './login.module.css';

export function Login() {
  return (
    <section className={styles.login}>
      <img alt="" className={styles['login-turtle']} height={260} src={turtle} width={260} />
      <h2 className={styles['login-title']}>Sign In</h2>
      <LoginFormSso />
      <div className={styles['login-divider']}>OR</div>
      <LoginForm />
      <p className={styles['login-footer']}>
        Don’t already have an account?{' '}
        <a className={styles['login-register']} href="/register">
          Register
        </a>
      </p>
    </section>
  );
}
