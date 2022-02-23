import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router';
import faker from '@faker-js/faker'

import PostCard from '../components/posts/PostCard';
import { usePosts } from '../contexts/PostContext';
import UserLayout from '../layouts/UserLayout';
import UserSidebar from '../components/sidebar/UserSidebar';
import NavBar from '../components/navbar';


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
    <>
      <NavBar />
      <UserLayout>
        <Container className='p-2'>
          <div className="d-flex flex-column">
            {
              userPosts && userPosts.map(post => <PostCard post={post} key={post.postId} />)
            }
          </div>
        </Container>
        
        <UserSidebar user={user} />
      </UserLayout>
    </>
  );
}
