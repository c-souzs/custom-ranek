import React from 'react';

export function useInterval<C extends CallableFunction>(callback: C, delay: number | null): void {
  const savedCallback = React.useRef<C>();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect((): (() => void) | undefined => {
    const tick = (): void => {
      if (savedCallback.current) savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return undefined;
  }, [delay]);
}
