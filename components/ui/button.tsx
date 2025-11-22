import { ButtonI } from '@/utils/types';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const Button = ({ onPress, style, mode, children }: ButtonI) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View
          className={`rounded-[22px] py-5 px-3 my-2 items-center ${pressed && 'opacity-85'} ${mode === 'flat' ? 'bg-gray400' : 'bg-green500 '} ${style}`}
        >
          <Text className='text-white font-bold text-base'>{children}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default Button;
