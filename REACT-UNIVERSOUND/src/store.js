import { configureStore } from "@reduxjs/toolkit";
import { idSongSlice } from "./reducers/com_songid";
import { iSongSlice } from "./reducers/testing";

export const mainStore = configureStore({
  reducer: {
    songSId: idSongSlice.reducer,
    SIDsong: iSongSlice.reducer,
    devTools: true,
  }
})
