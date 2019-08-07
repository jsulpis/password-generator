import React from 'react';
import {Button, Col, Container, Row} from "reactstrap";

function App() {
    return (
        <section className="section pb-0">
            <Container>
                <Row>
                    <Col>
                        <h2 className="mb-5">
                            <span>Password Generator</span>
                        </h2>
                        <Button color="primary" type="button">
                            Generate
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default App;
