import React from 'react';
import { ListGroup } from 'react-bootstrap';
import SkillInput from './SkillInput';
import SkillList from './SkillList';

const SkillForm = () => {
  return (
    <>
      <div className="helper-step">
        <p>Cho người dùng nhập các kỹ năng mà họ có</p>
        <p>
          Sẽ có một danh sách gợi ý cho các kỹ năng được cấu hình sẵn để người dùng cho thể nhập
          nhanh
        </p>
      </div>

      <div className="mt-3 mb-3">
        <SkillInput />
      </div>

      <SkillList />
    </>
  );
};

export default React.memo(SkillForm);
