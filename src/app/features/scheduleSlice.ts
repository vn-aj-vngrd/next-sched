import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
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
    deleteScheduleState: (state, action: PayloadAction<any>) => {
      state.scheduleState = state.scheduleState.filter(
        (item) => item.id !== action.payload
      );

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

export const {
  setScheduleState,
  persistScheduleState,
  deleteScheduleState,
  resetScheduleState,
} = scheduleSlice.actions;

export default scheduleSlice.reducer;
