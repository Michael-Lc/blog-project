import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import NavBar from '../components/navbar';

const postData = {
    postId: 0,
    postTitle: "Best of Paris in 7 Days Tour",
    postImage: "",
    postAuthor: "John Doe",
    postDate: new Date().toDateString(),
    postContent: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
}

export default function Post() {
  const [post, setPost] = useState(postData);

  return (
    <Container fluid>
      <NavBar />
      <Row className='justify-content-around'>
        <Col md="6">
          <Container>
            <h1 className="display-4">{post.postTitle}</h1>
            <img src={post.postImage} alt="" className="d-block w-100 h-100" />
            <p>
              {post.postContent}
            </p>
          </Container>
        </Col>
        <Col md="3" className='mt-5 pt-5'>
          <Row>
            <Col sm='4'>
              <img src="" alt="" className="d-block w-100 h-100 rounded-circle" />
            </Col>
            <Col sm='8'>
              <span className="d-block text-uppercase font-weight-light">written by</span>
              <span className='d-block'><b>{post.postAuthor}</b></span>
            </Col>
          </Row>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe mollitia tempora ab soluta quisquam deleniti, dicta est ducimus! Obcaecati enim dicta perferendis! Vel, distinctio enim. Ullam, odio earum. Accusamus.</p>
        </Col>
      </Row>
    </Container>
  );
}
