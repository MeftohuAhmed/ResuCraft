// Import necessary functions from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the skills slice
const initialState = {
  skills: [],
};

// Create a Redux slice for skills
const skillsSlice = createSlice({
  name: "skills", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Define a reducer function to save skills
    saveSkills: (state, { payload }) => {
      state.skills = payload.skills; // Update the skills array with the payload data
    },
  },
});

// Export the action creator
export const { saveSkills } = skillsSlice.actions;

// Export the reducer function for use in the Redux store
export default skillsSlice.reducer;
