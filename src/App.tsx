import { settings } from './data/site';
import { useTicker } from './hooks/useTicker';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ExperienceLog from './components/ExperienceLog';
import ProjectList from './components/ProjectList';
import About from './components/About';
import Footer from './components/Footer';
import styles from './App.module.css';

export default function App() {
  const tick = useTicker(settings.tickMs);
  const reducedMotion = usePrefersReducedMotion();
  const caretOn = reducedMotion || Math.floor(tick / 5) % 2 === 0;
  const uptimeSeconds = Math.floor((tick * settings.tickMs) / 1000);

  return (
    <div id="top" className={styles.page}>
      <Nav />
      <main>
        <Hero tick={tick} caretOn={caretOn} reducedMotion={reducedMotion} />
        <ExperienceLog />
        <ProjectList />
        <About />
      </main>
      <Footer uptimeSeconds={uptimeSeconds} />
    </div>
  );
}
