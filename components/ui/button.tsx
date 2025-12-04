import { ButtonI } from '@/utils/types';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const Button = ({
  onPress,
  style,
  mode,
  children,
  textColor,
  fullFlex,
  icon,
}: ButtonI) => {
  return (
    <Pressable onPress={onPress} style={{ flex: fullFlex ? 1 : 0 }}>
      {({ pressed }) => (
        <View
          className={`rounded-[22px] flex-row justify-center py-5 px-3 my-2 items-center ${pressed && 'opacity-85'} ${mode === 'flat' ? 'bg-gray400' : 'bg-green500 '} ${style}`}
          style={style}
        >
          {icon}
          <Text
            className='font-bold text-base'
            style={{
              color: textColor ? textColor : 'white',
              paddingLeft: icon ? 10 : 0,
            }}
          >
            {children}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default Button;
