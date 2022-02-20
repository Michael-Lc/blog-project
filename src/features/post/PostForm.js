import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import faker from '@faker-js/faker'

import PostSideBar from './PostSideBar';
import { usePosts } from '../../contexts/PostContext';
import { CreatePostLink } from '../../utils/FormLinks';

export default function PostForm() {
  const titleRef = useRef()
  const contentRef = useRef()
  const [headerImg, setHeaderImg] = useState("")
  const { addPost } = usePosts()
  const [titleError, setTitleError] = useState()
  const [contentError, setContentError] = useState()
  const navigate = useNavigate()

  function setHeight() {
    contentRef.current.style.height = "auto";
    contentRef.current.style.height = contentRef.current.scrollHeight + "px";
  }

  const handleSubmit = () => {
    if (titleRef.current.value.length < 3) {
      return setTitleError("border border-danger")
    } else setTitleError("")
    if (contentRef.current.value < 3) {
      return setContentError("border border-danger")
    } else setContentError("")

    const newPost = {
      postId: faker.datatype.uuid(),
      postTitle: titleRef.current.value,
      postImage: headerImg,
      postDate: new Date().toDateString(),
      postAuthor: faker.name.firstName() + " " + faker.name.lastName(),
      postContent: contentRef.current.value + "\n" + faker.lorem.paragraphs(10, "\n\n")
    };

    addPost(newPost);
    titleRef.current.value = "";
    contentRef.current.value = "";
    setHeaderImg("")
    const postLink = CreatePostLink(newPost)
    navigate(postLink, { state: { post: newPost } })
  }

  const handleImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setHeaderImg(e.target.result)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <Container fluid>
      <Row className='sm-flex-col-reverse'>
        <Col xs={12} md={9} lg={10}>
          <Form className='w-100 h-100 d-flex flex-column px-md-5'>
            <FormControl  
              as='textarea' 
              placeholder='Title goes here...' 
              size="lg" 
              className={`mt-2 p-2 postTitle ${titleError}`} 
              ref={titleRef}
              plaintext 
              required
            />
            <FormControl 
              onInput={setHeight} 
              as='textarea' 
              placeholder='Add Post Content' 
              size="lg" 
              ref={contentRef}
              className={`p-2 postContent ${contentError}`} 
              plaintext 
              required
            />
          </Form>
        </Col> 
        <Col xs={12} md={3} lg={2}>
          <PostSideBar 
            handleSubmit={handleSubmit} 
            handleImageChange={handleImageChange} 
          />
        </Col>
      </Row>
    </Container>
  );
}
