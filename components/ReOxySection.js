import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data/reoxy-home.json";

export default function ReOxySection() {
    return (
        <section className="reoxy-section">
            {/* Title Section */}
            <div className="text-center py-4 bg-primary text-white">
                <h2>ReOxy Device General Description</h2>
            </div>

            {/* Description */}
            <Container className="text-center my-4">
                <p className="fs-5">
                    <strong>REOXY®</strong> is a new breathing therapy medical device, that treats a patient with
                    individually dosed levels of reduced-oxygen (hypoxic) gas mixtures throughout
                    the procedure.
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
            <div className="text-center py-4 bg-primary text-white mt-5">
                <h2>Technical Benefits</h2>
            </div>

            <Container className="my-4">
                <Row>
                    {data.technicalBenefits.map((benefit, index) => (
                        <Col key={index} md={6} className="mb-4">
                            <div className="d-flex align-items-start">
                                <Image src={benefit.icon} alt={benefit.title} width={50} height={50} />
                                <div className="ms-3">
                                    <h5 className="text-primary">{benefit.title}</h5>
                                    <ul className="text-muted">
                                        {benefit.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <div className="text-center py-4 bg-primary text-white ">
                <h2>Лиценз</h2>
            </div>

            {/* Information Section */}
            <div className="blue-section-small">
                <div className="reoxy-info-section">
                    <p style={{ fontSize: "20" }}>
                        <strong>ReOxy</strong> е единственото медицинско IHHT устройство в света, което е регулаторно одобрено (TÜV Rheinland) и притежава CE маркировка за професионална употреба в здравеопазването. Апаратът - <strong>ReOxy</strong> и прилаганата процедура, са в съответствие с международния стандарт EN ISO 13485 и MDD разпоредби MDD (93/42 EEC); Критерии на EN 60601-1 (безопасност) / EN 60601-1-2 (EMC).
                    </p>
                </div>
            </div>

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
                            <li>Бременност в първият триместър</li>
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
