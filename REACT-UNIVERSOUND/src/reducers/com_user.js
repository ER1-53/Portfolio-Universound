import { createSlice } from "@reduxjs/toolkit";

// Slice for users
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: ""
  },
  reducers: {
    // Action to send user
    sendUser: (state, action) => {
      state.user = action.payload
    }
  }
})
