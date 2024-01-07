// Import necessary functions from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define a default education object with empty fields
const education = {
  institute: "",
  degree: "",
  study: "",
  date: "",
};

// Define the initial state for the education slice
const initialState = {
  education: [education], // Initialize an array with a single empty education object
};

// Create a Redux slice for education
const educationSlice = createSlice({
  name: "education", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Define a reducer function to save education data
    saveEducation: (state, { payload }) => {
      state.education = payload.education; // Update the education array with the payload data
    },
  },
});

// Export the action creators
export const { saveEducation } = educationSlice.actions;

// Export the reducer function for use in the Redux store
export default educationSlice.reducer;
