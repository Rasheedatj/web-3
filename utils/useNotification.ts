import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';

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
