import Image from "next/image";
import { ButtonGroup, Button, Card, Row, Col, Container, Accordion } from "react-bootstrap";
import reoxyData from "../data/reoxy-home.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus, faUserShield, faGears, faPersonBiking, faLungs, faHeartPulse, faBrain, faSmile, faFaceFrown, faWeightScale, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

// Mapping string names to actual FontAwesome icons
const iconMap = {
  faHeartCirclePlus,
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
    <>
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
            <p className="subtitle">ИНТЕРМИТЕНТНА <br /> ХИПОКСИЧНА-ХИПЕРОКСИЧНА<br /> ТЕРАПИЯ (IHHT) </p>
            <button className="more-info" >ПОВЕЧЕ ИНФОРМАЦИЯ</button>

          </div>
        </div>
      </div>

      {/* White Section: Content */}
      {/* Button Group */}
      <div className="button-group-container mb-0 white-section">
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
                color="#007bff"
              /> {" "}
              {application.title}
            </Button>
          ))}
        </ButtonGroup>
      </div>


      {/* Two Cards Section - Text Left, Image Right */}
      <Container className="my-5 white-section">
        <Row className="g-4 align-items-stretch">
          {/* Text Card */}
          <Col xs={12} lg={6} className="d-flex">
            <div className="glass-card w-100 d-flex flex-column justify-content-center">
              <p className="info-text-card mb-0">
                <strong>ReOxy</strong> е революционно устройство за респираторна терапия.
                Този процес предизвиква състояние на "относителен дистрес" в тялото,
                задействайки секрецията на хормоните на стреса, които стимулират
                производството на стволови клетки. След това тези стволови клетки
                изграждат нови кръвоносни съдове, подобрявайки окисляването на тъканите,
                метаболизма и функциите на органите.
                <br /><br />
                Устройството, разработено в Германия, е изследвано повече от десетилетие,
                преди да бъде предоставено на обществеността. Над 1000 научни статии
                свидетелстват за ефективността на терапията като безопасно и ефективно
                средство за регулиране на метаболизма и иницииране на физиологични процеси,
                които подобряват функциите на тялото и забавят стареенето.
              </p>
            </div>
          </Col>

          {/* Image Card */}
          <Col xs={12} lg={6} className="d-flex">
            <div className="glass-card w-100 d-flex align-items-center justify-content-center">
              <Image
                src="/rehabilitation.jpeg"
                alt="ReOxy Device"
                width={500}
                height={350}
                className="img-fluid w-100 rounded-5"
                style={{
                  objectFit: "contain",
                  maxHeight: "400px",
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px"
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>


      {/* Advantages Section */}
      <Container className="advantages-section text-center white-section">
        <h2 className="section-title">{reoxyData.advantagesTitle}</h2>
        <Row>
          {reoxyData.advantages.map((advantage, index) => (
            <Col key={index} md={6} lg={3} className="d-flex">
              <Card className="advantage-card mb-4 text-center">
                <div className="icon-container">
                  <FontAwesomeIcon icon={iconMap[advantage.iconName]} size="3x" className="advantage-icon" color="#007bff" />
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
      <div className="mt-5 mb-5">
        {/* Title Section with blurred image background and overlay text */}
        <div className="mb-5" style={{ position: "relative", width: "100%", height: "500px", overflow: "hidden" }}>
          <Image
            src="/clinical.jpeg"
            alt="SRT background"
            layout="fill"
            objectFit="cover"
            style={{
              filter: "blur(2px)",
              zIndex: 1,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#fff", fontSize: "2rem", zIndex: 3 }}>
              КЛИНИЧНИ ЕФЕКТИ
            </h2>
          </div>
        </div>
        <Container>
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
                    color="#007bff"
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
    </>
  );
}
