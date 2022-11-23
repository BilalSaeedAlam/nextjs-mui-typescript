import { AppProps } from "next/app";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import themeMode from "../theme/themeMode";

import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { useAppContext } from "../context/appContext";

interface LayoutProps {
  children: React.ReactNode;
}
export default function useThemeProvider({ children }: LayoutProps) {
  const { state } = useAppContext();

  const darkModeTheme = createTheme(themeMode(state?.themeMode));
  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
