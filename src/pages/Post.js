import { useLocation } from 'react-router'
import { Container } from 'react-bootstrap';

import UserLink from '../components/Links/UserLink';
import PostLayout from '../layouts/PostLayout';

export default function Post() {
  const { post } = useLocation().state
  // setting document title
  document.title = `${post.postTitle} | by ${post.postAuthor} | React Blog`

  return (
    <PostLayout>
      <Container>
        <h1 className="display-4 text-capitalize">{post.postTitle}</h1>
        <img src={post.postImage} alt="" className="d-block my-5 shadow-sm w-100 h-100" />
        <p>
          {post.postContent}
        </p>
      </Container>

      <img src="" alt="" className="d-block w-100 h-100 rounded-circle" />
      <span className="d-block text-uppercase font-weight-light">written by</span>
      <UserLink user={post.postAuthor} />
      <p className='my-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe mollitia tempora ab soluta quisquam deleniti, dicta est ducimus! Obcaecati enim dicta perferendis! Vel, distinctio enim. Ullam, odio earum. Accusamus.</p>
    </PostLayout>
  );
}
