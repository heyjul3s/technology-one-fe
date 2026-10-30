import googleIcon from '../../assets/SocialMedia-Google.svg';
import facebookIcon from '../../assets/SocialMedia-Facebook.svg';

import styles from './login-form-sso.module.css';

export function LoginFormSso() {
  return (
    <div className={styles['login-form-sso']}>
      <button
        aria-label="Sign in with Google"
        className={styles['login-form-sso-button']}
        type="button"
      >
        <img alt="" height={32} src={googleIcon} width={32} />
        <span aria-hidden="true">
          <span className={styles['login-form-sso-prefix-compact']}>With </span>
          <span className={styles['login-form-sso-prefix-wide']}>Sign in with </span>
          Google
        </span>
      </button>

      <button
        aria-label="Sign in with Facebook"
        className={styles['login-form-sso-button']}
        type="button"
      >
        <img alt="" height={32} src={facebookIcon} width={32} />
        <span aria-hidden="true">
          <span className={styles['login-form-sso-prefix-compact']}>With </span>
          <span className={styles['login-form-sso-prefix-wide']}>Sign in with </span>
          Facebook
        </span>
      </button>
    </div>
  );
}
