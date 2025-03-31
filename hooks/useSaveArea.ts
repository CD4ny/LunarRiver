import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useSafeArea = () => {
  const insets = useSafeAreaInsets();

  // Return a style object with padding based on safe area insets
  return {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };
};

export default useSafeArea;
