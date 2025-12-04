import { formatCurrency, getSize } from '@/utils/helpers';
import React from 'react';
import { Text } from 'react-native';

const Amount = ({ amount }: { amount: string }) => {
  const size = getSize(amount);
  return (
    <Text
      className={` font-bold text-black dark:text-white h-14  ${size === 'short' && 'text-6xl'} ${size === 'medium' && 'text-4xl'} ${size === 'long' && 'text-3xl'} `}
    >
      {amount.length > 0 ? formatCurrency(amount) : formatCurrency('0')}
    </Text>
  );
};

export default Amount;
