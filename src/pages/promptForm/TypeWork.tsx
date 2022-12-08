import React from 'react';
import { Form } from 'react-bootstrap';

const TypeWork = () => {
  return (
    <>
      <Form.Check type="radio" label="FullTime" value="FullTime" name="types" />
      <Form.Check type="radio" label="Part-time" value="Part-time" name="types" />
      <Form.Check type="radio" label="Temporary" value="Temporary" name="types" />
      <Form.Check type="radio" label="Contract " value="Contract " name="types" />
    </>
  );
};

export default React.memo(TypeWork);
