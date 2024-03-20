import { configureStore } from "@reduxjs/toolkit";
import { addSongLikeSlice } from "./reducers/com_addSong";
import { userSlice } from "./reducers/com_user";
import { songSlice } from "./reducers/com_song";

// Configuring the main store with reducers
export const mainStore = configureStore({
  reducer: {
    addSongAll: addSongLikeSlice.reducer,
    song: songSlice.reducer,
    user: userSlice.reducer,
    devTools: true,
  }
})
