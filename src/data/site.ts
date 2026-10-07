/** Site-wide copy, links and behaviour settings. Edit here, not in components. */

export const site = {
  handle: 'mayela',
  name: 'Mayela',
  currently: 'currently: cyber triage @ a frontier ai lab',
  intro:
    "I break AI models on purpose. I'm on an embedded contract at a frontier AI lab, where I triage cyber abuse, reproduce jailbreaks, and turn what I find into model-safety fixes.",
  /** Lines the hero keyboard types out, in order, on a loop. */
  heroPhrases: [
    'red-teaming frontier ai models.',
    'reproducing jailbreaks for a living.',
    'mapping dark-web vendor networks.',
    'finding signal in noisy data.',
  ],
  contactHeading: "Let's talk model safety.",
  resumeUrl: `${import.meta.env.BASE_URL}resume/MayelaA_Resume.pdf`,
  links: {
    email: 'mailto:connect.mayela@gmail.com',
    linkedin: 'https://linkedin.com/in/MayelaA',
    github: 'https://github.com/mayela101',
  },
} as const;

export const settings = {
  /** Milliseconds per animation tick. Design presets: Calm 140, Normal 95, Fast 60. */
  tickMs: 95,
  /** Tilt the hero keyboard in 3D. */
  tiltKeyboard: true,
  /** Ticks a user-pressed key stays visibly pressed. */
  liveKeyTicks: 3,
  /** Ticks after the last keystroke before the auto-typer resumes. */
  userIdleTicks: 60,
  /** Max characters kept from what the visitor types. */
  maxTypedChars: 40,
} as const;
