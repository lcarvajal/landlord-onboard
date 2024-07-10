import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <main className="h-screen flex flex-col md:flex-row items-center bg-white md:bg-[url('/student.jpg')] bg-no-repeat bg-cover bg-left-top md:shadow-[inset_0_-10em_30em_0.8em_rgba(0,0,0,0.8)]">
      <div className="md:grow text-center p-6 mt-6 md:mt-0 md:transform md:translate-y-6" >
        <h1 className="text-black md:text-white text-3xl md:text-6xl w-4/5 mx-auto font-extrabold">Earn <span className="text-orange-500">50% more</span> renting your apt to students</h1>
      </div >
      <div className="grow flex md:items-center md:h-full md:w-4/5 lg:w-3/5 bg-white">
        <form className="mx-auto">
          <h1 className="text-xl font-medium">List your apartment in 5 minutes</h1>
          <ol className="p-2 mb-6">
            <li>1. List your Vienna, AT apartment</li>
            <li>2. Get requests from vetted students</li>
            <li>3. Sign a shared-flat rental agreement</li>
          </ol>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input className="mb-6" id="password" name="password" type="password" required />
          <button className="primary-button" formAction={signup}>Sign up</button>
          <button className="subtle-button" formAction={login}>Log in</button>
        </form>
      </div>
    </main >
  )
}