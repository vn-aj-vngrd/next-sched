import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Title } from "../../types";

const initialState: Title = {
  titleState: "",
};

export const titleState = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setTitleState: (state, action: PayloadAction<any>) => {
      state.titleState = action.payload;
    },
    resetTitleState: (state) => {
      state.titleState = "";
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

export const { setTitleState, resetTitleState } = titleState.actions;

export default titleState.reducer;
