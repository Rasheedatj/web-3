import Info from '@/assets/icons/info';
import Input from '@/components/discount/input';
import SuccessModal from '@/components/discount/sucess-modal';
import Summary from '@/components/discount/summary';
import Button from '@/components/ui/button';
import PageTitle from '@/components/ui/page-title';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const DiscountBuyScreen = () => {
  const [checked, setChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <View className='flex-1 pb-10 '>
        <PageTitle title='Discount Buy' rightSection={<Info />} />
        {/* MAIN */}
        <View className='flex-1'>
          <Input />
          <Summary />
        </View>
        {/* FOOTER  */}
        <View>
          <Pressable
            className='flex-row items-center gap-3 mb-2'
            onPress={() => setChecked((s) => !s)}
          >
            {checked ? (
              <Ionicons name='checkmark-circle' color='white' size={16} />
            ) : (
              <View className='w-4 h-4 border-[0.5px] border-white rounded-lg'></View>
            )}
            <Text className='text-gray500 text-xs leading-none font-medium'>
              I have read and agreed to the Verte Discount Buy Agreement
            </Text>
          </Pressable>
          <Button onPress={() => setIsModalOpen(true)}> Invest Now</Button>
        </View>
      </View>
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default DiscountBuyScreen;
