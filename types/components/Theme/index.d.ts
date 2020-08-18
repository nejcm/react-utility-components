import React from 'react';
export interface ThemeHookValues {
  theme: number;
  toggle: (value: boolean | number | undefined) => void;
}
declare const useTheme: () => ThemeHookValues;
declare const ThemeProvider: React.FC;
export {ThemeProvider, useTheme};
