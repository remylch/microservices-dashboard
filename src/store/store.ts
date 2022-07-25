import { configureStore, Store } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import appStore from "./appStore"
import gitlabStore from "./gitlabStore"
import userStore from "./userStore"
import { userApi } from "../api/userAPI"

const store: Store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    global: appStore,
    user: userStore,
    gitlab: gitlabStore,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
