import React from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';

const SalaryDesiredForm = () => {
  return (
    <>
      <div className="helper-step">
        <p>Mức lương mà người xin việc mong muốn</p>
        <p> 🧑‍🎓 Nếu chọn loại công việc là partime thì đơn vị tính mức lương là theo giờ</p>
        <p>
          🧑‍🎓 Nếu chọn loại công việc là fulltime / temporary / contract work thì đơn vị tính mức
          lương là theo tháng
        </p>
      </div>
      <div className="mt-3 mb-3">
        <Col xs="6" md="4">
          <InputGroup className="mb-3">
            <Form.Control type="number" placeholder="Enter number" />
            <InputGroup.Text id="basic-addon2">/ HOUR</InputGroup.Text>
          </InputGroup>
        </Col>
      </div>
    </>
  );
};

export default React.memo(SalaryDesiredForm);
