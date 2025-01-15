import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}>
      <Container>
        {/* Footer Content */}
        <Row>
          <Col lg={4} md={6}>
            <h5>Quickads</h5>
            <p>
              Quickads is an AI Ad Generator to create effortless Image ads, Video Ads, and Faceless
              videos.
            </p>
            <div style={{ fontSize: '20px' }}>
              <FaFacebook style={{ marginRight: '10px' }} />
              <FaTwitter style={{ marginRight: '10px' }} />
              <FaLinkedin style={{ marginRight: '10px' }} />
              <FaInstagram />
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h6>Features</h6>
            <ul className="list-unstyled">
              <li>Ads Inspiration Library</li>
              <li>AI Ad Creation</li>
              <li>Analyze Ads</li>
              <li>Deploy Ads</li>
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <h6>Use Cases</h6>
            <ul className="list-unstyled">
              <li>Startups</li>
              <li>SMEs</li>
              <li>E-Commerce</li>
              <li>Marketing Agencies</li>
            </ul>
          </Col>
        </Row>

        <hr />

        {/* Footer Bottom */}
        <Row>
          <Col className="text-center">
            <p>Made with ❤️ in USA</p>
            <p>
              All Rights Reserved By 88 Ventures US, LLC | Headquartered At 14001 W Hwy 29 Suite
              102, Liberty Hill, Dallas TX 78642, USA
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
