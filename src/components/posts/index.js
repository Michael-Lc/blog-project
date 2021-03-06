import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { usePosts } from '../../contexts/PostContext';
import PostCard from './PostCard';

export default function Posts() {
  const { posts } = usePosts()

  return (
    <Container>
      <Row>
      {posts && posts.map(post => (
          <Col md="4" key={post.postId} className='my-2'>
            <PostCard post={post} />
          </Col>
        ))
      }
      </Row>
    </Container>
  );
}
