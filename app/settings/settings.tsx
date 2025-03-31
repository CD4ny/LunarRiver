import { useTheme } from '@/context/ThemeProvider';
import stylesGlobal from '@/styles/globals';
import tasksJson from '@/assets/fixtures.json';
import { View, Text, FlatList } from 'react-native';
import { ITask } from '@/interfaces/Task';
import Task from '@/components/Task/Task';

export default function Index() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const colors = theme.colors;
  const styles = stylesGlobal(theme);

  const tasks: ITask[] = tasksJson;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'flex-start',
      }}
    >

    </View>
  );
}
