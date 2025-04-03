import { Theme } from '@Core/presentation/context/ThemeProvider';
import { StyleSheet } from 'react-native';

const stylesInputText = (theme: Theme) => {
  const colors = theme.colors;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.background,
      textAlign: 'center',
      fontSize: 52, // Medium font size for names
      margin: 10, // Spacing below the name
    },
    emphasis: {
      color: colors.text,
    },
  });
};

export default stylesInputText;
