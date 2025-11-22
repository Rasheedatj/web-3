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
        name='suceess'
        options={{
          contentStyle: {
            // backgroundColor: '#151515',
            flex: 1,
            // paddingHorizontal: 20,
            // paddingBottom: 40,
          },
        }}
      />
    </Stack>
  );
}
