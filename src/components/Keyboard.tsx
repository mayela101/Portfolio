import type { CSSProperties } from 'react';
import { LAYOUT } from '../lib/keyboard';
import styles from './Keyboard.module.css';

interface KeyboardProps {
  pressed: ReadonlySet<string>;
  tilt?: boolean;
}

/**
 * Decorative mechanical keyboard: a case holding a plate, with a keycap
 * (side wall + top face) on every switch. Keys whose id is in `pressed`
 * are driven down to the plate.
 */
export default function Keyboard({ pressed, tilt = true }: KeyboardProps) {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={`${styles.case} ${tilt ? styles.tilted : ''}`}>
        <div className={styles.plate}>
          {LAYOUT.map((row, r) => (
            <div key={r} className={styles.row}>
              {row.map((k, i) => (
                <div
                  key={i}
                  className={`${styles.key} ${k.label.length > 1 ? styles.named : ''} ${pressed.has(k.id) ? styles.down : ''}`}
                  style={{ '--w': k.width } as CSSProperties}
                >
                  <span className={styles.cap}>
                    <span className={styles.face}>{k.label}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
