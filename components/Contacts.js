import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Contacts() {
  return (
    <section className="py-5" style={{ backgroundColor: "#e3f2fd" }}>
      {/* Header + Image Layout */}
      <Container className="mb-5">
        <Row className="align-items-center">
          {/* Left Side: Heading and Subtext */}
          <Col md={6}>
            <h2 className="fw-bold display-4 text-primary mb-3">Контакти</h2>
            <p className="fs-5 text-secondary">
              Ако имате запитвание относно терапията, не се колебайте да зададете въпроса си.
            </p>
          </Col>

          {/* Right Side: Image */}
          <Col md={6} className="text-center">
            <Image
              src="/contact.png" // Replace with your actual image path
              alt="Contact Illustration"
              fluid
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Contact Info Cards */}
      <Container>
        <Row className="g-4">
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Body>
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="mb-3 text-primary" />
                <Card.Title className="fw-semibold">Email</Card.Title>
                <Card.Text>
                  <a
                    className="text-muted text-decoration-none"
                    href="mailto:veno.naumov@gmail.com"
                  >
                    veno.naumov@gmail.com
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Body>
                <FontAwesomeIcon icon={faPhone} size="2x" className="mb-3 text-primary" />
                <Card.Title className="fw-semibold">Телефон за запазване на час</Card.Title>
                  <Card.Text>
                    <a href="tel:+359 89 792 6910" className="text-decoration-none text-muted">+359 89 792 6910</a>
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Body>
                <FontAwesomeIcon icon={faPhone} size="2x" className="mb-3 text-primary" />
                <Card.Title className="fw-semibold">Телефон за информация през WhatsApp</Card.Title>
                <Card.Text>
                  <a
                    className="text-muted text-decoration-none"
                    href="https://wa.me/359876307729"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +359 87 630 7729
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Body>
                <FontAwesomeIcon icon={faLocationDot} size="2x" className="mb-3 text-primary" />
                <Card.Title className="fw-semibold">Адрес</Card.Title>
                <Card.Text>София Център, ул. "Добруджа" 1, 1000 София</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
