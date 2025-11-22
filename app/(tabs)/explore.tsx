import Search from '@/assets/icons/Search';
import ExploreItem from '@/components/explore/explore-item';
import Transactions from '@/components/home/transactions';
import { colors } from '@/utils/globalstyles';
import { ExploreI } from '@/utils/types';
import React from 'react';
import { ScrollView, TextInput, View } from 'react-native';

const Explore = () => {
  const exploreData: ExploreI[] = [
    {
      title: 'SOMX',
      percentage: '-1.8%',
      avatars: [
        require('../../assets/images/user.png'),
        require('../../assets/images/user2.png'),
        require('../../assets/images/user3.png'),
      ],
    },
    {
      title: 'ROX2',
      percentage: '-10.48%',
      avatars: [
        require('../../assets/images/user.png'),
        require('../../assets/images/user2.png'),
        require('../../assets/images/user3.png'),
      ],
    },
    {
      title: 'DOCK',
      percentage: '-9.2%',
      avatars: [
        require('../../assets/images/user.png'),
        require('../../assets/images/user2.png'),
        require('../../assets/images/user3.png'),
      ],
    },
  ];
  return (
    <ScrollView className='pt-5'>
      <View className='flex-row items-center bg-gray400 p-4 rounded-3xl'>
        <Search />
        <TextInput
          className='ml-4 text-xl font-medium  flex-1 leading-none'
          placeholder='Search'
          placeholderTextColor={colors.gray500}
        />
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className='mt-6'
      >
        {exploreData.map((item) => (
          <ExploreItem
            key={item.title}
            title={item.title}
            percentage={item.percentage}
            avatars={item.avatars}
          />
        ))}
      </ScrollView>
      <Transactions />
    </ScrollView>
  );
};

export default Explore;
