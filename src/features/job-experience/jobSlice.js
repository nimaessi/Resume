import { createSlice } from "@reduxjs/toolkit";
import { notifyError } from "../../helper/functions";

const initialState = {
    experience: [],
    jobExperience: true
}
const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers:{
        setJobExperience: (state, action) => {
            if(action.payload.jobTitle.trim().length > 0){
                state.experience.push({
                    id: state.experience.length,
                    jobGroup: action.payload.jobGroup,
                    jobTitle: action.payload.jobTitle,
                    company: action.payload.company,
                    start: action.payload.start,
                    end: action.payload.end,
                })
            } else {
                notifyError("لطفا عنوان شغلی را وارد کنید");
            }
        },
        deleteJobExperience: (state, action) => {
            state.experience.splice(state.experience.findIndex((arrow) => arrow.id === action.payload), 1);
        }
    }
});
export default jobSlice.reducer;
export const { setJobExperience, deleteJobExperience} = jobSlice.actions;
export const selectJob = (store) => store.job;