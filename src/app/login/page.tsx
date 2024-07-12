import LoginForm from "./loginForm"

export default function LoginPage() {
  return (
    <main className="flex flex-grow flex-col md:flex-row items-center bg-white md:bg-[url('/student.jpg')] bg-no-repeat bg-cover bg-left-top md:shadow-[inset_0_-10em_30em_0.8em_rgba(0,0,0,0.8)]">
      <div className="md:grow text-center p-6 mt-6 md:mt-0 md:transform md:translate-y-6" >
        <h1 className="text-black md:text-white text-3xl md:text-6xl w-4/5 mx-auto font-extrabold">Earn <span className="text-orange-500">50% more</span> renting your apt to students</h1>
      </div >
      <div className="grow flex md:items-center md:h-full md:w-4/5 lg:w-3/5 bg-zinc-900">
        <LoginForm />
      </div>
    </main >
  )
}