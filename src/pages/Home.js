import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../components/header';
import NavBar from '../components/navbar';
import Posts from '../components/posts';

export default function Home() {
  return (
      <Container fluid>
          <NavBar />
          <Header />
          <Posts />
      </Container>
  );
}
