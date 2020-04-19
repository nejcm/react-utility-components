import React, {createContext, useContext, useState} from 'react';

export interface ThemeHookValues {
  dark: number;
  toggle: Function;
}

const isBrowser = () => typeof window !== 'undefined';
const name = 'theme';
const defaultContextData: ThemeHookValues = {
  dark: 0,
  toggle: () => {
    //
  },
};

const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

const useEffectTheme = (): [
  number,
  React.Dispatch<React.SetStateAction<number>>,
] => {
  const current = isBrowser() ? window.localStorage.getItem(name) : '0';
  const [state, setState] = useState<number>(current === '1' ? 1 : 0);
  return [state, setState];
};

const ThemeProvider: React.SFC = ({children}) => {
  const [dark, setDark] = useEffectTheme();
  const toggle = (value: boolean | number | undefined) => {
    const isDark = value || !dark ? 1 : 0;
    if (isBrowser()) {
      window.localStorage.setItem(name, isDark.toString());
    }
    setDark(isDark);
  };

  const value: ThemeHookValues = {
    dark,
    toggle,
  };

  return (
    <ThemeContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, useTheme};
