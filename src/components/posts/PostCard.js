import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CreatePostLink } from '../../utils/FormLinks';
import UserLink from '../Links/UserLink';


export default function PostCard({ post }) {
  const postLink = CreatePostLink(post)

  return (
    <Card className='my-3 shadow-sm h-100'>
      <Card.Body className="h-100 d-flex flex-column justify-content-between">
        <Link to={postLink} state={{ post }} className="d-flex flex-column justify-content-between flex-grow-1">
          <Card.Img variant="top" src={post.postImage} className="w-100 h-100" />
          <h3>{post.postTitle}</h3>
          {/* <p>{post.postContent}</p> */}
        </Link>
        <div className="d-flex justify-content-between">
          <UserLink user={post.postAuthor} />
          <span>{post.postDate}</span>
        </div>
      </Card.Body>
    </Card>
  );
}
