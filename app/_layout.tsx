import Card from '@/assets/icons/Card';
import Explore from '@/assets/icons/Explore';
import Home from '@/assets/icons/Home';
import FloatingTabBar from '@/components/ui/floating-bar';
import { Tabs } from 'expo-router';
import { StatusBar } from 'react-native';
import '../global.css';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Tabs
        tabBar={(props) => <FloatingTabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: '#F3BA29',
          tabBarInactiveTintColor: "#979797'",
          headerShown: false,
          sceneStyle: {
            backgroundColor: '#151515',
            paddingTop: 70,
            paddingHorizontal: 20,
            flex: 1,
          },
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name='explore'
          options={{
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
}
