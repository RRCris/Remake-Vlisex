import React, { ReactNode, useState } from "react";
import palette from "../themes/palette";
import { useSchemePrefers } from "@/hooks/useColorScheme";

const contextTheme = React.createContext({
  colors: {
    primary: palette.blueDark,
    secondary: palette.gray,
  },
  currentValues: {
    selectColor: "blueDark",
    preferUser: "light",
    preferSystem: "light",
  },
  actions: {
    setColor(c: TypeSelectColor) {
      console.log(
        `you dont use this function(${c}), because themeProvider you dont use`
      );
    },
    setPreferUser(p: TypePreferUser) {
      console.log(
        `you dont use this function(${p}), because themeProvider you dont use`
      );
    },
  },
});
//NOTES: funciones de togle para preferScheme, datos de color y scheme actuales, colores  y schemes accesibles
/////////////////////////////////////@Types
export type TypeSelectColor = keyof typeof palette;
export type TypePreferUser = "auto" | "dark" | "light";
//////////////////////////////////Component
export default function ProviderTheme({ children }: { children: ReactNode }) {
  //estos son los valores reactivos que va a generar un cambio en el esquema de colores
  const preferSystem = useSchemePrefers();
  const [selectColor, setSelectColor] = useState<TypeSelectColor>("blueDark");
  const [preferUser, setPreferUser] = useState<TypePreferUser>("auto");

  //estoso son los valores finales a tener en cuanta
  const color = palette[selectColor];
  const gray = palette.gray;
  const scheme = preferUser === "auto" ? preferSystem : preferUser;

  const theme = {
    colors: {
      primary: scheme === "light" ? color : gray,
      secondary: scheme === "light" ? gray : color,
    },
    currentValues: {
      selectColor: selectColor,
      preferUser: preferUser,
      preferSystem: preferSystem,
    },
    actions: {
      setColor(c: TypeSelectColor) {
        setSelectColor(c);
      },
      setPreferUser(p: TypePreferUser) {
        setPreferUser(p);
      },
    },
  };
  return (
    <contextTheme.Provider value={theme}>{children}</contextTheme.Provider>
  );
}

export function useTheme() {
  return React.useContext(contextTheme);
}
