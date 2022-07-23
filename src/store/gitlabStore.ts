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
      state = action.payload
    },
    cleanupGitlab: (state: DefaultGitlabType) => {
      state = defaultGitlabState
    },
  },
})

export const { cleanupGitlab, setUpGitlab } = gitlabSlice.actions

export const gitlabCredentials = () => {
  const state = store.getState().gitlab
  return {
    token: state.token,
    url: state.url,
  }
}

export default gitlabSlice.reducer
