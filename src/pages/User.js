import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavBar from '../components/navbar';
import PostCard from '../components/posts/PostCard';
import { useAuth } from '../contexts/AuthContext';
import { usePosts } from '../contexts/PostContext';
import { CreateUserLink } from '../utils/FormLinks';


export default function User() {
  const { currentUser } = useAuth()
  const { userPosts } = usePosts()
  const userLink = CreateUserLink(currentUser.username)
  // setting document title
  document.title = `${currentUser.name} | React Blog`

  return (
    <Container fluid>
      <NavBar />
      <Row className='justify-content-around'>
        <Col md="6">
          <Container>
            <div className="d-flex flex-column">
              {
                userPosts && userPosts.map(post => <PostCard post={post} key={post.postId} />)
              }
            </div>
          </Container>
        </Col>
        <Col md="3" className='mt-5 pt-5'>
          <Row>
            <Col sm='4'>
              <img src={`${currentUser.image}`} alt="" className="d-block w-100 h-100 rounded-circle" />
            </Col>
            <Col sm='8'>
              <Link to={`/${userLink}`} className='d-block'><b>{currentUser.name}</b></Link>
              <span className="d-block text-uppercase font-weight-light">200 followers</span>
            </Col>
          </Row>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe mollitia tempora ab soluta quisquam deleniti, dicta est ducimus! Obcaecati enim dicta perferendis! Vel, distinctio enim. Ullam, odio earum. Accusamus.</p>
        </Col>
      </Row>
    </Container>
  );
}
