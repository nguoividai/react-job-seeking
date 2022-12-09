import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import ModalOverPage from 'src/components/modal/ModalOverPage';
import LoginForm from 'src/pages/login/LoginForm';
import AppNavLink from './AppNavLink';
import SideNavToggle from './SideNavToggle';

const AppHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="app-header">
      <div className="side-nav-icon">
        <SideNavToggle />
      </div>
      <div className="app-logo">
        <a href="#/">
          <img src={require('src/assets/images/logo.png')} alt="logo" width={125} />
        </a>
      </div>
      <div className="app-nav-link">
        <AppNavLink />
      </div>
      <div className="action">
        <Nav activeKey="/home">
          <Nav.Item>
            <ModalOverPage
              show={show}
              title="Login"
              onHide={handleClose}
              trigger={
                <Nav.Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleShow();
                  }}
                >
                  Sign in
                </Nav.Link>
              }
            >
              <LoginForm handleClose={handleClose} />
            </ModalOverPage>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default React.memo(AppHeader);
