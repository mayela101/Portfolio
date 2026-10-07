/**
 * Keyboard model: the on-screen layout, mapping characters / KeyboardEvent.key
 * values to key ids, and the frame sequence the hero auto-typer plays.
 */

export interface KeyDef {
  label: string;
  /** Width in key units (1 = a letter key). */
  width: number;
  /** Id matched against pressed keys. Defaults to the label. */
  id: string;
}

const key = (label: string, width = 1, id = label): KeyDef => ({ label, width, id });
const chars = (s: string) => [...s].map((c) => key(c));

export const LAYOUT: KeyDef[][] = [
  [...chars('`1234567890-='), key('delete', 2, 'backspace')],
  [key('tab', 1.5), ...chars('qwertyuiop[]'), key('\\', 1.5)],
  [key('caps', 1.75), ...chars("asdfghjkl;'"), key('return', 2.25, 'enter')],
  [key('shift', 2.25), ...chars('zxcvbnm,./'), key('shift', 2.75)],
  [key('fn'), key('ctrl'), key('opt'), key('cmd', 1.25), key('', 5.5, 'space'), key('cmd', 1.25), key('opt'), key('←'), key('↓'), key('→')],
];

/** Shifted character → the base key it lives on. */
const SHIFTED: Record<string, string> = {
  '~': '`', '!': '1', '@': '2', '#': '3', '$': '4', '%': '5', '^': '6', '&': '7', '*': '8', '(': '9', ')': '0',
  _: '-', '+': '=', '{': '[', '}': ']', '|': '\\', ':': ';', '"': "'", '<': ',', '>': '.', '?': '/',
};

/** Keys that must be held to produce a printable character. */
export function keysForChar(c: string): string[] {
  if (c === ' ') return ['space'];
  if (SHIFTED[c]) return [SHIFTED[c], 'shift'];
  if (c !== c.toLowerCase()) return [c.toLowerCase(), 'shift'];
  return [c];
}

const NAMED: Record<string, string> = {
  Backspace: 'backspace',
  Enter: 'enter',
  ' ': 'space',
  Shift: 'shift',
  Tab: 'tab',
  Meta: 'cmd',
  Alt: 'opt',
  Control: 'ctrl',
  CapsLock: 'caps',
  ArrowLeft: '←',
  ArrowRight: '→',
  ArrowDown: '↓',
  ArrowUp: '↓', // the compact layout has no up arrow
};

/** Map a KeyboardEvent.key to an on-screen key id, or null if it has none. */
export function keyIdFromEvent(eventKey: string): string | null {
  if (NAMED[eventKey]) return NAMED[eventKey];
  return eventKey.length === 1 ? keysForChar(eventKey)[0] : null;
}

export interface TypingFrame {
  text: string;
  keys: string[];
}

/**
 * One frame per tick: type each phrase key by key, hold it, backspace it
 * away, pause, then move to the next phrase.
 */
export function buildTypingFrames(phrases: readonly string[], hold = 22, pause = 5): TypingFrame[] {
  const frames: TypingFrame[] = [];
  for (const p of phrases) {
    for (let i = 1; i <= p.length; i++) frames.push({ text: p.slice(0, i), keys: keysForChar(p[i - 1]) });
    for (let h = 0; h < hold; h++) frames.push({ text: p, keys: [] });
    for (let i = p.length - 1; i >= 0; i--) frames.push({ text: p.slice(0, i), keys: ['backspace'] });
    for (let h = 0; h < pause; h++) frames.push({ text: '', keys: [] });
  }
  return frames;
}
