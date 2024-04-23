import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const StudentDetails = () => {
  return (
    <Container>
      <Row className="g-4">
        <Col>
          <Card className="h-100" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Student 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <NavLink to="/">
                <Button className="btn" variant="primary">
                  Back to Home
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Student 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <NavLink to="/">
                <Button className="btn" variant="primary">
                  Back to Home
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Student 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <NavLink to="/">
                <Button className="btn" variant="primary">
                  Back to Home
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Student 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <NavLink to="/">
                <Button className="btn" variant="primary">
                  Back to Home
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StudentDetails;