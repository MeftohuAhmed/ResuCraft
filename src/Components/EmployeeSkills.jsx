import React from "react";
import { TagsInput } from "react-tag-input-component";
import { InputLabel, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../features/stepper/stepperSlice";
import { saveSkills } from "../features/skills/skillsSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/style.css";

/**
 * Component for managing employee skills.
 * It allows users to input their skills as tags.
 */
export const EmployeeSkills = () => {
  // Selector to get the 'skills' state from Redux store
  const { skills } = useSelector((store) => store);
  const dispatch = useDispatch();

  // Initialize Formik for handling the form
  const formik = useFormik({
    initialValues: {
      skills: skills.skills,
    },
    // Validation schema using Yup for form fields
    validationSchema: Yup.object({
      skills: Yup.array()
        .of(Yup.string())
        .min(3)
        .max(7)
        .required("Required!"),
    }),
    onSubmit: (values) => {
      // Dispatch action to save employee skills when the form is submitted
      if (formik.isValid) {
        dispatch(saveSkills(values));
        dispatch(nextStep());
      }
    },
  });

  return (
    <div className="skills">
      <InputLabel className="text-input">Skills</InputLabel>

      {/* TagsInput component for entering skills */}
      <TagsInput
        rows={3}
        placeHolder="e.g Proficient in C++"
        onChange={(value) => {
          formik.setFieldValue("skills", value);
        }}
        formik={formik}
        onBlur={formik.handleBlur}
        value={formik.values.skills}
        name="skills"
        id="skills"
      />

      {/* Error message for skills */}
      {formik.touched.skills && formik.errors.skills && (
        <p className="error-text">{formik.errors.skills}</p>
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

export default EmployeeSkills;
