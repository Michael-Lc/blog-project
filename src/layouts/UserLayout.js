import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function UserLayout({ children }) {
  return (
    <Container fluid>
      <Row className='justify-content-around sm-flex-col-reverse'>
        <Col md="5">
          {children[0]}
        </Col>
        <Col md="3">
          {children[1]}
        </Col>
      </Row>
    </Container>
  );
}

