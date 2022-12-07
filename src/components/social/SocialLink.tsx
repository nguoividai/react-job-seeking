import React from 'react';

type SocialLinkProps = {
  icon: string;
};
/**
 *
 * link get icon: https://icofont.com/icons
 */
const SocialLink: React.FC<SocialLinkProps> = (props) => {
  const { icon } = props;
  return (
    <span className="social-link">
      <i className={icon}></i>
    </span>
  );
};

export default React.memo(SocialLink);
