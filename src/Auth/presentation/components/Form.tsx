import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Keyboard,
} from 'react-native';
import { useTheme } from '@/presentation/context/ThemeProvider';
import styles from '@/presentation/styles/globals';
import radius from '@/presentation/styles/borderRadius';
import InputText from '@/presentation/components/shared/InputText/InputText';
import Button from '@/presentation/components/shared/Button/Button';
import { Link } from 'expo-router';
import { useRef } from 'react';
import { useAvoidEffect } from '../hooks/useAvoid';

export default function AuthForm() {
  const { theme } = useTheme();
  const style = styles(theme);
  const colors = theme.colors;

  // Avoid KeyBoard
  const flexAnim = useRef(new Animated.Value(0.6)).current;
  useAvoidEffect(flexAnim);

  return (
    <>
      <Animated.View
        style={{
          flex: flexAnim,
          flexDirection: 'column',
          backgroundColor: colors.primary,
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: colors.background,
            textAlign: 'center',
            fontSize: 72,
          }}
        >
          ToDo
        </Text>
      </Animated.View>
      <View
        style={[
          style.bottomSheet,
          radius.bottomSheet,
          {
            padding: 30,
            backgroundColor: colors.background,
          },
        ]}
      >
        <InputText
          icon="account"
          placeholder="User"
        ></InputText>
        useEffect,
        <InputText
          icon="key"
          placeholder="Password"
          type="password"
        ></InputText>
        <Button
          onPress={() => {
            alert('asdasd');
          }}
        >
          Login
        </Button>
        <Text
          style={{
            color: colors.primary,
            textAlign: 'center',
            marginTop: 25,
          }}
        >
          Forgot password? click{' '}
          <Link
            href={'/+not-found'}
            style={{
              color: colors.error,
              fontWeight: 'bold',
            }}
          >
            Here
          </Link>
        </Text>
      </View>
    </>
  );
}
