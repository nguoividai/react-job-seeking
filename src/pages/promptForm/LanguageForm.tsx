import React, { useState } from 'react';
import Select from 'react-select';

type SelectOption = {
  value: string;
  label: string;
};

const LanguageForm = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOption>();
  const options = [
    { value: 'English', label: 'English' },
    { value: 'Vietnamese', label: 'Vietnamese' },
    { value: 'Chinese', label: 'Chinese' },
  ];
  return (
    <>
      <div className="helper-step">
        <p>Cho người dùng chọn ngôn ngữ họ có thể giao tiếp, có thể chọn nhiều</p>
      </div>
      <div className="mt-3 mb-3">
        <Select options={options} isMulti />
      </div>
    </>
  );
};

export default React.memo(LanguageForm);
