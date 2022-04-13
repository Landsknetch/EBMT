import Head from 'next/head'
import Image from 'next/image'

export default function Registration()
{
  return(
    <>
      <main className="relative min-h-screen w-full bg-white">
        <div className="p-6" x-data="app">
          <header className="flex w-full justify-between">
            <svg
              className="h-7 w-7 cursor-pointer text-gray-400 hover:text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path
                strokeWidth="1"
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>

            <div>
              <button
                type="button"
                x-show="isLoginPage"
                className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
              >
                LOGIN
              </button>
            </div>
          </header>

          <section className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
            <div x-show="isLoginPage" className="space-y-4">
              <header className="mb-3 text-2xl font-bold">
                Create your profile
              </header>
              <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                <input
                  type="text"
                  placeholder="Age"
                  className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                />
              </div>
              <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                <input
                  type="text"
                  placeholder="Name (optional)"
                  className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                />
              </div>
              <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                <input
                  type="text"
                  placeholder="Email"
                  className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                />
              </div>
              <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                <input
                  type="password"
                  placeholder="Password"
                  className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                />
              </div>
              <button className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
                CREATE ACCOUNT
              </button>
            </div>

            <footer>
              <div className="mt-8 text-sm text-gray-400">
                By signing in to ****, you agree to our
                <a href="#" className="font-medium text-gray-500">
                  Terms
                </a>{" "}
                and
                <a href="#" className="font-medium text-gray-500">
                  Privacy Policy
                </a>
                .
              </div>
            </footer>
          </section>
        </div>
      </main>
    </>
  )
}
