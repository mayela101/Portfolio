import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './ui.module.css';

type PillLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'solid' | 'outline' };

/** Rounded pill button used for every call to action. */
export function PillLink({ variant = 'outline', className, ...rest }: PillLinkProps) {
  const external = rest.target === '_blank' ? { rel: 'noopener noreferrer' } : {};
  return <a {...external} {...rest} className={[styles.pill, styles[variant], className].filter(Boolean).join(' ')} />;
}

/** Small outlined label, e.g. "Research" or "Product Management". */
export function Tag({ children }: { children: ReactNode }) {
  return <span className={styles.tag}>{children}</span>;
}

/** Section title with a shell-command flourish on the right. */
export function SectionHeader({ id, title, command }: { id?: string; title: string; command: string }) {
  return (
    <div className={styles.sectionHeader}>
      <h2 id={id} className={styles.sectionTitle}>
        {title}
      </h2>
      <span className={styles.command} aria-hidden="true">
        {command}
      </span>
    </div>
  );
}

/** Tiny keycap glyph used in the nav. */
export function Keycap({ children }: { children: ReactNode }) {
  return (
    <span className={styles.keycap} aria-hidden="true">
      {children}
    </span>
  );
}
