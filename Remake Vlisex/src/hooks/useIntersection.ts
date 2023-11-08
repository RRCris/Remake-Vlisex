import { useEffect, useRef, useState } from "react";

export function useIntersection(
  cb: (percent: number) => void,
  percent: number
) {
  const refObservable = useRef<HTMLDivElement>(null);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: Array.from(Array(21).keys()).map((x) => x / 20),
    };
    const callback: IntersectionObserverCallback = (entry) => {
      const n = Math.floor(entry[0].intersectionRatio * 100);
      setIntersectionRatio(n);

      if (n >= percent && !match) {
        setMatch(true);
        cb(n);
      }
      if (n < percent) setMatch(false);
    };

    const observer = new IntersectionObserver(callback, options);

    refObservable.current && observer.observe(refObservable.current);
  }, []);

  return {
    refObservable,
    intersectionRatio,
    match,
  };
}
