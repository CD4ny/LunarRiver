import { View } from 'react-native';
import AuthForm from '../components/Form';
import styles from '@Core/presentation/styles/globals';
import { useTheme } from '@Core/presentation/context/ThemeProvider';

export default function Login() {
  const { theme } = useTheme();
  const style = styles(theme);
  return (
    <View
      style={[
        style.container,
        { backgroundColor: theme.colors.primary },
      ]}
    >
      <AuthForm />
    </View>
  );
}
