import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    currentStep: 1,
    totalSteps: 3,
  },
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    // Add an action to save the submitted form data
    saveFormData: (state, action) => {
      state.submittedData = action.payload;
    },
  },
});

export const { nextStep, prevStep, saveFormData } = formSlice.actions;
export default formSlice.reducer;
