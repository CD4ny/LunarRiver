import { View } from 'react-native';
import AuthForm from '../components/Form';
import { useTheme } from '@/presentation/context/ThemeProvider';
import styles from '@/presentation/styles/globals';

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
