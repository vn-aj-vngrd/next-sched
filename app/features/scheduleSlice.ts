import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { Schedule } from "../../types";

const initialState: Schedule = {
  scheduleState: [],
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setScheduleState: (state, action: PayloadAction<any>) => {
      state.scheduleState.push(action.payload);
    },
    persistScheduleState: (state, action: PayloadAction<any>) => {
      state.scheduleState = action.payload;
    },
    resetScheduleState: (state) => {
      state.scheduleState = [];
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setScheduleState, persistScheduleState, resetScheduleState } =
  scheduleSlice.actions;
export const selectScheduleState = (state: AppState) =>
  state.schedule.scheduleState;
export default scheduleSlice.reducer;
