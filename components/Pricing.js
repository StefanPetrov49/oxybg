import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Table } from "react-bootstrap";

export default function Pricing() {
  return (
    <section className="reoxy-section">
      <Head>
        <title>Цени</title>
      </Head>
      {/* Title Section */}
      <div className="text-center py-4 bg-primary text-white">
        <h2>Цени</h2>
      </div>

      {/* Description */}
      <Container className="text-center my-4">
        <p className="fs-5">
          В зависимост от поставените цели и анализиране на индивидуалните протоколи от извършения хипоксичен тест, се изготвя стратегия за прилагане на процедурите.
          Продължителността на една сесия е между 15-40 минути.
          Максималната ефективност от терапията се постига с прилагането на 15-20 сесии. Благоприятния ефект върху организма е между 3-12 месеца.
          Първите 5 процедури е желателно да се извършат по-интензивно. Ежедневно или почивката между процедурите да не е повече от 72 часа.
          Препоръчително се извършват 2-3 терапевтични цикъла годишно.
          В цената влиза персонална маска за терапията.
        </p>
      </Container>

      {/* Pricing Table */}
      <Container className="my-5">
        <Table bordered responsive hover className="text-center fs-5 shadow" style={{ backgroundColor: "#000", color: "#fff" }}>
          <thead>
            <tr>
              <th>Брой сесии</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderTop: "2px solid #FF6F61" }}>
              <td>20 сесии</td>
              <td>1350 лв.</td>
            </tr>
            <tr>
              <td>15 сесии</td>
              <td>1200 лв.</td>
            </tr>
            <tr style={{ borderTop: "2px solid #88D498" }}>
              <td>10 сесии</td>
              <td>950 лв.</td>
            </tr>
            <tr style={{ borderTop: "2px solid #7EC8E3" }}>
              <td>5 сесии</td>
              <td>550 лв.</td>
            </tr>
            <tr style={{ borderTop: "2px solid #D291BC" }}>
              <td>1 сесия</td>
              <td>140 лв.</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </section>
  );
}
