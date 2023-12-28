import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

/* COME AGGIORNARE PROPRIETà DI UN OGGETTO CON LO SPREAD OPERATOR, (UGUALE A COME LO FAI NELLE CLASSI ) */
// in modo tale che l'aggiornare una prop non comporti la sovrascrittura dell'altra

const StateHook3 = () => {
    const [persona, handlePersona] = useState({ name: "", surname: "", age: null });

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
                            onChange={(event) => handlePersona({ ...persona, name: event.target.value })}
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
                            onChange={(event) => handlePersona({ ...persona, surname: event.target.value })}
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
                            onChange={(event) => handlePersona({ ...persona, age: event.target.value })}
                        />
                        <Form.Text id="yourAge"></Form.Text>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default StateHook3;
