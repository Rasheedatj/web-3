import Cancel from '@/assets/icons/cancel';
import React, { Dispatch, SetStateAction } from 'react';
import { Pressable, Text, View } from 'react-native';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface Tabs {
  amount: string;
  setAmount: Dispatch<SetStateAction<string>>;
}

const Keytab = ({ amount, setAmount }: Tabs) => {
  const handleKeyPress = (key: string) => {
    if (amount === '0') return setAmount(key);

    setAmount((s) => s + key);
  };

  const handleCancel = () => setAmount((prevAmount) => prevAmount.slice(0, -1));
  return (
    <View className='flex-1 justify-center items-center flex-row flex-wrap'>
      {numbers.map((num) => (
        <Pressable
          key={num}
          className='w-1/3'
          onPress={() => handleKeyPress(num.toString())}
        >
          <Text className=' text-center mb-16 text-[32px] text-gray500 font-semibold'>
            {num}
          </Text>
        </Pressable>
      ))}
      <Text className=' w-1/3 text-center mb-16 text-3xl text-gray500 font-semibold'></Text>
      <Pressable className='w-1/3' onPress={() => handleKeyPress('0')}>
        <Text className='text-center text-[32px] text-gray500 font-semibold'>
          0
        </Text>
      </Pressable>
      <Pressable
        onPress={handleCancel}
        className='w-1/3 items-center justify-center'
      >
        <Cancel />
      </Pressable>
    </View>
  );
};

export default Keytab;
