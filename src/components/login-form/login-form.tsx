import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Form } from '../form';
import { TextField } from '../text-field';

import styles from './login-form.module.css';
import { Checkbox } from '../checkbox';

const LoginFormSchema = z.object({
  password: z.string().min(8, 'At least 8 characters'),
  rememberMe: z.boolean().optional(),
  username: z.email('Invalid email'),
});

type LoginFormData = z.infer<typeof LoginFormSchema>;

export function LoginForm() {
  const methods = useForm({
    defaultValues: { password: '', username: '' },
    resolver: zodResolver(LoginFormSchema),
  });

  const handleLogin = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <section className={styles['login-form']}>
      <h2 className={styles['login-form-title']}>Sign In</h2>

      <Form className={styles['login-form-fields']} methods={methods} onSubmit={handleLogin}>
        <TextField<LoginFormData> label="Username" name="username" type="text" />
        <TextField<LoginFormData> label="Password" name="password" type="password" />
        <button
          className={styles['login-form-submit']}
          disabled={methods.formState.isSubmitting}
          type="submit"
        >
          Sign In
        </button>

        <div className={styles['login-form-options']}>
          <Checkbox label="Remember me" name="rememberMe" />
          <a className={styles['login-form-forgot-password']} href="/">
            Forgot Password
          </a>
        </div>
      </Form>

      <p className={styles['login-form-footer']}>Don’t already have an account? Register</p>
    </section>
  );
}
