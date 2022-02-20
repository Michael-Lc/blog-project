import React, { useRef } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { Drawer, } from 'react-bootstrap-drawer';
import 'react-bootstrap-drawer/lib/style.css';

export default function PostSideBar({ handleSubmit, handleImageChange }) {
  const headerImageRef = useRef()

  return (
    <Drawer>
      <Drawer.Overflow>
        <Drawer.ToC className='d-flex flex-column'>
          <Button className='m-2' onClick={handleSubmit}>Post</Button>

          <Button className='m-2' onClick={() => headerImageRef.current.click()}>Choose Header Image</Button>
          <FormControl className='d-none' ref={headerImageRef} onChange={handleImageChange} type='file' accept='image/*' />
          {/* <FormControl className='d-none' ref={headerImageRef} onChange={handleImageChange} type='file' accept='image/*' /> */}
        </Drawer.ToC>
      </Drawer.Overflow>
    </Drawer>
  );
}
