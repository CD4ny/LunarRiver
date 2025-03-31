import { View, Text } from 'react-native';
import { ITask } from '@/interfaces/Task';
import stylesGlobal from '@/styles/globals';
import { useTheme } from '@/context/ThemeProvider';
import styles from './styles';
import radius from '@/styles/borderRadius';
export default function Task(props: ITask) {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const colors = theme.colors;
  const style = styles(
    theme,
    props.completed,
    props.dueDate ? props.dueDate : ''
  );

  return (
    <View style={[style.card, radius.card]}>
      <Text style={style.title}>{props.title}</Text>
      <Text style={style.description}>{props.description}</Text>
      <View style={style.footer}>
        <Text>{props.completed ? 'Completada' : 'Pendiente'}</Text>
        <Text>{props.dueDate}</Text>
      </View>
    </View>
  );
}
