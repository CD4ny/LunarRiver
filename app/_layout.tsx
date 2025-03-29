// import { Colors } from "@/constants/Colors";
import { ThemeProvider, useTheme } from '@/context/ThemeProvider';
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
  useEffect(() => {
    if (isDarkMode) {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor(colors.primary); // Ensure this matches your theme
    } else {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(colors.primary);
    }
  }, [isDarkMode, colors.primary]);
  return (
    <Stack
      screenOptions={{
        //   headerBackVisible: true,
        navigationBarColor: colors.background,
        statusBarBackgroundColor: colors.primary,
        headerShown: false,
        headerTintColor: colors.text,
        //   // headerLeft: () => <></>,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
