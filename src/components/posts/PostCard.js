import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CreatePostLink, CreateUserLink } from '../../utils/FormLinks';


export default function PostCard({ post }) {
  const userLink = CreateUserLink(post.postAuthor)
  const postLink = CreatePostLink(post)

  return (
    <Card className='my-3'>
      <Card.Body>
        <Link to={`/${userLink}/${postLink}`} state={{ currentPost: post }}>
          <img src={post.postImage} alt="" className="d-block w-100 h-100" />
          <h3>{post.postTitle}</h3>
          {/* <p>{post.postContent}</p> */}
        </Link>
        <div className="d-flex justify-content-between">
          <Link to={`/${userLink}`}><b>{post.postAuthor}</b></Link>
          <span>{post.postDate}</span>
        </div>
      </Card.Body>
    </Card>
  );
}
