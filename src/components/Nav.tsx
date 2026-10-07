import { site } from '../data/site';
import { Keycap } from './ui';
import styles from './Nav.module.css';

const LINKS = [
  { key: '1', label: 'experience', href: '#experience' },
  { key: '2', label: 'projects', href: '#projects' },
  { key: '3', label: 'contact', href: '#contact' },
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
              <Keycap>{l.key}</Keycap>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
