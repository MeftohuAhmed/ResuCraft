import React from "react";
import { InputLabel, Input } from "@mui/material";
import { getIn } from "formik";

/**
 * InputField component for rendering an input field with a label and error message.
 *
 * @param {object} props - The props passed to this component.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.type - The type of the input field (e.g., text, number).
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.name - The name of the input field (used for formik).
 * @param {string} props.id - The id of the input field.
 * @param {object} props.formik - Formik object for form state and functions.
 * @param {number} props.index - The index of the input field (if used in an array of fields).
 */
const InputField = ({ label, type, placeholder, name, id, formik, index }) => {
    // Extract error, touch, and values for better readability
    const error = getIn(formik.errors, name);
    const touch = getIn(formik.touched, name);
    const values = getIn(formik.values, name);

    return (
        <React.Fragment>
            {/* Input Label */}
            <InputLabel
                shrink
                htmlFor={name}
                className="text-input"
                sx={{ marginLeft: "1.5rem" }}
            >
                {label}
            </InputLabel>

            {/* Input Component */}
            <Input
                placeholder={placeholder}
                name={name}
                id={id}
                className=""
                type={type}
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={values}
            ></Input>

            {/* Error Message */}
            {error && touch && <p className="error-text">{error}</p>}
        </React.Fragment>
    );
};

export default InputField;
