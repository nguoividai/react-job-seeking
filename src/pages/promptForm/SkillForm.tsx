import React from 'react';
import { ListGroup } from 'react-bootstrap';
import SkillInput from './SkillInput';
import SkillList from './SkillList';

const SkillForm = () => {
  return (
    <>
      <div className="mt-3 mb-3">
        <SkillInput />
      </div>

      <SkillList />
    </>
  );
};

export default React.memo(SkillForm);
