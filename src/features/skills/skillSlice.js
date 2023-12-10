import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skill : []
}
const skillSlice = createSlice({
    name: "skills",
    initialState,
    reducers:{
        setSkill: (state, action) => {
            state.skill.push({skill: action.payload.skill, rate: action.payload.rate});
        }
    }
});
export default skillSlice.reducer;
export const { setSkill} = skillSlice.actions;
export const selectSkill = (store) => store.skill;