import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../components/header';
import Posts from '../components/posts';

export default function Home() {
  return (
      <Container fluid>
          <Header />
          <Posts />
      </Container>
  );
}
