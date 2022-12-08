import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const SalaryDesiredForm = () => {
  return (
    <>
      <div className="mt-3 mb-3">
        <InputGroup className="mb-3">
          <Form.Control type="number" placeholder="Enter number" />
          <InputGroup.Text id="basic-addon2">/ HOUR</InputGroup.Text>
        </InputGroup>
      </div>
    </>
  );
};

export default React.memo(SalaryDesiredForm);
