import Fire from '@/assets/icons/Fire';
import Gainer from '@/assets/icons/Gainer';
import X from '@/assets/icons/X';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Transaction from './transaction';

const Transactions = () => {
  const [active, setActive] = useState('m1');

  const menu = [
    { id: 'm1', icon: <Fire />, title: 'Trending' },
    {
      id: 'm2',
      icon: (
        <Ionicons
          name='gift-sharp'
          size={21}
          color={active !== 'm2' ? '#929292' : '#fff'}
        />
      ),
      title: 'New',
    },
    {
      id: 'm3',
      icon: <Gainer color={active !== 'm2' ? '#929292' : '#fff'} />,
      title: 'Gainers',
    },
    {
      id: 'm4',
      icon: <X color={active !== 'm2' ? '#929292' : '#fff'} />,
      title: 'Lovable',
    },
  ];
  return (
    <View className=''>
      <ScrollView
        horizontal={true}
        className='mt-10 mb-3'
        showsHorizontalScrollIndicator={false}
      >
        {menu.map((item) => (
          <Pressable
            onPress={() => setActive(item.id)}
            key={item.id}
            className={`mr-3 rounded-full px-3 py-2  flex-row items-center ${active === item.id && 'border-[1px] border-accent50 bg-gray200'}`}
          >
            {item.icon}
            <Text
              className={`${active === item.id ? 'text-white' : 'text-gray500'} pl-2 font-bold text-base `}
            >
              {item.title}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </View>
  );
};

export default Transactions;
