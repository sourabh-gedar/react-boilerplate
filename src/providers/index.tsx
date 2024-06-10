import { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { ThemeSettingsProvider } from "./ThemeSettingsProvider";

export const ProviderTree = ({ children }: { children: ReactNode }) => {
  const appFont = "Roboto";
  return (
    <StoreProvider>
      <ThemeSettingsProvider font={appFont}>{children}</ThemeSettingsProvider>
    </StoreProvider>
  );
};
