import { useEffect, useState } from "react";

export function useFocusWindow() {
  const [focus, setFocus] = useState<boolean>(true);

  useEffect(() => {
    const active = () => setFocus(false);
    const desactive = () => setFocus(true);
    //este codigo agrega reactividad:
    //ya que no solo se sensa una vez
    //si no cada vez qeu se sale o se entra al navegador se actualiza la información
    window.addEventListener("blur", active);
    window.addEventListener("focus", desactive);
    //forza al sistema poner el foco en el navegador
    window.focus();

    //nos aseguramos que concuerde la informacion del estado con la real
    setFocus(true);

    //limpiamos listerners cuando se desmonten
    return () => {
      window.removeEventListener("blur", active);
      window.removeEventListener("focus", desactive);
    };
  }, []);

  return focus;
}
