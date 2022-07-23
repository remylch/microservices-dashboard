import { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import { toggleColorMode } from "../store/appStore"
import { useAppSelector } from "../store/store"

const useColorTheme = () => {
  const { colorMode } = useAppSelector((state) => state.global)
  const dispatch = useDispatch()

  const toggle = useCallback(() => {
    dispatch(toggleColorMode())
  }, [])

  useEffect(() => {
    const el = document.documentElement
    if (colorMode === "dark") {
      el.classList.add("dark")
    } else {
      el.classList.remove("dark")
    }
    localStorage.setItem("theme", colorMode)
  }, [colorMode])

  return {
    toggle,
  }
}

export default useColorTheme
