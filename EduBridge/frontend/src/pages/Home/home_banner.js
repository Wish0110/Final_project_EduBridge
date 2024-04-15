import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './banner.css';

const home_banner = () => {
  return (
    <Container fluid className="p-0">
      <Row className="align-items-center g-0">
        <Col xs={12} md={7} className="position-relative">
          <div className="banner-content d-flex align-items-center h-100">
            <div>
              <h1 className="display-3 fw-bold text-white">
                Welcome to EduBridge
              </h1>
              <p className="lead text-white mb-4">
                Your bridge to a successful university application in the UK.
              </p>
              {/* Add any other content you want here */}
            </div>
          </div>
          <div className="banner-image d-none d-md-block">
            <img src={require('../assets/Home-Banner.png')} alt="Banner" />
          </div>
        </Col>
        <Col xs={12} md={5} className="bg-light p-5 h-100 d-flex justify-content-center">
          {/* Add any other content you want here */}
        </Col>
      </Row>
    </Container>
  );
};

export default home_banner;