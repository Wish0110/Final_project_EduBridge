import React from 'react';
import StepCards from './StepCards';
import { Card } from 'react-bootstrap';
import './About.css';

const steps = [
  {
    title: 'Step 1',
    children: <Card.Text>Card content for Step 1</Card.Text>,
  },
  {
    title: 'Step 2',
    children: <Card.Text>Card content for Step 2</Card.Text>,
  },
  {
    title: 'Step 3',
    children: <Card.Text>Card content for Step 3</Card.Text>,
  },
  {
    title: 'Step 4',
    children: <Card.Text>Card content for Step 4</Card.Text>,
  },
];

const About = () => (
  <div className="Container">
    <StepCards steps={steps} />
  </div>
);

export default About;