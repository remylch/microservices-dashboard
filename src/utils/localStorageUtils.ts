import { ColorModeType } from "./colorUtils"

const localStorageVariable = "msd"
const localStorageColorValue = localStorageVariable + "-theme"

const getColorModeInLocalStorage = (): ColorModeType | null =>
  localStorage.getItem(localStorageColorValue) as ColorModeType | null

export {
  localStorageColorValue,
  localStorageVariable,
  getColorModeInLocalStorage,
}
