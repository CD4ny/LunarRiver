import { Theme } from '@/context/ThemeProvider';
import { StyleSheet, ViewStyle } from 'react-native';

const styles = (
  theme: Theme,
  color:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'success'
    | 'error'
) => {
  const colors = theme.colors;

  return StyleSheet.create({
    button: {
      // width: '100%',
      paddingVertical: 14,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 10,
    },

    fill: {
      backgroundColor: colors[color],
      shadowColor: colors.text,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      elevation: 3,
    },

    outlined: {
      backgroundColor: 'transparent',
      borderWidth: 2,
    },

    ghost: {
      backgroundColor: 'transparent',
    },

    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.background,
      shadowColor: colors.background,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },

    textOutlined: {
      color: colors[color],
    },

    icon: {
      width: 20,
      height: 20,
    },
  });
};

export default styles;
