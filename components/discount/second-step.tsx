import BTC from '@/assets/icons/btc';
import Coin from '@/assets/icons/coin';
import ETH from '@/assets/icons/eth';
import Shield from '@/assets/icons/shield';
import SOL from '@/assets/icons/sol';
import Step from '@/assets/icons/step';
import USDT from '@/assets/icons/USDT';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import Button from '../ui/button';

const SecondStep = ({ onNext }: { onNext: () => void }) => {
  const [active, setActive] = useState('m1');

  const menu = [
    {
      id: 'm1',
      title: 'BTC',
      icon: <BTC color={active === 'm1' ? '#fff' : '#929292'} />,
    },
    {
      id: 'm2',
      title: 'ETH',
      icon: <ETH color={active === 'm2' ? '#fff' : '#929292'} />,
    },
    {
      id: 'm3',
      title: 'SOL',
      icon: <SOL color={active === 'm3' ? '#fff' : '#929292'} />,
    },
  ];
  return (
    <>
      <View className='px-5 mb-8'>
        <View className='bg-gray200 py-3 px-5 rounded-3xl mt-8 flex-row items-center gap-6 justify-between'>
          <Step />
          <View className='flex-1'>
            <Text className='text-base font-medium text-[#DDDDDD]'>
              ChainPulse Index
            </Text>

            <View className='flex-row items-center gap-10 pt-2'>
              <View className='flex-row items-center gap-3'>
                <Text className='font-bold text-gray500 text-sm'>ETH</Text>
                <Text className='font-bold text-green500 text-sm'>+12%</Text>
              </View>
              <View className='flex-row items-center gap-3'>
                <Text className='font-bold text-gray500 text-sm'>
                  {' '}
                  DeFi TVL
                </Text>
                <Text className='font-bold text-green500 text-sm'>+8%</Text>
              </View>
            </View>
          </View>
          <Ionicons
            name='close'
            size={20}
            color={'#606060'}
            className='self-start'
          />
        </View>

        <View>
          <View className='flex-row items-center gap-3 mb-5 mt-6'>
            <Text className='font-bold text-white'>
              Explore Potential Gains (Simulation)
            </Text>
            <Ionicons
              name='information-circle-outline'
              color='white'
              size={18}
            />
          </View>

          <View>
            <View className='flex-row items-center gap-3 pb-3'>
              <Coin />
              <Text className='font-medium text-gray500'>
                Grow your portfolio
              </Text>
            </View>
            <View className='flex-row items-center gap-3'>
              <Shield />
              <Text className='font-medium text-gray500'>
                Capital protected, enhanced APY.
              </Text>
            </View>
          </View>
        </View>

        <View className='px-4 flex-row items-center justify-between mt-10'>
          {menu.map((item) => (
            <Pressable
              onPress={() => setActive(item.id)}
              key={item.id}
              className={`flex-row items-center gap-4 ${active === item.id && 'border-2 border-[#094617] px-4 py-2 bg-gray200 rounded-3xl'}`}
            >
              {item.icon}
              <Text
                className={`${active === item.id ? 'text-white' : 'text-gray500'} font-bold`}
              >
                {item.title}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View className='bg-gray400 pb-4 flex-1 rounded-tl-[33px] rounded-tr-[33px] px-10 py-3'>
        <View className='flex-row items-center gap-3 mb-6 mt-6'>
          <Text className='font-bold text-white'>
            Explore Potential Gains (Simulation)
          </Text>
          <Ionicons name='information-circle-outline' color='white' size={18} />
        </View>

        <View>
          <Text className='text-gray500 font-medium pb-3 text-base'>
            I want to invest
          </Text>
          <View className='flex-row items-center gap-2'>
            <TextInput className='bg-gray200 flex-1 p-4 rounded-2xl font-medium text-white' />
            <View className='bg-gray400 px-4 py-3 rounded-2xl flex-row items-center gap-2'>
              <USDT />
              <Text className='text-white font-bold'>USDT</Text>
            </View>
          </View>
        </View>

        <View className='py-4 flex-1'>
          <Image source={require('../../assets/images/chart.png')} />
        </View>

        <Button onPress={onNext}>Invest</Button>
      </View>
    </>
  );
};
export default SecondStep;
