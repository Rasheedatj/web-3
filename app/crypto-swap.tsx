import Binance from '@/assets/icons/Binance';
import SwapAction from '@/assets/icons/SwapAction';
import Tether from '@/assets/icons/Tether';
import BackHeader from '@/components/crypto/back-header';
import Button from '@/components/ui/button';
import { useTheme } from '@/utils/ThemeContext';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const SwapScreen = () => {
  const { colorScheme } = useTheme();
  return (
    <View className='flex-1 pt-20 pb-8 px-6 bg-cryptoPrimary dark:bg-black'>
      <View className='flex-1'>
        <BackHeader>
          <View className='flex-row items-center gap-6 flex-1 justify-center'>
            <View className='bg-black dark:bg-white w-auto px-[10px] py-[6px] rounded-3xl'>
              <Text className='text-xl font-bold text-white dark:text-black'>
                Swap
              </Text>
            </View>
            <View className=''>
              <Text className='text-xl font-bold text-black dark:text-white'>
                Buy
              </Text>
            </View>
          </View>
        </BackHeader>

        <Text className='text-center text-black text-base my-8 dark:text-white'>
          Convert one asset to another easily
        </Text>

        {/* Conversion box */}
        <View className='gap-2'>
          <View className='flex-row  justify-between bg-white dark:bg-cardBg p-[14px] rounded-2xl'>
            <View className='justify-between'>
              <Text className='text-black dark:text-white font-medium text-base'>
                From
              </Text>
              <View className='flex-row items-center gap-[5px] p-[6px] bg-[#F1F3F6] dark:bg-[#282A2E] rounded-3xl'>
                <Binance size={18} />
                <Text className='text-black dark:text-white text-sm'>BTC</Text>
                <MaterialCommunityIcons
                  name='chevron-down'
                  color={colorScheme === 'dark' ? 'white' : '#0D0D0D'}
                  size={18}
                />
              </View>
            </View>

            <View className='gap-3'>
              <Text className='text-right text-grayInactive text-sm'>
                Balance: 0.019 BTC
              </Text>
              <Text className='font-bold text-xl text-black dark:text-white text-right'>
                1.0025
              </Text>
              <Text className='text-right text-grayInactive text-sm'>
                $397,861.40
              </Text>
            </View>
          </View>

          <View className='flex-row  justify-between bg-white dark:bg-cardBg p-[14px] rounded-2xl'>
            <View className='justify-between'>
              <Text className='text-black dark:text-white font-medium text-base'>
                To
              </Text>
              <View className='flex-row items-center gap-[5px] p-[6px] bg-[#F1F3F6] dark:bg-[#282A2E]  rounded-3xl'>
                <Tether size={18} />
                <Text className='text-black dark:text-white text-sm'>USDT</Text>
                <MaterialCommunityIcons
                  name='chevron-down'
                  color={colorScheme === 'dark' ? 'white' : '#0D0D0D'}
                  size={18}
                />
              </View>
            </View>

            <View className='gap-3'>
              <Text className='text-right text-grayInactive text-sm'>
                Balance: 0.019 USDT
              </Text>
              <Text className='font-bold text-xl text-black dark:text-white text-right'>
                180.0000
              </Text>
              <Text className='text-right text-grayInactive text-sm'>
                $20,98016
              </Text>
            </View>
          </View>

          <View className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
            <SwapAction theme={colorScheme} />
          </View>
        </View>

        {/* Details */}
        <View className='bg-white dark:bg-cardBg  p-[14px] rounded-2xl mt-5'>
          <View className='flex-row items-center justify-between pb-5'>
            <Text className='text-black dark:text-white font-medium text-base'>
              Provider
            </Text>
            <Text className='text-grayInactive font-medium text-base'>
              via Ethereum Mainnet
            </Text>
          </View>
          <View className='flex-row items-center justify-between pb-5'>
            <Text className='text-black dark:text-white font-medium text-base'>
              Exchange Rate:
            </Text>
            <Text className='text-grayInactive font-medium text-base'>
              1 BTC ≈ 34,172.60 USDT
            </Text>
          </View>
          <View className='flex-row items-center justify-between pb-5'>
            <Text className='text-black dark:text-white font-medium text-base'>
              Network Fee:
            </Text>
            <Text className='text-grayInactive font-medium text-base'>
              ₦245.00
            </Text>
          </View>
          <View className='flex-row items-center justify-between pb-5'>
            <Text className='text-black dark:text-white font-medium text-base'>
              Slippage Tolerance:
            </Text>
            <Text className='text-grayInactive font-medium text-base'>
              0.5%
            </Text>
          </View>
          <View className='flex-row items-center justify-between pb-5'>
            <Text className='text-black dark:text-white font-medium text-base'>
              Minimum Received:
            </Text>
            <Text className='text-grayInactive font-medium text-base'>
              84.90 USDT
            </Text>
          </View>
        </View>

        {/* Info text */}
        <View className='flex-row items-center justify-center gap-2 mt-5'>
          <AntDesign name='info-circle' size={14} color='#FF6A71' />
          <Text className='text-black dark:text-white'>
            Double-check token and network before swapping.
          </Text>
        </View>
      </View>

      <Button
        style={{ backgroundColor: colorScheme === 'dark' ? '#fff' : '#0D0D0D' }}
        textColor={colorScheme === 'dark' ? '#0D0D0D' : '#ffffff'}
      >
        Swap Now
      </Button>
    </View>
  );
};

export default SwapScreen;
