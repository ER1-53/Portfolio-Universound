import { createSlice } from "@reduxjs/toolkit";

// Slice for songs
export const songSlice = createSlice({
  name: "song",
  initialState: {
    song: ""
  },
  reducers: {
    // Action to send song
    sendSong: (state, action) => {
      state.song = action.payload
    }
  }
})
