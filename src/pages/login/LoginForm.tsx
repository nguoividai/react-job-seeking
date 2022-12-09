import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

type LoginFormProps = {
  handleClose?: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ handleClose }) => {
  const [validated, setValidated] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity()) {
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} md="12">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="text" placeholder="Email" />
          </Form.Group>
          <Form.Group as={Col} md="12">
            <Form.Label>Password</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control required type={showPass ? 'text' : 'password'} />
              <InputGroup.Text style={{ cursor: 'pointer' }} onClick={() => setShowPass(!showPass)}>
                <i className="icofont-eye-blocked"></i>
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>
        <div className="text-right">
          <a
            style={{ textDecoration: 'none', fontSize: '0.9rem' }}
            href="#/forgot-password"
            onClick={handleClose}
          >
            Forgot Password?
          </a>
        </div>
        <Row className="p-3 mt-3">
          <Button size="lg" variant="seeking-primary">
            Sign in
          </Button>
        </Row>
        {/* <div className="text-center p-2">
          Don&apos;t have account,{' '}
          <a
            style={{ textDecoration: 'none', fontWeight: 700 }}
            href="#/"
            onClick={(e) => e.preventDefault()}
          >
            Sign up
          </a>
        </div> */}
      </Form>
    </>
  );
};

export default React.memo(LoginForm);
