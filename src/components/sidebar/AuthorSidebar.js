import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Drawer, } from 'react-bootstrap-drawer';
import 'react-bootstrap-drawer/lib/style.css';

import UserLink from '../Links/UserLink';

export default function AuthorSidebar({ user }) {
  return (
    <Drawer>
      <Drawer.Overflow>
        <Drawer.ToC className='d-flex flex-column mt-5 pt-5'>
          <Row className='px-2'>
            <Col xs='4'>
              <img src={`${user.image}`} alt="" className="d-block w-100 h-100 rounded-circle" />
            </Col>
            <Col xs='8'>
              <span className="d-block text-uppercase font-weight-light">written by</span>
              <UserLink user={user} />
            </Col>
          </Row>
          <p className='my-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe mollitia tempora ab soluta quisquam deleniti, dicta est ducimus! Obcaecati enim dicta perferendis! Vel, distinctio enim. Ullam, odio earum. Accusamus.</p>
        </Drawer.ToC>
      </Drawer.Overflow>
    </Drawer>
  );
}
