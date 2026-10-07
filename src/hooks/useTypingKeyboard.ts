import { useEffect, useMemo, useRef, useState } from 'react';
import { buildTypingFrames, keyIdFromEvent } from '../lib/keyboard';
import { settings } from '../data/site';

interface UserInput {
  /** Key ids pressed by the visitor's most recent keystroke. */
  liveKeys: string[];
  /** Tick of that keystroke. */
  at: number;
  /** What the visitor has typed so far. */
  buffer: string;
}

export interface TypingKeyboard {
  /** Text shown in the hero's typed line. */
  text: string;
  /** Key ids currently drawn as pressed. */
  pressed: ReadonlySet<string>;
  /** Most recent non-modifier key, or null when idle. */
  lastKey: string | null;
}

const isEditable = (el: EventTarget | null) =>
  el instanceof HTMLElement && (el.isContentEditable || !!el.closest('input, textarea, select'));

/**
 * Drives the hero keyboard. It auto-types `phrases`; as soon as the visitor
 * types on the page it echoes their keystrokes instead, and returns to the
 * auto-typer after a quiet period.
 */
export function useTypingKeyboard(phrases: readonly string[], tick: number, reducedMotion: boolean): TypingKeyboard {
  const frames = useMemo(() => buildTypingFrames(phrases), [phrases]);
  const [input, setInput] = useState<UserInput>({ liveKeys: [], at: -Infinity, buffer: '' });

  const tickRef = useRef(tick);
  tickRef.current = tick;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || isEditable(e.target)) return;
      const id = keyIdFromEvent(e.key);
      if (!id) return;
      // Space would scroll the page; only swallow it when nothing interactive is focused.
      if (e.key === ' ' && (e.target === document.body || e.target === document.documentElement)) e.preventDefault();

      const liveKeys = e.shiftKey && id !== 'shift' ? [id, 'shift'] : [id];
      setInput((prev) => {
        let buffer = prev.buffer;
        if (e.key === 'Backspace') buffer = buffer.slice(0, -1);
        else if (e.key === 'Enter') buffer = '';
        else if (e.key.length === 1) buffer = (buffer + e.key).slice(-settings.maxTypedChars);
        return { liveKeys, at: tickRef.current, buffer };
      });
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const userActive = tick - input.at < settings.userIdleTicks;
  const live = tick - input.at < settings.liveKeyTicks ? input.liveKeys : [];

  let text: string;
  let autoKeys: string[];
  if (userActive) {
    text = input.buffer;
    autoKeys = [];
  } else if (reducedMotion) {
    text = phrases[0] ?? '';
    autoKeys = [];
  } else {
    const frame = frames[tick % frames.length];
    text = frame.text;
    autoKeys = frame.keys;
  }

  const shown = userActive ? live : autoKeys;
  return {
    text,
    pressed: new Set([...autoKeys, ...live]),
    lastKey: shown.find((k) => k !== 'shift') ?? null,
  };
}
