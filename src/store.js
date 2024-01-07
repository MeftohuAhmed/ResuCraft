// Import necessary functions and reducers
import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./features/info/infoSlice";
import workReducer from "./features/work/workSlice";
import educationReducer from "./features/education/educationSlice";
import skillsReducer from "./features/skills/skillsSlice";
import interestsReducer from "./features/interests/interestsSlice";
import stepperReducer from "./features/stepper/stepperSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    // Define reducers for different slices of the store
    info: infoReducer, // Personal information slice
    work: workReducer, // Work experience slice
    education: educationReducer, // Education slice
    skills: skillsReducer, // Skills slice
    interests: interestsReducer, // Interests slice
    stepper: stepperReducer, // Stepper slice for managing steps
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for non-serializable data (e.g., Redux Toolkit's `createSlice`)
    }),
});
