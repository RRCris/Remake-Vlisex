import Typografy from "@/components/Typografy";
import Button from "@/components/Button";
import { useOnline } from "./hooks/useOnline";
import { useResponsive } from "@/responsive/useResponsive";

import { useTheme } from "@/providers/ProviderTheme";
import { useIntersection } from "@/hooks/useIntersection";

///NOTES: Add React Router Dom, useViewTransition() ,useResponse(), placeHolderImage - deacuerdo a scheme, Golobal Styles, Shadows, Enrutado, testing, CI/CD
function App() {
  const online = useOnline();
  const width = useResponsive();
  const callback = () => {};
  const { refObservable, intersectionRatio, match } = useIntersection(
    callback,
    80
  );

  const { colors, actions, avalibleValues, currentValues } = useTheme();

  return (
    <div
      style={{
        background: colors.secondary.main,
        color: colors.secondary.contrast,
        height: 3000,
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
      <div
        ref={refObservable}
        style={{ height: 300, width: 300, background: match ? "green" : "red" }}
      >
        {intersectionRatio}
      </div>
    </div>
  );
}

export default App;
