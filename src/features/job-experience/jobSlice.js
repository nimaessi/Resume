import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   jobGroup: "",
   jobTitle: "",
   company: "",
   start: "",
   end: ""
}
const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers:{
        setJobExperience: (state, action) => {
            state[action.payload.field] = action.payload.value;
        }
    }
});
export default jobSlice.reducer;
export const { setJobExperience} = jobSlice.actions;
export const selectJob = (store) => store.job;