import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basicInformation: [],
    education: [],
    workExperince: [],
    skills: [],
    furtherInformation: []
}
const informationSlice = createSlice({
    name: "information",
    initialState,
    reducers:{
        setBasicInfo: (state, action) => {
            state.basicInformation = action.payload;
        },
        setEducation: (state, action) => {
            state.education = action.payload;
        },
        setWorkExperience: (state, action) => {
            state.workExperince = action.payload;
        },
        setSkills: (state, action) => {
            state.skills = action.payload;
        },
        setFurtherInformation: (state, action) => {
            state.furtherInformation = action.payload;
        }
    }
});
export default informationSlice.reducer;
export const { setBasicInfo, setEducation, setWorkExperience, setSkills, setFurtherInformation} = informationSlice.actions;
export const selectInformation = (store) => store.information;