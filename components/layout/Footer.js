import Image from "next/image";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light py-4">
      <Container>
        {/* Top Section: Single Row */}
        <Row className="align-items-center py-3">
          {/* Logo section — smaller width */}
          <Col md={2} className="text-center text-md-start mb-3 mb-md-0">
            <Image src="/logo.png" alt="Company Logo" width={180} height={90} />
          </Col>

          {/* Navigation section — larger width */}
          <Col md={8} className="mb-3 mb-md-0 d-flex justify-content-center">
            <Nav className="flex-wrap flex-md-nowrap justify-content-center w-100 gap-4">
              <Nav.Link as={Link} href="/general-description" className="text-primary fw-semibold">
                ReOxy®
              </Nav.Link>
              <Nav.Link as={Link} href="/technology">ТЕХНОЛОГИИ</Nav.Link>

              <NavDropdown title="IHHT" id="ihht-dropdown" menuVariant="light">
                <NavDropdown.Item as={Link} href="/o2-homeostasis">O2 Хомеостаза</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/physiological-effects">Физиологични ефекти</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} href="/pricing">ЦЕНИ</Nav.Link>
              <Nav.Link as={Link} href="/contacts">КОНТАКТИ</Nav.Link>
            </Nav>
          </Col>

          {/* Company Info section — smaller width */}
          <Col md={2} className="text-center text-md-end">
            <div className="fw-bold">Company Info</div>
            <div>Oxy BG</div>
            <div className="text-muted small">Sofia, Bulgaria</div>
          </Col>
        </Row>


        {/* Bottom Row: Copyright */}
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
