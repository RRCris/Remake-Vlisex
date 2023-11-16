import palette from "@/themes/palette";
//------------------------------------------------------------Context-Theme
interface TColorTheme {
  main: string;
  upper: string;
  contrast: string;
  disabled: string;
  enfasis: string;
}

export type TSelectColor = keyof typeof palette;

export type TPreferUser = "auto" | "dark" | "light";

interface TContextTheme {
  colors: {
    primary: TColorTheme;
    secondary: TColorTheme;
  };
  currentValues: {
    scheme: "dark" | "light";
    selectColor: TSelectColor;
    preferUser: TPreferUser;
    preferSystem: "dark" | "light";
  };
  actions: {
    setSelectColor(e: TSelectColor): void;
    setPreferUser(p: TPreferUser): void;
  };
  avalibleValues: {
    selectColor: TSelectColor[];
    preferUser: TPreferUser[];
  };
}
//-----------------------------------------------------------Context-Theme
