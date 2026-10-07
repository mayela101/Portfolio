export interface Experience {
  date: string;
  org: string;
  role: string;
  tag: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    date: 'Jun 2026 — now',
    org: '10a Labs',
    role: 'Cyber Triage Analyst',
    tag: 'Contract · Embedded',
    bullets: [
      'Investigate high-signal cyber abuse cases surfaced daily by detection systems: jailbreaks, classifier failures, and malware or offensive-cyber misuse.',
      'Reproduce attacks through adversarial probing to separate genuine model-security failures from false positives and overstated claims.',
      'Found systematic failure modes in an AI-assisted investigation pipeline; the fixes improved precision of surfaced cases.',
      'Escalate novel jailbreak patterns to safeguards, alignment, and engineering partners, plus weekly enforcement handoffs.',
    ],
  },
  {
    date: 'Jan 2025 — Jun 2026',
    org: 'CALSys Lab',
    role: 'Research Assistant',
    tag: 'Research',
    bullets: [
      'Classified ~25K hacking listings across 34 dark-web marketplaces using a 21-category taxonomy and prototype-initialized SBERT clustering.',
      'Built a cross-market community-detection pipeline: vendor identity resolution, bipartite graphs, BiLouvain / BiLeiden, scored with ARI.',
      'Co-authoring a manuscript on adversarial vendor community detection, targeted for submission in Jan 2027.',
    ],
  },
  {
    date: 'Jun — Aug 2025',
    org: 'Ingram Micro',
    role: 'Data Reliability Engineer',
    tag: 'Internship',
    bullets: [
      'First responder for data discrepancy and freshness issues across large-scale GCP pipelines.',
      'Wrote SQL validation queries and Python tooling, and shared root-cause analyses with technical and non-technical teams.',
    ],
  },
];
