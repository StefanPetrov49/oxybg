import Image from "next/image";
import { ButtonGroup, Button, Card, Row, Col, Container, Accordion } from "react-bootstrap";
import reoxyData from "../data/reoxy-home.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotTubPerson, faUserShield, faGears, faPersonBiking, faLungs, faHeartPulse, faBrain, faSmile, faFaceFrown, faWeightScale, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

// Mapping string names to actual FontAwesome icons
const iconMap = {
  faHotTubPerson,
  faUserShield,
  faGears,
  faPersonBiking
};

const clinicEffectsIconMap = {
  faLungs,
  faHeartPulse,
  faBrain,
  faSmile,
  faFaceFrown,
  faWeightScale,
  faPersonRunning
}

export default function ReOxyHome() {

  const [activeKey, setActiveKey] = useState("0");
  const accordionRefs = useRef([]);

  const scrollToAccordion = (index) => {
    const appId = reoxyData.applications[index].id;
    setActiveKey(appId);
    const target = accordionRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

  return (
    <section className="reoxy-home">
      {/* Blue Section: Image on Left, Text on Right */}
      <div className="blue-section">
        <div className="content-container">
          {/* Left Side: Image */}
          <div className="image-container">
            <Image
              src="/reoxy-pop.png"
              alt="ReOxy Machine"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* Right Side: Text */}
          <div className="text-container">
            <h1 className="brand-name">ReOxy®</h1>
            <p className="subtitle">ИНТЕРМИТЕНТНА <br /> ХИПО-ХИПЕРОКСИЧНА<br /> ТЕРАПИЯ (IHHT) </p>
            <button className="more-info" >ПОВЕЧЕ ИНФОРМАЦИЯ</button>

          </div>
        </div>
      </div>

      {/* White Section: Content */}
      <div className="white-section">
        {/* Button Group */}
        <div className="button-group-container mb-0">
          <ButtonGroup className="reoxy-button-group flex-wrap">
            {reoxyData.applications.map((application, index) => (
              <Button
                key={index}
                variant="light"
                className="mb-3"
                onClick={() => scrollToAccordion(index)}
              >
                <FontAwesomeIcon
                  icon={clinicEffectsIconMap[application.iconName]}
                  size="2x"
                  className="advantage-icon me-2"
                  color="#2a5db0"
                /> {" "}
                {application.title}
              </Button>
            ))}
          </ButtonGroup>
        </div>


        {/* Information Section */}
        <div className="reoxy-info-section">
          <p>
            <strong>ReOxy</strong> е единственото медицинско IHHT устройство в света, което е регулаторно одобрено (TÜV Rheinland) и притежава CE маркировка за професионална употреба в здравеопазването. Апаратът - <strong>ReOxy</strong> и прилаганата процедура, са в съответствие с международния стандарт EN ISO 13485 и MDD разпоредби MDD (93/42 EEC); Критерии на EN 60601-1 (безопасност) / EN 60601-1-2 (EMC).
          </p>
        </div>

        {/* Advantages Section */}
        <Container className="advantages-section text-center">
          <h2 className="section-title">{reoxyData.advantagesTitle}</h2>
          <Row>
            {reoxyData.advantages.map((advantage, index) => (
              <Col key={index} md={6} lg={3} className="d-flex">
                <Card className="advantage-card mb-4 text-center">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={iconMap[advantage.iconName]} size="3x" className="advantage-icon" color="#2a5db0"/>
                  </div>
                  <Card.Body>
                    <Card.Title>{advantage.title}</Card.Title>
                    <Card.Text>{advantage.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Application Section */}
        <Container className="application-section mt-5">
          <h2 className="section-title">  КЛИНИЧНИ ЕФЕКТИ </h2>
          <Accordion activeKey={activeKey} onSelect={(e) => setActiveKey(e)}>
            {reoxyData.applications.map((application, index) => (
              <Accordion.Item
                key={application.id}
                eventKey={application.id}
                id={`application-${application.id}`}
                ref={(el) => (accordionRefs.current[index] = el)}
              >
                <Accordion.Header>
                  <FontAwesomeIcon
                    icon={clinicEffectsIconMap[application.iconName]}
                    size="2x"
                    className="advantage-icon me-2"
                    color="#2a5db0"
                  />
                  {application.title}
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {application.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

        </Container>
      </div>
    </section>
  );
}
