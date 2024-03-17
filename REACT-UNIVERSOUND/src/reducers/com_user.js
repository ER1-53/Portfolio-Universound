import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: ""
  },
  reducers: {
    sendUser: (state, action) => {
      state.user = action.payload
    }
  }
})
