import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ScheduleType = {
  classCode: string;
  instructor: string;
  starts: number;
  ends: number;
  days: string[];
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
    setNewClass: (state, action: PayloadAction<any>) => {
      state.schedules.push(action.payload);
    },
  },
});

export const { setNewClass } = scheduleSlice.actions;
export default scheduleSlice.reducer;
