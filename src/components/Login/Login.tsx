import gitlabLogo from "../../statics/images/gitlab-logo-500.svg"
import { updateUser } from "../../store/userStore"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { Dispatch, SetStateAction } from "react"

interface ILogin {
  isAuth: boolean
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

const Login = ({ setIsAuth }: ILogin) => {
  const dispatch = useAppDispatch()

  const user = useAppSelector((state) => state.user)

  console.log(user)
  function login() {
    dispatch(
      updateUser({
        country: "France",
        email: "test@mail.com",
        job: "Data engineer",
        password: "************",
        jwt: "a",
      })
    )
    setIsAuth(true)
  }

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-2 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white pb-8 pt-4 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto pb-4 flex items-center justify-center sm:w-full sm:max-w-md">
              <img
                className="mx-auto h-20 w-auto"
                src={gitlabLogo}
                alt="Workflow"
              />
              <h2 className="mt-4 text-center text-3xl font-bold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <button className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </button>
                </div>
              </div>

              <div>
                <button
                  onClick={login}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
