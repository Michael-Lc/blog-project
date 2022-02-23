import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="jumbotron bg-success text-white">
      <Container className='text-center'>
        <h1>404</h1>
        <h3>Page Not Found.</h3>
        <Link to='/' className='d-block text-underline'>Return to Home.</Link>
      </Container>
    </div>
  );
}
