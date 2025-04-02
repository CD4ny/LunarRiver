import { useEffect } from 'react';
import { Animated, Keyboard, Platform } from 'react-native';

export const useAvoidEffect = (
  flexAnim: Animated.Value,
) => {
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios'
        ? 'keyboardWillShow'
        : 'keyboardDidShow',
      () => {
        Animated.timing(flexAnim, {
          toValue: 0.28, // Shrink to flex:1 when keyboard appears
          duration: 250,
          useNativeDriver: false,
        }).start();
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios'
        ? 'keyboardWillHide'
        : 'keyboardDidHide',
      () => {
        Animated.timing(flexAnim, {
          toValue: 0.8, // Expand back to flex:4 when keyboard hides
          duration: 250,
          useNativeDriver: false,
        }).start();
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
};
