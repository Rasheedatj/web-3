import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const SwapAction = (props: any) => {
  return (
    <Svg width='51' height='51' viewBox='0 0 51 51' fill='none'>
      <Rect
        width='50.1932'
        height='50.1932'
        rx='25.0966'
        fill={props.theme === 'dark' ? '#282A2E' : '#F1F3F6'}
      />
      <Path
        d='M28.8486 35.7628L35.1479 29.4761'
        stroke={props.theme === 'dark' ? '#fff' : '#0D0D0D'}
        stroke-width='1.88224'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M28.8486 14.4307L28.8486 35.7628'
        stroke={props.theme === 'dark' ? '#fff' : '#0D0D0D'}
        stroke-width='1.88224'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M21.3451 14.4307L15.0459 20.7174'
        stroke={props.theme === 'dark' ? '#fff' : '#0D0D0D'}
        stroke-width='1.88224'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M21.3447 35.7628L21.3447 14.4307'
        stroke={props.theme === 'dark' ? '#fff' : '#0D0D0D'}
        stroke-width='1.88224'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
};

export default SwapAction;
