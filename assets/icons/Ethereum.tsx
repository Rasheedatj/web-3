import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const Ethereum = (props: any) => {
  return (
    <Svg
      width={props.size ? props.size : 46}
      height={props.size ? props.size : 46}
      viewBox='0 0 46 46'
      fill='none'
    >
      <Path
        d='M45.8755 23.0005C45.8755 35.6362 35.6325 45.8795 22.997 45.8795C10.3613 45.8795 0.118164 35.6362 0.118164 23.0005C0.118164 10.365 10.3613 0.121826 22.997 0.121826C35.6324 0.121826 45.8755 10.365 45.8755 23.0005Z'
        fill='#587DE5'
      />
      <G opacity='0.8'>
        <Path
          d='M22.9235 12.3845L22.7822 12.8648V26.8025L22.9235 26.9435L29.3932 23.1193L22.9235 12.3845Z'
          fill='white'
        />
        <Path
          d='M22.9238 12.3845L16.4541 23.1193L22.9238 26.9436V20.1787V12.3845Z'
          fill='white'
        />
        <Path
          d='M22.9234 29.0484L22.8438 29.1455V34.1103L22.9234 34.3429L29.397 25.2261L22.9234 29.0484Z'
          fill='white'
        />
        <Path
          d='M22.9238 34.343V29.0484L16.4541 25.2261L22.9238 34.343Z'
          fill='white'
        />
        <Path
          d='M22.9238 26.9435L29.3934 23.1194L22.9238 20.1787V26.9435Z'
          fill='white'
        />
        <Path
          d='M16.4541 23.1194L22.9237 26.9436V20.1787L16.4541 23.1194Z'
          fill='white'
        />
      </G>
    </Svg>
  );
};

export default Ethereum;
