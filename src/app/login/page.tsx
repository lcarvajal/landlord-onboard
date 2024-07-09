import { login, signup } from './actions'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen items-center bg-white md:bg-[url('/student.jpg')] md:bg-no-repeat md:bg-cover md:bg-left-top">
      <div className="md:grow text-center p-6 mt-6">
        <h1 className="text-black md:text-white text-3xl md:text-6xl sm:w-4/5 mx-auto font-extrabold">Earn <span className="text-orange-500">50% more</span> renting your apt to students</h1>
      </div>
      <div className="grow flex md:items-center w-full md:h-full md:w-4/5 lg:w-3/5 bg-white text-black p-6">
        <form className="mx-auto">
          <h1 className="text-xl mb-3 font-medium">List your apartment in 5 minutes</h1>
          <ol className="mb-3 p-2">
            <li>1. List your Vienna apartment</li>
            <li>2. Get requests from vetted students</li>
            <li>3. Sign a shared-flat rental agreement</li>
          </ol>
          <label htmlFor="email">Email:</label>
          <input className="w-full block bg-gray-200 rounded-lg px-3 py-2 mb-3" id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input className="w-full block bg-gray-200 rounded-lg px-3 py-2 mb-6" id="password" name="password" type="password" required />
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3" formAction={signup}>Sign up</button>
          <button className="w-full text-blue-500 hover:text-blue-700 font-bold" formAction={login}>Log in</button>
        </form>
      </div>
    </div>
  )
}