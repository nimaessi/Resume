import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    experience: [],
    jobExperience: true
}
const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers:{
        setJobExperience: (state, action) => {
            state.experience.push({
                id: state.experience.length,
                jobGroup: action.payload.jobGroup,
                jobTitle: action.payload.jobTitle,
                company: action.payload.company,
                start: action.payload.start,
                end: action.payload.end,
            })
        },
        deleteJobExperience: (state, action) => {
            state.experience.splice(state.experience.findIndex((arrow) => arrow.id === action.payload), 1);
        }
    }
});
export default jobSlice.reducer;
export const { setJobExperience, deleteJobExperience} = jobSlice.actions;
export const selectJob = (store) => store.job;