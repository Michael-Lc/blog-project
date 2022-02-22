import { useLocation } from 'react-router'
import { Container } from 'react-bootstrap';

import PostLayout from '../layouts/PostLayout';
import AuthorSidebar from '../components/sidebar/AuthorSidebar';

export default function Post() {
  const { post } = useLocation().state
  // setting document title
  document.title = `${post.postTitle} | by ${post.postAuthor} | React Blog`

  return (
    <PostLayout>
      <Container className='p-2'>
        <h1 className="display-4 text-capitalize">{post.postTitle}</h1>
        <img src={post.postImage} alt="" className="d-block my-5 shadow-sm w-100 h-100" />
        <p>
          {post.postContent}
        </p>
      </Container>

      <AuthorSidebar user={post.postAuthor} />
    </PostLayout>
  );
}
