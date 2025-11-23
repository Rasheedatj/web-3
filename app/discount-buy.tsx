import Info from '@/assets/icons/info';
import FinalStep from '@/components/discount/final-step';
import SecondStep from '@/components/discount/second-step';
import PageTitle from '@/components/ui/page-title';
import React, { useState } from 'react';
import { View } from 'react-native';

const DiscountBuyScreen = () => {
  const [step, setStep] = useState(1);
  return (
    <View className='flex-1  pt-20 bg-primary '>
      <View className='px-4'>
        <PageTitle title='Discount Buy' rightSection={<Info />} />
      </View>

      {step === 1 && <SecondStep onNext={() => setStep(2)} />}
      {step === 2 && <FinalStep />}
    </View>
  );
};

export default DiscountBuyScreen;
