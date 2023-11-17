import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resumeName: "",
    firstName: "",
    lastName: "",
    mobile: "",
    gender: "",
    militaryStatus: "",
    maritalStatus: "",
    province: "",
    city: "",
    address: ""
   
}
const informationSlice = createSlice({
    name: "information",
    initialState,
    reducers:{
        setBasicInfo: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },
        resetInfo: state => {
            state.resumeName = "",
            state.firstName = "",
            state.lastName = "",
            state.mobile = "",
            state.gender = "",
            state.militaryStatus = "",
            state.maritalStatus = "",
            state.province = "",
            state.city = "",
            state.address = ""

        }
    }
});
export default informationSlice.reducer;
export const { setBasicInfo, resetInfo} = informationSlice.actions;
export const selectInformation = (store) => store.information;