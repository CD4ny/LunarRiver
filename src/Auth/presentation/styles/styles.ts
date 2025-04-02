import { Theme } from '@/presentation/context/ThemeProvider';
import { StyleSheet } from 'react-native';

const styles = (
  theme: Theme,
  completed?: boolean,
  due?: string,
) => {
  const colors = theme.colors;
  let color:
    | 'surface'
    | 'secondary'
    | 'warning'
    | 'success'
    | 'error' = 'surface';
  const date = new Date(due ? due : '').getTime();

  if (completed) color = 'success';
  else if (due != null)
    if (date < Date.now()) {
      color = 'error';
    }

  return StyleSheet.create({
    card: {
      backgroundColor: colors[color],
      marginHorizontal: 15,
      marginVertical: 5,
      padding: 15,
    },
    title: {
      color: colors.text,
      padding: 5,
    },
    description: { padding: 5 },
    footer: {
      paddingTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
  });
};

export default styles;
