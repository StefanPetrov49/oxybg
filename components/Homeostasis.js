import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
export default function Homeostasis() {
    return (
        <section className="reoxy-section">
            {/* Title Section */}
            <div className="text-center py-4 bg-primary text-white">
                <h2>Науката </h2>
            </div>

            {/* Description */}
            <Container className="text-center my-4">
                <p className="fs-5">
                    <strong>Кислородът</strong> е най-важният елемент за живота и без кислород хората могат да оцелеят само няколко минути. Неблагоприятните последици от хипоксията са добре известни, така че е изненадващо за мнозина да чуят,
                    че контролираното излагане на кислороден дефицит (или хипоксия), ако е в рамките на адаптивния обхват на човек, може действително да насърчи дълголетието,
                    да подобри физическото представяне и дори да помогне за създаване на условия, които подпомагат изцелението при определени заболявания (Serebrovskaya 2002, Verges, Chacaroun et al. 2015).
                    Трябва да има баланс между търсенето и доставянето на кислород, за да се поддържа хомеостазата в тялото.
                </p>
            </Container>


            <div className="text-center py-4 bg-primary text-white">
                <h2>Декодиране разбирането за кислород </h2>
            </div>

            <Container className="text-center my-4">
                <p className="fs-5">
                    Нобеловата награда за физиология и медицина за 2019 г. беше присъдена на трима учени лекари, д-р. Уилям Г. Каелин, младши, Питър Ратклиф и Грег Семенза, за тяхната новаторска работа,
                    разкриваща как клетките усещат и се адаптират към наличността на кислород. Кислородът е жизненоважен за всички живи организми. В хода на еволюцията бозайниците са развили способността
                    да се адаптират към промените в концентрацията на кислород на земята. До преди около тридесет години все още не беше ясно как бозайниците могат  да се адаптират към промените в наличността на кислород.
                </p>
            </Container>

            {/* Machine Image with Callouts */}
            <Container fluid className="d-flex justify-content-center align-items-center p-0 mb-5">
                <div >
                    <Image
                        src="/nobel.png"
                        alt="Nobel authors"
                        width={500}
                        height={400}
                        priority
                    />
                </div>
            </Container>
        </section>
    );
}
