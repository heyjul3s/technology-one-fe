import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Checkbox } from '../checkbox';
import { Form } from '../form';
import { TextField } from '../text-field';

import styles from './login-form.module.css';

const LoginFormSchema = z.object({
  password: z.string().min(1, 'Enter your password'),
  rememberMe: z.boolean().optional(),
  username: z.string().trim().min(1, 'Enter your username or email'),
});

type LoginFormData = z.infer<typeof LoginFormSchema>;

export function LoginForm() {
  const methods = useForm({
    defaultValues: { password: '', rememberMe: false, username: '' },
    resolver: zodResolver(LoginFormSchema),
  });

  const handleLogin = () => {};

  return (
    <Form className={styles['login-form']} methods={methods} onSubmit={handleLogin}>
      <TextField<LoginFormData>
        autoCapitalize="none"
        autoComplete="username"
        label="Username"
        name="username"
        type="text"
      />

      <TextField<LoginFormData>
        autoComplete="current-password"
        label="Password"
        name="password"
        type="password"
      />

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
  );
}
