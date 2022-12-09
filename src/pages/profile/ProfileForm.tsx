import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

const ProfileForm = () => {
  return (
    <>
      <Row style={{ gap: '1rem' }}>
        <Col xs="12">
          <Card>
            <Card.Body>
              <Card.Title>Account</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Manage your account</Card.Subtitle>
              <ListGroup variant="flush">
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Email: </strong>
                  abc@gmail.com
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Phone: </strong>
                  090 000 999
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Status: </strong>
                  Available
                </ListGroup.Item>
              </ListGroup>
              <div className="mt-3">
                <Card.Link>Change Password</Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12">
          <Card>
            <Card.Body>
              <Card.Title>Information</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Manage your information</Card.Subtitle>
              <ListGroup variant="flush">
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Name: </strong>
                  Le Van A
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Location: </strong>
                  Denver
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Age: </strong>
                  30
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Gender: </strong>
                  Male
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Languages: </strong>
                  English, Vietnamese
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12">
          <Card>
            <Card.Body>
              <Card.Title>I want to find a job?</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Manage your information</Card.Subtitle> */}
              <ListGroup variant="flush">
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Name: </strong>
                  Le Van A
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Location: </strong>
                  Denver
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Age: </strong>
                  30
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Gender: </strong>
                  Male
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: 0 }}>
                  <strong>Languages: </strong>
                  English, Vietnamese
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ProfileForm);
