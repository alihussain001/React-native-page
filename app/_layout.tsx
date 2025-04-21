import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'light',
        statusBarBackgroundColor: '#16a085'
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
