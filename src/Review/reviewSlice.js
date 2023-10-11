import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  newReview: "",
  errMsg: "",
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    getReview: (state, action) => {
      state.reviews = action.payload;
      state.errMsg = "";
      state.newReview = "";
    },
    setErrMsg: (state, action) => {
      state.errMsg = action.payload.errMsg;
    },
  },
});
export const { setErrMsg, getReview } = reviewSlice.actions;

export const reviewReducer = reviewSlice.reducer;
