import React, { useRef } from 'react';
import { Col, Container, Form, FormControl, Row } from 'react-bootstrap';
// import PostSideBar from './PostSideBar';

export default function PostForm() {
  const titleRef = useRef()
  const contentRef = useRef()

  function setHeight() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={9} lg={10}>
          <Form className='w-100 h-100 d-flex flex-column px-5'>
            <FormControl  
              as='textarea' 
              placeholder='Title goes here...' 
              size="lg" 
              className='mt-2 p-2 postTitle' 
              ref={titleRef}
              plaintext 
            />
            <FormControl 
              onInput={setHeight} 
              as='textarea' 
              placeholder='Add Post Content' 
              size="lg" 
              ref={contentRef}
              className='p-2 postContent' 
              plaintext 
            />
          </Form>
        </Col> 
        {/* <Col as={ PostSideBar } xs={12} md={3} lg={2} /> */}
      </Row>
    </Container>
  );
}
