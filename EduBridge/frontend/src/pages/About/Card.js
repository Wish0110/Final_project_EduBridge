import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div>
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
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