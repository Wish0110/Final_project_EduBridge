import React, { useState } from 'react';
import { Card, CardImg } from 'react-bootstrap';
import './Home-cards.css';

const StepCard = ({ title, children, image, titleStyle }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  return (
    <div className="Home-Cards">
      <div
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        onClick={handleClick}
      >
        <div className="flip-card-inner">
          <Card className="flip-card-front" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} height="150px" width="auto"/>
            <Card.Header className="text-center" style={{ color: 'black' }}>
              <p>{title}</p>
            </Card.Header>
            <Card.Body>
              <p>{children}</p>
            </Card.Body>
          </Card>
          <Card className="flip-card-back" style={{ width: '18rem' }}>
            <Card.Body
              style={{
                border: '1px solid black',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                color: 'black',
              }}
            >
              <p>Back side of the card for {title}</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StepCard;