// Import necessary functions from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define a default experience object with empty fields
const experience = {
  title: "",
  organization: "",
  city: "",
  country: "",
  startDate: "",
  endDate: "",
  description: "",
};

// Define the initial state for the work slice
const initialState = {
  experience: [experience], // Initialize an array with a single empty experience object
};

// Create a Redux slice for work experience
const workSlice = createSlice({
  name: "work", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Define a reducer function to save work experience data
    saveWork: (state, { payload }) => {
      state.experience = payload.work; // Update the experience array with the payload data
    },
  },
});

// Export the action creator
export const { saveWork } = workSlice.actions;

// Export the reducer function for use in the Redux store
export default workSlice.reducer;
