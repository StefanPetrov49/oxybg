import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import data from "../data/reoxy-home.json";

export default function ReOxySection() {
    return (
        <section className="reoxy-section">
            {/* Title Section with blurred image background and overlay text */}
            <div className="mb-5" style={{ position: "relative", width: "100%", height: "320px", overflow: "hidden" }}>
                <Image
                    src="/reoxy-section-1.jpg"
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
                        Общо описание на устройството ReOxy
                    </h2>
                </div>
            </div>

            {/* Description */}
            <Container className="text-center my-4">
                <p className="fs-5">
                    <strong>REOXY®</strong> е нов апарат за дихателна терапия, който лекува пациента с индивидуално дозирани нива на газови смеси с намалено
                    съдържание на кислород (хипоксични) през цялата процедура.
                </p>
            </Container>

            {/* Machine Image with Callouts */}
            <Container fluid className="d-flex justify-content-center align-items-center p-0">
                <div className="reoxy-image-wrapper">
                    <Image
                        src="/reoxy-machine.png"
                        alt="ReOxy Machine"
                        width={1150}
                        height={700}
                        priority
                    />
                </div>
            </Container>


            {/* Technical Benefits Section */}
            <div style={{ backgroundColor: "#e3f2fd", padding: "60px 0" }}>
                <Container className="text-center">
                    <h3 className="mb-4 fw-bold">Технически предимства на ReOxy</h3>
                    <Row className="g-4">
                        {data.technicalBenefits.map((benefit, index) => (
                            <Col key={index} xs={12} md={6} lg={6}>
                                <Card className="h-100 border-0 shadow-sm benefit-card">
                                    <Card.Body className="text-center">
                                        <div
                                            className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-3"
                                            style={{ width: "50px", height: "50px", fontWeight: "bold", fontSize: "1.1rem" }}
                                        >
                                            {index + 1}
                                        </div>
                                        <Card.Title className="fw-bold text-primary">{benefit.title}</Card.Title>
                                        <Card.Text as="div">
                                            <ul className="list-unstyled text-muted text-start mt-3 px-3">
                                                {benefit.details.map((detail, i) => (
                                                    <li key={i} className="mb-2">• {detail}</li>
                                                ))}
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* Title Section with blurred image background and overlay text */}
            <div className="mb-5" style={{ position: "relative", width: "100%", height: "320px", overflow: "hidden" }}>
                <Image
                    src="/medical-license.jpg"
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
                        Лиценз
                    </h2>
                </div>
            </div>

            {/* License Information Section - Two Cards Side by Side */}
            <Container className="my-5">
                <Row className="g-4 align-items-stretch">
                    {/* Text Card */}
                    <Col xs={12} md={9}>
                        <Card className="h-100  border-0 hover-shadow" style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Text style={{ fontSize: "1.05rem" }}>
                                    <strong>ReOxy</strong> е единственото IHHT устройство в света, което е регулаторно одобрено (TÜV Rheinland) и
                                    притежава CE маркировка за професионална употреба в здравеопазването. Апаратът - <strong>ReOxy</strong> и прилаганата процедура,
                                    са в съответствие с международния стандарт EN ISO 13485 и MDD разпоредби MDD (93/42 EEC);
                                    Критерии на EN 60601-1 (безопасност) / EN 60601-1-2 (EMC).
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Image Card */}
                    <Col xs={12} md={3}>
                        <Card className="h-100  border-0 d-flex align-items-center justify-content-center p-3 hover-shadow" style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                            <Image
                                src="/license.jpg"
                                alt="Medical License"
                                width={300}
                                height={300}
                                style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>




            <div className="text-center py-4 bg-primary text-white ">
                <h2>Немедикаментозна терапия и профилактика</h2>
            </div>

            {/* Information Section */}
            <div className="blue-section-small">
                <div className="reoxy-info-section">
                    <p style={{ fontSize: "20" }}>
                        <ul>
                            <li>Сърдечносъдови заболявания</li>
                            <li>Мозъчносъдови заболявания</li>
                            <li>Метаболитни заболявания</li>
                            <li>Респираторни заболявания</li>
                            <li>Некомпенсирана хипертония</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="text-center py-4 bg-primary text-white">
                <h2>Противопоказания</h2>
            </div>

            {/* Information Section */}
            <div className="blue-section-small">
                <div className="reoxy-info-section">
                    <p style={{ fontSize: "20" }}>
                        <ul>
                            <li>Остра психоза, маниакално-депресивна психоза</li>
                            <li>Остри инфекциозни заболявания</li>
                            <li>Туберколоза във всякаква фаза</li>
                            <li>Индивидуална непоносимост към недостик на кислород</li>
                            <li>Некомпенсирана хипертония</li>
                            <li>Бременност в първият триместър</li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    );
}
