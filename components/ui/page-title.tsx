import Back from '@/assets/icons/back';
import { useRouter } from 'expo-router';
import React, { ReactNode } from 'react';
import { Pressable, Text } from 'react-native';

interface PageTitleI {
  title: string;
  rightSection: ReactNode;
}

const PageTitle = ({ title, rightSection }: PageTitleI) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.back()}
      className='flex-row items-center justify-between'
    >
      <Back />
      <Text className='font-bold text-white text-xl'>{title}</Text>
      {rightSection}
    </Pressable>
  );
};

export default PageTitle;
