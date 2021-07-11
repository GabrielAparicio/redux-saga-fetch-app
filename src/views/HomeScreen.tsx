import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import UsersList from '../components/UsersList';
import Statistics from '../components/Statistics';
import Filtering from '../components/Filtering';
import Sorting from '../components/Sorting';

const HomeScreen = () => {
    return (
        <Container fluid>
            <Row >
                <Col className="d-flex justify-content-center">
                    <h1>
                        <Badge variant='info'>
                            TEAM MEMBERS
                        </Badge>
                    </h1>
                </Col>
            </Row>

            <Row>
                <Statistics />
            </Row>

            <Row>
                <Col xs={12} lg={6}>
                    <Filtering />
                </Col>
                <Col xs={12} lg={6}>
                    <Sorting />
                </Col>
            </Row>

            <Row>
                <Col className="d-flex justify-content-around">
                    <UsersList />
                </Col>
            </Row>

        </Container>
    );
};

export default HomeScreen;