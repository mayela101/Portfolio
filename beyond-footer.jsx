// Beyond Work + Footer — custom rendered scrapbook journal with page-turn animation.

const JOURNAL_SPREADS = [
  {
    id: 'ingram',
    label: 'Ingram Micro',
    subtitle: 'Internship Moments',
    left: {
      title: 'Photo Spot',
      image: '',
      caption: 'Drop your Ingram photo here',
      notes: ['Team wins', 'Build day moments'],
    },
    right: {
      title: 'Highlights',
      points: [
        '99.9% pipeline uptime across 10M+ daily transactions',
        'Terraform automation cut deployment time by 60%',
        'Debugged distributed failures with Python + SQL tooling',
      ],
    },
    stripe: '#8a5a3b',
  },
  {
    id: 'shecodes',
    label: 'sheCodes / ACM-W',
    subtitle: 'Tech Product Lead',
    left: {
      title: 'Photo Spot',
      image: '',
      caption: 'Drop your sheCodes team photo here',
      notes: ['Demo day', 'Sprint planning'],
    },
    right: {
      title: 'Highlights',
      points: [
        'Led delivery of a full-stack app across 4 Agile sprints',
        'Coordinated 8 developers and designers end-to-end',
        'Presented technical decisions to non-technical stakeholders',
      ],
    },
    stripe: '#7A946F',
  },
  {
    id: 'personal',
    label: 'Personal',
    subtitle: 'Outside Of Tech',
    left: {
      title: 'Photo Spot',
      image: '',
      caption: 'Drop a personal scrapbook photo here',
      notes: ['Painting', 'Reading', 'Good food hunts'],
    },
    right: {
      title: 'What Keeps Me Inspired',
      points: [
        'Creative hobbies that sharpen product intuition',
        'Books and stories that broaden perspective',
        'Small daily rituals that keep me grounded',
      ],
    },
    stripe: '#6085B3',
  },
];

function BeyondWork() {
  const [page, setPage] = React.useState(0);
  const [turnDir, setTurnDir] = React.useState('next');
  const [incoming, setIncoming] = React.useState(0);
  const [isTurning, setIsTurning] = React.useState(false);
  const spread = JOURNAL_SPREADS[page];

  const prevPage = () => {
    if (isTurning) return;
    const nextIndex = (page - 1 + JOURNAL_SPREADS.length) % JOURNAL_SPREADS.length;
    setTurnDir('prev');
    setIncoming(nextIndex);
    setIsTurning(true);
  };

  const nextPage = () => {
    if (isTurning) return;
    const nextIndex = (page + 1) % JOURNAL_SPREADS.length;
    setTurnDir('next');
    setIncoming(nextIndex);
    setIsTurning(true);
  };

  const handleTurnEnd = () => {
    setPage(incoming);
    setIsTurning(false);
  };

  const target = JOURNAL_SPREADS[incoming];
  const leftSpread = isTurning && turnDir === 'prev' ? target : spread;
  const rightSpread = isTurning && turnDir === 'next' ? target : spread;

  const renderLeftPage = (s, className = '') => (
    <article className={`journal-page left-page ${className}`} style={{ transform: 'rotate(-0.8deg)' }}>
      <div className="journal-label-row">
        <span className="journal-pill">{s.label}</span>
        <span className="journal-subtitle">{s.subtitle}</span>
      </div>
      <h3 className="journal-page-title">{s.left.title}</h3>

      <div className="journal-photo-frame">
        <div className="journal-photo-tape" />
        {s.left.image ? (
          <img src={s.left.image} alt={s.left.caption} className="journal-photo" />
        ) : (
          <div className="journal-photo-placeholder">{s.left.caption}</div>
        )}
      </div>

      <ul className="journal-mini-list">
        {s.left.notes.map((note, i) => <li key={i}>{note}</li>)}
      </ul>

      <div className="journal-pin pin-left" />
    </article>
  );

  const renderRightPage = (s, className = '') => (
    <article className={`journal-page right-page ${className}`} style={{ transform: 'rotate(0.8deg)' }}>
      <h3 className="journal-page-title">{s.right.title}</h3>
      <ul className="journal-highlight-list">
        {s.right.points.map((point, i) => <li key={i}>{point}</li>)}
      </ul>

      <div className="journal-pin pin-right" />
    </article>
  );

  return (
    <section id="beyond" style={{ padding: '60px 0 80px', position: 'relative' }}>
      <div className="container">
        <div style={{ position: 'relative', marginBottom: 24 }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: 40, fontWeight: 600, color: 'var(--fg-display)',
            margin: 0, display: 'inline-block', position: 'relative',
          }}>
            Beyond Work
          </h2>
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--fg-secondary)', maxWidth: 760, marginBottom: 40 }}>
          Outside of tech, you will find snapshots from work and life that shape how I build.
          Flip through this journal for Ingram, sheCodes, and personal moments, then swap in
          your own photos and highlights whenever you want.
        </p>

        <div className="journal-book-wrap">
          <img src="assets/scrap-goldstars.png" alt=""
               style={{ position: 'absolute', top: -34, right: 16, width: 100,
                        pointerEvents: 'none', transform: 'rotate(12deg)', opacity: 0.88, zIndex: 7 }} />

          <div className="journal-book">
            <div className="journal-back-shadow" />

            <div className="journal-spine" />

            <div className="journal-pages-stage">
              <div className="journal-pages-grid">
                {renderLeftPage(leftSpread)}
                {renderRightPage(rightSpread)}
              </div>

              {isTurning && turnDir === 'next' && (
                <div className="journal-turn-sheet turn-next" onAnimationEnd={handleTurnEnd}>
                  <div className="journal-turn-face front">
                    {renderRightPage(spread, 'turning')}
                  </div>
                  <div className="journal-turn-face back">
                    <div className="journal-turn-back" />
                  </div>
                </div>
              )}

              {isTurning && turnDir === 'prev' && (
                <div className="journal-turn-sheet turn-prev" onAnimationEnd={handleTurnEnd}>
                  <div className="journal-turn-face front">
                    {renderLeftPage(spread, 'turning')}
                  </div>
                  <div className="journal-turn-face back">
                    <div className="journal-turn-back" />
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              className="page-corner-hit page-corner-prev"
              onClick={prevPage}
              disabled={isTurning}
              aria-label="Flip to previous spread"
            />
            <button
              type="button"
              className="page-corner-hit page-corner-next"
              onClick={nextPage}
              disabled={isTurning}
              aria-label="Flip to next spread"
            />
          </div>

          <div className="journal-controls">
            <button type="button" onClick={prevPage} className="journal-btn" aria-label="Previous journal spread" disabled={isTurning}>Prev</button>
            <span className="journal-counter">{page + 1} / {JOURNAL_SPREADS.length}</span>
            <button type="button" onClick={nextPage} className="journal-btn" aria-label="Next journal spread" disabled={isTurning}>Next</button>
          </div>
        </div>
      </div>

      <style>{`
        .journal-book-wrap {
          position: relative;
          max-width: 980px;
          margin: 20px auto 0;
          padding-bottom: 56px;
        }

        .journal-book {
          position: relative;
          background: linear-gradient(145deg, #8a5a3b, #6f462f);
          border: 1px solid rgba(80, 66, 55, 0.22);
          box-shadow: 0 18px 36px rgba(40,35,50,0.22);
          min-height: 520px;
          padding: 30px 30px 28px;
          overflow: visible;
          transform-style: preserve-3d;
        }

        @keyframes pageTurnRight {
          0% { transform: perspective(1400px) rotateY(0deg); }
          100% { transform: perspective(1400px) rotateY(-175deg); }
        }

        @keyframes pageTurnLeft {
          0% { transform: perspective(1400px) rotateY(0deg); }
          100% { transform: perspective(1400px) rotateY(175deg); }
        }

        .journal-back-shadow {
          position: absolute;
          inset: 14px -14px -14px 14px;
          background: rgba(104, 63, 40, 0.88);
          z-index: -1;
        }

        .journal-spine {
          position: absolute;
          top: 14px;
          bottom: 14px;
          left: 50%;
          width: 18px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, rgba(90,75,60,0.26), rgba(250,246,238,0.74), rgba(90,75,60,0.26));
          pointer-events: none;
        }

        .journal-pages-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          height: 100%;
        }

        .journal-pages-stage {
          position: relative;
          perspective: 1600px;
        }

        .journal-page {
          position: relative;
          background: #fbf6ec;
          border: 1px solid rgba(80,66,55,0.2);
          box-shadow: 0 8px 20px rgba(40,35,50,0.12);
          padding: 20px;
          height: 520px;
          min-height: 520px;
          overflow: hidden;
          z-index: 2;
        }

        .journal-turn-sheet {
          position: absolute;
          top: 0;
          bottom: 0;
          width: calc((100% - 28px) / 2);
          z-index: 8;
          pointer-events: none;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .journal-turn-sheet .journal-page.turning {
          height: 100%;
          transform: none !important;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .journal-turn-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .journal-turn-face.back {
          transform: rotateY(180deg);
        }

        .journal-turn-back {
          height: 100%;
          border: 1px solid rgba(55, 33, 22, 0.5);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), inset -16px 0 24px rgba(80,60,35,0.16);
          background: linear-gradient(160deg, #efe6d7, #e2d4bd);
        }

        .journal-turn-sheet.turn-next {
          right: 0;
          transform-origin: left center;
          animation: pageTurnRight 640ms cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .journal-turn-sheet.turn-prev {
          left: 0;
          transform-origin: right center;
          animation: pageTurnLeft 640ms cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .journal-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 36px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.04), transparent);
          pointer-events: none;
        }

        .journal-label-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .journal-pill {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1.2px solid rgba(30,30,30,0.7);
          background: rgba(255,255,255,0.35);
          font-size: 12px;
        }

        .journal-subtitle {
          font-size: 13px;
          color: #5f564b;
          font-style: italic;
        }

        .journal-page-title {
          margin: 4px 0 12px;
          font-family: var(--font-serif);
          font-size: 24px;
          color: var(--fg-display);
          font-style: italic;
          line-height: 1.1;
          position: relative;
          z-index: 2;
        }

        .journal-photo-frame {
          background: #fbf8f3;
          padding: 10px 10px 28px;
          border: 1px solid rgba(80,66,55,0.24);
          box-shadow: 0 8px 20px rgba(40,35,50,0.14);
          margin-bottom: 12px;
          position: relative;
          z-index: 2;
        }

        .journal-photo-tape {
          position: absolute;
          top: -10px;
          left: 50%;
          width: 84px;
          height: 20px;
          transform: translateX(-50%) rotate(-2deg);
          background: repeating-linear-gradient(
            90deg,
            rgba(255,255,255,0.48) 0 8px,
            rgba(240,235,225,0.26) 8px 16px
          );
          border: 1px solid rgba(120, 108, 90, 0.2);
          box-shadow: 0 2px 5px rgba(0,0,0,0.08);
          opacity: 0.78;
          pointer-events: none;
        }

        .journal-photo {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
          background: #ece7de;
        }

        .journal-photo-placeholder {
          width: 100%;
          aspect-ratio: 4 / 3;
          display: grid;
          place-items: center;
          text-align: center;
          font-size: 13px;
          color: #6e655a;
          background: #ece7de;
          border: 1px dashed rgba(70,62,52,0.4);
          padding: 10px;
        }

        .journal-mini-list,
        .journal-highlight-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 8px;
          position: relative;
          z-index: 2;
        }

        .journal-mini-list li,
        .journal-highlight-list li {
          position: relative;
          padding-left: 18px;
          line-height: 1.45;
          color: #2f2a22;
          font-size: 14px;
        }

        .journal-mini-list li::before,
        .journal-highlight-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          top: 0;
          color: #7a5a42;
          font-size: 18px;
          line-height: 1;
        }

        .journal-pin {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #6a86b8 0%, #2d3f5e 60%, #171f30 100%);
          box-shadow: 0 2px 4px rgba(0,0,0,0.24), inset -1px -1px 2px rgba(0,0,0,0.25);
          pointer-events: none;
          z-index: 3;
        }

        .pin-left { top: 14px; right: 14px; }
        .pin-right { top: 14px; left: 14px; }

        .journal-controls {
          position: static;
          margin: 12px auto 0;
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 18px;
          background: transparent;
          border: none;
          padding: 0;
          box-shadow: none;
        }

        .journal-btn {
          border: none;
          background: transparent;
          color: #2f2a22;
          border-radius: 0;
          padding: 2px 0;
          cursor: pointer;
          font-size: 16px;
          font-family: var(--font-serif);
          font-style: italic;
          transition: all 0.2s ease;
        }

        .journal-btn:disabled {
          opacity: 0.5;
          cursor: default;
        }

        .journal-btn:hover {
          color: #8a5a3b;
          transform: translateY(-1px);
        }

        .journal-counter {
          font-size: 13px;
          color: #5f564b;
          min-width: 42px;
          text-align: center;
        }

        .page-corner-hit {
          position: absolute;
          width: 56px;
          height: 56px;
          border: none;
          background: transparent;
          z-index: 9;
          cursor: pointer;
          padding: 0;
        }

        .page-corner-hit::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.72;
        }

        .page-corner-prev {
          left: 28px;
          bottom: 30px;
        }

        .page-corner-prev::before {
          left: 0;
          bottom: 0;
          border-left: 28px solid rgba(138, 90, 59, 0.25);
          border-top: 28px solid transparent;
        }

        .page-corner-next {
          right: 28px;
          bottom: 30px;
        }

        .page-corner-next::before {
          right: 0;
          bottom: 0;
          border-right: 28px solid rgba(138, 90, 59, 0.25);
          border-top: 28px solid transparent;
        }

        .page-corner-hit:hover::before {
          transform: translateY(-2px) scale(1.04);
          opacity: 0.95;
        }

        .page-corner-hit:disabled {
          cursor: default;
        }

        .page-corner-hit:disabled::before {
          opacity: 0.35;
        }

        @media (max-width: 930px) {
          .journal-book {
            min-height: unset;
            padding: 20px 20px 18px;
          }

          .journal-spine {
            display: none;
          }

          .journal-pages-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .journal-page {
            height: auto;
            min-height: 0;
          }

          .journal-controls {
            margin: 12px auto 0;
          }

          .page-corner-prev,
          .page-corner-next {
            bottom: 14px;
          }
        }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '60px 0 50px', borderTop: 'none' }}>
      <div className="container">
        <div style={{
          display: 'flex', gap: 40, paddingBottom: 24,
          borderBottom: '1px solid var(--hairline)',
        }}>
          <a href="#home" style={{ color: 'var(--fg-meta)', fontSize: 16, fontWeight: 500 }}>Home</a>
          <a href="#projects" style={{ color: 'var(--fg-meta)', fontSize: 16, fontWeight: 500 }}>Projects</a>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          fontSize: 26, fontWeight: 600, color: 'var(--fg-display)',
          margin: '30px 0 14px',
        }}>Contact Me</h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--fg-meta)', fontSize: 16, marginBottom: 22 }}>
          <MailIcon size={16} />
          <span>connect.mayela@gmail.com</span>
        </div>

        <div style={{ display: 'flex', gap: 14, marginBottom: 28 }}>
          <a href="https://linkedin.com/in/mayelaa" className="social-btn" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href="https://github.com/mayela101" className="social-btn" aria-label="GitHub"><GitHubIcon /></a>
        </div>

        <p style={{ fontSize: 14, color: 'var(--fg-label)', margin: 0 }}>
          Made by Mayela &lt;3
        </p>
      </div>
    </footer>
  );
}

Object.assign(window, { BeyondWork, Footer });
