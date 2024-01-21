import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const validationSlice = createSlice({
    name: "validation",
    initialState,
    reducers:{
        setValidate: (state, action) => {
            state.push(action.payload);
        }
    }
});
export default validationSlice.reducer;
export const { setValidate } = validationSlice.actions;
export const selectValidation = (store) => store.validation;