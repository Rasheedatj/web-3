import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const PortfolioScreen = () => {
  return (
    <View className='p-20'>
      <Link href={'/(tabs)'}>Go to main</Link>
    </View>
  );
};

export default PortfolioScreen;
