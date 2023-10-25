import { createSlice } from "@reduxjs/toolkit";

const step2Slice = createSlice({
  name: "step2",
  initialState: {
    course: "",
    degree: "",
    prifile: "",
  },
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setDegree: (state, action) => {
      state.degree = action.payload;
    },
    setProfle: (state, action) => {
      state.prifile = action.payload;
    },
  },
});

export const { setCourse, setDegree, setProfle } = step2Slice.actions;
export default step2Slice.reducer;
