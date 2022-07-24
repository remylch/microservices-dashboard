import { useCallback, useEffect, useState } from "react"

import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./components/Login/Login"
import Sidebar from "./components/Home/Sidebar"
import Code from "./components/Home/Code"
import Runners from "./components/Home/Runners"
import Settings from "./components/Home/Settings"
import { checkTheme } from "./utils/colorUtils"
import { localStorageColorValue } from "./utils/localStorageUtils"
import useColorTheme from "./hooks/useColorTheme"
import { useAppSelector } from "./store/store"

checkTheme()

function App() {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false)
  const { colorMode } = useAppSelector((state) => state.global)

  const checkAuth = useCallback(() => {
    localStorage.setItem(localStorageColorValue, "light")
    setIsAuth(true)
    navigate("/code")
  }, [])

  useEffect(() => {
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
