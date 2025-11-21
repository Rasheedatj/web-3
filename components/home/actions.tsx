import Send from '@/assets/icons/Send';
import Swap from '@/assets/icons/Swap';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import IconButton from '../ui/icon-button';

const actions = [
  {
    title: 'Deposit',
    icon: <MaterialCommunityIcons name='plus' color={'#929292'} size={30} />,
  },
  {
    title: 'Send',
    icon: <Send />,
  },
  {
    title: 'Swap',
    icon: <Swap />,
  },
  {
    title: 'More',
    icon: (
      <MaterialCommunityIcons
        name='dots-horizontal'
        color={'#929292'}
        size={30}
      />
    ),
  },
];

const Actions = () => {
  return (
    <View className='flex-row items-center justify-around'>
      {actions.map((item) => (
        <IconButton
          key={item.title}
          icon={item.icon}
          size='large'
          title={item.title}
        />
      ))}
    </View>
  );
};

export default Actions;
