import React, {createContext, useContext, useState} from 'react';

// TODO:
//    allow custom values
//    default value
//    onChange callback to allow overriding localStorage

export interface ThemeHookValues {
  theme: number;
  toggle: (value: boolean | number | undefined) => void;
}

const isBrowser = (): boolean => typeof window !== 'undefined';
const name = 'theme';
const defaultContextData: ThemeHookValues = {
  theme: 0,
  toggle: () => {
    //
  },
};

const ThemeContext = createContext(defaultContextData);
const useTheme = (): ThemeHookValues =>
  useContext<ThemeHookValues>(ThemeContext);

const useEffectTheme = (): [
  number,
  React.Dispatch<React.SetStateAction<number>>,
] => {
  const current = isBrowser() ? window.localStorage.getItem(name) : '0';
  const [state, setState] = useState<number>(current === '1' ? 1 : 0);
  return [state, setState];
};

const ThemeProvider: React.SFC = ({children}) => {
  const [theme, setTheme] = useEffectTheme();
  const toggle = (value: boolean | number | undefined): void => {
    const is = value || !theme ? 1 : 0;
    if (isBrowser()) {
      window.localStorage.setItem(name, is.toString());
    }
    setTheme(is);
  };

  const value: ThemeHookValues = {
    theme,
    toggle,
  };

  return (
    <ThemeContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, useTheme};
