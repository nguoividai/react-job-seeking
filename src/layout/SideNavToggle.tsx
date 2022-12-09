import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation } from 'react-router-dom';
import AppNavLink from './AppNavLink';

const SideNavToggle = () => {
  const [show, setShow] = useState<boolean>(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(false);
  }, [location.pathname]);

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
          <AppNavLink layout="vertical" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default React.memo(SideNavToggle);
