// Hero — matches the V3 "dense collage" project-card vibe:
// - Left: headline + index-card scrap on a stacked/striped paper backing,
//   with tape, a pin, and gold stars.
// - Right: polaroid with hiking photo on its own stacked/striped backing,
//   also pinned, taped, and sticker-ed.
// Both sides hover-lift the same way the project cards do.

function useTypewriter(text, speed = 70, startDelay = 200) {
  const [out, setOut] = React.useState('');
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    setOut(''); setDone(false);
    let i = 0;
    const t0 = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) { clearInterval(id); setDone(true); }
      }, speed);
    }, startDelay);
    return () => clearTimeout(t0);
  }, [text, speed, startDelay]);
  return [out, done];
}

function MailIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function Nav() {
  const navStyle = {
    position: 'sticky', top: 0, zIndex: 50,
    background: 'rgba(245,240,237,0.92)', backdropFilter: 'blur(10px)',
    padding: '18px 0',
  };
  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div><img src="mayela-name.png" alt="Mayela" style={{ height: 42, width: 'auto', display: 'block' }} /></div>
        <ul style={{ display: 'flex', gap: 40, listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ color: 'var(--fg-meta)', fontSize: 17, textDecoration: 'none' }}>Home</a></li>
          <li><a href="#projects" style={{ color: 'var(--fg-meta)', fontSize: 17, textDecoration: 'none' }}>Projects</a></li>
          <li><a href="#experience" style={{ color: 'var(--fg-meta)', fontSize: 17, textDecoration: 'none' }}>Experience</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  const [showCopyMessage, setShowCopyMessage] = React.useState(false);

  // ── Per-letter tuning ───────────────────────────────────────────────
  // anim:   which direction the letter enters from
  // height: size of the letter image (increase = bigger, decrease = smaller)
  // nudge:  marginRight in px — negative pulls the NEXT letter closer
  // delay:  animationDelay offset in seconds (on top of the stagger)
  const nameLetters = [
    // ── M ──
    { src: 'M.png',   alt: 'M', anim: 'letterFromLeft',    height: 'clamp(45px, 5vw, 52px)',   nudge: -7  },
    // ── a ──
    { src: 'a.png',   alt: 'a', anim: 'letterFromTop',     height: 'clamp(45px, 5vw, 52px)',   nudge: -18 },
    // ── y  (nudge pulls e closer too if needed) ──
    { src: 'y.png',   alt: 'y', anim: 'letterFromRight',   height: 'clamp(48px, 5.6vw, 58px)', nudge: 3  },
    // ── e ──
    { src: 'e.png',   alt: 'e', anim: 'letterFromBottom',  height: 'clamp(42px, 4.3vw, 45px)', nudge: 3  },
    // ── l ──
    { src: 'l.png',   alt: 'l', anim: 'letterFromTopLeft', height: 'clamp(55px, 6vw, 55px)',   nudge: 3  },
    // ── a (second) ──
    { src: 'a-2.png', alt: 'a', anim: 'letterFromRight',   height: 'clamp(45px, 5vw, 52px)',   nudge: 0  },
  ];
  // ────────────────────────────────────────────────────────────────────

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('connect.mayela@gmail.com').then(() => {
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000);
    });
  };

  return (
    <section id="home" style={{ padding: '130px 0 70px', position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 60,
          alignItems: 'flex-start',
        }}>

          {/* ────────── LEFT ────────── */}
          <div style={{ position: 'relative', paddingTop: 10 }}>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(40px, 5.2vw, 55px)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: 'var(--fg-display)',
              lineHeight: 1.05,
              margin: '0 0 45px 0',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'nowrap',
              gap: 10,
            }}>
              <span style={{ whiteSpace: 'nowrap' }}>Hi I'm</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
                {nameLetters.map(({ src, alt, anim, height, nudge }, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={alt}
                    style={{
                      height,                 /* ← per-letter size */
                      width: 'auto',
                      display: 'block',
                      marginRight: nudge,     /* ← per-letter spacing */
                      opacity: i === 0 ? undefined : 0, /* a–a invisible until fired */
                      /* M: 'both' = shows at scattered pos during its delay  */
                      /* a–a: 'forwards' = stays opacity:0 until animation starts */
                      animation: `${anim} 0.7s steps(2, end) ${i === 0 ? 'both' : 'forwards'}`,
                      animationDelay: `${0.1 + i * 0.55}s`,
                    }}
                  />
                ))}
              </span>
            </h1>

            {/* Index card bundle — its own "project card" */}
            <div className="hero-scrap hero-card-bundle" style={{
              position: 'relative',
              width: 'min(520px, 100%)',
              transform: 'rotate(0deg)',
              marginBottom: 68,
              marginLeft: 10,
            }}>
              {/* stacked paper backing (mirror of V3 project cards) */}
              <div aria-hidden style={{
                position: 'absolute',
                inset: '14px -18px 10px 20px',
                background: '#e8d9b8',
                transform: 'rotate(3deg)',
                boxShadow: '0 6px 18px rgba(40,35,50,0.15)',
                zIndex: -2,
              }} />
              {/* striped hue swatch behind card */}
              <div aria-hidden style={{
                position: 'absolute',
                inset: '8px 14px -4px -10px',
                background: '#7A946F',
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.28) 0 6px, transparent 6px 12px)',
                transform: 'rotate(-2deg)',
                zIndex: -1,
              }} />

              {/* plain outline placeholder for the index-card artwork */}
              <div className="hero-top-layer" style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                background: '#fbf6ec',
                border: '1.5px dashed rgba(45,63,94,0.45)',
                boxShadow: '0 10px 22px rgba(40,35,50,0.12)',
                padding: '28px 30px',
                zIndex: 1,
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11, letterSpacing: 1,
                  textTransform: 'uppercase',
                  color: 'rgba(45,63,94,0.55)',
                  marginBottom: 14,
                }}>
                  About Me
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13.5, lineHeight: '24px',
                  color: '#3a3428',
                }}>
                  Computer Science major building products that matter. I take ideas from 0 to 1, combining technical depth 
                  (ML/AI, complex logic, API architecture) with product thinking to ship solutions across fintech, restaurant 
                  tech, and beyond. I'm driven by the craft of building, where code meets creativity and user impact.
                </div>

            <div style={{ display: 'flex', gap: 20, marginTop: 24, position: 'relative' }}>
              <a href="https://linkedin.com/in/mayelaa" className="social-btn" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="https://github.com/mayela101" className="social-btn" aria-label="GitHub"><GitHubIcon /></a>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button 
                  onClick={handleCopyEmail}
                  className="social-btn" 
                  aria-label="Copy email"
                  type="button"
                >
                  <MailIcon size={22} />
                </button>
                {showCopyMessage && (
                  <div style={{
                    position: 'absolute',
                    left: '60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    whiteSpace: 'nowrap',
                    fontSize: 13,
                    color: '#3a3428',
                    fontFamily: 'var(--font-sans)',
                    animation: 'slideOut 2.4s ease-out forwards',
                    opacity: 0,
                  }}>
                    connect.mayela@gmail.com
                  </div>
                )}
              </div>
            </div>
            {showCopyMessage && (
              <div style={{
                marginTop: 14,
                padding: '10px 16px',
                background: 'rgba(122, 148, 111, 0.1)',
                border: '1px solid #7A946F',
                borderRadius: '6px',
                fontSize: 13,
                color: '#3a3428',
                animation: 'fadeInOut 2s ease-in-out',
              }}>
                ✓ Email copied to clipboard
              </div>
            )}
              </div>
            </div>



          </div>

          {/* ────────── RIGHT ────────── */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 30 }}>
            <div className="hero-scrap hero-polaroid-bundle" style={{
              position: 'relative',
              width: 340,
              transform: 'rotate(4deg)',
            }}>
              {/* stacked paper backing */}
              <div aria-hidden style={{
                position: 'absolute',
                inset: '10px -16px -10px 14px',
                background: '#e8d9b8',
                transform: 'rotate(-3deg)',
                boxShadow: '0 6px 18px rgba(40,35,50,0.15)',
                zIndex: -2,
              }} />
              {/* striped mustard swatch */}
              <div aria-hidden style={{
                position: 'absolute',
                inset: '4px 10px -4px -10px',
                background: '#8a5a3b',
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.26) 0 6px, transparent 6px 12px)',
                transform: 'rotate(3deg)',
                zIndex: -1,
              }} />

              {/* outline polaroid placeholder */}
              <div className="hero-top-layer" style={{
                position: 'relative',
                background: '#fbf8f3',
                padding: '16px 16px 56px',
                border: '1.5px dashed rgba(45,63,94,0.45)',
                boxShadow: '0 14px 34px rgba(40,35,50,0.2)',
                zIndex: 1,
              }}>
                <div style={{
                  aspectRatio: '3 / 4',
                  background: '#f0ebe0',
                  overflow: 'hidden',
                }}>
                  <img
                    src="mayela.jpg"
                    alt="Mayela"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <div style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'var(--scrap-navy)',
                  marginTop: 10,
                }}>
                  ✦✦✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        /* 3-frame stop-motion per letter: scattered → clustering → final */
        /* steps(2,end) = discrete jumps, no smooth interpolation        */
        @keyframes letterFromLeft {
          0%   { opacity: 1; transform: translate(-160px, -30px) rotate(-28deg); }
          50%  { opacity: 1; transform: translate(-65px,  -12px) rotate(-12deg); }
          100% { opacity: 1; transform: none; }
        }
        @keyframes letterFromTop {
          0%   { opacity: 1; transform: translate(60px, -110px) rotate(22deg); }
          50%  { opacity: 1; transform: translate(25px,  -45px) rotate(10deg); }
          100% { opacity: 1; transform: none; }
        }
        @keyframes letterFromRight {
          0%   { opacity: 1; transform: translate(180px,  35px) rotate(-20deg); }
          50%  { opacity: 1; transform: translate(75px,   14px) rotate(-9deg);  }
          100% { opacity: 1; transform: none; }
        }
        @keyframes letterFromBottom {
          0%   { opacity: 1; transform: translate(-50px, 100px) rotate(18deg); }
          50%  { opacity: 1; transform: translate(-20px,  42px) rotate(8deg);  }
          100% { opacity: 1; transform: none; }
        }
        @keyframes letterFromTopLeft {
          0%   { opacity: 1; transform: translate(-110px, -80px) rotate(-25deg); }
          50%  { opacity: 1; transform: translate(-46px,  -33px) rotate(-11deg); }
          100% { opacity: 1; transform: none; }
        }
        @keyframes slideOut {
          0% { 
            opacity: 0;
            transform: translateY(-50%) translateX(-10px);
          }
          20% { 
            opacity: 1;
          }
          80% { 
            opacity: 1;
          }
          100% { 
            opacity: 0;
            transform: translateY(-50%) translateX(10px);
          }
        }
        @keyframes fadeInOut { 
          0% { opacity: 0; } 
          10% { opacity: 1; } 
          90% { opacity: 1; } 
          100% { opacity: 0; } 
        }
        .hero-top-layer { transition: transform 0.35s ease; }
        .hero-card-bundle:hover .hero-top-layer {
          transform: rotate(-1.5deg) translateY(-6px) scale(1.01);
        }
        .hero-polaroid-bundle:hover .hero-top-layer {
          transform: rotate(1.5deg) translateY(-8px) scale(1.015);
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Hero, Nav, MailIcon, LinkedInIcon, GitHubIcon });
