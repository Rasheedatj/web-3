import { useTheme } from '@/utils/ThemeContext';
import React from 'react';
import { Image, Text, View } from 'react-native';

const Index = () => {
  const { colorScheme } = useTheme();
  return (
    <View className='flex-1 pt-20 px-10'>
      {colorScheme === 'dark' && (
        <View className='absolute left-[5px] '>
          <Image
            source={require('../../assets/images/gradientBackground.png')}
            className='object-cover'
          />
        </View>
      )}

      <Text className='text-white  '>Hello world</Text>
    </View>
  );
};

export default Index;
