import BTC from '@/assets/icons/btc';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = () => {
  return (
    <View className='mt-10'>
      <Text className='text-gray500 font-medium pb-3 text-base'>
        Investment amount
      </Text>
      <View className='flex-row items-center gap-4'>
        <TextInput className='bg-gray400 flex-1 p-4 rounded-2xl  font-medium text-white' />
        <View className='bg-gray400 px-4 py-3 rounded-2xl flex-row items-center gap-2'>
          <BTC />
          <Text className='text-white font-bold'>BTC</Text>
        </View>
      </View>

      <Text className='text-gray500 text-center font-medium pt-3 text-base'>
        Limit 0.5BTC
      </Text>
    </View>
  );
};

export default Input;
