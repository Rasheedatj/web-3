import Binance from '@/assets/icons/Binance';
import Ethereum from '@/assets/icons/Ethereum';
import Solana from '@/assets/icons/Solana';
import Tether from '@/assets/icons/Tether';
import Actions from '@/components/crypto/actions';
import Asset from '@/components/crypto/Asset';
import Balance from '@/components/crypto/home/balance';
import Header from '@/components/crypto/home/header';
import { useTheme } from '@/utils/ThemeContext';
import { AssetType } from '@/utils/types';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';

const data: AssetType[] = [
  {
    id: 'A1',
    image: <Binance size={46} />,
    title: 'Bitcoin',
    coin: 'BTC',
    valueInCoin: '12.000',
    valueInUsd: '126770.08',
    gain: '1.34',
  },
  {
    id: 'A2',
    image: <Tether />,
    title: 'Tether',
    coin: 'USDT',
    valueInCoin: '12.000',
    valueInUsd: '2075610.08',
    gain: '1.34',
  },
  {
    id: 'A3',
    image: <Ethereum />,
    title: 'Ethereum',
    coin: 'ETH',
    valueInCoin: '12.000',
    valueInUsd: '20.08',
    loss: '1.34',
  },
  {
    id: 'A4',
    image: <Solana />,
    title: 'Solana',
    coin: 'SOL',
    valueInCoin: '12.000',
    valueInUsd: '660.08',
    loss: '1.34',
  },
];

const Index = () => {
  const { colorScheme } = useTheme();
  return (
    <View className='flex-1 pt-20 px-8 '>
      {colorScheme === 'dark' && (
        <View className='absolute left-[5px] '>
          <Image
            source={require('../../assets/images/gradientBackground.png')}
            className='object-cover'
          />
        </View>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
      >
        <Header />
        <Balance />
        <Actions />
        {/* Refer */}
        <View className='dark:bg-cardBg bg-white rounded-3xl  my-10'>
          <ImageBackground
            source={require('../../assets/images/gift_box.png')}
            className='w-full py-6 px-4'
            imageStyle={{
              resizeMode: 'contain',
              position: 'absolute',
              top: 50,
              left: 250,
            }}
          >
            <Text className='dark:text-white text-black font-medium text-base'>
              Refer a friend, earn $5
            </Text>
            <Text className='pt-2 text-base text-grayInactive w-[80%]'>
              By inviting friends you will both take a special gift from us
            </Text>
          </ImageBackground>
        </View>
        {/*   Assets */}
        <View>
          <Text className='text-lg dark:text-white text-black font-medium mb-6'>
            Your Assets
          </Text>

          <FlatList
            data={data}
            renderItem={(itemData) => <Asset asset={itemData.item} />}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
