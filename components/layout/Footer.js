import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="align-items-center">
          {/* Left Section - Logo */}
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <Image src="/logo.png" alt="Company Logo" width={180} height={90} />
          </Col>

          {/* Middle Section - Sitemap */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h6 className="fw-bold">Sitemap</h6>
            <ul className="list-unstyled">
              <li><a href="/reoxy" className="text-decoration-none text-muted">REOXY</a></li>
              <li><a href="/technology" className="text-decoration-none text-muted">TECHNOLOGY</a></li>
              <li><a href="/ihht" className="text-decoration-none text-muted">IHHT</a></li>
              <li><a href="/support" className="text-decoration-none text-muted">SUPPORT</a></li>
              <li><a href="/about-us" className="text-decoration-none text-muted">ABOUT US</a></li>
            </ul>
          </Col>

          {/* Right Section - Company Info */}
          <Col md={4} className="text-center text-md-end">
            <h6 className="fw-bold">Company Info</h6>
            <p className="text-muted small">
              <strong>Oxy BG</strong><br />
              Sofia, Bulgaria<br />
            </p>
          </Col>
        </Row>

        {/* Bottom Section */}
        <hr />
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start text-muted small">
            © {currentYear} Oxy BG
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="#" className="text-muted me-3">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-muted">
              <FaFacebookF />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
