import React from 'react';
import { Nav } from 'react-bootstrap';
import SideNavToggle from './SideNavToggle';

const AppHeader = () => {
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
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Find jobs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Company reviews</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="action">
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Sign in</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default React.memo(AppHeader);
