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


            {/* Easy to Operate Section */}
            <div className="text-center py-4 bg-primary text-white mt-5">
                <h2>Easy to Operate</h2>
            </div>

            {/* Steps Section */}
            <Container className="my-4">
                <Row className="text-center">
                    <Col md={4}>
                        <Image src="/placeholder.png" alt="Step 1" width={250} height={150} />
                        <p>Select or enter a patient to the patient & procedure database management system.</p>
                    </Col>
                    <Col md={4}>
                        <Image src="/placeholder.png" alt="Step 2" width={250} height={150} />
                        <p>Confirm the calculated procedure parameters and alarm limits. Put on the sensor and mask.</p>
                    </Col>
                    <Col md={4}>
                        <Image src="/placeholder.png" alt="Step 3" width={250} height={150} />
                        <p>During the procedure, ReOxy monitors SpO2, PR, and O2. The procedure lasts for 30-60 min.</p>
                    </Col>
                </Row>
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

            <div className="text-center py-4 bg-primary text-white mt-5">
                <h2>{data.intendedUse.title}</h2>
            </div>

            <Container className="my-4">
                <Row>
                    {data.intendedUse.content.map((paragraph, index) => (
                        <Col key={index} md={4} className="mb-3">
                            <p className="text-muted">{paragraph}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
