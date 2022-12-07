import React, { ButtonHTMLAttributes, useState } from 'react';
import Button from './Button';

type ButtonQuantityProps = {
  textZero?: string;
  style?: React.CSSProperties;
  defaultValue?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonQuantity: React.FC<ButtonQuantityProps> = ({
  textZero,
  style,
  defaultValue,
  ...rest
}) => {
  const [value, setValue] = useState<number>(defaultValue || 0);

  const increase = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setValue((prev) => prev + 1);
  };

  const decrease = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div
      style={style}
      className="button-quantity d-flex gap-2"
      color=""
      onClick={(e) => (value === 0 ? increase(e) : '')}
    >
      <>
        <Button type="button" size="sm" shape="circle" color="outline-dark" onClick={decrease}>
          <i className="icofont-minus"></i>
        </Button>
        <input className="primary" value={value} disabled />
      </>

      {value === 0 ? (
        <>
          <Button type="button" size="sm" shape="circle" color="outline-dark" onClick={increase}>
            {textZero ? (
              <span
                style={{
                  color: '#F4894A',
                }}
              >
                {textZero}
              </span>
            ) : (
              <i className="icofont-plus primary"></i>
            )}
          </Button>
        </>
      ) : null}

      {value > 0 ? (
        <Button type="button" size="sm" shape="circle" color="outline-dark" onClick={increase}>
          <i className="icofont-plus primary"></i>
        </Button>
      ) : null}
    </div>
  );
};

export default React.memo(ButtonQuantity);
