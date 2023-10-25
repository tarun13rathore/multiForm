import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourse,
  setProfle,
  setDegree,
} from "../services/feature/Step2Slice";
import { nextStep } from "../services/feature/FormSlice";
import "./form.css";

const Form2 = () => {
  const dispatch = useDispatch();
  const step2Data = useSelector((state) => state.step2);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Course"
            name="course"
            placeholder="Your Course"
            value={step2Data.course}
            onChange={(e) => dispatch(setCourse(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Degree"
            name="degree"
            placeholder="Your last Degree"
            value={step2Data.degree}
            onChange={(e) => dispatch(setDegree(e.target.value))}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Profile"
            name="profile"
            placeholder="Your Profile "
            type="text"
            value={step2Data.prifile}
            onChange={(e) => dispatch(setProfle(e.target.value))}
          />
        </Grid>

        {/* <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="Gender"
            name="gender"
            value={step2Data.gender}
            onChange={(e) => dispatch(setGender(e.target.value))}
          >
            <option value=""> </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </TextField>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Form2;
