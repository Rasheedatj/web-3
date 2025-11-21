import Clipboard from '@/assets/icons/Clipboard';
import React from 'react';
import { Image, Text, View } from 'react-native';

const Hero = () => {
  return (
    <View className='my-10 items-center'>
      <View className='rounded-full w-24 h-24 overflow-hidden'>
        <Image
          source={require('../../assets/images/user.png')}
          className='w-full h-full'
        />
      </View>
      <Text className='text-gray500 font-medium py-4 text-lg'>
        Available balance
      </Text>
      <Text className='text-white text-5xl font-bold'>$2, 305, 620</Text>

      <View className='bg-gray200 flex-row items-center rounded-3xl p-2 mt-3'>
        <Text className='text-gray500 mr-3 text- font-medium'>
          0ex....164hk
        </Text>
        <Clipboard />
      </View>
    </View>
  );
};

export default Hero;
