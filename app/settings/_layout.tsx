import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '@/components/Task/styles';
import radius from '@/styles/borderRadius';
import { useTheme } from '@/context/ThemeProvider';
import { View } from 'react-native';
import shadows from '@/styles/shadow';

export default function Layout() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const colors = theme.colors;
  const shade = shadows(theme);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.surface,
        tabBarStyle: {
          ...shade.cardShadow,
          paddingTop: 5,
          backgroundColor: colors.background,
          borderTopWidth: 0,
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
          sceneStyle: { backgroundColor: '#000' },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
