import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import data from "../data/reoxy-home.json";
import Head from "next/head";

export default function ReOxySection() {
    return (
        <section className="reoxy-section">
            <Head>
                <title>Описание на ReOxy</title>
            </Head>
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
                    <strong>REOXY®</strong> е нов апарат за дихателна терапия, който експозира пациента с индивидуално дозирани нива на газови смеси с намалено съдържание на кислород
                    (хипоксични) последвани от такива с увеличено съдържание на кислород (хипероксични) през цялата процедура.
                </p>
            </Container>

            {/* Machine Image with Callouts */}
            <Container fluid className="d-flex justify-content-center align-items-center p-0" >
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
                <div className="text-center" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
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
                </div>
            </div>

            {/* Title Section with blurred image background and overlay text */}
            <div className="" style={{ position: "relative", width: "100%", height: "320px", overflow: "hidden" }}>
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
            <Container className="my-5" >
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

            <div className="my-5 white-section" style={{ backgroundColor: "#e3f2fd", paddingTop: "3rem", paddingBottom: "3rem" }}>
                <Container>
                    <Row className="g-4 align-items-stretch ">
                        {/* Therapy Card */}
                        <Col xs={12} md={6} className="d-flex">
                            <div className="reoxy-card reoxy-card-therapy uniform-card w-100 h-100">
                                <h2 className="reoxy-heading">Немедикаментозна терапия и профилактика</h2>
                                <ul className="reoxy-list">
                                    <li>- Сърдечносъдови заболявания</li>
                                    <li>- Мозъчносъдови заболявания</li>
                                    <li>- Метаболитни заболявания</li>
                                    <li>- Респираторни заболявания</li>
                                    <li>- Некомпенсирана хипертония</li>
                                </ul>
                            </div>
                        </Col>

                        {/* Lungs Image */}
                        <Col xs={12} md={6} className="d-flex">
                            <div className="glass-card uniform-card w-100 h-100">
                                <Image
                                    src="/lungs.png"
                                    alt="Lungs"
                                    className="uniform-image"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </Col>

                        {/* Contraindications Image */}
                        <Col xs={12} md={6} className="d-flex">
                            <div className="glass-card uniform-card w-100 h-100">
                                <Image
                                    src="/exclamation.png"
                                    alt="No Medication"
                                    className="uniform-image"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </Col>

                        {/* Contraindications Text */}
                        <Col xs={12} md={6} className="d-flex">
                            <div className="reoxy-card reoxy-card-contra uniform-card w-100 h-100">
                                <h2 className="reoxy-heading">Противопоказания</h2>
                                <ul className="reoxy-list reoxy-list-contra">
                                    <li>- Остра психоза, маниакално-депресивна психоза</li>
                                    <li>- Остри инфекциозни заболявания</li>
                                    <li>- Туберкулоза във всякаква фаза</li>
                                    <li>- Индивидуална непоносимост към недостиг на кислород</li>
                                    <li>- Некомпенсирана хипертония</li>
                                    <li>- Бременност в първия триместър</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}
