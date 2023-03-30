import React from 'react';
import { Form } from 'react-bootstrap';

const TypeWork = () => {
  return (
    <>
      <div className="helper-step">
        <p>Cho người dùng chọn loại công việc mà họ muốn, chỉ chọn được 1 loại duy nhất</p>
      </div>
      <Form.Check type="radio" label="FullTime" value="FullTime" name="types" />
      <Form.Check type="radio" label="Part-time" value="Part-time" name="types" />
      <Form.Check type="radio" label="Temporary" value="Temporary" name="types" />
      <Form.Check type="radio" label="Contract " value="Contract " name="types" />
    </>
  );
};

export default React.memo(TypeWork);
