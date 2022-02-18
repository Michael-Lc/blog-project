import { useLocation } from 'react-router'
import { Col, Container, Row } from 'react-bootstrap';

import NavBar from '../components/navbar';
import UserLink from '../components/Links/UserLink';

export default function Post() {
  const { post } = useLocation().state
  // setting document title
  document.title = `${post.postTitle} | by ${post.postAuthor} | React Blog`

  return (
    <Container fluid>
      <NavBar />
      <Row className='justify-content-around'>
        <Col md="6">
          <Container>
            <h1 className="display-4 text-capitalize">{post.postTitle}</h1>
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
              <UserLink user={post.postAuthor} />
            </Col>
          </Row>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe mollitia tempora ab soluta quisquam deleniti, dicta est ducimus! Obcaecati enim dicta perferendis! Vel, distinctio enim. Ullam, odio earum. Accusamus.</p>
        </Col>
      </Row>
    </Container>
  );
}
