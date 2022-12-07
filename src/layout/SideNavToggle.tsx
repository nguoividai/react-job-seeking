import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

const SideNavToggle = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a
        href="#/"
        onClick={(e) => {
          e.preventDefault();
          handleShow();
        }}
      >
        <i className="icofont-navigation-menu"></i>
      </a>
      <Offcanvas className="app-side-nav" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav activeKey="/home" className="flex-column text-left">
            <Nav.Item>
              <Nav.Link href="/home">Find jobs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Company reviews</Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default React.memo(SideNavToggle);
