import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type DefaultGitlabType = {
  url: string;
  token: string;
};

export const defaultGitlabState: DefaultGitlabType = {
  token: "",
  url: "",
};

export const gitlabSlice = createSlice({
  name: "gitlab",
  initialState: defaultGitlabState,
  reducers: {
    setUpGitlab: (
      state: DefaultGitlabType,
      action: PayloadAction<DefaultGitlabType>
    ) => {
      state = action.payload;
    },
    cleanupGitlab: (state: DefaultGitlabType) => {
      state = defaultGitlabState;
    },
  },
});

export const { cleanupGitlab, setUpGitlab } = gitlabSlice.actions;

export const gitlabCredentials = (state: RootState) => ({
  token: state.gitlab.token,
  url: state.gitlab.url,
});

export default gitlabSlice.reducer;
