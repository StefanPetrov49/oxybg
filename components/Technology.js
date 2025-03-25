import Head from "next/head";
import Image from "next/image";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Technology() {
    return (
        <section className="reoxy-section">
            <Head>
                <title>Технологии</title>
            </Head>
            {/* Title Section with blurred image background and overlay text */}
            <div className="mb-5" style={{ position: "relative", width: "100%", height: "400px", overflow: "hidden" }}>
                <Image
                    src="/srt.png"
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
                        SRT (Self Regulated Treatment) - технология
                    </h2>
                </div>
            </div>

            {/* Description */}
            <Container className="text-center my-4 px-5">
                <p className="fs-5">
                    <strong>ReOxy</strong> използва технология за саморегулираща се терапия (SRT®). SRT-технологията разчита на принципа на биологичната обратна връзка,
                    където телесната реакция на пациента определя терапевтичните параметри и ги контролира по време на цялата сесия. SRT-технологията използва
                    усъвършенстван софтуер, който анализира информацията от вграден пулсов оксиметър, за да коригира подадената въздушна смес и времето за всеки пациент
                    поотделно в отговор на промените в жизнените показатели, т.е. насищане на кръвта с кислород (Sp02) и сърдечна честота.
                </p>
            </Container>

            {/* Machine Image with Callouts */}
            <Container fluid className="d-flex justify-content-center align-items-center p-0 mb-5">
                <div style={{ maxWidth: "640px", width: "100%" }}>
                    <Image
                        src="/640x380.png"
                        alt="Nobel authors"
                        width={640}
                        height={380}
                        priority
                        className="img-fluid"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            </Container>

            {/* Benefits Section */}
            <div style={{ backgroundColor: "#e3f2fd", padding: "60px 0" }}>
                <Container className="text-center mb-5">
                    <h3 className="mb-4 fw-bold">Използването на иновативна SRT-технология позволява:</h3>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm benefit-card">
                                <Card.Body>
                                    <div className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-3" style={{ width: "40px", height: "40px", fontWeight: "bold" }}>1</div>
                                    <Card.Title className="fw-bold">Предварителен тест</Card.Title>
                                    <Card.Text>
                                        Оценка на зоната на максимална терапевтична ефикасност и изчисляване на индивидуалните параметри.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm benefit-card">
                                <Card.Body>
                                    <div className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-3" style={{ width: "40px", height: "40px", fontWeight: "bold" }}>2</div>
                                    <Card.Title className="fw-bold">Терапия</Card.Title>
                                    <Card.Text>
                                        Поддържане на пациента в зоната на максимална терапевтична ефикасност чрез коригиране на параметрите на терапията в отговор на промените в състоянието на пациента.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm benefit-card">
                                <Card.Body>
                                    <div className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-3" style={{ width: "40px", height: "40px", fontWeight: "bold" }}>3</div>
                                    <Card.Title className="fw-bold">След терапията</Card.Title>
                                    <Card.Text>
                                        Изчисляване и съхранение на терапевтичните параметри в индивидуален протокол.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}
