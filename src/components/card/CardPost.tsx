import React from 'react';

import donald from 'src/assets/images/home/donald.png';
import lily from 'src/assets/images/home/lily.png';
import steven from 'src/assets/images/home/steven.png';
import CardImage from './CardImage';

type CardPostProps = {
  src?: string;
  name?: string;
  position?: string;
};

const CardPost: React.FC<CardPostProps> = (props) => {
  const { src, name, position } = props;
  return (
    <div className="card-post">
      <div className="card-post--image mb-2">
        <img alt="img-post" src={src} />
      </div>
      <div className="card-news--content mb-4">
        <div className="card-news--title">{name}</div>
        <div className="card-news--description">{position}</div>
      </div>
      <CardImage
        className="card-image-flex"
        src={donald}
        title="Christopher Donald"
        shape="circle"
        size="sm"
        extra="Company"
      />
    </div>
  );
};

export default React.memo(CardPost);
