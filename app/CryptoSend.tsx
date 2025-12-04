import Ethereum from '@/assets/icons/Ethereum';
import BackHeader from '@/components/crypto/back-header';
import Keytab from '@/components/keytab';
import Amount from '@/components/ui/amount';
import Button from '@/components/ui/button';
import { getSize } from '@/utils/helpers';
import { useTheme } from '@/utils/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const CryptoSend = () => {
  const { colorScheme } = useTheme();
  const [amount, setAmount] = useState('');
  const size = getSize(amount);

  return (
    <View className='flex-1 pt-20 pb-8 px-6 bg-cryptoPrimary dark:bg-black'>
      <BackHeader>
        <View className='items-center flex-1'>
          <Text className='text-xl font-bold text-black dark:text-white'>
            Send
          </Text>
        </View>
      </BackHeader>

      <View className='flex-1 mt-8'>
        {/* Receiver address */}
        <View className='px-[10px] py-4 bg-white dark:bg-cardBg rounded-2xl flex-row items-center gap-2'>
          <Text className='text-grayInactive font-medium text-base'>To </Text>
          <Text className='text-black dark:text-white font-medium text-base'>
            0x78211...4057{' '}
          </Text>
        </View>

        {/* Transaction amount */}
        <View className='gap-2 items-center mt-10  justify-center '>
          <View className='flex-row'>
            <Text
              className={`text-black dark:text-white ${size === 'short' && 'text-3xl leading-9'} ${size === 'medium' && 'text-2xl leading-7'} ${size === 'long' && 'text-xl'} pr-1 font-bold `}
              style={{ textAlignVertical: 'top' }}
            >
              $
            </Text>
            <Amount amount={amount} />
          </View>
          <Text className=' text-grayInactive'>1.988194 BTC</Text>
        </View>

        {/* Ethereum label */}
        <View className='px-[10px] my-10 py-4 bg-white dark:bg-cardBg rounded-2xl flex-row items-center gap-2'>
          <Ethereum />
          <View className='flex-1 px-3'>
            <Text className='font-medium text-black text-base dark:text-white pb-1'>
              Ethereum
            </Text>
            <Text className='text-grayInactive text-sm'>0.008745 ETH</Text>
          </View>

          <View className='p-[10px] rounded-3xl bg-[#F6F6F6] dark:bg-[#282A2E]'>
            <Text className='text-black dark:text-[#00C2FF] font-medium text-base'>
              Use Max
            </Text>
          </View>
        </View>

        <Keytab
          color={colorScheme === 'dark' ? 'text-white' : 'text-black'}
          amount={amount}
          setAmount={setAmount}
          cancel={
            <MaterialCommunityIcons
              name='chevron-left'
              color={colorScheme === 'dark' ? 'white' : 'black'}
              size={36}
            />
          }
        />
      </View>

      <Button
        style={{ backgroundColor: colorScheme === 'dark' ? '#fff' : '#0D0D0D' }}
        textColor={colorScheme === 'dark' ? '#0D0D0D' : '#ffffff'}
      >
        Continue
      </Button>
    </View>
  );
};

export default CryptoSend;
