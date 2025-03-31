// import { Colors } from "@/constants/Colors";
import {
  ThemeProvider,
  useTheme,
} from '@/context/ThemeProvider';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <MainStack />
    </ThemeProvider>
  );
}

function MainStack() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const colors = theme.colors;

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
      <Stack.Screen name="index" />
    </Stack>
  );
}
