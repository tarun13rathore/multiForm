import { createSlice } from "@reduxjs/toolkit";

const step1Slice = createSlice({
  name: "step1",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setGender } =
  step1Slice.actions;
export default step1Slice.reducer;
