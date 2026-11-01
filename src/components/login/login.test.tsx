import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './login-form';

describe('Login', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    render(<LoginForm />);
  });

  it('shows error messages when submission is empty', async () => {
    await user.click(screen.getByRole('button', { name: 'Sign In' }));

    expect(await screen.findByText('Enter your username or email')).toBeVisible();
    expect(await screen.findByText('Enter your password')).toBeVisible();

    expect(screen.getByLabelText('Username')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText('Password')).toHaveAttribute('aria-invalid', 'true');
  });

  it('moves focus through the form in keyboard order', async () => {
    const controls = [
      screen.getByLabelText('Username'),
      screen.getByLabelText('Password'),
      screen.getByRole('button', { name: 'Sign In' }),
      screen.getByRole('checkbox', { name: 'Remember me' }),
      screen.getByRole('link', { name: 'Forgot Password' }),
    ];

    for (const control of controls) {
      await user.tab();
      expect(control).toHaveFocus();
    }

    await user.tab({ shift: true });
    expect(screen.getByRole('checkbox', { name: 'Remember me' })).toHaveFocus();
  });

  it('focuses the username when both required fields are empty', async () => {
    await user.click(screen.getByRole('button', { name: 'Sign In' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Username')).toHaveFocus();
    });
  });

  it('focuses the username when the password is valid', async () => {
    await user.type(screen.getByLabelText('Password'), 'mypassword1');
    await user.click(screen.getByRole('button', { name: 'Sign In' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Username')).toHaveFocus();
    });
  });

  it('focuses the password when the username is valid', async () => {
    await user.type(screen.getByLabelText('Username'), 'MyUsername');
    await user.click(screen.getByRole('button', { name: 'Sign In' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Password')).toHaveFocus();
    });
  });
});
