import React from "react";

const Card = ({ children }) => {
  return (
    <div className="ms-card ms-fill">
      <div className="ms-card-content">{children}</div>
    </div>
  );
};

export default Card;