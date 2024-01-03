import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    progress: 0
}
const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers:{
        setProgress: (state, action) => {
            state.progress = action.payload;
        }
    }
});
export default progressSlice.reducer;
export const { setProgress } = progressSlice.actions;
export const selectPregress = (store) => store.progress;