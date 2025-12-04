import React from 'react';
import Svg, { Defs, Image, Pattern, Rect, Use } from 'react-native-svg';

const QR = () => {
  return (
    <Svg width='276' height='247' viewBox='0 0 276 247' fill='none'>
      <Rect width='276' height='247' rx='8' fill='url(#pattern0_965_37752)' />
      <Defs>
        <Pattern
          id='pattern0_965_37752'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <Use
            xlinkHref='#image0_965_37752'
            transform='matrix(0.00102041 0 0 0.00114021 0 -0.0587045)'
          />
        </Pattern>
        <Image
          id='image0_965_37752'
          width='980'
          height='980'
          preserveAspectRatio='none'
        />
      </Defs>
    </Svg>
  );
};

export default QR;
