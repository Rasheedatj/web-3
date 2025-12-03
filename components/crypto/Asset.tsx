import { formatCurrency } from '@/utils/helpers';
import { AssetType } from '@/utils/types';
import React from 'react';
import { Text, View } from 'react-native';

const Asset = ({ asset }: { asset: AssetType }) => {
  return (
    <View className='flex-row items-center mb-5'>
      {asset.image}
      <View className='flex-1 mx-4'>
        <Text className='dark:text-white text-black font-semibold text-base'>
          {asset.title}
        </Text>
        <Text className='text-grayInactive pt-1 text-sm'>
          {asset.valueInCoin} {''}
          {asset.coin}
        </Text>
      </View>

      <View>
        <Text className='dark:text-white text-black font-medium text-base text-end'>
          ${formatCurrency(asset.valueInUsd)}
        </Text>
        <Text
          className={`text-right pt-1 text-sm ${asset.gain ? 'text-success' : 'text-error'}`}
        >
          {asset.gain ? `+$${asset.gain}` : `-$${asset.loss}`}
        </Text>
      </View>
    </View>
  );
};

export default Asset;
