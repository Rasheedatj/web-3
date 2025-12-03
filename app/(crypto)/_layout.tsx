import HomeCrypto from '@/assets/icons/HomeCrypto';
import Market from '@/assets/icons/Market';
import Portfolio from '@/assets/icons/Portfolio';
import SwapCrypto from '@/assets/icons/SwapCrypto';
import { useTheme } from '@/utils/ThemeContext';
import { Tabs } from 'expo-router';
import React from 'react';

const CryptoLayout = () => {
  const { themeColor } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeColor.primaryText,
        tabBarInactiveTintColor: themeColor.primaryText,
        sceneStyle: {
          backgroundColor: themeColor.primary,
        },
        tabBarStyle: {
          backgroundColor: themeColor.bg,
          height: 100,
          paddingTop: 15,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          paddingTop: 8,
          fontWeight: 600,
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: () => <HomeCrypto color={themeColor.primaryText} />,
        }}
      />
      <Tabs.Screen
        name='portfolio'
        options={{
          title: 'Portfolio',
          tabBarIcon: () => <Portfolio color={themeColor.primaryText} />,
        }}
      />
      <Tabs.Screen
        name='swap'
        options={{
          title: 'Swap',
          tabBarIcon: () => <SwapCrypto color={themeColor.primaryText} />,
        }}
      />
      <Tabs.Screen
        name='market'
        options={{
          title: 'Market',
          tabBarIcon: () => <Market color={themeColor.primaryText} />,
        }}
      />
    </Tabs>
  );
};

export default CryptoLayout;
