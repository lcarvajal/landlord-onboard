'use client'
import { login, signup } from './actions'
import toast, { Toaster } from "react-hot-toast";
import { AuthError } from '@supabase/supabase-js';

export default function LoginForm() {
  async function handleLogin(formData: FormData) {
    try {
      await login(formData);
    } catch (error: AuthError | any) {
      toast.error(error.message);
    }
  }

  async function handleSignup(formData: FormData) {
    try {
      await signup(formData);
    } catch (error: AuthError | any) {
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
      <button className="primary-button" formAction={handleSignup}>Sign up</button>
      <button className="subtle-button" formAction={handleLogin}>Log in</button>
    </form>
  )
}