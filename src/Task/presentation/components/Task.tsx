import { View, Text } from 'react-native';
import { ITask } from '@/Task/domain/entities/Task';
import stylesGlobal from '@/presentation/styles/globals';
import { useTheme } from '@/presentation/context/ThemeProvider';
import styles from '@/Task/presentation/styles/styles';
import radius from '@/presentation/styles/borderRadius';
export default function Task(props: ITask) {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const colors = theme.colors;
  const style = styles(
    theme,
    props.completed,
    props.dueDate ? props.dueDate : '',
  );

  return (
    <View style={[style.card, radius.card]}>
      <Text style={style.title}>{props.title}</Text>
      <Text style={style.description}>
        {props.description}
      </Text>
      <View style={style.footer}>
        <Text>
          {props.completed ? 'Completada' : 'Pendiente'}
        </Text>
        <Text>{props.dueDate}</Text>
      </View>
    </View>
  );
}
