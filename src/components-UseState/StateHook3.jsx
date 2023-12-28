import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

/* COME AGGIORNARE PROPRIETà DI UN OGGETTO CON LO SPREAD OPERATOR, (UGUALE A COME LO FAI NELLE CLASSI ) */
// in modo tale che l'aggiornare una prop non comporti la sovrascrittura dell'altra

const StateHook3 = () => {
    const [persona, SetPersona] = useState({ name: "", surname: "", age: null });
    console.log("prop name dello stato 'persona'", persona.name);
    console.log("prop surname dello stato 'persona'", persona.surname);
    console.log("prop age dello stato 'persona'", persona.age);

    return (
        <>
            <Container>
                <Row className="flex-column align-items-center">
                    <Col xs={12} md={8} xl={5}>
                        <Form.Label htmlFor="changestate">name</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputName"
                            aria-describedby="passwordHelpBlock"
                            value={persona.name}
                            onChange={(event) => SetPersona({ ...persona, name: event.target.value })}
                        />
                        <Form.Text id="yourName"></Form.Text>
                    </Col>
                    <Col xs={12} md={8} xl={5}>
                        <Form.Label htmlFor="changestate">surname</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputSurname"
                            aria-describedby="passwordHelpBlock"
                            value={persona.surname}
                            onChange={(event) => SetPersona({ ...persona, surname: event.target.value })}
                        />
                        <Form.Text id="yourSurname"></Form.Text>
                    </Col>
                    <Col xs={12} md={8} xl={5}>
                        <Form.Label htmlFor="changestate">age</Form.Label>
                        <Form.Control
                            type="number"
                            id="inputAge"
                            aria-describedby="ageform"
                            value={persona.age}
                            onChange={(event) => SetPersona({ ...persona, age: event.target.value })}
                        />
                        <Form.Text id="yourAge"></Form.Text>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default StateHook3;
