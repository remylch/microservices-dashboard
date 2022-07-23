export type ColorModeType = "light" | "dark"

const checkTheme = (): ColorModeType => {
  if (
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "dark"
  } else {
    return "light"
  }
}

export { checkTheme }
