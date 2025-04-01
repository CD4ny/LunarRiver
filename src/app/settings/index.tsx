import { useTheme } from '@/src/presentation/context/ThemeProvider';
import stylesGlobal from '@/src/presentation/styles/globals';
import tasksJson from '@/assets/fixtures.json';
import { View, Text, FlatList } from 'react-native';
import { ITask } from '@/src/Task/domain/entities/Task';
import Task from '@/src/Task/presentation/components/Task';

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
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Task {...item} />}
        keyExtractor={(item) => item.id}
      />
      {/* {tasksJson.map((i: ITask, key: number) => {
        return <Task {...i} key={key}></Task>;
      })} */}
    </View>
  );
}
