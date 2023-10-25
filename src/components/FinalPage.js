import React, { useState } from "react";
import Step1Form from "./Form1";
import Step2Form from "./Form2";
import Step3Form from "./FinalForm";
import { nextStep, prevStep } from "../services/feature/FormSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Modal from "./Modal";

const FinalPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.form.currentStep);
  const totalSteps = useSelector((state) => state.form.totalSteps);
  const submittedData = useSelector((state) => state.form.submittedData);
  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const lastHandler = () => {
    console.log("first", submittedData);
  };

  // Define step labels for the Stepper
  const stepLabels = ["Step 1", "Step 2", "Step 3"];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <Stepper activeStep={currentStep - 1} alternativeLabel>
        {stepLabels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* Add more form step components as needed */}
      {currentStep === 1 && <Step1Form />}
      {currentStep === 2 && <Step2Form />}
      {currentStep === 3 && <Step3Form />}

      {/* Prev and Next Buttons */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {currentStep > 1 && (
          <Button
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
            color="primary"
            onClick={handlePrev}
          >
            Previous
          </Button>
        )}
        {currentStep === totalSteps ? (
          <>
            <Button
              variant="contained"
              sx={{ mt: 3, ml: 1 }}
              color="primary"
              // disabled={currentStep === totalSteps}
              onClick={lastHandler}
            >
              Next
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
            color="primary"
            // disabled={currentStep === totalSteps}
            onClick={handleNext}
          >
            Next
          </Button>
        )}
      </Box>

      {currentStep === totalSteps ? (
        <>
          <button onClick={openModal}>Open Modal</button>
        </>
      ) : null}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Stepper</h2>
        <p>Task Complete</p>
      </Modal>
    </>
  );
};

export default FinalPage;
