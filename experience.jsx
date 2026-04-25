// Experience section — scrapbook cards that match the current portfolio vibe.

const EXPERIENCES = [
  {
    org: 'Ingram Micro',
    role: 'Data Reliability Engineer Intern',
    dates: 'Jun. 2025 - Aug. 2025',
    points: [
      'Maintained and optimized large-scale GCP data pipelines (BigQuery, Pub/Sub, Dataflow, DeltaSync, VM Clusters) integrating AlloyDB and Oracle legacy systems, sustaining 99.9% uptime across 10M+ daily transactions.',
      'Automated infrastructure deployments and environment provisioning using Terraform, reducing deployment time by 60% and improving scalability of containerized Kubernetes services within existing CI/CD pipelines.',
      'Debugged distributed pipeline failures end-to-end, writing Python automation scripts and SQL validation queries in DBeaver, improving pipeline reliability and reducing manual intervention.',
      'Documented pipeline architecture and failure patterns to support team knowledge transfer, making complex infrastructure behavior accessible to both technical and non-technical stakeholders.',
    ],
  },
  {
    org: 'sheCodes / ACM-W @ Cal Poly Pomona',
    role: 'Technical Product Lead',
    dates: 'Aug. 2025 - Dec. 2025',
    points: [
      'Led end-to-end delivery of a full-stack web application across 4 Agile sprints, coordinating a cross-functional team of 8 developers and designers while owning feature roadmap and technical scope.',
      'Presented project progress and technical decisions to stakeholders, translating implementation details into clear updates for non-technical audiences.',
    ],
  },
  {
    org: 'CALSys Lab',
    role: 'Research Assistant',
    dates: 'Jan. 2025 - Present',
    points: [
      'Building and maintaining Python data pipelines processing 200K+ darkweb marketplace records, integrating APIs and web scraping frameworks for large-scale cybersecurity research.',
      'Applying ML techniques (TF-IDF, spherical K-Means) to analyze vendor behavior patterns; improved community detection accuracy by 15%. Co-authoring ongoing publication with PhD researchers.',
    ],
  },
];

function ExperienceCard({ item, index }) {
  const evenCard = index % 2 === 0;
  const tilt = evenCard ? -1.4 : 1.3;
  const stripe = evenCard ? '#7A946F' : '#8a5a3b';

  return (
    <article style={{
      position: 'relative',
      marginBottom: 72,
      transform: `rotate(${tilt}deg)`,
      transition: 'transform 0.35s ease',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = `rotate(${tilt * 0.25}deg) translateY(-5px)`}
    onMouseLeave={e => e.currentTarget.style.transform = `rotate(${tilt}deg) translateY(0)`}
    >
      <div style={{
        position: 'absolute',
        inset: '10px -14px -14px 14px',
        background: '#e8d9b8',
        transform: `rotate(${tilt + 1.5}deg)`,
        boxShadow: '0 8px 22px rgba(40,35,50,0.16)',
      }} />

      <div style={{
        position: 'absolute',
        inset: '6px 10px -6px -10px',
        background: stripe,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.26) 0 6px, transparent 6px 12px)',
        transform: `rotate(${tilt - 1.2}deg)`,
      }} />

      <div style={{
        position: 'relative',
        background: '#fbf6ec',
        padding: '36px 44px 36px',
        boxShadow: '0 12px 30px rgba(40,35,50,0.18)',
      }}>
        <div style={{
          position: 'absolute',
          ...(evenCard
            ? { top: -12, right: 42, transform: 'rotate(6deg)' }
            : { top: -12, left: 42, transform: 'rotate(-6deg)' }),
          width: 132,
          height: 28,
          backgroundColor: '#a94a3d',
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0 8px, transparent 8px 16px), repeating-linear-gradient(0deg, rgba(45,63,94,0.18) 0 1px, transparent 1px 4px)',
          opacity: 0.9,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          pointerEvents: 'none',
          zIndex: 4,
        }} />

        <div style={{
          position: 'absolute',
          ...(evenCard
            ? { bottom: -11, left: 24, transform: 'rotate(6deg)' }
            : { bottom: -11, right: 24, transform: 'rotate(-6deg)' }),
          width: 86,
          height: 24,
          backgroundColor: '#d4a93e',
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0 8px, transparent 8px 16px)',
          opacity: 0.9,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          pointerEvents: 'none',
          zIndex: 4,
        }} />

        <div style={{
          position: 'absolute',
          ...(evenCard ? { top: 18, left: 22 } : { top: 18, right: 22 }),
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #ff8a7a 0%, #c0392b 60%, #7a1f14 100%)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.25), inset -1px -1px 2px rgba(0,0,0,0.3)',
          pointerEvents: 'none',
          zIndex: 5,
        }} />

        <div style={{
          position: 'absolute',
          ...(evenCard ? { bottom: 18, right: 26 } : { bottom: 18, left: 26 }),
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #6a86b8 0%, #2d3f5e 60%, #171f30 100%)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.25), inset -1px -1px 2px rgba(0,0,0,0.3)',
          pointerEvents: 'none',
          zIndex: 5,
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h3 className="exp-org">{item.org}</h3>
          <h3 style={{
            margin: '8px 0 4px',
            fontFamily: 'var(--font-serif)',
            fontSize: 27,
            lineHeight: 1.08,
            color: 'var(--fg-display)',
            fontWeight: 500,
          }}>
            {item.role}
          </h3>
          <p style={{
            margin: '0 0 18px',
            fontSize: 16,
            color: '#5a564d',
            fontStyle: 'italic',
          }}>
            {item.dates}
          </p>

          <ul className="exp-list">
            {item.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: '24px 0 62px' }}>
      <div className="container">
        <div style={{ position: 'relative', marginBottom: 28, marginTop: 8 }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 40,
            fontWeight: 600,
            fontStyle: 'italic',
            color: 'var(--fg-display)',
            margin: 0,
            display: 'inline-block',
            position: 'relative',
          }}>
            Experience
            <img src="assets/scrap-goldstars.png" alt=""
                 style={{
                   position: 'absolute',
                   top: -20,
                   right: -68,
                   width: 70,
                   opacity: 0.85,
                   pointerEvents: 'none',
                 }} />
          </h2>
        </div>

        {EXPERIENCES.map((item, index) => (
          <ExperienceCard key={`${item.org}-${item.role}`} item={item} index={index} />
        ))}
      </div>

      <style>{`
        .exp-org {
          margin: 0;
          font-family: var(--font-serif);
          font-size: 40px;
          line-height: 1.06;
          color: var(--fg-display);
          font-weight: 600;
        }

        .exp-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 10px;
        }

        .exp-list li {
          position: relative;
          padding-left: 22px;
          font-size: 17px;
          line-height: 1.6;
          color: #2f2b24;
        }

        .exp-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          top: 0;
          color: #7a5a42;
          font-size: 20px;
          line-height: 1;
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { ExperienceSection, EXPERIENCES });
