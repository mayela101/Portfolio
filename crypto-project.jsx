
function CryptoNav() {
  const navStyle = {
    position: 'sticky', top: 0, zIndex: 50,
    background: 'rgba(245,240,237,0.92)', backdropFilter: 'blur(10px)',
    padding: '18px 0',
  };
  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, color: 'var(--fg-display)' }}>
          <a href="index.html" style={{ textDecoration: 'none', display: 'block' }}><img src="mayela-name.png" alt="Mayela" style={{ height: 42, width: 'auto', display: 'block' }} /></a>
        </div>
        <ul style={{ display: 'flex', gap: 40, listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="index.html#home" style={{ color: 'var(--fg-meta)', fontSize: 17, textDecoration: 'none' }}>Home</a></li>
          <li><a href="index.html#projects" style={{ color: 'var(--fg-meta)', fontSize: 17, textDecoration: 'none' }}>Projects</a></li>
          <li><a href="index.html#experience" style={{ color: 'var(--fg-meta)', fontSize: 17, textDecoration: 'none' }}>Experience</a></li>
        </ul>
      </div>
    </nav>
  );
}

function CryptoProject() {
  const [activeImg, setActiveImg] = React.useState(null);
  const accent = '#36588a';

  return (
    <div style={{ background: '#f5f0ed', minHeight: '100vh' }}>
      <CryptoNav />

      <section style={{ padding: '80px 40px 60px', position: 'relative' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <a href="index.html" style={{ color: 'var(--fg-meta)', fontSize: 15, textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>
            ← Back to Portfolio
          </a>

          {/* Hero card */}
          <div style={{ position: 'relative', width: 'min(600px, 100%)', marginBottom: 60 }}>
            <div aria-hidden style={{ position: 'absolute', inset: '14px -18px 10px 20px', background: '#e8d9b8', transform: 'rotate(2deg)', boxShadow: '0 6px 18px rgba(40,35,50,0.15)', zIndex: -2 }} />
            <div aria-hidden style={{ position: 'absolute', inset: '8px 14px -4px -10px', background: accent, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.28) 0 6px, transparent 6px 12px)', transform: 'rotate(-1deg)', zIndex: -1 }} />
            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '30px', zIndex: 1 }}>
              <div style={{ position: 'absolute', width: 16, height: 16, background: accent, borderRadius: '50%', top: 14, right: 20, boxShadow: '0 2px 4px rgba(0,0,0,0.2)', zIndex: 10 }} />
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', lineHeight: 1.2, margin: '0 0 8px 0' }}>Algorithmic Cryptocurrency Trading App</h1>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic', fontWeight: 400, color: accent, margin: '0 0 20px 0' }}>| CryptoBot</h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '22px', color: '#3a3428', margin: 0 }}>
                A full-stack algorithmic cryptocurrency trading platform with a mobile app and AI-powered assistant that helps users monitor markets, test strategies, and automate trades with confidence. The system combines real-time data, strategy automation, machine learning–based risk analysis, and conversational AI in a scalable, production-style architecture.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
                <a href="https://github.com/viri29/crypto-trading-bot" target="_blank" rel="noopener noreferrer" className="crypto-pill-btn">
                  Check out the Code
                </a>
              </div>
            </div>
          </div>

          {/* Detail cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30, marginBottom: 80 }}>
            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(-0.5deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(1deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'var(--fg-display)', margin: '0 0 2px 0' }}>Role</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Frontend &amp; AI Integration Engineer</p>
            </div>

            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(0.5deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(-1deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'var(--fg-display)', margin: '0 0 2px 0' }}>Tech Stack</h3>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '0 0 0px 0' }}>Frontend</h4>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>React Native (iOS &amp; Android)</p>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '8px 0 0px 0' }}>Backend &amp; Database</h4>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>
                FastAPI (Python)<br />
                PostgreSQL + TimescaleDB
              </p>
            </div>

            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(-0.3deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(1.5deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '0 0 0px 0' }}>ML &amp; AI</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>
                scikit-learn<br />
                Claude Anthropic API
              </p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '8px 0 0px 0' }}>Infrastructure</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>
                Docker<br />
                AWS<br />
                Redis
              </p>
            </div>
          </div>

          {/* Problem Statement */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Problem Statement</h2>
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
              Crypto trading tools are fragmented and unintuitive, forcing users to switch between dashboards, scripts, and external research to make decisions. New and intermediate traders struggle to understand strategy performance, risk exposure, and market signals, often leading to emotional or uninformed trades.
            </p>
          </div>

          {/* Solution */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Solution</h2>
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
              This platform unifies trading automation, simulation, analytics, and guidance into a single experience. Users can safely experiment with strategies through paper trading and backtesting while an AI chatbot explains market trends, answers questions, and provides context-aware insights, helping users make informed, data-driven decisions before deploying real capital.
            </p>
          </div>

          {/* Core Features */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Core Features</h2>
            <ul style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800, paddingLeft: 20 }}>
              <li>AI Trading Assistant (Chatbot)</li>
              <li>Real-time Market Tracking &amp; Alerts</li>
              <li>Automated Trading Strategies with customizable parameters</li>
              <li>Paper Trading Mode</li>
              <li>Backtesting Engine</li>
              <li>ML-Based Fraud &amp; Risk Detection</li>
              <li>Portfolio Analytics &amp; Visualization</li>
              <li>Scalable Full Stack Architecture using FastAPI, TimescaleDB, Redis, Docker and AWS</li>
            </ul>
          </div>

          {/* Design Mockups */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Design Mockup (Sketches)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
              {[
                { src: 'crypto-sketch-1.png', alt: 'CryptoBot Sketch 1' },
                { src: 'crypto-sketch-2.png', alt: 'CryptoBot Sketch 2' },
              ].map(({ src, alt }, i) => (
                <div
                  key={src}
                  className="crypto-photo-card"
                  onClick={() => setActiveImg(src)}
                  style={{
                    position: 'relative',
                    background: '#2E2D2D',
                    border: '1.5px dashed rgba(45,63,94,0.45)',
                    padding: 12,
                    transform: `rotate(${i % 2 ? 1 : -1}deg)`,
                    boxShadow: '0 10px 22px rgba(40,35,50,0.12)',
                  }}
                >
                  <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Current Product UI */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Current Product UI</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {[
                { src: 'crypto-screenshot-2.png', alt: 'CryptoBot Log In Page' },
                { src: '/assets/crypto-cover.jpg', alt: 'CryptoBot Portfolio Tab' },
                { src: 'crypto-screenshot-3.jpg', alt: 'CryptoBot Trading History Tab' },
              ].map(({ src, alt }, i) => (
                <div
                  key={src}
                  className="crypto-photo-card"
                  onClick={() => setActiveImg(src)}
                  style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', padding: 8, transform: `rotate(${i % 2 ? 1 : -1}deg)` }}
                >
                  <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom links */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://github.com/viri29/crypto-trading-bot" target="_blank" rel="noopener noreferrer" className="crypto-pill-btn">
                Check out the Code
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        .crypto-pill-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 22px;
          border: 1.5px solid #2d3f5e;
          border-radius: 999px;
          background: transparent;
          color: #2d3f5e;
          text-decoration: none;
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1;
          transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
        }
        .crypto-pill-btn:hover {
          background: #36588a;
          border-color: #36588a;
          color: #fbf6ec;
        }
        .crypto-photo-card {
          cursor: zoom-in;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .crypto-photo-card:hover {
          transform: rotate(0deg) scale(1.04) translateY(-6px) !important;
          box-shadow: 0 18px 36px rgba(40,35,50,0.22) !important;
          z-index: 2;
        }
        @media (max-width: 768px) { .container { padding: 0 20px; } }
      `}</style>

      {activeImg && (
        <div
          onClick={() => setActiveImg(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(30,24,20,0.82)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={activeImg}
            alt="Enlarged view"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '90vw', maxHeight: '88vh',
              objectFit: 'contain', borderRadius: 4,
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
              cursor: 'default',
            }}
          />
          <button
            type="button"
            onClick={() => setActiveImg(null)}
            style={{
              position: 'fixed', top: 20, right: 28,
              background: 'none', border: 'none',
              color: '#fbf6ec', fontSize: 32, cursor: 'pointer',
              lineHeight: 1, opacity: 0.8,
            }}
          >×</button>
        </div>
      )}

      <Footer />
    </div>
  );
}
