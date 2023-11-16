import { ReactNode } from "react";

interface PropsTypografy {
  children: ReactNode;
}
export default function Typografy(props: PropsTypografy) {
  return <div style={{ fontSize: "2rem" }}>{props.children}</div>;
}
