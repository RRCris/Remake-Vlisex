import React, { ReactNode, useState } from "react";
import palette from "@/themes/palette";
import { useSchemePrefers } from "@/hooks/useColorScheme";
import { TContextTheme, TPreferUser, TSelectColor } from "@/@Types/Provider";

///-----------DEFAULT CONTEXT
const contextTheme = React.createContext<TContextTheme>({
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
    setSelectColor(c: TSelectColor) {
      console.log(
        `you dont use this function(${c}), because themeProvider you dont use`
      );
    },
    setPreferUser(p: TPreferUser) {
      console.log(
        `you dont use this function(${p}), because themeProvider you dont use`
      );
    },
  },
  avalibleValues: {
    selectColor: Object.keys(palette) as TSelectColor[],
    preferUser: ["auto", "dark", "light"],
  },
});

///--------------COMPONENT
export default function ProviderTheme({ children }: { children: ReactNode }) {
  //estos son los valores reactivos que va a generar un cambio en el esquema de colores
  const preferSystem = useSchemePrefers();
  const [selectColor, setSelectColor] = useState<TSelectColor>("blueDark");
  const [preferUser, setPreferUser] = useState<TPreferUser>("auto");

  //estoso son los valores finales a tener en cuanta
  const color = palette[selectColor];
  const gray = palette.gray;
  const scheme = preferUser === "auto" ? preferSystem : preferUser;

  const theme: TContextTheme = {
    colors: {
      primary: scheme === "light" ? color : gray,
      secondary: scheme === "light" ? gray : color,
    },
    currentValues: {
      selectColor: selectColor,
      preferUser: preferUser,
      preferSystem: preferSystem,
    },
    avalibleValues: {
      selectColor: Object.keys(palette) as TSelectColor[],
      preferUser: ["auto", "dark", "light"],
    },
    actions: {
      setSelectColor(c: TSelectColor) {
        setSelectColor(c);
      },
      setPreferUser(p: TPreferUser) {
        setPreferUser(p);
      },
    },
  };
  return (
    <contextTheme.Provider value={theme}>{children}</contextTheme.Provider>
  );
}

///-------------------ACCESESS HOOK
export function useTheme() {
  return React.useContext(contextTheme);
}
