import React, { useMemo } from 'react';

type SectionProps = {
  align?: string;
  children?: React.ReactNode;
  title?: string;
  extra?: string | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  styleContent?: React.CSSProperties;
  titleProps?: Object;
  extraProps?: Object;
};

const Section: React.FC<SectionProps> = (props) => {
  const { align, children, title, extra, className, style, extraProps, titleProps, styleContent } =
    props;

  const titleClassName = useMemo(() => {
    if (align && align === 'left') return 'title-left';
    return '';
  }, [align]);
  const extraClassName = useMemo(() => {
    if (align && align === 'left') return 'extra-left';
    return '';
  }, [align]);

  return (
    <section className={`section ${className || ''}`} style={style}>
      {title ? (
        <h1 className={`title ${titleClassName}`} {...titleProps}>
          {' '}
          {title}{' '}
        </h1>
      ) : null}
      {extra ? (
        <div {...extraProps} className={`extra ${extraClassName}`}>
          {extra}
        </div>
      ) : null}
      <div className="section-content" style={styleContent}>
        {children}
      </div>
    </section>
  );
};

export default React.memo(Section);
