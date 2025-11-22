import { IconButtonI } from '@/utils/types';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const IconButton = ({ icon, title, size = 'small', onPress }: IconButtonI) => {
  return (
    <Pressable onPress={onPress}>
      <View
        className={`bg-gray200  rounded-full items-center justify-center ${size === 'small' ? 'w-6 h-6' : 'w-16 h-16'}`}
      >
        {icon}
      </View>
      {title && (
        <Text className='text-base text-center font-medium text-gray500 pt-3'>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default IconButton;
