import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type DefaultUserType = {
  country: string;
  email: string;
  job: string;
  jwt: string;
  password: string;
};

export const defaultUserState: DefaultUserType = {
  country: "",
  email: "",
  job: "",
  jwt: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: defaultUserState,
  reducers: {
    updateUser: (
      state: DefaultUserType,
      action: PayloadAction<DefaultUserType>
    ) => {
      state = action.payload;
    },
    cleanupUser: (state: DefaultUserType) => {
      state = defaultUserState;
    },
  },
});

export const { cleanupUser, updateUser } = userSlice.actions;

export const myUser = (state: RootState) => state.user;

export default userSlice.reducer;
