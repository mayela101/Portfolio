import { describe, expect, it } from 'vitest';
import { buildTypingFrames, keyIdFromEvent, keysForChar, LAYOUT } from './keyboard';

describe('keysForChar', () => {
  it('maps plain, uppercase, shifted and space characters', () => {
    expect(keysForChar('a')).toEqual(['a']);
    expect(keysForChar('A')).toEqual(['a', 'shift']);
    expect(keysForChar('?')).toEqual(['/', 'shift']);
    expect(keysForChar(' ')).toEqual(['space']);
  });

  it('only produces ids present on the layout', () => {
    const ids = new Set(LAYOUT.flat().map((k) => k.id));
    for (const c of 'Hello, World! ~_+{}|:"<>?') {
      for (const id of keysForChar(c)) expect(ids).toContain(id);
    }
  });
});

describe('keyIdFromEvent', () => {
  it('maps named and printable keys', () => {
    expect(keyIdFromEvent('Backspace')).toBe('backspace');
    expect(keyIdFromEvent('ArrowUp')).toBe('↓');
    expect(keyIdFromEvent('Q')).toBe('q');
    expect(keyIdFromEvent('F5')).toBeNull();
  });
});

describe('buildTypingFrames', () => {
  it('types, holds, deletes and pauses each phrase', () => {
    const frames = buildTypingFrames(['hi'], 2, 1);
    expect(frames.map((f) => f.text)).toEqual(['h', 'hi', 'hi', 'hi', 'h', '', '']);
    expect(frames[0].keys).toEqual(['h']);
    expect(frames[4].keys).toEqual(['backspace']);
  });
});
