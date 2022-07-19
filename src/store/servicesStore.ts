import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Service = {
  id: number;
  name: string;
  status: "Up" | "Down" | "ERROR";
  uptime: string;
};

type DefaultServicesType = Service[];

export const defaultService: DefaultServicesType = [];

const servicesSlice = createSlice({
  name: "servies",
  initialState: defaultService,
  reducers: {
    setServices: (
      state: DefaultServicesType,
      action: PayloadAction<DefaultServicesType>
    ) => {
      state = action.payload;
    },
    cleanUpServices: (
      state: DefaultServicesType,
      action: PayloadAction<DefaultServicesType>
    ) => {
      state = defaultService;
    },
  },
});

export const { cleanUpServices, setServices } = servicesSlice.actions;

export default servicesSlice.reducer;
