import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Table } from "react-bootstrap";

export default function Pricing() {

  const pricingPlans = [
  { sessions: 5, price: 285 },
  { sessions: 10, price: 490},
  { sessions: 15, price: 615 },
  { sessions: 20, price: 700, highlight: true },
];

  return (
    <section className="reoxy-section">
      <Head>
        <title>Цени</title>
      </Head>
      {/* Title Section */}
{/* FULL-WIDTH TITLE SECTION */}
<div className="pricing-hero">
  <Container className="text-center text-white">
    <h1 className="fw-bold mb-2">Цени на ReOxy терапия</h1>
    <p className="opacity-75 mb-0">
      Персонализирани програми за оптимални резултати
    </p>
  </Container>
</div>



      {/* Description */}
<Container className="my-5">
  <Row className="justify-content-center">
    <Col md={9}>
      <p className="pricing-description">
        В зависимост от поставените цели и анализиране на индивидуалните протоколи от извършения хипоксичен тест, се изготвя стратегия за прилагане на процедурите. Продължителността на една сесия е между 15-40 минути. Максималната ефективност от терапията се постига с прилагането на 15-20 сесии. Благоприятния ефект върху организма е между 3-12 месеца. Първите 5 процедури е желателно да се извършат по-интензивно. Ежедневно или почивката между процедурите да не е повече от 72 часа. Препоръчително се извършват 2-3 терапевтични цикъла годишно. В цената влиза персонална маска за терапията.
      </p>
    </Col>
  </Row>
</Container>



      {/* Pricing Table */}
      <Container className="my-5">
  <Row className="g-4 justify-content-center">
    {pricingPlans.map((plan, index) => (
      <Col md={3} key={index}>
        <div className={`pricing-card h-100 text-center ${plan.highlight ? "featured" : ""}`}>
          <h3 className="fw-bold">{plan.sessions}</h3>
          <p className="text-muted mb-2">процедури</p>

          <div className="price mb-3">
            {plan.price} <span>€</span>
          </div>

          <p className="text-muted small">
            Индивидуална програма
            <br />
            Персонална маска
          </p>
        </div>
      </Col>
    ))}
  </Row>
</Container>

    </section>
  );
}
