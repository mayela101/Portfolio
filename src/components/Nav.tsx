import { site } from '../data/site';
import styles from './Nav.module.css';

const LINKS = [
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
];

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <a href="#top" className={styles.prompt}>
        {site.handle}
        <span className={styles.at}>@</span>portfolio<span className={styles.path}>:~$</span>
      </a>
      <ul className={styles.links}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
