import React, { ImgHTMLAttributes } from 'react';

type BannerProps = {
  children?: React.ReactNode;
  style?: Object;
};

type BannerImageProps = ImgHTMLAttributes<HTMLImageElement>;

type BannerTextProps = {
  titleLight?: string | React.ReactNode;
  titleDark?: string | React.ReactNode;
  titleBlack?: string | React.ReactNode;
  description?: string | React.ReactNode;
  descriptionSmall?: string | React.ReactNode;
  descriptionSmallProps?: Object;
  action?: string | React.ReactNode;
};

const BannerText: React.FC<BannerTextProps> = (props) => {
  const {
    titleLight,
    titleDark,
    titleBlack,
    description,
    descriptionSmall,
    descriptionSmallProps,
    action,
  } = props;
  return (
    <div className="banner-text">
      <div className="title">
        {titleLight ? <span className="title-light">{titleLight}</span> : null}
        {titleDark ? <span className="title-dark">{titleDark}</span> : null}
        {titleBlack ? <span className="title-black">{titleBlack}</span> : null}
      </div>

      {description ? (
        <div className="description">
          <p>{description}</p>
        </div>
      ) : null}

      {descriptionSmall ? (
        <div className="description-small" {...descriptionSmallProps}>
          <p>{descriptionSmall}</p>
        </div>
      ) : null}

      {action ? <div className="action">{action}</div> : null}
    </div>
  );
};

const BannerImage: React.FC<BannerImageProps> = (props) => {
  return (
    <div className="banner-image">
      <img {...props} alt="banner" />
    </div>
  );
};

const Banner: React.FC<BannerProps> = (props) => {
  const { children } = props;
  return (
    <div {...props} className="banner">
      {children}
    </div>
  );
};

export default Object.assign(Banner, {
  Text: BannerText,
  Img: BannerImage,
});
