import React from "react";
import "./Service.css";
import coverImage from "./Serviceimgs/Our Mission (1).png"; // Add the cover image import

const Service = () => {
    return (
        <div className="container">
            <img src={coverImage} className="cover-image" alt="" />
        </div>
    );
};
export default Service;