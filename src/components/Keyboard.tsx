import type { CSSProperties } from 'react';
import { LAYOUT } from '../lib/keyboard';
import styles from './Keyboard.module.css';

interface KeyboardProps {
  pressed: ReadonlySet<string>;
  tilt?: boolean;
}

/** Decorative on-screen keyboard; keys whose id is in `pressed` render pushed down. */
export default function Keyboard({ pressed, tilt = true }: KeyboardProps) {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={`${styles.board} ${tilt ? styles.tilted : ''}`}>
        {LAYOUT.map((row, r) => (
          <div key={r} className={styles.row}>
            {row.map((k, i) => (
              <div
                key={i}
                className={`${styles.key} ${k.label.length > 1 ? styles.named : ''} ${pressed.has(k.id) ? styles.down : ''}`}
                style={{ '--w': k.width } as CSSProperties}
              >
                {k.label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
