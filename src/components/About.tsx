import { memo } from 'react';
import { education, toolkit } from '../data/about';
import { SectionHeader } from './ui';
import styles from './About.module.css';

/** Toolkit (as environment variables) beside Education. */
function About() {
  return (
    <section className={styles.section}>
      <div>
        <SectionHeader title="Toolkit" command="$ printenv" />
        <dl className={styles.env}>
          {toolkit.map((t) => (
            <div key={t.key} className={styles.envRow}>
              <dt className={styles.envKey}>{t.key}</dt>
              <dd className={styles.envValue}>{t.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <SectionHeader title="Education" command="$ cat degree.txt" />
        <div className={styles.degree}>
          <div className={styles.degreeTitle}>
            {education.degree} <span className={styles.school}>| {education.school}</span>
          </div>
          <div className={styles.detail}>{education.detail}</div>
        </div>
        <p className={styles.languages}>{education.languages}</p>
      </div>
    </section>
  );
}

export default memo(About);
