import { StyleSheet } from 'react-native';
import { Theme } from '@/context/ThemeProvider';

const stylesGlobal = (theme: Theme) => {
  const colors = theme.colors;
  return {
    container: {
      flex: 0.7,
      padding: 20,
      backgroundColor: colors.background,
    },
    input: {
      width: '100%',
      padding: 12,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      fontSize: 16,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3, // Sombra en Android
      marginBottom: 15,
    },
    bottomSheet: {
      shadowColor: colors.text,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      elevation: 5,
    },
  };
};

export default stylesGlobal;
