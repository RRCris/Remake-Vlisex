import Typografy from "./components/Typografy";
import Button from "./components/Button";
import { useFocusWindow } from "./hooks/useFocusWindow";
import { useOnline } from "./hooks/useOnline";
import { useResponsive } from "./hooks/useResponsive";

import { useTheme } from "@/providers/ProviderTheme";

function App() {
  const focus = useFocusWindow();
  const online = useOnline();
  const width = useResponsive();

  const { colors, actions } = useTheme();
  console.log(colors);
  return (
    <div
      style={{
        background: colors.secondary.main,
        color: colors.secondary.contrast,
      }}
    >
      {focus && <h1>Hola mundo</h1>}
      {online ? (
        <h2 style={{ color: "green" }}>estas online</h2>
      ) : (
        <h2 style={{ color: "red" }}>te quedaste sin internet</h2>
      )}
      <Button />
      <Typografy />

      <h3>tu pantalla es de tamaño {width}</h3>
      <button onClick={() => actions.setColor("grenDark")}>Green</button>
      <button onClick={() => actions.setColor("blueDark")}>Blue</button>
      <button onClick={() => actions.setColor("orangeDark")}>Orange</button>
      <br />
      <button onClick={() => actions.setPreferUser("auto")}>mode Auto</button>
      <button onClick={() => actions.setPreferUser("dark")}>mode Dark</button>
      <button onClick={() => actions.setPreferUser("light")}>mode Light</button>
    </div>
  );
}

export default App;
