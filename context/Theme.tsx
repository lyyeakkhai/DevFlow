"use client";
import { ThemeProviderProps } from 'next-themes';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

// this is a theme provider so it work is to revieve the theme context and provide it to the app
// so the pramater is children taht we pass in and the prop that we pass in is the theme context
const ThemeProvider = ({ children , ...props } : ThemeProviderProps) => {
  return (
    <NextThemeProvider {...props} >{children} </NextThemeProvider>
  )
}

export default  ThemeProvider;