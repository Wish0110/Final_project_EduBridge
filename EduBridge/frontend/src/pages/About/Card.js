import React, { useState } from "react";

const Card = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="front">
        <p>{front}</p>
      </div>
      <div className="back">
        <p>{back}</p>
      </div>
    </div>
  );
};

export default Card;