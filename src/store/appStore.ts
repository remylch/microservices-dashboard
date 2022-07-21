import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

export type ColorModeType = "LIGHT" | "DARK"

type GlobalAppStateType = {
  colorMode: ColorModeType
  sidebarOpen: boolean
}

export const defaultGlobalAppState: GlobalAppStateType = {
  colorMode: "LIGHT",
  sidebarOpen: true,
}

const globalSlice = createSlice({
  name: "global",
  initialState: defaultGlobalAppState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen
        ? (state.sidebarOpen = false)
        : (state.sidebarOpen = true)
    },
    toggleColorMode: (state) => {
      state.colorMode === "LIGHT"
        ? (state.colorMode = "DARK")
        : (state.colorMode = "LIGHT")
    },
  },
})

export const { toggleColorMode, toggleSidebar } = globalSlice.actions

export const globalAppState = (state: RootState) => state.global

export default globalSlice.reducer
