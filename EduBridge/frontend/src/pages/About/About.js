import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './About.css';

const StepCard = ({ title, children }) => (
  <Card className="mb-3" style={{ width: '18rem' }}>
    <Card.Header className="text-center">{title}</Card.Header>
    <Card.Body style={{ border: '1px solid black', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      {children}
    </Card.Body>
  </Card>
);

const About = () => (
    <div className='Container'>
<div className="step-card-container">

    <StepCard title="Step 1">
      <Card.Text>Card content for Step 1</Card.Text>
    </StepCard>
    <StepCard title="Step 2">
      <Card.Text>Card content for Step 2</Card.Text>
    </StepCard>
    <StepCard title="Step 3">
      <Card.Text>Card content for Step 3</Card.Text>
    </StepCard>
    <StepCard title="Step 4">
      <Card.Text>Card content for Step 4</Card.Text>
    </StepCard>
  </div>
  </div>
);

export default About;