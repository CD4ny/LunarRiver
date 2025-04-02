import { ThemeProvider } from '@Core/presentation/context/ThemeProvider';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <MainStack />
    </ThemeProvider>
  );
}

function MainStack() {
  return (
    <Stack
      screenOptions={{
        //   headerBackVisible: true,
        headerShown: false,
        statusBarTranslucent: true,
        statusBarStyle: 'auto',
        statusBarBackgroundColor: '#0000',
        navigationBarColor: '#0000',
        navigationBarTranslucent: true,

        // headerTintColor: colors.text,
      }}
    >
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
}
