import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router';
import faker from '@faker-js/faker'

import PostCard from '../components/posts/PostCard';
import { usePosts } from '../contexts/PostContext';
import UserLink from '../components/Links/UserLink';
import UserLayout from '../layouts/UserLayout';


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
    <UserLayout>
      <Container className='p-2'>
        <div className="d-flex flex-column">
          {
            userPosts && userPosts.map(post => <PostCard post={post} key={post.postId} />)
          }
        </div>
      </Container>

      <img src={`${user.image}`} alt="" className="d-block w-100 h-100 rounded-circle" />
      <UserLink user={user} />
      <span className="d-block text-uppercase font-weight-light">200 followers</span>
      <p className='my-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe mollitia tempora ab soluta quisquam deleniti, dicta est ducimus! Obcaecati enim dicta perferendis! Vel, distinctio enim. Ullam, odio earum. Accusamus.</p>
    </UserLayout>
  );
}
