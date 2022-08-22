import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ScheduleType = {
  id: string;
  classCode: string;
  instructor: string;
  startingRow: number;
  timeRange: number;
  className: string;
  color: string;
};

type ScheduleState = {
  schedules: ScheduleType[];
};

const initialState: ScheduleState = {
  schedules: [],
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addClass: (state, action: PayloadAction<any>) => {
      state.schedules.push(action.payload);
    },
  },
});

export const { addClass } = scheduleSlice.actions;
export default scheduleSlice.reducer;
