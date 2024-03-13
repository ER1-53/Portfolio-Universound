import { createSlice } from "@reduxjs/toolkit";

export const iSongSlice = createSlice({
  name: "songS",
  initialState: {
    songId: ""
  },
  reducers: {
    sendSongId: (state, action) => {
      state.songId = action.payload
    }
  }
})
