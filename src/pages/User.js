import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import faker from '@faker-js/faker'

import NavBar from '../components/navbar';
import PostCard from '../components/posts/PostCard';
import { usePosts } from '../contexts/PostContext';
import UserLink from '../components/Links/UserLink';


export default function User() {
  const { user } = useLocation().state
  const { userPosts, setUserPosts } = usePosts()
  // setting document title
  document.title = `${user} | React Blog`

  useEffect(() => {
    const userPostData = [];
    for (let index = 0; index < 10; index++) {
      const post = {
        postId: faker.datatype.uuid(),
        postTitle: faker.lorem.words(5),
        postImage: faker.image.image(),
        postDate: faker.date.past().toDateString(),
        postAuthor: user,
        postContent: faker.lorem.paragraphs(10, "\n\n")
      };

      userPostData.push(post);
    }
    setUserPosts(userPostData)
  }, [user, setUserPosts])

  return (
    <Container fluid>
      <NavBar />
      <Row className='justify-content-around'>
        <Col md="5">
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
              <img src={`${user.image}`} alt="" className="d-block w-100 h-100 rounded-circle" />
            </Col>
            <Col sm='8'>
              <UserLink user={user} />
              <span className="d-block text-uppercase font-weight-light">200 followers</span>
            </Col>
          </Row>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe mollitia tempora ab soluta quisquam deleniti, dicta est ducimus! Obcaecati enim dicta perferendis! Vel, distinctio enim. Ullam, odio earum. Accusamus.</p>
        </Col>
      </Row>
    </Container>
  );
}
