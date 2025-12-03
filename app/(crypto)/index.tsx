import Binance from '@/assets/icons/Binance';
import Buy from '@/assets/icons/Buy';
import Ethereum from '@/assets/icons/Ethereum';
import Received from '@/assets/icons/Received';
import Scanner from '@/assets/icons/Scanner';
import SendCrypto from '@/assets/icons/SendCrypto';
import Settings from '@/assets/icons/Settings';
import Solana from '@/assets/icons/Solana';
import SwapCrypto from '@/assets/icons/SwapCrypto';
import Tether from '@/assets/icons/Tether';
import Asset from '@/components/crypto/Asset';
import { formatCurrency } from '@/utils/helpers';
import { useTheme } from '@/utils/ThemeContext';
import { AssetType } from '@/utils/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
  const { themeColor, colorScheme } = useTheme();
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

        <View className='items-center my-10 gap-[6px]'>
          <Text className='font-medium text-sm  dark:text-white text-black'>
            Current Balance
          </Text>
          <Text className=' dark:text-white text-black font-medium text-4xl'>
            ${formatCurrency('170.32')}
          </Text>
          <Text className='bg-success/10 px-2 py-1 rounded-3xl font-medium text-sm text-success'>
            +$64.05
          </Text>
        </View>

        <View className='flex-row items-cente justify-between'>
          <View className='dark:bg-cardBg bg-white w-[22%]  py-[10px] justify-center items-center gap-3 rounded-xl'>
            <SendCrypto theme={colorScheme} />
            <Text className='font-medium dark:text-white text-black text-sm'>
              Send
            </Text>
          </View>
          <View className='dark:bg-cardBg bg-white w-[22%]  py-[10px] justify-center items-center gap-3 rounded-xl'>
            <Received theme={colorScheme} />
            <Text className='font-medium dark:text-white text-black text-sm'>
              Receive
            </Text>
          </View>
          <View className='dark:bg-cardBg bg-white w-[22%]  py-[10px] justify-center items-center gap-3 rounded-xl'>
            <Buy theme={colorScheme} />
            <Text className='font-medium dark:text-white text-black text-sm'>
              Buy
            </Text>
          </View>
          <View className='dark:bg-cardBg bg-white w-[22%]  py-[10px] justify-center items-center gap-3 rounded-xl'>
            <SwapCrypto theme={colorScheme} />
            <Text className='font-medium dark:text-white text-black text-sm'>
              Swap
            </Text>
          </View>
        </View>

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
