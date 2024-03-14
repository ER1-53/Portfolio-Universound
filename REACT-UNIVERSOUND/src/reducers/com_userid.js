import { createSlice } from "@reduxjs/toolkit";

export const idUserSlice = createSlice({
  name: "userS",
  initialState: {
    userId: ""
  },
  reducers: {
    sendUserId: (state, action) => {
      state.userId = action.payload
    }
  }
})
