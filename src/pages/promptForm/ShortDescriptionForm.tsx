import React from 'react';
import { Form } from 'react-bootstrap';

const ShortDescriptionForm = () => {
  return (
    <>
      <div className="helper-step">
        <p>
          Mô tả ngắn gọn về cá nhân để nhà tuyển dụng có thể hiểu rõ hơn. Có thể bỏ qua bước này
        </p>
      </div>
      <div className="mt-3 mb-3">
        <Form.Control type="text" as="textarea" rows={5} placeholder="Enter short description" />
      </div>
    </>
  );
};

export default React.memo(ShortDescriptionForm);
