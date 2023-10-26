import React, { ReactNode } from "react";

const contextTheme = React.createContext({});
export default function ProviderTheme({ children }: { children: ReactNode }) {
  const [theme, setTheme] = React.useState({});
  return (
    <contextTheme.Provider value={theme}>{children}</contextTheme.Provider>
  );
}

export function useTheme() {
  return React.useContext(contextTheme);
}
