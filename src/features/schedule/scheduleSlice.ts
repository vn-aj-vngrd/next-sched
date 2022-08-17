import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ScheduleState } from "../../types";

const initialState: ScheduleState = {
  schedules: [],
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setNewClass: (state, action: PayloadAction<any>) => {
      state.schedules.push(action.payload);
    },
  },
});

export const { setNewClass } = scheduleSlice.actions;
export default scheduleSlice.reducer;
