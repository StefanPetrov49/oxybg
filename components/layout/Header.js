import Image from "next/image";
import Link from "next/link";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link href="/" passHref legacyBehavior>
          <a className="logo" style={{ cursor: "pointer" }}>
            <Image src="/logo.png" alt="Company Logo" width={180} height={90} />
          </a>
        </Link>

        {/* Navigation */}
        <Nav className="navbar-nav">
          <Nav.Link as={Link} href="/general-description" className="nav-link text-primary brand-name">
            ReOxy®
          </Nav.Link>
          <Nav.Link as={Link} href="/technology" className="nav-link">
            ТЕХНОЛОГИИ
          </Nav.Link>

          {/* IHHT Dropdown */}
          <NavDropdown title="IHHT" id="ihht-dropdown" className="nav-link" style={{ paddingBottom: 0, paddingTop: 0 }}>
            <NavDropdown.Item as={Link} href="/o2-homeostasis">
              O2 Хомеостаза
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/physiological-effects">
              Физиологични ефекти
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} href="/pricing" className="nav-link">
            Цени
          </Nav.Link>
          <Nav.Link as={Link} href="/contacts" className="nav-link">
            Контакти
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
