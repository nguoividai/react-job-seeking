import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SkillList = () => {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>Cắt cỏ</ListGroup.Item>
        <ListGroup.Item>Phục vụ quán ăn</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default React.memo(SkillList);
