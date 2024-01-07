import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import * as msg from "../utilities/validationMessages";
import "../css/style.css";
import "../css/reset.css";
import InputField from "./InputField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nextStep, prevStep } from "../features/stepper/stepperSlice";
import { saveInfo } from "../features/info/infoSlice";
import { Autocomplete, InputLabel, TextField } from "@mui/material";
import { countriesList } from "../utilities/countriesList";
import { getIn } from "formik";

// Regular expression for phone number validation
const phoneRegexExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

/**
 * Component for managing employee information.
 * It allows users to input personal details like name, contact information, and summary.
 */
const EmployeeInfo = () => {
    // Selector to get the 'info' state from Redux store
    const { info } = useSelector((store) => store);
    const dispatch = useDispatch();

    // Initialize Formik for handling the form
    const formik = useFormik({
        initialValues: {
            firstName: info.firstName,
            lastName: info.lastName,
            phone: info.phone,
            email: info.email,
            city: info.city,
            country: info.country,
            summary: info.summary,
        },
        // Validation schema using Yup for form fields
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, msg.minFname)
                .max(16, msg.maxFname)
                .required("Required!"),
            lastName: Yup.string()
                .min(3, msg.minLname)
                .max(16, msg.maxLname)
                .required("Required!"),
            phone: Yup.string()
                .matches(phoneRegexExp, msg.phone)
                .required("Required!"),
            email: Yup.string().email(msg.email).required("Required!"),
            city: Yup.string()
                .min(3, msg.minCity)
                .max(28, msg.maxCity)
                .required("Required!"),
            country: Yup.object().nullable().required("Required!"),
            summary: Yup.string()
                .min(20, msg.minSummary)
                .required("Required!")
                .max(255, msg.maxSummary),
        }),

        onSubmit: (values) => {
            // Dispatch action to save employee information when the form is submitted
            if (formik.isValid) {
                dispatch(saveInfo(values));
                dispatch(nextStep());
            }
        },
    });

    const countryValues = getIn(formik.values, "country");
    const summaryValues = getIn(formik.values, "summary");
    const countryError = getIn(formik.errors, "country");
    const countryTouch = getIn(formik.touched, "country");
    const summaryError = getIn(formik.errors, "summary");
    const summaryTouch = getIn(formik.touched, "summary");

    return (
        <>
            <form>
                {/* Grid layout for form fields */}
                <Grid container spacing={4}>
                    <Grid item xs={6} className="item">
                        {/* InputField component for First Name */}
                        <InputField
                            label="First Name"
                            type="text"
                            placeholder="e.g John"
                            name="firstName"
                            id="firstName"
                            formik={formik}
                        ></InputField>
                    </Grid>
                    <Grid item xs={6} className="item">
                        {/* InputField component for Last Name */}
                        <InputField
                            label="Last Name"
                            type="text"
                            placeholder="e.g Smith"
                            name="lastName"
                            id="lastName"
                            formik={formik}
                        ></InputField>
                    </Grid>
                    <Grid item xs={6} className="item">
                        {/* InputField component for Phone Number */}
                        <InputField
                            label="Phone Number"
                            type="tel"
                            placeholder="e.g 3427881111"
                            name="phone"
                            id="phone"
                            formik={formik}
                        ></InputField>
                    </Grid>
                    <Grid item xs={6} className="item">
                        {/* InputField component for Email */}
                        <InputField
                            label="Email"
                            type="email"
                            placeholder="e.g John@gmail.com"
                            name="email"
                            id="email"
                            formik={formik}
                        ></InputField>
                    </Grid>
                    <Grid item xs={6} className="item">
                        {/* InputField component for City */}
                        <InputField
                            label="City"
                            type="text"
                            placeholder="e.g New York"
                            name="city"
                            id="city"
                            formik={formik}
                        ></InputField>
                    </Grid>
                    <Grid item xs={6} className="item">
                        {/* Autocomplete and TextField for Country */}
                        <InputLabel
                            shrink
                            htmlFor="input"
                            className="text-input lable-margin"
                            type="select"
                        >
                            Country
                        </InputLabel>
                        {formik && (
                            <Autocomplete
                                className="countries-input"
                                options={countriesList}
                                autoHighlight
                                name={"country"}
                                id="country"
                                onChange={(e, value) => formik.setFieldValue("country", value)}
                                value={countryValues}
                                renderInput={(params) => (
                                    <TextField
                                        onBlur={formik.handleBlur}
                                        {...params}
                                        placeholder="Choose a Country"
                                        inputProps={{
                                            ...params.inputProps,
                                        }}
                                    />
                                )}
                            />
                        )}
                        {/* Error message for Country */}
                        {countryError && countryTouch && <p className="error-text">{countryError}</p>}
                    </Grid>
                    <Grid item xs={12} className="item">
                        {/* Summary Textarea */}
                        <InputLabel
                            shrink
                            htmlFor="summary"
                            className="text-input"
                            sx={{ marginLeft: "1.5rem" }}
                        >
                            Summary
                        </InputLabel>
                        {/* TextField for Summary */}
                        <TextField
                            placeholder="Write Your Summary Here"
                            name="summary"
                            id="summary"
                            className=""
                            type="text"
                            multiline
                            rows={3}
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={summaryValues}
                        />
                        {/* Error message for Summary */}
                        {summaryError && summaryTouch && <p className="error-text">{summaryError}</p>}
                    </Grid>
                </Grid>
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
            </form>
        </>
    );
};

export default EmployeeInfo;
