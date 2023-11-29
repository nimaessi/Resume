import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    grade: "",
    field: "",
    university: "",
    academicOrientation: "",
    average: "",
    start: "",
    end: "",
    studying: ""
}
const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        setEduInfo: (state, action) => {
            state[action.payload.field] = action.payload.value;
        }
    }
});
export default educationSlice.reducer;
export const { setEduInfo } = educationSlice.actions;
export const selectEdu = (store) => store.education;