import { useTheme } from '@/context/ThemeProvider';
import stylesGlobal from '@/styles/globals';
import tasksJson from '@/assets/fixtures.json';
import { View, Text, FlatList } from 'react-native';
import { ITask } from '@/interfaces/Task';
import Task from '@/components/Task/Task';
import { Link } from 'expo-router';
import useSafeArea from '@/hooks/useSaveArea';

export default function Index() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const colors = theme.colors;
  const styles = stylesGlobal(theme);
  const saveArea = useSafeArea();
  const tasks: ITask[] = tasksJson;

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
          justifyContent: 'flex-start',
        },
        saveArea,
      ]}
    >
      <Link href={'/settings'}>
        <Text>asdasd</Text>
      </Link>
      {/* <FlatList
        data={tasks}
        renderItem={({ item }) => <Task {...item} />}
        keyExtractor={(item) => item.id}
      />
        */}
    </View>
  );
}
