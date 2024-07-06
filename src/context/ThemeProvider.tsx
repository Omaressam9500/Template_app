import React, { createContext, useState, useContext } from 'react';
import { darkTheme, lightTheme } from '../constants/Colors';



const ThemeContext = createContext({
  theme:lightTheme,
   toggleTheme: () => {},
});
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
