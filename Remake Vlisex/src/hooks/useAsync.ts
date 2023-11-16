import { useCallback, useEffect, useState } from "react";
import { useOnline } from "./useOnline";

export function useAsync(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (...e: any) => Promise<any>,
  initialFetch: boolean
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = useState<any>();
  const [hasError, setHasError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const online = useOnline();

  const fetchingMemorized = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...e: any) => {
      setLoading(true);
      setHasError(false);
      setValue(undefined);
      callback(e)
        .then((res) => {
          setValue(res);
          setLoading(false);
          setHasError(false);
        })
        .catch(() => {
          setHasError(true), setLoading(false);
        });
    },
    [callback]
  );

  useEffect(() => {
    if (initialFetch) {
      fetchingMemorized();
    }
  }, []);

  return {
    value,
    hasError,
    loading,
    online,
    fetchingMemorized,
  };
}
