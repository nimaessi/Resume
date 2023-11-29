import { configureStore } from "@reduxjs/toolkit";
import informationReducer from "../features/information/informationSlice";
import educationReducer from "../features/education/educationSlie";
import logger from "redux-logger";
const store = configureStore({
    reducer: { 
        information: informationReducer,
        education: educationReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
