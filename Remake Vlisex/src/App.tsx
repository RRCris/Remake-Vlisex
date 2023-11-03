import Typografy from "./components/Typografy";
import Button from "./components/Button";
import { useFocusWindow } from "./hooks/useFocusWindow";
import { useOnline } from "./hooks/useOnline";
import { useResponsive } from "./hooks/useResponsive";
import { useSchemePrefers } from "./hooks/useColorScheme";

function App() {
  const focus = useFocusWindow();
  const online = useOnline();
  const width = useResponsive();
  const theme = useSchemePrefers();
  console.log(theme);
  return (
    <div
      style={{
        fontFamily: "'Manrope',sans-serif",
        background: theme === "dark" ? "#555" : "#ddd",
        fontWeight: 400,
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
    </div>
  );
}

export default App;
