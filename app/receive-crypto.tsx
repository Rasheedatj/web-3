import Ethereum from '@/assets/icons/Ethereum';
import Tether from '@/assets/icons/Tether';
import BackHeader from '@/components/crypto/back-header';
import Button from '@/components/ui/button';
import { useTheme } from '@/utils/ThemeContext';
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

const ReceiveCrypto = () => {
  const { colorScheme } = useTheme();
  return (
    <View className='flex-1 pt-10 pb-8 px-6 bg-cryptoPrimary dark:bg-[#14161A]'>
      <BackHeader>
        <View className='items-center flex-1'>
          <Text className='text-xl font-bold text-black dark:text-white'>
            Receive Crypto
          </Text>
        </View>
      </BackHeader>

      <View className='flex-1 mt-8'>
        <View className='dark:bg-cardBg bg-white py-[14px] px-[10px] rounded-3xl my-10 w-[85%] mx-auto'>
          <View className='justify-center items-center mb-4'>
            <Image source={require('../assets/images/QR.png')} />
            {/* <QR /> */}
          </View>
          <View className='flex items-center justify-center gap-1'>
            <View className='flex-row items-center justify-center gap-2'>
              <Text className='dark:text-white text-black font-medium text-sm'>
                Only send USDT
              </Text>
              <Tether size={16} />
            </View>
            <View className='flex-row items-center justify-center gap-2'>
              <Text className='dark:text-white text-black  font-medium text-sm'>
                Via the open Network (ETH)
              </Text>
              <Ethereum size={16} />
            </View>

            <Text className='dark:text-white text-black  font-medium text-sm text-center w-[80%]'>
              Sending any other token or via another network may result in
              permanent loss.
            </Text>
          </View>
        </View>

        <View className='bg-[#00C2FF0D] p-[10px] w-4/5 mx-auto  rounded-3xl flex-row items-center justify-between'>
          <Text className='text-grayInactive font-medium text-base'>
            USDT (ETH)
          </Text>
          <Text className='text-[#00C2FF] font-medium text-base'>
            Deposit Address 1
          </Text>
          <MaterialCommunityIcons
            name='chevron-right'
            color='#00C2FF'
            size={30}
          />
        </View>

        <Text className='text-black text-base font-medium dark:text-white text-center my-8'>
          UQB2hZQR5VDnrCDajgGEL...MGKEqWaZOz
        </Text>
      </View>

      <View className='flex-row gap-4 justify-center mb-4'>
        <Button
          style={{
            backgroundColor: colorScheme === 'dark' ? '#fff' : '#0D0D0D',
            borderRadius: 12,
          }}
          textColor={colorScheme !== 'dark' ? '#fff' : '#0D0D0D'}
          fullFlex={true}
          icon={
            <FontAwesome6
              name='share'
              size={24}
              color={colorScheme !== 'dark' ? '#fff' : '#0D0D0D'}
            />
          }
        >
          Share Address
        </Button>
        <Button
          style={{
            backgroundColor: colorScheme === 'dark' ? '#fff' : '#0D0D0D',
            borderRadius: 12,
          }}
          textColor={colorScheme !== 'dark' ? '#fff' : '#0D0D0D'}
          fullFlex={true}
          icon={
            <Ionicons
              name='copy'
              size={24}
              color={colorScheme !== 'dark' ? '#fff' : '#0D0D0D'}
            />
          }
        >
          Copy Address
        </Button>
      </View>
    </View>
  );
};

export default ReceiveCrypto;
