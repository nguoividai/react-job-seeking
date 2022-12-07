import React from 'react';
import amd from 'src/assets/images/home/amd.png';

const CardCompany = () => {
  return (
    <div className="card-company">
      <img src={amd} alt="company" />
    </div>
  );
};

export default React.memo(CardCompany);
