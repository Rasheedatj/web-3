import Buy from '@/assets/icons/Buy';
import Received from '@/assets/icons/Received';
import SendCrypto from '@/assets/icons/SendCrypto';
import SwapCrypto from '@/assets/icons/SwapCrypto';
import { useTheme } from '@/utils/ThemeContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

const Actions = () => {
  const { colorScheme } = useTheme();
  const actionsData = [
    {
      id: 'AD1',
      icon: <SendCrypto theme={colorScheme} />,
      title: 'Send',
      link: '/crypto-send',
    },
    {
      id: 'AD2',
      icon: <Received theme={colorScheme} />,
      title: 'Receive',
      link: '/receive-crypto',
    },
    {
      id: 'AD3',
      icon: <Buy theme={colorScheme} />,
      title: 'Buy',
      link: '/',
    },
    {
      id: 'AD4',
      icon: <SwapCrypto theme={colorScheme} />,
      title: 'Swap',
      link: '/crypto-swap',
    },
  ];

  const router = useRouter();
  return (
    <View className='flex-row items-cente justify-between'>
      {actionsData.map((item) => (
        <TouchableWithoutFeedback
          key={item.id}
          onPress={() => router.push(item.link as any)}
        >
          <View className='dark:bg-cardBg bg-white w-[22%]  py-[10px] justify-center items-center gap-3 rounded-xl'>
            {item.icon}
            <Text className='font-medium dark:text-white text-black text-sm'>
              {item.title}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default Actions;
