import React, { ReactNode } from "react";
import colors from "../themes/colors";
//@Types
export type modeColorize = "auto" | "dark" | "light";

const contextTheme = React.createContext({});
export default function ProviderTheme({ children }: { children: ReactNode }) {
  const [theme] = React.useState(colors);
  return (
    <contextTheme.Provider value={theme}>{children}</contextTheme.Provider>
  );
}

export function useTheme() {
  return React.useContext(contextTheme);
}
