import styles from './Hologram.module.css';

interface HologramProps {
  /** Text currently "typed" (by the auto-typer or the visitor). */
  text: string;
  caretOn: boolean;
  lastKey: string | null;
  /** Full text for screen readers, since the typed line is animated. */
  srText: string;
}

/** A floating holographic display projected above the keyboard. */
export default function Hologram({ text, caretOn, lastKey, srText }: HologramProps) {
  return (
    <div className={styles.rig}>
      <div className={styles.screen}>
        <span className="visually-hidden">{srText}</span>
        <div className={styles.inner} aria-hidden="true">
          <div className={styles.bar}>
            <span>holo-term // session</span>
            <span className={styles.status}>
              <i className={styles.led} /> online
            </span>
          </div>
          <div className={styles.body}>
            <div className={styles.dim}>&gt; whoami</div>
            <div className={styles.out}>mayela, ai security</div>
            <div className={`${styles.dim} ${styles.cmd}`}>&gt; whatido</div>
            <div className={styles.line}>
              {text}
              <span className={styles.caret} style={{ opacity: caretOn ? 1 : 0 }} />
            </div>
          </div>
          <div className={styles.foot}>
            <span>keydown → {lastKey ?? 'idle'}</span>
            <span>proj::live</span>
          </div>
        </div>
        <span className={`${styles.corner} ${styles.tl}`} />
        <span className={`${styles.corner} ${styles.tr}`} />
        <span className={`${styles.corner} ${styles.bl}`} />
        <span className={`${styles.corner} ${styles.br}`} />
      </div>
      {/* Light cone from the keyboard up to the display. */}
      <div className={styles.beam} aria-hidden="true" />
    </div>
  );
}
