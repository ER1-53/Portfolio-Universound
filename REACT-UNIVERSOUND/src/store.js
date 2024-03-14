import { configureStore } from "@reduxjs/toolkit";
import { idSongSlice } from "./reducers/com_songid";
import { idUserSlice } from "./reducers/com_userid"
import { UsernameSlice } from "./reducers/com_username";

export const mainStore = configureStore({
  reducer: {
    songSId: idSongSlice.reducer,
    userSId: idUserSlice.reducer,
    usersName : UsernameSlice.reducer,
    devTools: true,
  }
})
