import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import appStore from "./appStore"
import gitlabStore from "./gitlabStore"
import userStore from "./userStore"

const store = configureStore({
  reducer: { global: appStore, user: userStore, gitlab: gitlabStore },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
