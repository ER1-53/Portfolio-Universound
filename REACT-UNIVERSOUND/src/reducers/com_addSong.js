import { createSlice } from "@reduxjs/toolkit";

// Slice for adding song likes
export const addSongLikeSlice = createSlice({
  name: "addSongsLike",
  initialState: {
    addSongLike: ""
  },
  reducers: {
    // Action to send song like
    sendAddSongLike: (state, action) => {
      state.songId = action.payload
    }
  }
})
