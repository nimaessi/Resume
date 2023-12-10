import { configureStore } from "@reduxjs/toolkit";
import informationReducer from "../features/information/informationSlice";
import educationReducer from "../features/education/educationSlie";
import logger from "redux-logger";
import jobReducer from "../features/job-experience/jobSlice";
import skillsReducer from "../features/skills/skillSlice";
const store = configureStore({
    reducer: { 
        information: informationReducer,
        education: educationReducer,
        job: jobReducer,
        skills: skillsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
