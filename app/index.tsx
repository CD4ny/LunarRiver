// import { Colors } from "@/constants/Colors";
import { useTheme } from '@/context/ThemeProvider';
import Button from '@/styled-components/Button';
import InputText from '@/styled-components/InputText';
import radius from '@/styles/borderRadius';
import stylesGlobal from '@/styles/globals';

import { View } from 'react-native';

export default function Index() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const colors = theme.colors;
  const styles = stylesGlobal(theme);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'flex-end',
      }}
    >
      <View style={[styles.container, styles.bottomSheet, radius.bottomSheet]}>
        <View>
          <InputText icon="account" placeholder="User" />
          <InputText type="password" icon="key" placeholder="Password" />
        </View>
        <Button onPress={toggleTheme} color="error">
          sads
        </Button>
      </View>
    </View>
  );
}
