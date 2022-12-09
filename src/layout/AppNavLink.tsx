import React from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

type AppNavLinkProps = {
  layout?: 'horizontal' | 'vertical';
};

const AppNavLink: React.FC<AppNavLinkProps> = ({ layout }) => {
  const location = useLocation();

  return (
    <>
      <Nav
        activeKey={`#${location?.pathname}`}
        className={layout === 'vertical' ? `flex-column text-left` : ''}
      >
        <Nav.Item>
          <Nav.Link eventKey="#/" href="#/">
            Find jobs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#/about-us" href="#/about-us">
            About us
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default React.memo(AppNavLink);
