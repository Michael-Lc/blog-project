import { useState } from 'react';
import { useLocation } from 'react-router'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavBar from '../components/navbar';
import { CreateUserLink } from '../utils/FormLinks';

export default function Post() {
  const { currentPost } = useLocation().state
  const [post, setPost] = useState(currentPost);
  const userLink = CreateUserLink(post.postAuthor)

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
              <Link to={`/${userLink}`} className='d-block'><b>{post.postAuthor}</b></Link>
            </Col>
          </Row>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe mollitia tempora ab soluta quisquam deleniti, dicta est ducimus! Obcaecati enim dicta perferendis! Vel, distinctio enim. Ullam, odio earum. Accusamus.</p>
        </Col>
      </Row>
    </Container>
  );
}
