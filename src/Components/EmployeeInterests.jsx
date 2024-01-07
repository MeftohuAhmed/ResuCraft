import React from "react";
import { TagsInput } from "react-tag-input-component";
import { InputLabel, Box, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../features/stepper/stepperSlice";
import { saveInterest } from "../features/interests/interestsSlice";
import "../css/style.css";

/**
 * Component for managing employee interests.
 * It allows users to input their interests as tags.
 */
const EmployeeInterests = () => {
  // Selector to get the 'interests' state from Redux store
  const { interests } = useSelector((store) => store);
  const dispatch = useDispatch();

  // Initialize Formik for handling the form
  const formik = useFormik({
    initialValues: {
      interests: interests.interests,
    },
    // Validation schema using Yup for form fields
    validationSchema: Yup.object({
      interests: Yup.array()
        .of(Yup.string())
        .min(3)
        .max(7)
        .required("Required!"),
    }),
    onSubmit: (values) => {
      // Dispatch action to save employee interests when the form is submitted
      if (formik.isValid) {
        dispatch(saveInterest(values));
        dispatch(nextStep());
      }
    },
  });

  return (
    <div className="skills">
      <InputLabel className="text-input">Interest</InputLabel>

      {/* TagsInput component for entering interests */}
      <TagsInput
        rows={3}
        placeHolder="e.g. Reading Books"
        onChange={(value) => {
          formik.setFieldValue("interests", value);
        }}
        formik={formik}
        onBlur={formik.handleBlur}
        value={formik.values.interests}
        name="Interest"
        id="Interest"
      />

      {/* Error message for interests */}
      {formik.touched.interests && formik.errors.interests && (
        <p className="error-text">{formik.errors.interests}</p>
      )}

      {/* Buttons to navigate to the next and previous sections */}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          // Previous step button
          onClick={() => dispatch(prevStep())}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button
          onClick={() => formik.handleSubmit()}
          variant="contained"
          sx={{ background: "#4951F5" }}
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default EmployeeInterests;
