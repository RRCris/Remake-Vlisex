import { useEffect } from "react";
import { useState } from "react";
export function useOnline() {
  // una vez se inicialice toma el valor real
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const offline = () => setOnline(false);
    const online = () => setOnline(true);

    //aqui agregamos la reactividad
    window.addEventListener("offline", offline);
    window.addEventListener("online", online);

    return () => {
      window.removeEventListener("offline", offline);
      window.removeEventListener("online", online);
    };
  });

  return online;
}
