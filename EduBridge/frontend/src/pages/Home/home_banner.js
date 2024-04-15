import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImage from './Home-Banner.png'; // Import your image
import './banner.css';

const home_banner = () => {
  return (
    <Container fluid className="p-0">
      <Row className="align-items-center g-0">
        <Col xs={12} md={7} className="position-relative">
          <div className="banner-content d-flex align-items-center h-100">
          <div className="text-left">
              <h1 className="display-3 fw-bold text-white">
                Welcome to EduBridge
              </h1>
              <p className="lead text-white mb-4">
                Your bridge to a successful university application in the UK.
              </p>
              {/* Add any other content you want here */}
            </div>
          </div>
        </Col>
        <Col xs={12} md={5} className="bg-light p-5 h-100 d-flex justify-content-center">
          <img src={bannerImage} alt="Home Banner" className="img-fluid w-75" /> {/* Add your image here and make it smaller with w-75 */}
        </Col>
      </Row>
    </Container>
  );
};

export default home_banner;