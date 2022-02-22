import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function PostLayout({ children }) {
  return (
    <Container fluid>
      <Row className='justify-content-around'>
        <Col md="6">
          {children[0]}
        </Col>
        <Col md="3">
          {children[1]}
        </Col>
      </Row>
    </Container>
  );
}
