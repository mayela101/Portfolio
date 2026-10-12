import { settings, site } from '../data/site';
import { useTypingKeyboard } from '../hooks/useTypingKeyboard';
import Hologram from './Hologram';
import Keyboard from './Keyboard';
import { PillLink } from './ui';
import styles from './Hero.module.css';

interface HeroProps {
  tick: number;
  caretOn: boolean;
  reducedMotion: boolean;
}

export default function Hero({ tick, caretOn, reducedMotion }: HeroProps) {
  const { text, pressed, lastKey } = useTypingKeyboard(site.heroPhrases, tick, reducedMotion);
  const caretStyle = { opacity: caretOn ? 1 : 0 };

  return (
    <header className={styles.hero}>
      <div className={styles.copy}>
        <div className={styles.badge}>
          <span className={styles.dot} style={caretStyle} />
          {site.currently}
        </div>
        <div className={styles.prompt} aria-hidden="true">
          &gt; whoami
        </div>
        <h1 className={styles.title}>Hi, I'm {site.name}!</h1>
        <p className={styles.intro}>{site.intro}</p>
        <div className={styles.actions}>
          <PillLink href="#experience" variant="solid">
            See experience →
          </PillLink>
          <PillLink href={site.resumeUrl} target="_blank">
            Résumé.pdf
          </PillLink>
        </div>
        <div className={styles.hint}>// the keyboard is live. go ahead, type something.</div>
      </div>

      <figure className={styles.figure}>
        <Hologram text={text} caretOn={caretOn} lastKey={lastKey} srText={site.heroPhrases.join(' ')} />
        <Keyboard pressed={pressed} tilt={settings.tiltKeyboard} />
        <figcaption className={styles.caption} aria-hidden="true">
          <span>fig.01: input device</span>
          <span>projection: active</span>
        </figcaption>
      </figure>
    </header>
  );
}
