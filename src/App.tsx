import { useCallback, useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./components/Login/Login"
import Sidebar from "./components/Home/Sidebar"
import Code from "./components/Home/Code"
import Runners from "./components/Home/Runners"
import Settings from "./components/Home/Settings"
import { localStorageColorValue } from "./utils/localStorageUtils"
import { useAppDispatch, useAppSelector } from "./store/store"
import { useGetUserInformationsQuery } from "./api/userAPI"
import { cleanupGitlab, setUpGitlab } from "./store/gitlabStore"

function App() {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false)
  const { colorMode } = useAppSelector((state) => state.global)
  const dispatch = useAppDispatch()

  const { refetch, data: userData } = useGetUserInformationsQuery()

  useEffect(() => {
    userData &&
      dispatch(
        setUpGitlab({
          token: userData.data.gitlab_access.accessToken,
          url: userData.data.gitlab_access.dns,
        })
      )
    return () => {
      dispatch(cleanupGitlab())
    }
  }, [userData])

  const checkAuth = useCallback(() => {
    localStorage.setItem(localStorageColorValue, "light")
    setIsAuth(true)
    if (isAuth) navigate("/code")
  }, [])

  useEffect(() => {
    refetch()
    console.log("fetched")
    checkAuth()
  }, [isAuth])

  return (
    <>
      {colorMode && (
        <div className="min-h-screen flex w-full bg-white dark:bg-fade-blue">
          {isAuth !== undefined && <Sidebar />}
          <div className=" w-full">
            <Routes>
              {isAuth ? (
                <>
                  <Route path="/runners" element={<Runners />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/code" element={<Code />} />
                </>
              ) : (
                <Route
                  path="/"
                  element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
                />
              )}
            </Routes>
          </div>
        </div>
      )}
    </>
  )
}

export default App
