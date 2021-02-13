import React, { PropsWithChildren } from "react";
import { ThemeProvider as ThemeUiThemeProvider } from "theme-ui";

interface ThemeProviderProps {
  readonly theme: any;
}
export function ThemeProvider({
  theme,
  children,
}: PropsWithChildren<ThemeProviderProps>) {
  return <ThemeUiThemeProvider theme={theme}>{children}</ThemeUiThemeProvider>;
}
