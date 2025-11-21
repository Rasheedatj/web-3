import Avatar2 from '@/assets/icons/Avatar2';
import React from 'react';
import { Text, View } from 'react-native';

const Transaction = () => {
  return (
    <View className='flex-row items-center mt-7'>
      <Avatar2 />
      <View className='flex-1 mx-5 '>
        <Text className='font-bold text-lg text-white'>
          Avaxeal <Text className='text-gray500 '>$AVAX</Text>
        </Text>

        <View className='flex-row items-center pt-1'>
          <Text className='text-gray500 text-lg font-bold text-right'>1h</Text>
          <Text className='text-green500 text-lg font-bold text-right pl-4'>
            18.9%
          </Text>
        </View>
      </View>

      <View>
        <Text className='text-white text-lg font-bold text-right'>$0.0015</Text>
        <View className='flex-row items-center pt-1'>
          <Text className='text-accent500 text-lg font-bold text-right'>
            MCAP
          </Text>
          <Text className='text-accent500 text-lg font-bold text-right pl-4'>
            440k
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Transaction;
