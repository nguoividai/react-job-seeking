import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import AccountForm from './AccountForm';
import CVInformation from './CVInformation';

const ProfileInformation = () => {
  return (
    <>
      <div className="profile-tabs">
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav className="flex-column">
                <div className="nav-title">Profile</div>
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <div className="profile-item">
                      <div className="profile-item--icon">
                        <i className="icofont-user"></i>
                      </div>
                      <div className="profile-item--content">
                        <div className="profile-item--title">Account</div>
                        <div className="profile-item--description">Manage your account</div>
                      </div>
                      <div className="profile-item--direction">
                        <i className="icofont-thin-right"></i>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <div className="profile-item">
                      <div className="profile-item--icon">
                        <i className="icofont-info"></i>
                      </div>
                      <div className="profile-item--content">
                        <div className="profile-item--title">Curriculum Vitae</div>
                        <div className="profile-item--description">
                          Manage information about for find job
                        </div>
                      </div>
                      <div className="profile-item--direction">
                        <i className="icofont-thin-right"></i>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <AccountForm />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <CVInformation />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

export default React.memo(ProfileInformation);
