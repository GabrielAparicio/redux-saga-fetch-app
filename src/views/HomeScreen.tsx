import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeScreen = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    Users
                </Col>
            </Row>

            <Row>
                <Col>
                    Statistic
                </Col>
            </Row>

            <Row>
                <Col xs={12} lg={6}>
                    Filtering
                </Col>
                <Col xs={12} lg={6}>
                    Sorting
                </Col>
            </Row>

            <Row>
                <Col>
                    Todo List
                </Col>
            </Row>

        </Container>
    );
};

export default HomeScreen;