import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const authedUserSlice = createSlice({
  name: "authedUser",
  initialState,
  reducers: {
    setAuthedUser: (_, action) => {
      return action.payload;
    },
  },
});

export default authedUserSlice.reducer;

export const { setAuthedUser } = authedUserSlice.actions;
