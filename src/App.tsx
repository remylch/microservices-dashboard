import { useCallback, useEffect, useState } from "react"

import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./components/Login/Login"
import Sidebar from "./components/Home/Sidebar"
import Code from "./components/Home/Code"
import Runners from "./components/Home/Runners"
import Settings from "./components/Home/Settings"

function App() {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false)

  const checkAuth = useCallback(() => {
    setIsAuth(true)
    navigate("/code")
  }, [])

  useEffect(() => {
    checkAuth()
  }, [isAuth])

  return (
    <>
      <div className="min-h-screen flex w-full bg-white">
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
    </>
  )
}

export default App
