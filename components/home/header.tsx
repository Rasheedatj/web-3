import Drawer from '@/assets/icons/Drawer';
import Search from '@/assets/icons/Search';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import IconButton from '../ui/icon-button';

const Header = () => {
  return (
    <View className='flex-row items-center justify-between'>
      <Search />
      <View className='flex-row items-center'>
        <Text className='font-bold text-xl text-white mr-2'>Ayo.eth</Text>
        <IconButton
          icon={
            <MaterialCommunityIcons
              name='chevron-down'
              size={16}
              color={'#929292'}
            />
          }
        />
      </View>
      <Drawer />
    </View>
  );
};

export default Header;
