import { configureStore } from "@reduxjs/toolkit";
import informationReducer from "../features/information/informationSlice";
import logger from "redux-logger";
const store = configureStore({
    reducer: { information: informationReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
