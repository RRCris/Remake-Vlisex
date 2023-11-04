import Typografy from "./components/Typografy";
import Button from "./components/Button";
import { useOnline } from "./hooks/useOnline";
import { useResponsive } from "./hooks/useResponsive";

import { useTheme } from "@/providers/ProviderTheme";

function App() {
  const online = useOnline();
  const width = useResponsive();

  const { colors, actions, avalibleValues, currentValues } = useTheme();

  return (
    <div
      style={{
        background: colors.secondary.main,
        color: colors.secondary.contrast,
      }}
    >
      {online ? (
        <h2 style={{ color: "green" }}>estas online</h2>
      ) : (
        <h2 style={{ color: "red" }}>te quedaste sin internet</h2>
      )}
      <Button />
      <Typografy />

      <h3>tu pantalla es de tamaño {width}</h3>
      {avalibleValues.selectColor.map((c, key) => (
        <button
          key={key}
          onClick={() => actions.setSelectColor(c)}
          style={{
            background: currentValues.selectColor === c ? "#F00" : undefined,
          }}
        >
          {c}
        </button>
      ))}
      <br />
      {avalibleValues.preferUser.map((p, key) => (
        <button
          key={key}
          onClick={() => actions.setPreferUser(p)}
          style={{
            background: currentValues.preferUser === p ? "#F00" : undefined,
          }}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

export default App;
