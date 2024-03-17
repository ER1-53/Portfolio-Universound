import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "song",
  initialState: {
    song: ""
  },
  reducers: {
    sendSong: (state, action) => {
      state.song = action.payload
    }
  }
})
