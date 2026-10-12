import { useEffect } from 'react';

/**
 * Publishes the mouse position as --mx / --my on <html> so CSS can light up
 * the background grid around the cursor. Mouse only; touch devices skip it.
 */
export function useCursorGlow(): void {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      frame = 0;
      root.style.setProperty('--mx', `${x}px`);
      root.style.setProperty('--my', `${y}px`);
      root.style.setProperty('--glow', '1');
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => root.style.setProperty('--glow', '0');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
      root.style.removeProperty('--mx');
      root.style.removeProperty('--my');
      root.style.removeProperty('--glow');
    };
  }, []);
}
