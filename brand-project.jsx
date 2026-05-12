// Brand Guardian Project Page

function Nav() {
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

function BrandProject() {
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
            <div aria-hidden style={{ position: 'absolute', inset: '8px 14px -4px -10px', background: '#7BA2ED', backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.28) 0 6px, transparent 6px 12px)', transform: 'rotate(-1deg)', zIndex: -1 }} />
            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '30px', zIndex: 1 }}>
              <div style={{ position: 'absolute', width: 16, height: 16, background: '#4e7bc9', borderRadius: '50%', top: 14, right: 20, boxShadow: '0 2px 4px rgba(0,0,0,0.2)', zIndex: 10 }} />
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', lineHeight: 1.2, margin: '0 0 8px 0' }}>AI Feature Concept for Canva</h1>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic', fontWeight: 400, color: '#4e7bc9', margin: '0 0 20px 0' }}>| Brand Guardian</h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '22px', color: '#3a3428', margin: 0 }}>
                A bilayer AI enforcement system for Canva Teams that catches brand violations before publish and resolves reviewer feedback inline, closing the gap between brand guidelines that exist and brand consistency that doesn't.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
                <a href="https://brand-buddy-ai-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="brand-pill-btn">
                  Interactive Demo
                </a>
                <a href="https://canva.link/tzwpzki9kyn5w13" target="_blank" rel="noopener noreferrer" className="brand-pill-btn">
                  Pitch Deck
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30, marginBottom: 80 }}>
            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(-0.5deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(1deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'var(--fg-display)', margin: '0 0 12px 0' }}>Role</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Product Manager</p>
            </div>

            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(0.5deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(-1deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'var(--fg-display)', margin: '0 0 12px 0' }}>Tools</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Lovable, Claude, Figma, Vercel</p>
            </div>

            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', padding: '24px', transform: 'rotate(-0.3deg)' }}>
              <div style={{ position: 'absolute', inset: '8px -12px -8px 12px', background: '#e8d9b8', transform: 'rotate(1.5deg)', boxShadow: '0 4px 12px rgba(40,35,50,0.1)', zIndex: -1 }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'var(--fg-display)', margin: '0 0 12px 0' }}>Deliverables</h3>
              <p style={{ fontSize: 14, color: '#3a3428', margin: 0 }}>Live Prototype, Pitch Deck, Ship Plan</p>
            </div>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Problem Statement</h2>
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
              85% of companies have brand guidelines but two thirds say they aren't enforced. Canva's Brand Kit is reference-only — teammates can ignore it, bypass suggestions, and publish off-brand with zero friction. Hard enforcement is paywalled behind Enterprise. Teams customers have no safety net.
            </p>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Solution</h2>
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
              Brand Guardian is a bilayer AI system built directly into the Canva editor. The proactive layer watches as you design and catches violations before review. The reactive layer translates natural language reviewer comments into exact inline fixes with one-click apply. Together they close the loop between brand guidelines and brand reality.
            </p>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Core Features</h2>
            <ul style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800, paddingLeft: 20 }}>
              <li>AI auto-populates brand kit from uploaded PDF, no manual entry</li>
              <li>Color intelligence that evaluates unknown colors using color theory, not just hex matching</li>
              <li>Tonal drift detection, catches designs that are spec-compliant but still feel off-brand</li>
              <li>Natural language comment resolution mapped to specific design properties</li>
              <li>Learns from every accept/override, building a living model of your brand over time</li>
            </ul>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>AI Workflow</h2>
            <p style={{ fontSize: 15, lineHeight: '26px', color: '#3a3428', maxWidth: 800 }}>
              Built using an AI-native development process — problem framing with Claude, prototype scaffolded with Lovable, deployed to Vercel. Claude served as a copilot throughout component wiring, interaction design, and iteration based on feedback.
            </p>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Mockups</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {['mockup-brand.jpg', 'mockup-brand-1.jpg'].map((src, i) => (
                <div key={i} style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', padding: 8, transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}>
                  <img src={src} alt={`Brand Mockup ${i}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Success Metrics</h2>
            <div style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', boxShadow: '0 10px 22px rgba(40,35,50,0.12)', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
                <thead>
                  <tr>
                    {['Metric', 'What it Measures', 'Why it Matters'].map((head) => (
                      <th key={head} style={{ textAlign: 'left', padding: '14px 16px', borderBottom: '1px solid rgba(45,63,94,0.28)', color: '#2d3f5e', fontFamily: 'var(--font-sans)', fontSize: 13, letterSpacing: '0.02em' }}>{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Brand Kit Compliance Rate', '% of published designs with zero violations', 'North Star: did the problem get solved'],
                    ['Autofix Acceptance Rate', '% of AI suggestions accepted vs dismissed', 'Is the AI accurate enough to be trusted'],
                    ['Revision Cycle Time', 'Time from comment posted to resolved', 'Is layer 2 actually reducing back and forth'],
                    ['Time-To-Publish', 'Design start to publish, Guardian on vs off', 'Productivity proxy, quantifies the ROI'],
                    ['Brand Guardian Setup Rate', '% of workspaces with kit fully configured', 'Is onboarding working, is the feature even active'],
                  ].map((row, i) => (
                    <tr key={row[0]} style={{ background: i % 2 ? '#f7efe1' : '#fbf6ec' }}>
                      {row.map((cell) => (
                        <td key={cell} style={{ padding: '13px 16px', borderBottom: '1px solid rgba(45,63,94,0.14)', color: '#3a3428', fontSize: 14, lineHeight: '20px' }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Ship Plan</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
              {[
                {
                  phase: 'Phase 1 · Weeks 0-3',
                  title: 'Core Guardian',
                  points: [
                    'Color + font violation detection, inline flag UI, autofix suggestions',
                    "Internal alpha with Canva's own marketing team",
                    'Teams: ML/AI Eng, Design, Brand Kit Infra, PM',
                  ],
                },
                {
                  phase: 'Phase 2 · Weeks 3-8',
                  title: 'Comment Resolution + Coverage Expansion',
                  points: [
                    'Ship AI Comment Resolution, the reactive layer',
                    'Expand Guardian: logo usage, spacing, tonal drift, confidence thresholds',
                    'Closed beta with 10-15 Teams/Enterprise customers',
                    'Teams: Eng, Design, Data, Customer Success',
                  ],
                },
                {
                  phase: 'Phase 3 · Weeks 8-14',
                  title: 'GA + Learning Loop',
                  points: [
                    'Full rollout with per-org AI personalization',
                    'Brand manager compliance dashboard',
                    'Teams: All + Legal (audit trail, AI transparency)',
                  ],
                },
              ].map((item, i) => (
                <div key={item.phase} style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', padding: 22, transform: `rotate(${i % 2 ? 0.8 : -0.5}deg)` }}>
                  <div style={{ position: 'absolute', width: 12, height: 12, background: '#4e7bc9', borderRadius: '50%', top: 10, right: 12, boxShadow: '0 2px 4px rgba(0,0,0,0.18)' }} />
                  <p style={{ margin: '0 0 8px 0', color: '#4e7bc9', fontSize: 12, fontFamily: 'var(--font-sans)', letterSpacing: '0.04em' }}>{item.phase}</p>
                  <h3 style={{ margin: '0 0 10px 0', color: 'var(--fg-display)', fontFamily: 'var(--font-serif)', fontSize: 18, fontStyle: 'italic' }}>{item.title}</h3>
                  <ul style={{ margin: 0, paddingLeft: 18, color: '#3a3428', lineHeight: '22px', fontSize: 14 }}>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontStyle: 'italic', fontWeight: 500, color: 'var(--fg-display)', marginBottom: 30 }}>Final Product</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {['brand-final.png', 'brand-final-1.png', 'brand-final-2.png'].map((src, i) => (
                <div key={src} style={{ position: 'relative', background: '#fbf6ec', border: '1.5px dashed rgba(45,63,94,0.45)', padding: 8, transform: `rotate(${i % 2 ? 1 : -1}deg)` }}>
                  <img src={src} alt={`Brand Final ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://brand-buddy-ai-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="brand-pill-btn">
                Interactive Demo
              </a>
              <a href="https://canva.link/tzwpzki9kyn5w13" target="_blank" rel="noopener noreferrer" className="brand-pill-btn">
                Pitch Deck
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
          background: #4e7bc9;
          border-color: #4e7bc9;
          color: #fbf6ec;
        }
        @media (max-width: 768px) { .container { padding: 0 20px; } }
      `}</style>

      <Footer />
    </div>
  );
}
