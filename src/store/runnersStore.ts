import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RunnerType = {
  name: string;
  id: string;
  description: string;
  ipAddress: string;
  isShared: string;
  online: string;
  paused: string;
  runnerType: string;
  status: string;
};

export type DefaultRunnersType = RunnerType[];

export const defaultRunners: DefaultRunnersType = [];

const runnersSlice = createSlice({
  name: "runners",
  initialState: defaultRunners,
  reducers: {
    setServices: (
      state: DefaultRunnersType,
      action: PayloadAction<DefaultRunnersType>
    ) => {
      state = action.payload;
    },
    cleanUpServices: (state: DefaultRunnersType) => {
      state = defaultRunners;
    },
  },
});

export const { cleanUpServices, setServices } = runnersSlice.actions;

export default runnersSlice.reducer;
