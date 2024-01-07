// Import necessary functions from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the info slice
const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  city: "",
  country: null,
  summary: "",
};

// Create a Redux slice for personal information
const infoSlice = createSlice({
  name: "info", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Define a reducer function to save personal information
    saveInfo: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.phone = payload.phone;
      state.email = payload.email;
      state.city = payload.city;
      state.country = payload.country;
      state.summary = payload.summary;
    },
  },
});

// Export the action creator
export const { saveInfo } = infoSlice.actions;

// Export the reducer function for use in the Redux store
export default infoSlice.reducer;
