import React from 'react';

type CardProductProps = {
  children?: React.ReactNode;
  src?: string;
  title?: string;
  description?: string;
};

const CardProduct: React.FC<CardProductProps> = (props) => {
  const { children, src, title, description } = props;
  return (
    <div className="card-product">
      <div className="product-image">
        <img src={src} alt="product" />
      </div>
      <div className="product-text">
        {children}
        <div className="text-title">{title}</div>
        <div className="text-description">{description}</div>
      </div>
    </div>
  );
};

export default React.memo(CardProduct);
