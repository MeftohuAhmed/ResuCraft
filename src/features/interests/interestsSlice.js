// Import necessary functions from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the interests slice
const initialState = {
  interests: [],
};

// Create a Redux slice for interests
const interestsSlice = createSlice({
  name: "interests", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Define a reducer function to save interests
    saveInterest: (state, { payload }) => {
      state.interests = payload.interests; // Update the interests array with the payload data
    },
  },
});

// Export the action creator
export const { saveInterest } = interestsSlice.actions;

// Export the reducer function for use in the Redux store
export default interestsSlice.reducer;
