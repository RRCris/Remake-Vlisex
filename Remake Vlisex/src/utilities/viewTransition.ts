import { flushSync } from "react-dom";

export function viewTrasition(cb: () => void) {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      flushSync(() => {
        cb();
      });
    });
  } else {
    cb();
  }
}
