import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Form } from '../form';
import { TextField } from '../text-field';

import styles from './login-form.module.css';

const LoginFormSchema = z.object({
  password: z.string().min(8, 'At least 8 characters'),
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

      <Form methods={methods} onSubmit={handleLogin}>
        <TextField<LoginFormData> label="Username" name="username" type="text" />
        <TextField<LoginFormData> label="Password" name="password" type="password" />
        <button type="submit">Log In</button>
      </Form>

      <p>Don’t already have an account? Register</p>
    </section>
  );
}
