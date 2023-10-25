import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { saveFormData } from "../services/feature/FormSlice";

import { nextStep } from "../services/feature/FormSlice";

const FinalForm = () => {
  const dispatch = useDispatch();
  const step1Data = useSelector((state) => state.step1);
  const step2Data = useSelector((state) => state.step2);

  const [formData, setFormData] = useState({
    firstName: step1Data.firstName,
    lastName: step1Data.lastName,
    email: step1Data.email,
    gender: step1Data.gender,
    profile: step2Data.prifile,
    course: step2Data.course,
    degree: step2Data.degree,
  });

  console.log("1", formData);

  useEffect(() => {
    const handleSubmit = () => {
      // Dispatch the saveFormData action with the formData
      dispatch(saveFormData(formData));
    };
    handleSubmit();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            sx={{ zIndex: "0" }}
            label="First Name"
            id="outlined-read-only-input"
            defaultValue={step1Data.firstName}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            placeholder="Your last name"
            defaultValue={step1Data.lastName}
            id="outlined-read-only-input"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            placeholder="Your email address"
            type="email"
            defaultValue={step1Data.email}
            id="outlined-read-only-input"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            SelectProps={{
              native: true,
            }}
            label="Gender"
            sx={{ zIndex: "0" }}
            defaultValue={step1Data.gender}
            id="outlined-read-only-input"
            InputProps={{
              readOnly: true,
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            sx={{ zIndex: "0" }}
            label="Course"
            id="outlined-read-only-input"
            InputProps={{
              readOnly: true,
            }}
            defaultValue={step2Data.course}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Degree"
            sx={{ zIndex: "0" }}
            defaultValue={step2Data.degree}
            id="outlined-read-only-input"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Profile"
            defaultValue={step2Data.prifile}
            id="outlined-read-only-input"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FinalForm;
