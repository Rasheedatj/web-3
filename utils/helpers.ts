import { Platform } from 'react-native';

export const formatCurrency = (value: string) => {
  const num = Number(value);

  if (isNaN(num)) return '0.00';

  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const paddingTop = Platform.OS === 'ios' ? 20 * 4 : 12 * 4;

export const getSize = (amount: string) => {
  const size =
    amount.length >= 6
      ? 'long'
      : amount.length > 3 && amount.length <= 5
        ? 'medium'
        : 'short';
  return size;
};
