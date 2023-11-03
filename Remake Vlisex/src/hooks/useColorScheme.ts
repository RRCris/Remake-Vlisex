import { useEffect } from "react";
import { useState } from "react";
export function useSchemePrefers(): "dark" | "light" {
  const initialValue = window.matchMedia(`(prefers-color-scheme: light)`)
    .matches
    ? "light"
    : "dark";

  const [prefersColors, setPrefersColors] = useState<"dark" | "light">(
    initialValue
  );

  useEffect(() => {
    //creo el objeto de la Media-Query
    const prefersColorQuery = window.matchMedia(
      `(prefers-color-scheme: light)`
    );

    //creo listener
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const changeColor = (e: any) =>
      setPrefersColors(e.matches ? "light" : "dark");
    prefersColorQuery.addEventListener("change", changeColor);

    //limpiamos listener
    return () => prefersColorQuery.removeEventListener("change", changeColor);
  }, []);

  return prefersColors;
}
