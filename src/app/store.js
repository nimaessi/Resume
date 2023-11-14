import { configureStore } from "@reduxjs/toolkit";
import informationReducer from "../features/information/informationSlice";

const store = configureStore({
    reducer: { information: informationReducer}
});

export default store;
