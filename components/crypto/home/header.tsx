import Binance from '@/assets/icons/Binance';
import Scanner from '@/assets/icons/Scanner';
import Settings from '@/assets/icons/Settings';
import { useTheme } from '@/utils/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { themeColor, colorScheme } = useTheme();
  return (
    <View className='flex items-center justify-between flex-row'>
      <Scanner color={themeColor.primaryText} />
      <View className='flex items-center flex-row gap-2 bg-white/15 px-3 py-2 rounded-3xl'>
        <Binance size={18} />
        <Text className='dark:text-white text-black'>0x78211...4057</Text>
        <MaterialCommunityIcons
          name='chevron-down'
          color={colorScheme === 'dark' ? '#FFFFFF' : '#0D0D0D'}
          size={24}
        />
      </View>
      <Settings color={themeColor.primaryText} />
    </View>
  );
};

export default Header;
