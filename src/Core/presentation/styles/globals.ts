import { StyleSheet } from 'react-native';
import { Theme } from '@Core/presentation/context/ThemeProvider';

const stylesGlobal = (theme: Theme) => {
  const colors = theme.colors;
  return {
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    bottomSheet: {
      flex: 1,
      shadowColor: colors.text,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      elevation: 5,
    },
  };
};

export default stylesGlobal;
