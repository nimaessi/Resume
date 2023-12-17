import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skill : []
}
const skillSlice = createSlice({
    name: "skills",
    initialState,
    reducers:{
        setSkill: (state, action) => {
            state.skill.push({
                id: state.skill.length,
                skill: action.payload.skill, 
                rate: action.payload.rate});
        },
        removeSkill: (state, action) => {
           state.skill.splice(state.skill.findIndex((arrow) => arrow.id === action.payload), 1);
        }
    }
});
export default skillSlice.reducer;
export const { setSkill, removeSkill} = skillSlice.actions;
export const selectSkill = (store) => store.skills;