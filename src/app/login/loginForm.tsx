'use client'
import { login, signup } from './actions'
import toast, { Toaster } from "react-hot-toast";
import { useState } from 'react';

export default function LoginForm() {
  const [signUpButtonTitle, setSignUpButtonTitle] = useState('Sign up');
  const [loginButtonTitle, setLoginButtonTitle] = useState('Log in');

  async function handleLogin(formData: FormData) {
    setLoginButtonTitle('Logging in...');
    try {
      await login(formData);
    } catch (error: any) {
      setLoginButtonTitle('Log in');
      toast.error(error.message);
    }
  }

  async function handleSignup(formData: FormData) {
    setSignUpButtonTitle('Creating account...');
    try {
      await signup(formData);
    } catch (error: any) {
      setSignUpButtonTitle('Sign up');
      toast.error(error.message);
    }
  }

  return (
    <form className="mx-auto">
      <h1 className="text-xl font-medium">List your apartment in 5 minutes</h1>
      <ol className="p-2 mb-6">
        <li>1. List your Vienna, AT apartment</li>
        <li>2. Get requests from vetted students</li>
        <li>3. Sign a shared-flat rental agreement</li>
      </ol>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        minLength={3}
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        className="mb-6"
        id="password"
        name="password"
        type="password"
        minLength={8}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Please enter a password at least 8 characters long with at least one number, one uppercase and one lowercase letter"
        required
      />
      <button className="primary-button" formAction={handleSignup}>{signUpButtonTitle}</button>
      <button className="subtle-button" formAction={handleLogin}>{loginButtonTitle}</button>
    </form>
  )
}