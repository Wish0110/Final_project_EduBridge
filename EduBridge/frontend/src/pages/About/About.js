import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

const StepCard = ({ title, children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="Home-Cards">
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="flip-card-inner">
          <Card className="flip-card-front" style={{ width: '18rem' }}>
            <Card.Header className="text-center">{title}</Card.Header>
            <Card.Body style={{ border: '1px solid black', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              {children}
            </Card.Body>
          </Card>
          <Card className="flip-card-back" style={{ width: '18rem' }}>
            <Card.Body style={{ border: '1px solid black', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Card.Text>Back side of the card for {title}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StepCard;