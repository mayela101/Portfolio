

function Nav() {
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

function BloomProject() {
  const [activeImg, setActiveImg] = React.useState(null);
  return (
    <div style={{ background: '#f5f0ed', minHeight: '100vh' }}>
      <Nav />

      <section style={{ padding: '80px 40px 60px', position: 'relative' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <a href="index.html" style={{ color: 'var(--fg-meta)', fontSize: 15, textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>
            ← Back to Portfolio
          </a>

          <div style={{ position: 'relative', width: 'min(600px, 100%)', marginBottom: 60 }}>
            <div aria-hidden style={{ position: 'absolute', inset: '14px -18px 10px 20px', background: '#e8d9b8', transform: 'rotate(2deg)', boxShadow: '0 6px 18px rgba(40,35,50,0.15)', zIndex: -2 }} />
            <div aria-hidden style={{ position: 'absolute', inset: '8px 14px -4px -10px', background: '#d97f8c', backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.28) 0 6px, transparent 6px 12px)', transform: 'rotate(-1deg)', zIndex: -1 }} />
            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '30px', zIndex: 1 }}>
              <div style={{ position: 'absolute', width: 16, height: 16, background: '#d97f8c', borderRadius: '50%', top: 14, right: 20, boxShadow: '0 2px 4px rgba(0,0,0,0.2)', zIndex: 10 }} />
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', lineHeight: 1.2, margin: '0 0 8px 0' }}>AI-Powered Journaling Companion</h1>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic', fontWeight: 400, color: '#d97f8c', margin: '0 0 20px 0' }}>| Bloom</h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '22px', color: '#3a3428', margin: 0 }}>
                Designed a private, AI assisted journaling experience that helps people start writing faster and notice emotional patterns over time. Combined guided prompts, gentle analysis, and visual progress cues to build a supportive daily habit.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
                <a href="https://bloom-flame.vercel.app/login" target="_blank" rel="noopener noreferrer" className="brand-pill-btn">
                  Live Site →

                </a>
                <a href="https://github.com/mayela101/Bloom" target="_blank" rel="noopener noreferrer" className="brand-pill-btn">
                  Check out the Code
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30, marginBottom: 80 }}>
            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(-0.5deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(1deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'var(--fg-display)', margin: '0 0 2px 0' }}>Role</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Sole Developer and Product Designer</p>
            </div>

            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(0.5deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(1deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'var(--fg-display)', margin: '0 0 2px 0' }}>Tech Stack</h3>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '0 0 0px 0' }}>Frontend</h4>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>
                React + Typescript (Vite / Next.js) <br />
                CSS Modules<br />
                Recharts Framer Motion
              </p>
              
            </div>

            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(-0.3deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(1deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '0 0 0px 0' }}>Backend</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Supabase (PostgreSQL, Auth RLS)<br /></p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '0 0 0px 0' }}>AI</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Claude Anthropic API<br /></p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#545151', margin: '0 0 0px 0' }}>Deployment</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Vercel<br /></p>
            </div>
          </div>

          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Problem Statement</h2>
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
            While journaling is widely recognized as beneficial for mental wellness, many struggle to maintain consistency. Common challenges include blank-page anxiety, uncertainty about what to write, and difficulty identifying emotional patterns over time.

            Bloom addresses these challenges by creating a private, empathetic companion that encourages consistency and transforms journaling into a rewarding reflective habit.
            </p>
          </div>

          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Solution</h2>
    
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
              Bloom is an AI-assisted journaling application that combines:
            <ul style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800, paddingLeft: 20 }}>
                <li>Guided, context-aware prompts</li>
                <li>Lightweight emotional analysis</li>
                <li>Visual progress metaphors</li>
            </ul>
            The system is intentionally designed so that AI supports the user without thinking for them or criticizing their actions. Insights are reflective rather than prescriptive, and progress is framed as personal growth rather than performance or comparison.  
            </p>
          </div>

          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Core Features</h2>
            <ul style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800, paddingLeft: 20 }}>
              <li>Guided journaling with optional mood tagging</li>
              <li>Context aware AI-generated prompts</li>
              <li>Weekly emotional insights dashboard</li>
              <li>Progress visualization using butterfly metamorphosis</li>
              <li>Local fallback analysis when AI services are unavailable</li>
            </ul>
          </div>

          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>AI Workflow</h2>
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
              Built using an AI-native development process — problem framing with Claude, prototype scaffolded with Claude, deployed to Vercel. Claude served as a copilot throughout component wiring, interaction design, and iteration based on feedback.
            </p>
          </div>


          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Design Sketches</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', justifyContent: 'start', alignItems: 'start', gap: 20, maxWidth: 940 }}>
              {['bloom-sketch1.png', 'bloom-sketch2.png'].map((src, i) => (
                <div
                  key={src}
                  className="photo-card"
                  onClick={() => setActiveImg(src)}
                  style={{
                    position: 'relative',
                    background: 'white',
                    border: '1.5px dashed rgba(45,63,94,0.45)',
                    padding: 12,
                    transform: `rotate(${i % 2 ? 1 : -1}deg)`,
                    width: '100%',
                    maxWidth: 430,
                    justifySelf: 'start',
                    boxShadow: '0 10px 22px rgba(40,35,50,0.12)',
                    aspectRatio: '1 / 1',
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden'
                  }}>
                  <img
                    src={src}
                    alt={`Brand Final ${i + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: i === 1 ? 'center 58%' : 'center center',
                      display: 'block'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        

          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Final Product</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              {['bloom-screenshot-1.png', 'bloom-screenshot-2.png', 'bloom-screenshot-3.png','bloom-screenshot-4.png','bloom-screenshot-5.png','bloom-screenshot-6.png'].map((src, i) => (
                <div key={src + i} className="photo-card" onClick={() => setActiveImg(src)} style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', padding: 8, transform: `rotate(${i % 2 ? 1 : -1}deg)` }}>
                  <img src={src} alt={`Bloom screenshot ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://bloom-flame.vercel.app/login" target="_blank" rel="noopener noreferrer" className="brand-pill-btn">
                Live Site
              </a>
              <a href="https://github.com/mayela101/Bloom" target="_blank" rel="noopener noreferrer" className="brand-pill-btn">
                Check out the Code
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        .brand-pill-btn {
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
        .brand-pill-btn:hover {
          background: #d97f8c;
          border-color: #d97f8c;
          color: #fbf6ec;
        }
        .photo-card {
          cursor: zoom-in;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .photo-card:hover {
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
