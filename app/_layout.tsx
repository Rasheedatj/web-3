import ThemeProvider from '@/utils/ThemeContext';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import '../global.css';

export default function RootLayout() {
  useEffect(() => {
    async function configurepushNotification() {
      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }

      if (Device.isDevice) {
        const { status } = await Notifications.getPermissionsAsync();
        let finalStatus = status;

        if (finalStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();

          finalStatus = status;
        }

        if (finalStatus !== 'granted') {
          Alert.alert(
            'Permission required',
            'Push notifications need certain permission'
          );
        }

        const projectId =
          Constants?.expoConfig?.extra?.eas?.projectId ??
          Constants?.easConfig?.projectId;

        console.log(projectId);

        if (!projectId) {
          Alert.alert(
            'Project ID not found',
            'Push notifications need project ID'
          );

          throw new Error('Project ID not found');
        }

        try {
          const pushTokenString = (
            await Notifications.getExpoPushTokenAsync({
              projectId,
            })
          ).data;
          console.log('PUSH TOKEN STRING', pushTokenString);
          return pushTokenString;
        } catch (e: unknown) {
          console.log(e);
        }
      } else {
        Alert.alert('Not allowed', 'Try this on a real device');
      }
    }

    configurepushNotification();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log('NOTIFICATION RECEIVED');
        console.log(notification.request.content.data);
      }
    );

    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log('NOTIFICATION RESPONSE RECEIVED');
        console.log(response);
      });

    return () => {
      subscription.remove();
      responseSubscription.remove();
    };
  }, []);
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
