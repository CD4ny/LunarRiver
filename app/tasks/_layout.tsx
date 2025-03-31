import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '@/components/Task/styles';
import radius from '@/styles/borderRadius';
import { useTheme } from '@/context/ThemeProvider';
import { View } from 'react-native';
import shadows from '@/styles/shadow';
import Button from '@/styled-components/Button';

export default function Layout() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const colors = theme.colors;
  const shade = shadows(theme);
  return (
    <Tabs
      screenOptions={{
        headerTitle: 'ToDo',
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.surface,
        tabBarStyle: {
          ...shade.cardShadow,
          paddingTop: 5,
          backgroundColor: colors.background,
          borderTopWidth: 0,
        },
        headerRight: () => (
          <View style={[{ marginHorizontal: 10 }]}>
            <MaterialIcons
              name={isDarkMode ? 'light-mode' : 'dark-mode'}
              color={colors.text}
              size={24}
              style={[
                { backgroundColor: colors.surface },
                radius.topbarButton,
              ]}
              onPress={() => toggleTheme()}
            />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'List',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="check-box"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="add"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
