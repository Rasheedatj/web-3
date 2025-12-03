import { createContext, ReactNode, use, useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './globalstyles';

type theme = 'dark' | 'light' | 'system';

interface ThemeProp {
  theme: theme;
  handleChangeTheme: (theme: theme) => void;
  colorScheme: 'light' | 'dark';
  themeColor?: any;
}

const ThemeContext = createContext<ThemeProp>({
  theme: 'system',
  handleChangeTheme: (theme: theme) => {},
  colorScheme: 'light',
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemScheme = useColorScheme() ?? 'light';
  const [theme, setTheme] = useState<theme>('system');
  const colorScheme = theme === 'system' ? systemScheme : theme;
  const handleChangeTheme = (theme: theme) => setTheme(theme);

  const themeColor = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{ colorScheme, themeColor, theme, handleChangeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = use(ThemeContext);

  if (context === undefined) throw new Error('Context used out of scope');

  return context;
};
