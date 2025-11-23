import { ExploreI } from '@/utils/types';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from 'react-native';

const ExploreItem = ({ title, percentage, avatars }: ExploreI) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push('/discount-buy')}
      className='bg-gray200 rounded-[37px] px-4 py-5  w-[155px] mr-3'
    >
      <Text className='text-white font-medium text-xl'>{title}</Text>
      <Text className='text-red500 font-medium text-xl py-2'>{percentage}</Text>
      <View className='flex-row items-center'>
        {avatars.map((item, index) => (
          <Image
            source={item as ImageSourcePropType}
            key={item + index}
            className='w-10 h-10 rounded-3xl -mr-2 border-2 border-gray200'
          />
        ))}
      </View>
    </Pressable>
  );
};

export default ExploreItem;
