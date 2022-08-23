import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Schedule } from "../../types";

const initialState: Schedule = {
  userSchedule: [],
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addClass: (state, action: PayloadAction<any>) => {
      state.userSchedule.push(action.payload);
    },
    persistClass: (state, action: PayloadAction<any>) => {
      state.userSchedule = action.payload;
    },
    resetSchedule: (state) => {
      state.userSchedule = [];
    },
  },
});

export const { addClass, persistClass, resetSchedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;
