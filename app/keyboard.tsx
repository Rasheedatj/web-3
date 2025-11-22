import Currency from '@/assets/icons/currency';
import Drawer from '@/assets/icons/Drawer';
import USDT from '@/assets/icons/USDT';
import Keytab from '@/components/keytab';
import Button from '@/components/ui/button';
import PageTitle from '@/components/ui/page-title';
import { formatCurrency } from '@/utils/helpers';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Keyboard = () => {
  const [amount, setAmount] = useState('');
  return (
    <View className='flex-1 px-5 pb-16 pt-20'>
      <LinearGradient
        colors={['#372204', '#151515']}
        style={styles.background}
      />
      <PageTitle title='Deposit' rightSection={<Drawer />} />

      <View className='items-center justify-center my-12'>
        <View className='flex-row items-center bg-[#302618] border-[#3D2401] border-[1px] p-2 rounded-[21px]'>
          <Currency />
          <Text className='px-2 text-gray500 font-medium text-base'>
            Balance: <Text className='text-white'>$150.00</Text>
          </Text>
        </View>
        <Text className='font-bold text-6xl my-6 text-white'>
          ${amount.length > 0 ? formatCurrency(amount) : formatCurrency('0')}
        </Text>
        <View className='flex-row items-center  bg-[#302618] border-[#3D2401] border-[1px] p-2 rounded-[21px]'>
          <USDT />
          <Text className='px-2 text-gray500 font-medium text-base'>USDT</Text>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={'#fff'}
          />
        </View>
      </View>

      <Keytab amount={amount} setAmount={setAmount} />

      <View>
        <Button mode='flat'>Deposit</Button>
      </View>
    </View>
  );
};

export default Keyboard;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    inset: 0,
  },
});
