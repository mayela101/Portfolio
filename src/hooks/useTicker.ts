import { useEffect, useState } from 'react';

/** A counter that increments every `ms` milliseconds — the page's animation clock. */
export function useTicker(ms: number): number {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), ms);
    return () => window.clearInterval(id);
  }, [ms]);
  return tick;
}
