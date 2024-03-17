import { createSlice } from "@reduxjs/toolkit";

export const addSongLikeSlice = createSlice({
  name: "addSongsLike",
  initialState: {
    addSongLike: ""
  },
  reducers: {
    sendAddSongLike: (state, action) => {
      state.songId = action.payload
    }
  }
})
