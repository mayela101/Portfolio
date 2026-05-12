
function BytesNav() {
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

function BytesProject() {
  const [activeImg, setActiveImg] = React.useState(null);
  const accent = '#8a4fd0';

  return (
    <div style={{ background: '#f5f0ed', minHeight: '100vh' }}>
      <BytesNav />

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
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', lineHeight: 1.2, margin: '0 0 8px 0' }}>Fictional Cat Cafe Website</h1>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic', fontWeight: 400, color: accent, margin: '0 0 20px 0' }}>| Bytes</h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '22px', color: '#3a3428', margin: 0 }}>
                A fully responsive, tech-themed fictional restaurant website built as a semester-long SLP (Student Learning Project) for the sheCodes (ACM-W) club at Cal Poly Pomona. The project focused on interactive UI design, cohesive branding, and real-world team-based frontend development using React.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
                <a href="https://github.com/mayela101/Web-Dev-2025" target="_blank" rel="noopener noreferrer" className="bytes-pill-btn">
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
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Project Lead &amp; Frontend Developer</p>
            </div>

            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(0.5deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(-1deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'var(--fg-display)', margin: '0 0 2px 0' }}>Tech Stack</h3>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '0 0 0px 0' }}>Frontend</h4>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>
                React<br />
                HTML / CSS / JavaScript
              </p>
            </div>

            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(-0.3deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(1.5deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '0 0 0px 0' }}>Design &amp; Planning</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Figma<br />Jira</p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '8px 0 0px 0' }}>Deployment</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>GitHub Pages</p>
            </div>
          </div>

          {/* Problem Statement */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Problem Statement</h2>
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
              Student web projects often demonstrate basic layouts but lack cohesive branding, interactivity, and structured team execution. Our objective was to design and deliver a polished, interactive site that feels like a real product while practicing collaborative frontend workflows across a full semester timeline.
            </p>
          </div>

          {/* Solution */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Solution</h2>
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
              Our team designed and developed a branded, interactive café website using React and modular CSS, guided by Figma designs and milestone-based planning. The site delivers dynamic menu rendering, animations, and responsive layouts, and was deployed publicly after iterative testing and refinement.
            </p>
          </div>

          {/* Core Features */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Core Features</h2>
            <ul style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800, paddingLeft: 20 }}>
              <li>Fully responsive single-page React website</li>
              <li>Interactive categorized menu</li>
              <li>Scroll and hover animations across site</li>
              <li>Cohesive tech-themed branding system (fonts, colors, icons)</li>
              <li>Component-based UI architecture</li>
            </ul>
          </div>

          {/* Design Mockups */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Design Mockups (Figma)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
              {[
                { src: 'Desktop.png', alt: 'Home Page Figma' },
                { src: 'Desktop-2.png', alt: 'Menu Page Figma' },
                { src: 'Desktop-1.png', alt: 'About Page Figma' },
              ].map(({ src, alt }, i) => (
                <div
                  key={src}
                  className="bytes-photo-card"
                  onClick={() => setActiveImg(src)}
                  style={{
                    position: 'relative',
                    background: 'white',
                    border: '1.5px dashed rgba(45,63,94,0.45)',
                    padding: 12,
                    transform: `rotate(${i % 0 ? 0 : 0}deg)`,
                    boxShadow: '0 10px 22px rgba(40,35,50,0.12)',
                    overflow: 'hidden',
                  }}
                >
                  <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Final Product */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Final Product</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              {[
                { src: '/assets/bytes-cover.png', alt: 'Bytes Home Page (Hero)' },
                { src: 'bytes-screenshot-4.png', alt: 'Bytes Home Page with Scroll Animation' },
                { src: 'bytes-screenshot-6.png', alt: 'Bytes Menu Page' },
                { src: 'bytes-screenshot-5.png', alt: 'Bytes Menu Page with Hover Animation' },
                { src: 'bytes-screenshot-7.png', alt: 'Bytes About Page' },
                { src: 'bytes-screenshot-8.png', alt: 'Bytes Contact Page' },
              ].map(({ src, alt }, i) => (
                <div
                  key={src}
                  className="bytes-photo-card"
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
              <a href="https://github.com/mayela101/Web-Dev-2025" target="_blank" rel="noopener noreferrer" className="bytes-pill-btn">
                Check out the Code
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        .bytes-pill-btn {
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
        .bytes-pill-btn:hover {
          background: #8a4fd0;
          border-color: #8a4fd0;
          color: #fbf6ec;
        }
        .bytes-photo-card {
          cursor: zoom-in;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .bytes-photo-card:hover {
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
