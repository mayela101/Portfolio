import { site } from '../data/site';
import { PillLink } from './ui';
import styles from './Footer.module.css';

const pad = (n: number) => String(n).padStart(2, '0');
const formatUptime = (s: number) => `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;

export default function Footer({ uptimeSeconds }: { uptimeSeconds: number }) {
  return (
    <footer className={styles.footer} aria-labelledby="contact">
      <div className={styles.top}>
        <div>
          <div className={styles.command} aria-hidden="true">
            $ ./contact.sh
          </div>
          <h2 id="contact" className={styles.heading}>
            {site.contactHeading}
          </h2>
        </div>
        <div className={styles.links}>
          <PillLink href={site.links.email}>Email</PillLink>
          <PillLink href={site.links.linkedin} target="_blank">
            LinkedIn
          </PillLink>
          <PillLink href={site.links.github} target="_blank">
            GitHub
          </PillLink>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>Made by {site.name} &lt;3</span>
        <span aria-hidden="true">session uptime {formatUptime(uptimeSeconds)}</span>
      </div>
    </footer>
  );
}
