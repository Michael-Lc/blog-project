import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Drawer, } from 'react-bootstrap-drawer';
import 'react-bootstrap-drawer/lib/style.css';

export default function PostSideBar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <Drawer>
      <Drawer.Toggle onClick={ handleToggle } />

      <Collapse in={ open }>
        <Drawer.Overflow>
          <Drawer.ToC>
            <Drawer.Header href="/">Application</Drawer.Header>

            <Drawer.Nav>
              <Drawer.Item href="/settings">Settings</Drawer.Item>
            </Drawer.Nav>
          </Drawer.ToC>
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  );
}
