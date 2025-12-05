import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';

// 1. Ask users for notification permission
const handlePermission = async () => {
  const settings = await Notifications.getPermissionsAsync();
  const isGranted = settings.granted;

  if (!isGranted) {
    const request = await Notifications.requestPermissionsAsync();

    if (request.granted) {
      return true;
    } else {
      Alert.alert(
        'Insufficient permissions',
        'You do not have the permission to receive notifications'
      );
      return false;
    }
  }
  return true;
};

// 2. Settings
export const handleNotification = async (
  content: Notifications.NotificationContentInput
) => {
  const hasPermission = await handlePermission();

  if (hasPermission) {
    Notifications.scheduleNotificationAsync({
      content,
      trigger: {
        seconds: 1,
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      },
    });
  }
};

// 3. Send push notifications
export const usePushNotification = () => {
  const [expoPushToken, setExpoPushToken] = useState('');

  const sendPushNotification = async () => {
    const message = {
      to: expoPushToken,
      title: 'Test',
      body: 'This is a test notification',
      data: { someData: 'stays here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

  // Check if its on a real device and then fetch and stor expoPushToken
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
          setExpoPushToken(pushTokenString);
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

  // Listeners for received and response
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

  return { sendPushNotification, expoPushToken };
};
