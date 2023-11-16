import { useTheme } from "@/providers/ProviderTheme";
import { useIntersection } from "@/hooks/useIntersection";
import Image from "./components/Image";

///NOTES:  Shadows, Enrutado, testing, CI/CD
export function App() {
  const callback = () => {};
  const { refObservable, intersectionRatio, match, firstMatch } =
    useIntersection(callback, 80);

  const { colors } = useTheme();

  return (
    <div
      style={{
        background: colors.secondary.main,
        color: colors.secondary.contrast,
        height: 3000,
      }}
    >
      <div
        ref={refObservable}
        style={{ height: 300, width: 300, background: match ? "green" : "red" }}
      >
        {intersectionRatio}
      </div>
      <div
        style={{
          height: 300,
          width: 300,
          background: firstMatch ? "gray" : "blue",
        }}
      ></div>
      <Image
        src="https://i.pinimg.com/originals/db/3d/bd/db3dbdfce2dea5442053dceaa2f3d4ce.png"
        alt="meliodas wallpaper"
        width={300}
        height={450}
      />
    </div>
  );
}
