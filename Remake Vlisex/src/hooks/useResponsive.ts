import { useEffect } from "react";
import { useState } from "react";

export const BreakpointsData = {
  xs: 300,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
export type BreakPointsKeys = keyof typeof BreakpointsData;
export function useResponsive() {
  const [width, setWidth] = useState<BreakPointsKeys>(
    asingBreakPoint(window.innerWidth)
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateSize = (e: any) =>
      setWidth(asingBreakPoint(e.target.innerWidth));

    //reactividad del estado
    window.addEventListener("resize", updateSize);

    //clean listeners will unmount
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return width;
}

//esta funcion se adapta al objeto Breackpoint
//dandole libertad de cambiar los tamaños incluso los prefijos
//o agregando nuevos breackpoints en el futuro
function asingBreakPoint(width: number): BreakPointsKeys {
  const breakpoints = Object.entries(BreakpointsData).reverse() as [
    BreakPointsKeys,
    number
  ][];
  for (const br of breakpoints) {
    //  console.log(br[1], br[1] <= width, width);
    if (br[1] <= width) return br[0];
  }

  return breakpoints[breakpoints.length - 1][0];
}
