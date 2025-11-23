import { Platform } from 'react-native';

export const formatCurrency = (value: string) => {
  const num = Number(value);

  if (isNaN(num)) return '0.00';

  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const paddingTop = Platform.OS === 'ios' ? 20 : 16;
