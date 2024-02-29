import { configureStore, createSlice } from "@reduxjs/toolkit";

interface MusicState{

}
const todoSlice = createSlice({
	name:"todo",
	initialState: null,
	reducers:{
		togglePlayButton: (state, action) =>{
			const PlayButton = state.find  (t.id === action.payload);
			task.done = !task.done;
		},
	},
});

const store = configureStore({
	reducer:{
		todo: todoSlice.reducer
	}
})
