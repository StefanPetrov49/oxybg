import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

const oxygenContributors = [
  { image: "/nobel-1.png", name: "William Kaelin" },
  { image: "/nobel-2.png", name: "Gregg Semenza" },
  { image: "/nobel-3.png", name: "Peter Ratcliffe" },
];

export default function Homeostasis() {
  return (
    <section className="reoxy-section">
      <Head>
        <title>О2 Хомеостаза</title>
      </Head>
      {/* Title Section with blurred image background and overlay text */}
      <div className="mb-5" style={{ position: "relative", width: "100%", height: "320px", overflow: "hidden" }}>
        <Image
          src="/knowledge.jpg"
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
            Наука
          </h2>
        </div>
      </div>

      {/* Description Block */}
      <Container className="text-center my-4 px-5 mb-5">
        <p className="fs-5">
          <strong>Кислородът</strong> е най-важният елемент за живота и без кислород хората могат да оцелеят само няколко минути.
          Неблагоприятните последици от хипоксията са добре известни, така че е изненадващо за мнозина да чуят,
          че контролираното излагане на кислороден дефицит (или хипоксия), ако е в рамките на адаптивния обхват на човек, може действително да насърчи дълголетието,
          да подобри физическото представяне и дори да помогне за създаване на условия, които подпомагат изцелението при определени заболявания
          (Serebrovskaya 2002, Verges, Chacaroun et al. 2015).
          Трябва да има баланс между търсенето и доставянето на кислород, за да се поддържа хомеостазата в тялото.
        </p>
      </Container>

      {/* Subtitle */}
      <div className="mb-5" style={{ position: "relative", width: "100%", height: "320px", overflow: "hidden" }}>
        <Image
          src="/mountain.png"
          alt="SRT background"
          layout="fill"
          objectFit="cover"
          style={{
            filter: "blur(0px)",
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
            Декодиране разбирането за кислород
          </h2>
        </div>
      </div>

      {/* Main Section */}
      <Container className="my-5">
        <Row className="align-items-stretch">
          {/* Text Column - 2/3 width */}
          <Col lg={8} md={7}>
            <Card className="border-0 p-4 h-100" style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}>
              <Card.Body>
                <Card.Text className="fs-5">
                  Интервалната хипоксична-хипероксическа терапия (ИХХТ) е естествен метод за обновяване и увеличаване на броя на здравите митохондрии
                  и възстановяване на производството на енергия в клетката (повече от 90% от АТФ се произвежда в митохондриите).
                  ИХХТ стимулира вътреклетъчната митофагия на увредените митохондрии, което води до системно подобряване на качеството на mtDNA (митохондриална ДНК)
                  чрез селективно елиминиране на неговите копия, които са най-увредени от оксидативния стрес, но парадоксално се размножават по-бързо от техните неувредени предшественици.
                  <br /><br />
                  • През 2019 г. ефективността на тази техника беше потвърдена от учените Уилям Келин, Грег Семенза и Питър Ратклиф,
                  които получават Нобелова награда за физиология и медицина „за откритията им за начините,
                  по които клетките усещат и се адаптират към наличието на кислород“.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Image Cards Column - 1/3 width */}
          <Col lg={4} md={5}>
            <Card className="border-0 p-4 h-100 d-flex justify-content-between" style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}>
              {oxygenContributors.map((person, index) => (
                <div key={index} className="text-center mb-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 0 12px rgba(0,0,0,0.2)",
                      marginBottom: "0.5rem"
                    }}
                  />
                  <h6>{person.name}</h6>
                </div>
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
