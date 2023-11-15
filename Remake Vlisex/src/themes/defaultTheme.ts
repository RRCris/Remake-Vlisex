import { DefaultTheme, createGlobalStyle } from "styled-components";

const myTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    main: "cyan",
    secondary: "magenta",
  },
};

export { myTheme };

export const GlobalStyled = createGlobalStyle`
  -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   font-family: "'Manrope',sans-serif";

  

`;
// const GlobalStyled = styled.div`
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   font-family: "'Manrope',sans-serif";

// `;
