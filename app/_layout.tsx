import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='discount-buy'
        options={{
          contentStyle: {
            paddingTop: 70,
            backgroundColor: '#151515',
            paddingHorizontal: 20,
            flex: 1,
          },
        }}
      />
    </Stack>
  );
}
