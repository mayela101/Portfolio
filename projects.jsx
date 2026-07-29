// Projects — pinboard layout, 3 variants.
// Data matches Mayela's existing 5 projects + hues.
//
// Quick edit guide:
// - Add/remove cards in PROJECTS below.
// - Change card shape with aspectRatio in SquareProjectCard.
// - Change per-row layout in .projects-grid-two.
// - Change text density with .proj-desc-clamp and card padding.

// Data model for each project card.
// id: target page name (brand -> brand.html)
// tag/tag2: pill labels shown at the top of card
// title/product/desc: main card text
// hue/hueStrong: accent colors for decorative layer + product subtitle
// section: controls which heading group renders the card
const PROJECTS = [
  {
    id: 'brand', tag: 'Product Management',
    title: 'AI Feature Concept for Canva', product: 'Brand Guardian',
    desc: "A bilayer AI enforcement system for Canva Teams that catches brand violations before publish and resolves reviewer feedback inline, closing the gap between brand guidelines that exist and brand consistency that doesn't.",
    hue: '#7BA2ED', hueStrong: '#4e7bc9', img: 'assets/brand-cover.png',
    section: 'work',
  },
  {
    id: 'bloom', tag: 'Full Stack Web Development',
    title: 'AI-Powered Journaling Companion', product: 'Bloom',
    desc: "Designed a private, AI assisted journaling experience that helps people start writing faster and notice emotional patterns over time. Combined guided prompts, gentle analysis, and visual progress cues to build a supportive daily habit.",
    hue: '#FFB6C1', hueStrong: '#d97f8c', img: 'assets/bloom-cover.png',
    section: 'work',
  },
  {
    id: 'bytes', tag: 'Full Stack Web Development',
    title: 'Fictional Cat Cafe Website', product: 'Bytes',
    desc: "A fully responsive, tech-themed fictional restaurant website built as a semester-long SLP for the sheCodes (ACM-W) club at Cal Poly Pomona. The project focused on interactive UI design, cohesive branding, and real-world team-based frontend development using React.",
    hue: '#ba81f7', hueStrong: '#8a4fd0', img: 'assets/bytes-cover.png',
    section: 'work',
  },
  {
    id: 'avian', tag: 'Full Stack Web Development',
    title: 'AI Powered Travel Assistant', product: 'Avian',
    desc: "An AI-powered travel assistant that generates personalized itineraries based on user preferences like destination, trip length, dietary needs, and accessibility requirements. Built in 24 hours at AthenaHacks 2025 at USC.",
    hue: '#fab366', hueStrong: '#d48436', img: 'assets/avian-cover.png',
    section: 'work',
  },
  {
    id: 'cryptobot', tag: 'Mobile App Development', tag2: 'In Progress',
    title: 'Algorithmic Cryptocurrency Trading App', product: 'CryptoBot',
    desc: "A full-stack algorithmic cryptocurrency trading platform with a mobile app and AI-powered assistant that helps users monitor markets, test strategies, and automate trades with confidence.",
    hue: '#6085B3', hueStrong: '#36588a', img: 'assets/crypto-cover.jpg',
    section: 'works',
  },
];
function SquareProjectCard({ p, index }) {
// Card rotation angle for the scrapbook look.
// Set to 0 for straight cards.
const tilt = -2.4;

  // Hover state is used only for the pivoted rotation reveal.
  const [hovered, setHovered] = React.useState(false);

// Pin position in the top corner.
const pinStyle = { top: 14, right: 16 };

// Reserved for optional tape decoration if you want another visual layer later.
const tapeStyle = { top: -10, left: 24, transform: 'rotate(-8deg)' };

  return (
    <a href={`${p.id}.html`} style={{
      // Outer link wrapper behavior. Rotate controls the scrapbook angle.
      display: 'block',
      color: 'inherit',
      textDecoration: 'none',
      transform: `rotate(${tilt}deg)`,
      transition: 'transform 0.3s ease',
      transformOrigin: '100% 0%',
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <article style={{
        // Card frame sizing: aspectRatio is the main L x W shape control.
        // Increase first value (e.g. 1.4 / 1) = wider/shorter card.
        // Decrease toward 1 / 1 = more square card.
        position: 'relative',
        aspectRatio: '1.34 / 1',
        overflow: 'visible',
      }}>
        <div style={{
          // Back paper layer for the collage stack effect.
          position: 'absolute',
          inset: '10px -12px -12px 12px',
          background: '#e8d9b8',
          transform: `rotate(${tilt + 1.6}deg)`,
          boxShadow: '0 8px 20px rgba(40,35,50,0.14)',
          zIndex: 0,
        }} />

        <div style={{
          // Colored striped layer behind the main card.
          position: 'absolute',
          inset: '6px 8px -8px -8px',
          background: `${p.hue}88`,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.3) 0 6px, transparent 6px 12px)',
          transform: `rotate(${tilt - 1.1}deg)`,
          zIndex: 0,
        }} />

        <div style={{
          // Cover image backing. This stays solid and is revealed by the pivoting front card.
          position: 'absolute',
          inset: '12px 12px 10px 12px',
          overflow: 'hidden',
          borderRadius: 10,
          // Solid fill shown around image when objectFit is 'contain'.
          // Try: '#eef2ff', '#f8f3ea', '#ffffff', or `${p.hue}22`.
          
          boxShadow: '0 10px 22px rgba(40,35,50,0.12)',
          transform: `rotate(${tilt - 0.1}deg)`,
          zIndex: 1,
        }}>
          <img
            src={p.img}
            alt=""
            style={{
              // Image sizing behavior:
              // 'contain' = shows full screenshot (no crop, no distortion).
              // 'cover'   = fills box, may crop edges.
              // 'fill'    = stretches/distorts to fill box.
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              // Position of image inside the frame.
              // Options: 'center', 'top', 'bottom', 'left', 'right', '50% 40%', etc.
              objectPosition: 'center',
              // Adds breathing room around screenshot when using 'contain'.
              // Set to '0' if you want edge-to-edge.
              padding: '8px',
              display: 'block',
            }}
          />
        </div>

        <div style={{
          // Main card surface.
          // Padding is the key "whitespace" control inside each card.
          position: 'relative',
          height: '100%',
        background: '#fbf6ec',
        border: '1px solid rgba(70,58,46,0.18)',
        boxShadow: '0 10px 24px rgba(40,35,50,0.14)',
        padding: '35px 20px 12px',
        overflow: 'hidden',
          zIndex: 1,
          transformOrigin: '100% 0%',
          transform: hovered
            ? 'translateY(-3px) rotate(80deg)'
            : 'translateY(0) rotate(0deg)',
          transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.55s ease',
      }}>


        <div style={{
          // Push-pin decoration position comes from pinStyle.
          position: 'absolute',
          ...pinStyle,
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #6a86b8 0%, #2d3f5e 60%, #171f30 100%)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.25), inset -1px -1px 2px rgba(0,0,0,0.3)',
          pointerEvents: 'none',
          zIndex: 5,
        }} />

        <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Content stack spacing; margin/gap changes visual density. */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 6 }}>
            <span className="proj-tag small">{p.tag}</span>
            {p.tag2 && <span className="proj-tag small">{p.tag2}</span>}
          </div>

          <h3 style={{
            // Title typography.
            margin: '1px 0 3px',
            fontFamily: 'var(--font-serif)',
            fontSize: 30,
            lineHeight: 1.15,
            color: 'var(--fg-display)',
            fontWeight: 600,
          }}>
            {p.title}
          </h3>

          <p style={{
            // Subtitle/product line under the title.
            margin: '0 0 6px',
            color: p.hueStrong,
            fontStyle: 'italic',
            fontSize: 24,
            fontFamily: 'var(--font-serif)',
            lineHeight: 1.15,
          }}>
            | {p.product}
          </p>

          <p className="proj-desc-clamp" style={{
            // Body copy. flex: 1 helps text fill available card height.
            margin: 0,
            fontSize: 16,
            lineHeight: 1.5,
            color: '#2f2a22',
            flex: 1,
          }}>
            {p.desc}
          </p>
        </div>
        </div>
      </article>
    </a>
  );
}

function ProjectsSection() {
  // Split cards into separate visual groups/headers.
  const works = PROJECTS.filter(p => p.section === 'work');
  const inProgress = PROJECTS.filter(p => p.section === 'works');

  // Reusable heading block for each group title.
  // marginBottom controls spacing between heading and cards.
  // marginTop controls spacing before heading.
  const sectionHeading = (text) => (
    <div style={{ position: 'relative', marginBottom: 30, marginTop: 40 }}>
      <h2 style={{
        // Group heading typography.
        fontFamily: 'var(--font-serif)',
        fontSize: 40, fontWeight: 600, fontStyle: 'italic',
        color: 'var(--fg-display)',
        margin: 0,
        display: 'inline-block',
        position: 'relative',
      }}>
        {text}
        <img src="assets/scrap-goldstars.png" alt=""
             // Decorative stars near heading title.
             // Move with top/right, resize with width.
             style={{ position: 'absolute', top: -20, right: -60, width: 70, opacity: 0.85,
                      pointerEvents: 'none' }} />
      </h2>
    </div>
  );

  return (
    // Section spacing in the full page flow.
    // Top value = space above projects section.
    // Bottom value = space below projects section.
    <section id="projects" style={{ padding: '20px 0 60px' }}>
      <div className="container">
        {sectionHeading('My Work')}
        <div className="projects-grid-two">
          {/* Render each card in "My Work" */}
          {works.map((p, i) => <SquareProjectCard key={p.id} p={p} index={i} />)}
        </div>

        {inProgress.length > 0 && (
          <>
            {sectionHeading('In the Works')}
            <div className="projects-grid-two">
              {/* Render each card in "In the Works" */}
              {inProgress.map((p, i) => <SquareProjectCard key={p.id} p={p} index={i + works.length} />)}
            </div>
          </>
        )}
      </div>

      <style>{`
        /* Grid layout for project cards */
        .projects-grid-two {
          display: grid;
          /* Number of cards per row */
          grid-template-columns: repeat(2, minmax(0, 1fr));
          /* Space between cards */
          gap: 100px;
          /* Total row width cap; keeps cards from getting too large */
          max-width: 1300px;
          /* Left alignment with section headings */
          margin-left: 0;
          margin-right: auto;
          margin-bottom: 16px;
        }

        /* Pill tags at top of each card */
        .proj-tag {
          display: inline-block;
          padding: 10px 14px;
          border: 1.5px solid rgba(20, 20, 20, 0.85);
          border-radius: 999px;
          font-size: 11px;
          line-height: 1;
          letter-spacing: 0.2px;
          color: var(--fg-body);
          background: rgba(255, 255, 255, 0.32);
          margin-right: 6px;
        }
        .proj-tag.small { font-size: 14px; padding: 9px 12px; }

        /* Description crop control */
        .proj-desc-clamp {
          display: -webkit-box;
          /* Raise this for more lines, lower it for tighter cards */
          -webkit-line-clamp: 8;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Mobile: switch to one card per row */
        @media (max-width: 920px) {
          .projects-grid-two {
            /* Stack cards on small screens */
            grid-template-columns: 1fr;
            /* Keep single cards from becoming too wide on tablets */
            max-width: 460px;
            gap: 18px;
          }
        }
      `}</style>
    </section>
  );
}

// Expose component/data globally because index.html mounts sections from window.
Object.assign(window, { ProjectsSection, PROJECTS });
