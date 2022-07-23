import { RootState } from "./store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { checkTheme, ColorModeType } from "../utils/colorUtils"

type GlobalAppStateType = {
  colorMode: ColorModeType
  sidebarOpen: boolean
}

export const defaultGlobalAppState: GlobalAppStateType = {
  colorMode: checkTheme(),
  sidebarOpen: true,
}

const globalSlice = createSlice({
  name: "global",
  initialState: defaultGlobalAppState,
  reducers: {
    toggleSidebarWithValue: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload
    },
    toggleColorMode: (state) => {
      state.colorMode === "light"
        ? (state.colorMode = "dark")
        : (state.colorMode = "light")
    },
  },
})

export const { toggleColorMode, toggleSidebarWithValue } = globalSlice.actions

export const globalAppState = (state: RootState) => state.global

export default globalSlice.reducer
