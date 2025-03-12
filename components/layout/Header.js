import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaLinkedin, FaFacebookF, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Clickable Logo */}
        <Link href="/" passHref>
          <div className="logo" style={{ cursor: "pointer" }}>
            <Image src="/logo.png" alt="Company Logo" width={150} height={120} />
          </div>
        </Link>

        {/* Navigation Links */}
        <Nav className="navbar-nav">
          <Nav.Link href="#" className="nav-link text-primary brand-name">ReOxy®</Nav.Link>
          <Nav.Link href="#" className="nav-link">ТЕХНОЛОГИИ</Nav.Link>
          <Nav.Link href="#" className="nav-link">IHHT</Nav.Link>
          {/* <Nav.Link href="#" className="nav-link">SUPPORT</Nav.Link> */}
          <Nav.Link href="#" className="nav-link">Контакти</Nav.Link>
        </Nav>

        {/* Right Section */}
        <div className="right-section">
          <FaLinkedin className="icon" size={18} />
          <FaFacebookF className="icon" size={18} />
          <FaSearch className="icon" size={18} />
        </div>
      </Container>
    </Navbar>
  );
}
