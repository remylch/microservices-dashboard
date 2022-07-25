import store from "./store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type DefaultGitlabType = {
  url: string
  token: string
}

export const defaultGitlabState: DefaultGitlabType = {
  token: "",
  url: "",
}

export const gitlabSlice = createSlice({
  name: "gitlab",
  initialState: defaultGitlabState,
  reducers: {
    setUpGitlab: (
      state: DefaultGitlabType,
      action: PayloadAction<DefaultGitlabType>
    ) => {
      state.token = action.payload.token
      state.url = action.payload.url
    },
    cleanupGitlab: (state: DefaultGitlabType) => {
      state.token = ""
      state.url = ""
    },
  },
})

export const { cleanupGitlab, setUpGitlab } = gitlabSlice.actions

export const gitlabCredentials = () => store.getState().gitlab

export default gitlabSlice.reducer
