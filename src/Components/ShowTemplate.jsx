import React from "react";
import Button from "@mui/material/Button";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Cvtemplate from "../images/cv-template.svg";
import Typography from "@mui/material/Typography";
import "../css/style.css";
import "../css/reset.css";

/**
 * ShowTemplate component displays a template with a preview button and template image.
 */
const ShowTemplate = () => {
    return (
        <div className="template-container">
            {/* Preview button */}
            <Button disabled>
                <RemoveRedEyeIcon sx={{ color: "#4951F5" }} />
                <Typography sx={{ textTransform: "capitalize", color: "#212121" }}>
                    &nbsp; Template
                </Typography>
            </Button>
            {/* Template image */}
            <img src={Cvtemplate} className="template-img" alt="template-img" />
        </div>
    );
};

export default ShowTemplate;
