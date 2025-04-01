import { Light, Dark } from '@/utils/constants/Colors';
import React, {
  createContext,
  useContext,
  useState,
} from 'react';

export type Theme = {
  colors: typeof Light | typeof Dark;
};

type ThemeContextType = {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = {
    colors: isDarkMode ? Dark : Light,
  };

  return (
    <ThemeContext.Provider
      value={{ theme, isDarkMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useTheme must be used within a ThemeProvider',
    );
  }
  return context;
};
