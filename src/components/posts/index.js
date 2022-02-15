import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { usePosts } from '../../contexts/PostContext';
import PostCard from './PostCard';

export default function Posts() {
  const { postsData } = usePosts()
  const [posts, setPosts] = useState(postsData);

  return (
    <Container>
      <Row>
      {posts && posts.map(post => (
          <Col md="6" key={post.postId}>
            <PostCard post={post} />
          </Col>
        ))
      }
      </Row>
    </Container>
  );
}
