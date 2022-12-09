import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="helper-step">
        <p>
          Dựa vào thông tin Email hay phone để xác định được người dùng đã sử dụng dịch vụ trước đây
          hay chưa?
        </p>
        <p>
          🧑‍🎓 Nếu đã có sử dụng trước đây sẽ có lưu thông tin, thay vì nhập lại thông tin đó thì bắt
          người dùng đăng nhập để lấy thông tin theo tài khoản
        </p>
        <p>🧑‍🎓 Nếu chưa có thông tin thì cho sang bước tiếp theo.</p>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Your name</Form.Label>
            <Form.Control required type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Your phone</Form.Label>
            <Form.Control required type="text" placeholder="Enter phone" />
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              aria-describedby="inputGroupPrepend"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your location"
              aria-describedby="inputGroupPrepend"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter number" required />
          </Form.Group>
          {/* <Form.Group as={Col} md="5" controlId="validationCustom03">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="number" placeholder="Enter number" required />
        </Form.Group> */}
          <Form.Group
            as={Col}
            md="4"
            className="d-flex align-items-end gap-3"
            controlId="validationCustom04"
          >
            <Form.Check inline label="Male" value="Male" name="group1" type="radio" />
            <Form.Check inline label="Female" value="Female" name="group1" type="radio" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
      </Form>
    </>
  );
}

export default FormExample;
