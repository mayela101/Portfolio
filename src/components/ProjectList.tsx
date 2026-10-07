import { memo, useState, type CSSProperties } from 'react';
import { projects } from '../data/projects';
import { SectionHeader, Tag } from './ui';
import styles from './ProjectList.module.css';

/** Side projects as an `ls` listing; a row expands while hovered (or focused / tapped). */
function ProjectList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-labelledby="projects">
      <SectionHeader id="projects" title="Side Projects" command={`$ ls ~/projects: ${projects.length} items`} />
      <ol className={styles.list}>
        {projects.map((p, i) => {
          const isOpen = open === i;
          const detailsId = `proj-${p.id}`;
          return (
            <li
              key={p.id}
              className={styles.item}
              style={{ '--hue': p.hue } as CSSProperties}
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                type="button"
                className={styles.row}
                aria-expanded={isOpen}
                aria-controls={detailsId}
                onClick={() => setOpen(i)}
                onFocus={() => setOpen(i)}
              >
                <span className={styles.n}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.swatch} aria-hidden="true" />
                <span className={styles.title}>
                  {p.title} <span className={styles.product}>| {p.product}</span>
                </span>
                <span className={styles.tag}>
                  <Tag>{p.tag}</Tag>
                </span>
                <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`} aria-hidden="true">
                  →
                </span>
              </button>
              <div id={detailsId} className={styles.details} hidden={!isOpen}>
                <p className={styles.desc}>{p.description}</p>
                <div className={styles.preview}>
                  <img src={p.image} alt={`${p.product} preview`} decoding="async" />
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default memo(ProjectList);
