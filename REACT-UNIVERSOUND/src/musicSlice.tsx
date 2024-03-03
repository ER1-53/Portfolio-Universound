// musicSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MusicState {
  selectedMusic: string | null;
  metadata: any; // Remplacez "any" par le type approprié pour vos métadonnées
}


const musicSlice = createSlice({
  name: 'music',
  initialState: {
    selectedMusic: null,
    metadata: null,
  } as MusicState,
  reducers: {
    selectMusic: (state, action: PayloadAction<string>) => {
      state.selectedMusic = action.payload;
    },
    setMetadata: (state, action: PayloadAction<any>) => {
      state.metadata = action.payload;
    },
  },
});

export const { selectMusic, setMetadata } = musicSlice.actions;
export const selectSelectedMusic = (state: { music: MusicState }) => state.music.selectedMusic;
export const selectMetadata = (state: { music: MusicState }) => state.music.metadata;

export default musicSlice.reducer;
