import React from 'react';
import { Container } from 'react-bootstrap';

import NavBar from '../components/navbar';
import Posts from '../components/posts';

export default function Home() {
  return (
      <Container fluid>
          <NavBar />
          <Posts />
      </Container>
  );
}
