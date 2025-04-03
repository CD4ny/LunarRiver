import { useTheme } from '@Core/presentation/context/ThemeProvider';
import { View, Text, Image } from 'react-native';
import stylesInputText from './styles';
import { Link } from 'expo-router';

const NotFound = () => {
  const { theme, isDarkMode } = useTheme();
  const styles = stylesInputText(theme);
  const logo = isDarkMode
    ? require('@/assets/images/Dark.png')
    : require('@/assets/images/Light.png');

  return (
    <View style={[styles.container]}>
      <Image source={logo} />
      <Text style={[styles.text]}>
        This is{' '}
        <Link href={'/'} style={[styles.emphasis]}>
          NOT
        </Link>{' '}
        the way
      </Text>
    </View>
  );
};
export default NotFound;
