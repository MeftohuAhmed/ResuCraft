import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useDispatch, useSelector } from "react-redux";
import { jumpToStep } from "../features/stepper/stepperSlice";

import "../css/style.css";

/**
 * MultiStepper component displays a multi-step form stepper with titles and subtitles.
 */
export default function MultiStepper() {
    // Retrieve stepper state and dispatch function from Redux store
    const { steps, activeStep, header } = useSelector((store) => store.stepper);
    const dispatch = useDispatch();

    return (
        <Box
            sx={{
                width: "100%",
                mt: "5rem",
            }}
        >
            <Stepper
                // Set the active step
                activeStep={activeStep}
                alternativeLabel
                sx={{
                    "& .Mui-active .MuiStepIcon-root": { color: "#4951F5" },
                    "& .Mui-completed .MuiStepIcon-root": { color: "#4951F5" },
                    "& .MuiStepLabel-label.Mui-active": {
                        color: "#4951F5",
                    },
                    "& .MuiStepConnector-line": {
                        borderTopWidth: "2px  solid red",
                        width: "100%",
                        padding: "2px",
                        margin: "0px",
                    },
                    "& .css-z7uhs0-MuiStepConnector-line": {
                        borderColor: "#4951F5",
                    },
                    "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
                        borderTop: "#4951F5 dotted 2px",
                    },
                    "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
                        borderColor: "#4951F5",
                    },
                }}
            >
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step
                            // Handle click event to jump to the step
                            onClick={() => dispatch(jumpToStep(index))}
                            key={label}
                            {...stepProps}
                        >
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            <div className="multisteper-text">
                {/* Display title and subtitle based on the active step */}
                <p>{header[activeStep].title}</p>
                <p>{header[activeStep].subTitle}</p>
            </div>
        </Box>
    );
}
