import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const AccountForm = () => {
  return (
    <>
      <Card className="border-0 mt-5">
        <Card.Body>
          <Card.Title>Account</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Manage your account</Card.Subtitle> */}
          <ListGroup variant="flush">
            <ListGroup.Item style={{ paddingLeft: 0 }}>
              <div className="group-item">
                <div className="group-item--info">
                  <strong>Email: </strong>
                  abc@gmail.com
                </div>
                <div className="group-item--action">
                  <a href="#/">Change Email</a>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingLeft: 0 }}>
              <div className="group-item">
                <div className="group-item--info">
                  <strong>Phone: </strong>
                  090 000 999
                </div>
                <div className="group-item--action">
                  <a href="#/">Change Phone</a>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingLeft: 0 }}>
              <div className="group-item">
                <div className="group-item--info">
                  <strong>Status: </strong>
                  Available
                </div>
                <div className="group-item--action">
                  <a href="#/">Change Status</a>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <div className="mt-3">
            <Card.Link>Change Password</Card.Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default React.memo(AccountForm);
