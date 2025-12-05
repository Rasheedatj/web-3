import ThemeProvider from '@/utils/ThemeContext';
import { usePushNotification } from '@/utils/useNotification';
import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  usePushNotification();

  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='(crypto)' />
        <Stack.Screen name='(tabs)' />
        <Stack.Screen
          name='receive-crypto'
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen name='crypto-send' />
        <Stack.Screen name='crypto-swap' />
        <Stack.Screen name='keyboard' />
        <Stack.Screen name='discount-buy' />
      </Stack>
    </ThemeProvider>
  );
}
