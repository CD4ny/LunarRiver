import radius from '@/styles/borderRadius';
import { Children, ReactNode } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { useTheme } from '@/context/ThemeProvider';

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
  variant,
  color = 'primary',
  onPress,
  onLongPress,
}: Props) {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const colors = theme.colors;
  const style = styles(theme, color);
  return (
    <Pressable
      style={[style.button, style.fill, radius.button]}
      onPress={onPress}
    >
      <Text style={[style.text]}>{children}</Text>
    </Pressable>
  );
}
