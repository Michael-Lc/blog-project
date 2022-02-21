import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function PostLayout({ children }) {
  return (
    <Container fluid>
      <Row className='justify-content-around'>
        <Col md="6">
          {children[0]}
        </Col>
        <Col md="3" className='mt-5 pt-5'>
          <Row className='px-2'>
            <Col sm='4'>
              {children[1]}
            </Col>
            <Col sm='8'>
              {children[2]}
              {children[3]}
            </Col>
          </Row>
          {children[4]}
        </Col>
      </Row>
    </Container>
  );
}
