import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
export default function Technology() {
    return (
        <section className="reoxy-section">
            {/* Title Section */}
            <div className="text-center py-4 bg-primary text-white">
                <h2>SRT (Self Regulated Treatment) - технология</h2>
            </div>

            {/* Description */}
            <Container className="text-center my-4">
                <p className="fs-5">
                    <strong>ReOxy</strong> използва технология за саморегулираща се терапия  (SRT®). SRT-технологията разчита на принципа на биологичната обратна връзка,
                    където телесната реакция на пациента определя терапевтичните параметри и ги контролира по време на цялата сесия на лечение.SRT-технологията използва
                    усъвършенстван софтуер, който анализира информацията от вграден пулсов оксиметър, за да коригира подадената въздушна смес и времето за всеки пациент
                    поотделно в отговор на промените в жизнените показатели, т.е. насищане на кръвта с кислород (Sp02) и сърдечна честота.
                </p>
            </Container>

            {/* Machine Image with Callouts */}
            <Container fluid className="d-flex justify-content-center align-items-center p-0 mb-5">
                <div >
                    <Image
                        src="/640x380.png"
                        alt="Nobel authors"
                        width={640}
                        height={380}
                        priority
                    />
                </div>
            </Container>

            <Container className="text-center my-4">
                <p className="fs-5">
                    Използването на иновативна SRT-технология позволява:
                   <p> -	Предварителен тест – за оценка на зоната на максимална терапевтична ефикасност и за изчисляване на индивидуалните лечебни параметри;</p>
                   <p> -	Терапия – да „задържа” пациента в зоната на максимална терапевтична ефикасност чрез коригиране на параметрите на лечението в отговор на промените в състоянието на пациента</p>
                   <p> -	След терапията – за изчисляване и съхраняване на параметрите на терапията за следващата сесия на терапия.</p>

                </p>
            </Container>
        </section>
    );
}
