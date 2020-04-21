import * as React from 'react';
export interface ThemeHookValues {
  dark: number;
  toggle: Function;
}
declare const useTheme: () => ThemeHookValues;
declare const ThemeProvider: React.SFC;
export {ThemeProvider, useTheme};
