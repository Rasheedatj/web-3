import { useTheme } from '@/utils/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { ReactNode } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

const BackHeader = ({ children }: { children: ReactNode }) => {
  const { colorScheme } = useTheme();
  const router = useRouter();
  return (
    <View className='flex-row items-center justify-between'>
      <TouchableWithoutFeedback onPress={() => router.back()}>
        <MaterialCommunityIcons
          name='chevron-left'
          color={colorScheme === 'light' ? '' : 'white'}
          size={30}
        />
      </TouchableWithoutFeedback>
      {children}
    </View>
  );
};

export default BackHeader;
