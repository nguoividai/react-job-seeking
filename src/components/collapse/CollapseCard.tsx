import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import check from 'src/assets/images/3dPrinting/check.png';

type CollapseCardProps = {
  title?: string;
  open?: boolean;
};

const CollapseCard: React.FC<CollapseCardProps> = (props) => {
  const { title, open } = props;
  const [show, setShow] = useState(open ?? false);
  return (
    <div className={`collapseCard`}>
      <button
        style={{
          borderBottom: show ? '0px' : '1px solid rgb(49, 47, 48)',
          borderBottomLeftRadius: show ? '0px' : '8px',
          borderBottomRightRadius: show ? '0px' : '8px',
        }}
        className={`collapsible-header ${show ? 'active' : ''}`}
        onClick={() => setShow(!show)}
      >
        {title}
      </button>
      <Collapse in={show}>
        <div className="collapsible">
          <p>Standard (no additional post-processing)</p>
          <div className="d-flex align-items-center mt-3">
            <img style={{ width: '16px', height: '11.33px' }} src={check} />
            <span>All surfaces must have a consistent visual appearance</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <img style={{ width: '16px', height: '11.33px' }} src={check} />
            <span>All surfaces must have a consistent visual appearance</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <img style={{ width: '16px', height: '11.33px' }} src={check} />
            <span>All surfaces must have a consistent visual appearance</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <img style={{ width: '16px', height: '11.33px' }} src={check} />
            <span>All surfaces must have a consistent visual appearance</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <img style={{ width: '16px', height: '11.33px' }} src={check} />
            <span>All surfaces must have a consistent visual appearance</span>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default React.memo(CollapseCard);
