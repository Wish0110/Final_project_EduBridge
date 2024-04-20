import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = () => {
    
    return (
        <div>
            <ReactCardFlip>
                <div className="card">
                    <h1>Front</h1>
                </div>
                <div className="card card-back">
                    <h1>Back</h1>
                </div>
            </ReactCardFlip>
        </div>
        
    );
};

export default Card;