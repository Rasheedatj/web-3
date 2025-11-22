import SuccessIcon from '@/assets/icons/success-icon';
import Button from '@/components/ui/button';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Suceess = () => {
  return (
    <View className='flex-1 px-5 pb-10 pt-20'>
      <LinearGradient
        colors={['#092C11', '#151515']}
        // className='absolute inset-0'
        style={styles.background}
      />
      <View className='flex-1 justify-center items-center'>
        <SuccessIcon />
        <Text className='font-bold text-xl text-white text-center py-3'>
          Discount buy successful!
        </Text>
        <Text className='text-center font-medium text-[#87938A] w-3/4 text-base'>
          Your order for 2 BTC has been confirmed and credited.
        </Text>
      </View>
      <View>
        <Button mode='flat'>Transaction Details</Button>
        <Button>Close</Button>
      </View>
    </View>
  );
};

export default Suceess;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    inset: 0,
  },
});
