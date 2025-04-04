import { ReactNode } from 'react';
import { Text, Pressable } from 'react-native';
import styles from './styles';
import { useTheme } from '@Core/presentation/context/ThemeProvider';
import radius from '@Core/presentation/styles/borderRadius';
interface Props {
  children?: ReactNode;
  variant?: 'filled' | 'outlined';
  color?:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'success'
    | 'error';
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function Button({
  children,
  color = 'primary',
  onPress,
  onLongPress,
}: Props) {
  const { theme } = useTheme();
  const style = styles(theme, color);
  return (
    <Pressable
      accessibilityRole="button"
      style={[style.button, style.fill, radius.button]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={[style.text]}>{children}</Text>
    </Pressable>
  );
}
