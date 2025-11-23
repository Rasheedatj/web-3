import Card from '@/assets/icons/Card';
import Drawer from '@/assets/icons/Drawer';
import Explore from '@/assets/icons/Explore';
import Home from '@/assets/icons/Home';
import FloatingTabBar from '@/components/ui/floating-bar';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StatusBar } from 'react-native';

const TabsLayout = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Tabs
        tabBar={(props) => <FloatingTabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: '#F3BA29',
          tabBarInactiveTintColor: "#979797'",
          headerStyle: {
            backgroundColor: '#151515',
          },
          headerTintColor: '#fff',
          sceneStyle: {
            backgroundColor: '#151515',
            paddingHorizontal: 20,
            flex: 1,
          },
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            headerShown: false,
            sceneStyle: {
              paddingTop: Platform.OS === 'android' ? 50 : 70,
              backgroundColor: '#151515',
              paddingHorizontal: 20,
              flex: 1,
            },
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name='explore'
          options={{
            title: 'Explore',
            headerRight: () => <Drawer />,
            tabBarIcon: ({ color, size }) => (
              <Explore color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name='cards'
          options={{
            tabBarIcon: ({ color, size }) => <Card color={color} size={size} />,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
