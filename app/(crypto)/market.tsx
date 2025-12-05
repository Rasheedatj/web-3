import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const MarketScreen = () => {
  return (
    <View className='p-32'>
      <Link href='/(tabs)' className='text-white'>
        Home
      </Link>
    </View>
  );
};

export default MarketScreen;
