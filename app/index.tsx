import { useTheme } from '@/context/ThemeProvider';
import stylesGlobal from '@/styles/globals';
import tasksJson from '@/assets/fixtures.json';
import { View, Text, FlatList } from 'react-native';
import { ITask } from '@/interfaces/Task';
import Task from '@/components/Task/Task';
import { Link, useRouter } from 'expo-router';
import useSafeArea from '@/hooks/useSaveArea';
import Button from '@/styled-components/Button';

export default function Index() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const colors = theme.colors;
  const styles = stylesGlobal(theme);
  const saveArea = useSafeArea();
  const tasks: ITask[] = tasksJson;
  const router = useRouter();
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
          justifyContent: 'center',
          alignItems: 'center',
        },
        saveArea,
      ]}
    >
      <View style={{ margin: 70 }}>
        <Button
          onPress={() => {
            router.navigate('/tasks');
            // toggleTheme()
          }}
        >
          Get Started!
        </Button>
      </View>

    </View>
  );
}
