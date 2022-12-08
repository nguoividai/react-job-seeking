import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ConfirmForm = () => {
  return (
    <>
      <div className="mb-3 mt-3">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Your name: </strong>
            Lê văn A
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Gender: </strong>
            Male
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Your phone: </strong>
            0909000999
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Your email: </strong>
            abc@gmail.com
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Your location: </strong>
            Denver
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Age: </strong>
            20
          </ListGroup.Item>
          {/* <ListGroup.Item>
            <strong>Zip code: </strong>
            9000
          </ListGroup.Item> */}
          <ListGroup.Item>
            <strong>Languages: </strong>
            English, Vietnamese
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Your skills: </strong>
            Cắt cỏ, Phục vụ
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Type of Work: </strong>
            Part-time
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Salary desired: </strong>
            $40 / HOUR
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default React.memo(ConfirmForm);
