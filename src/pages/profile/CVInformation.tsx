import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const CVInformation = () => {
  return (
    <>
      <Card className="border-0 mt-5">
        <Card.Body>
          <Card.Title>
            Curriculum Vitae
            <a className="float-right" href="#/">
              Update CV
            </a>
          </Card.Title>
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
            <ListGroup.Item style={{ paddingLeft: 0 }}>
              <strong>Skills: </strong>
              <ul className="mt-2">
                <li>Cắt cỏ</li>
                <li>Phục vụ</li>
                <li>Bưng vác</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingLeft: 0 }}>
              <strong>Type: </strong>
              Part-time
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingLeft: 0 }}>
              <strong>Salary desired: </strong>
              $40
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingLeft: 0 }}>
              <strong>Short description: </strong>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default React.memo(CVInformation);
