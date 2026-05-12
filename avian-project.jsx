
function AvianNav() {
  const navStyle = {
    position: 'sticky', top: 0, zIndex: 50,
    background: 'rgba(245,240,237,0.92)', backdropFilter: 'blur(10px)',
    padding: '18px 0', borderBottom: '1px solid rgba(0,0,0,0.04)',
  };
  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, color: 'var(--fg-display)' }}>
          <a href="index.html" style={{ textDecoration: 'none', color: 'inherit' }}>Mayela</a>
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

function AvianProject() {
  const accent = '#d48436';

  return (
    <div style={{ background: '#f5f0ed', minHeight: '100vh' }}>
      <AvianNav />

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
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', lineHeight: 1.2, margin: '0 0 8px 0' }}>AI-Powered Travel Assistant</h1>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic', fontWeight: 400, color: accent, margin: '0 0 20px 0' }}>| Avian</h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '22px', color: '#3a3428', margin: 0 }}>
                An AI-powered travel assistant that generates personalized itineraries based on user preferences like destination, trip length, dietary needs, and accessibility requirements. Built in 24 hours at AthenaHacks 2025 at USC to simplify travel planning with intelligent, tailored recommendations.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
                <a href="https://github.com/mayela101/avian" target="_blank" rel="noopener noreferrer" className="avian-pill-btn">
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
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Full Stack Developer</p>
            </div>

            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(0.5deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(-1deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'var(--fg-display)', margin: '0 0 2px 0' }}>Tech Stack</h3>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '0 0 0px 0' }}>Frontend</h4>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>
                React<br />
                Bootstrap / CSS / JavaScript
              </p>
            </div>

            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(-0.3deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(1.5deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '0 0 0px 0' }}>Backend</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Axios</p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '8px 0 0px 0' }}>AI</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>OpenAI API (GPT-4)</p>
            </div>
          </div>

          {/* Problem Statement */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Problem Statement</h2>
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
              Travel planning is often overwhelming and time-consuming, requiring users to juggle multiple sources for destination research, activity planning, and personalized recommendations. Many travelers struggle to create itineraries that accommodate dietary restrictions, accessibility needs, and personal preferences within limited timeframes.
            </p>
          </div>

          {/* Solution */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Solution</h2>
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
              Avian streamlines travel planning through an AI-powered form-based interface that generates personalized day-by-day itineraries in seconds. By collecting key preferences upfront and leveraging GPT-4, the application delivers tailored recommendations that account for dietary needs, accessibility requirements, and trip duration, with easy sharing and export options.
            </p>
          </div>

          {/* Core Features */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Core Features</h2>
            <ul style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800, paddingLeft: 20 }}>
              <li>AI-powered personalized itinerary generation using GPT-4</li>
              <li>Structured preference collection (destination, trip length, dietary needs, accessibility)</li>
              <li>Day-by-day activity breakdown with time-based scheduling</li>
              <li>Copy-to-clipboard and email sharing functionality</li>
              <li>Responsive form-based interface built with React and Bootstrap</li>
            </ul>
          </div>

          {/* Final Product */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Final Product</h2>
            <div>
              <div
                className="avian-photo-card"
                onClick={() => window.open('https://www.youtube.com/watch?v=eqa2d0wGec0', '_blank', 'noopener,noreferrer')}
                style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', padding: 8, transform: 'rotate(-1deg)', maxWidth: '55%' }}
              >
                <img src="avian-cover-1.png" alt="Avian demo: Click to watch video" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s ease' }} className="avian-play-overlay">
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(212,132,54,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#fbf6ec"><polygon points="5,3 19,12 5,21" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom links */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://github.com/mayela101/avian" target="_blank" rel="noopener noreferrer" className="avian-pill-btn">
                Check out the Code
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        .avian-pill-btn {
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
        .avian-pill-btn:hover {
          background: #d48436;
          border-color: #d48436;
          color: #fbf6ec;
        }
        .avian-photo-card {
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .avian-photo-card:hover {
          transform: rotate(0deg) scale(1.04) translateY(-6px) !important;
          box-shadow: 0 18px 36px rgba(40,35,50,0.22) !important;
          z-index: 2;
        }
        .avian-photo-card:hover .avian-play-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 768px) { .container { padding: 0 20px; } }
      `}</style>

      <Footer />
    </div>
  );
}
