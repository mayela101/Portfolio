import { memo, useState } from 'react';
import { experience } from '../data/experience';
import { SectionHeader, Tag } from './ui';
import styles from './ExperienceLog.module.css';

/** Experience as a log; hovering (or focusing / tapping) a row expands it. One row is always open. */
function ExperienceLog() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="experience">
      <SectionHeader id="experience" title="Experience" command="$ tail -f ~/experience.log" />
      <ol className={styles.list}>
        {experience.map((e, i) => {
          const isOpen = open === i;
          const detailsId = `exp-${i}`;
          return (
            <li key={e.org} className={styles.item} onMouseEnter={() => setOpen(i)}>
              <button
                type="button"
                className={styles.row}
                aria-expanded={isOpen}
                aria-controls={detailsId}
                onClick={() => setOpen(i)}
                onFocus={() => setOpen(i)}
              >
                <span className={styles.n}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.date}>{e.date}</span>
                <span className={styles.role}>
                  {e.role} <span className={styles.org}>| {e.org}</span>
                </span>
                <span className={styles.tag}>
                  <Tag>{e.tag}</Tag>
                </span>
                <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`} aria-hidden="true">
                  →
                </span>
              </button>
              <ul id={detailsId} className={styles.bullets} hidden={!isOpen}>
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default memo(ExperienceLog);
