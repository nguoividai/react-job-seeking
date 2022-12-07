import React from 'react';
import Slider, { Settings } from 'react-slick';

type SimpleSliderProps = {
  children?: React.ReactNode;
  settings?: Settings;
};

const SimpleSlider: React.FC<SimpleSliderProps> = (props) => {
  const { children, settings } = props;

  const defaultSettings = settings
    ? settings
    : {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return <Slider {...defaultSettings}>{children}</Slider>;
};

export default React.memo(SimpleSlider);
