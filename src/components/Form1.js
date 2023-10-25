import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstName,
  setLastName,
  setEmail,
  setGender,
} from "../services/feature/Step1Slice";
import { nextStep } from "../services/feature/FormSlice";

const Form1 = () => {
  const dispatch = useDispatch();
  const step1Data = useSelector((state) => state.step1);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            value={step1Data.firstName}
            onChange={(e) => dispatch(setFirstName(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            value={step1Data.lastName}
            onChange={(e) => dispatch(setLastName(e.target.value))}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={step1Data.email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="Gender"
            name="gender"
            value={step1Data.gender}
            onChange={(e) => dispatch(setGender(e.target.value))}
          >
            <option value=""> </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </TextField>
        </Grid>
      </Grid>
    </>
  );
};

export default Form1;
