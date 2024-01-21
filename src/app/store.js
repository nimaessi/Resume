import { configureStore } from "@reduxjs/toolkit";
import informationReducer from "../features/information/informationSlice";
import educationReducer from "../features/education/educationSlie";
import logger from "redux-logger";
import jobReducer from "../features/job-experience/jobSlice";
import skillsReducer from "../features/skills/skillSlice";
import progressReducer from "../features/progressBar/progressSlice";
import validationReducer from "../features/validation/validationSlice";
const store = configureStore({
    reducer: { 
        information: informationReducer,
        education: educationReducer,
        job: jobReducer,
        skills: skillsReducer,
        progress: progressReducer,
        validation: validationReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
