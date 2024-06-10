import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { theme } from "../theme";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    largeTitle: true;
    title: true;
    heading1: true;
    heading2: true;
    heading3: true;
    heading4: true;
    heading5: true;
    heading6: true;
    body: true;
    callout: true;
    callout2: true;
    subhead: true;
    footnote: true;
    caption: true;
    caption2: true;
  }
}

export function ThemeSettingsProvider({
  children,
  font,
}: {
  children: React.ReactNode;
  font: string;
}) {
  const getEjectedTheme = createTheme(theme(font));

  return (
    <ThemeProvider theme={getEjectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
