import { createSlice } from "@reduxjs/toolkit";

export const UsernameSlice = createSlice({
  name: "userName",
  initialState: {
    username: ""
  },
  reducers: {
    sendUsername: (state, action) => {
      state.username = action.payload
    }
  }
})
