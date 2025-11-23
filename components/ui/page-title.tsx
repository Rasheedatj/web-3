import Back from '@/assets/icons/back';
import { useRouter } from 'expo-router';
import React, { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';

interface PageTitleI {
  title: string;
  rightSection: ReactNode;
}

const PageTitle = ({ title, rightSection }: PageTitleI) => {
  const router = useRouter();
  return (
    <View className='flex-row items-center justify-between'>
      <Pressable onPress={() => router.back()}>
        <Back />
      </Pressable>
      <Text className='font-bold text-white text-xl'>{title}</Text>
      {rightSection}
    </View>
  );
};

export default PageTitle;
