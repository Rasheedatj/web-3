import Progress from '@/assets/icons/progress';
import React from 'react';
import { Text, View } from 'react-native';

const Summary = () => {
  return (
    <View className='border-[#202020] border-t-2 mt-12 pt-12'>
      <View className='bg-[#202020] rounded-3xl '>
        <Text className='px-6 py-4 text-white font-bold text-base border-b-2 border-primary'>
          Summary
        </Text>

        <View className='py-6 px-8 border-b-2 border-primary'>
          <Text className='font-medium text-gray500 text-base'>Est. APR</Text>

          <View className='mt-6'>
            <View className='flex-row items-center justify-between'>
              <View className='flex-row gap-3 items-center'>
                <View className='items-center'>
                  <Progress />
                  <View className='h-6 w-[1px] bg-green500'></View>
                </View>
                <Text className='text-[#F0F0F0] font-medium pb-5'>
                  &lt;= 0.003 BTC
                </Text>
              </View>
              <Text className='text-[#F0F0F0] font-medium pb-5'>2.30%</Text>
            </View>
            <View className='flex-row items-center justify-between'>
              <View className='flex-row gap-3 items-center'>
                <Progress />
                <Text className='text-[#F0F0F0] font-medium'>
                  &gt; 0.003 BTC
                </Text>
              </View>

              <Text className='text-[#F0F0F0] font-medium'>0.30%</Text>
            </View>
          </View>
        </View>

        <View className='p-8'>
          <View className='flex-row items-center justify-between mb-8'>
            <Text className='font-medium text-gray500 text-base'>
              Est. daily yield
            </Text>
            <Text className='font-medium text-gray500 text-base'>
              0.04109605 BTC
            </Text>
          </View>
          <View className='flex-row items-center justify-between '>
            <Text className='font-medium text-gray500 text-base'>
              Investment amount
            </Text>
            <Text className='font-medium text-gray500 text-base'>Savings</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Summary;
