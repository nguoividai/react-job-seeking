import React, { FormHTMLAttributes } from 'react';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children?: React.ReactNode;
};
type FormItemProps = {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
};

const Item: React.FC<FormItemProps> = (props) => {
  const { label, children, className, style, required } = props;
  return (
    <div style={style} className={`form-item ${className || ''}`}>
      {label && (
        <label htmlFor={label}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}

      <div className="form-item-input">{children}</div>
    </div>
  );
};

const Form: React.FC<FormProps> = (props) => {
  const { children, ...formProps } = props;
  return <form {...formProps}>{children}</form>;
};

export default Object.assign(Form, { Item });
