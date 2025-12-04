import { formatCurrency } from '@/utils/helpers';
import React from 'react';
import { Text, View } from 'react-native';

const Balance = () => {
  return (
    <View className='items-center my-10 gap-[6px]'>
      <Text className='font-medium text-sm  dark:text-white text-black'>
        Current Balance
      </Text>
      <Text className=' dark:text-white text-black font-medium text-4xl'>
        ${formatCurrency('170.32')}
      </Text>
      <Text className='bg-success/10 px-2 py-1 rounded-3xl font-medium text-sm text-success'>
        +$64.05
      </Text>
    </View>
  );
};

export default Balance;
