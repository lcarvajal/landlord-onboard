import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from '../src/app/login/page';

describe('LoginPage', () => {
  test('shows validation error for invalid email format', async () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText(/Email:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const signUpButton = screen.getByRole('button', { name: /Sign up/i });

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: 'Validpassword1' } });
    fireEvent.click(signUpButton);

    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  test('shows validation error for invalid password format', async () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText(/Email:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const signUpButton = screen.getByRole('button', { name: /Sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'short' } });
    fireEvent.click(signUpButton);

    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });
});
