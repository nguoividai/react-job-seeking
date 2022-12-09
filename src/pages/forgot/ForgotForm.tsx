import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const ForgotForm = () => {
  const [validated, setValidated] = useState<boolean>(false);

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
      <div className="container prompt-form-container">
        <div style={{ width: '100%' }}>
          <h4>Forgot Password?</h4>
          <div className="helper-step">
            Check your email after a few minutes. If you dont&apos;t email, please contact to{' '}
            <a href="tel: 090">Phone number</a>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} md="12">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="text" placeholder="Email" />
              </Form.Group>
            </Row>
            <Row className="p-3 mt-3">
              <Button size="lg" variant="seeking-primary">
                Reset Passwords
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default React.memo(ForgotForm);
