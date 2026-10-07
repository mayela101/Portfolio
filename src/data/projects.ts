export interface Project {
  id: string;
  product: string;
  title: string;
  tag: string;
  /** Accent colour used for the swatch and the preview gradient. */
  hue: string;
  image: string;
  description: string;
}

const img = (file: string) => `${import.meta.env.BASE_URL}projects/${file}`;

export const projects: Project[] = [
  {
    id: 'brand-guardian',
    product: 'Brand Guardian',
    title: 'AI Feature Concept for Canva',
    tag: 'Product Management',
    hue: '#7BA2ED',
    image: img('brand-guardian.webp'),
    description:
      'A bilayer AI enforcement system for Canva Teams that catches brand violations before publish and resolves reviewer feedback inline.',
  },
  {
    id: 'bloom',
    product: 'Bloom',
    title: 'AI-Powered Journaling Companion',
    tag: 'Full Stack Web Development',
    hue: '#FFB6C1',
    image: img('bloom.webp'),
    description:
      'Designed a private, AI assisted journaling experience that helps people start writing faster and notice emotional patterns over time.',
  },
  {
    id: 'bytes',
    product: 'Bytes',
    title: 'Fictional Cat Cafe Website',
    tag: 'Full Stack Web Development',
    hue: '#ba81f7',
    image: img('bytes.webp'),
    description:
      'A fully responsive, tech-themed restaurant site built in React for the sheCodes (ACM-W) club at Cal Poly Pomona.',
  },
  {
    id: 'avian',
    product: 'Avian',
    title: 'AI Powered Travel Assistant',
    tag: 'Full Stack Web Development',
    hue: '#fab366',
    image: img('avian.webp'),
    description:
      'Personalized itineraries from destination, trip length, dietary needs, and accessibility requirements. Built in 24 hours at AthenaHacks 2025.',
  },
  {
    id: 'cryptobot',
    product: 'CryptoBot',
    title: 'Algorithmic Crypto Trading App',
    tag: 'In Progress · Mobile',
    hue: '#6085B3',
    image: img('cryptobot.webp'),
    description:
      'A full-stack algorithmic trading platform with a mobile app and AI assistant to monitor markets, test strategies, and automate trades.',
  },
];
