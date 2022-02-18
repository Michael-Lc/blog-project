import React from 'react';
import { Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Container fluid className='header bg-success'>
      <div className="d-flex align-items-center h-100">
        <h1 className='text-capitalize display-3 px-5'>Write, Read <br /> and Connect.</h1>
      </div>
    </Container>
  );
}
