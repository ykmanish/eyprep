import { CORE_QUESTIONS } from "./questionsCore";
import { CYBER_QUESTIONS } from "./questionsCyber";
import { RESUME_QUESTIONS } from "./questionsResume";
import { ROUNDS_QUESTIONS } from "./questionsRounds";
import { APTITUDE_QUESTIONS } from "./aptitude";

export const DOMAINS = [
  {
    id: "foundations",
    label: "Risk, Control & Audit",
    short: "Foundations",
    icon: "🧭",
    tone: "blue",
    ref: "Part 2",
    blurb: "The grammar of the job: risk vocabulary, control types, testing, findings, the engagement lifecycle.",
  },
  {
    id: "frameworks",
    label: "Frameworks & Standards",
    short: "Frameworks",
    icon: "📐",
    tone: "green",
    ref: "§2.4",
    blurb: "ISO, NIST, COBIT, COSO, PCI DSS - and the certification vs attestation vs compliance distinction.",
  },
  {
    id: "india",
    label: "India & Global Regulation",
    short: "Regulation",
    icon: "⚖️",
    tone: "yellow",
    ref: "§2.5",
    blurb: "DPDP, CERT-In, RBI, SEBI, IRDAI - plus GDPR, NIS2, DORA and SOX. Your genuine differentiator.",
  },
  {
    id: "techrisk",
    label: "Tech Risk Engagements",
    short: "Tech Risk",
    icon: "🏛️",
    tone: "red",
    ref: "Part 3",
    blurb: "ITGC and financial audit integration, IT/IS audit, SOCR, vendor risk, contract risk and SAM.",
  },
  {
    id: "iam",
    label: "Identity & Access Management",
    short: "IAM",
    icon: "🔑",
    tone: "blue",
    ref: "§4.1",
    blurb: "The highest-volume cyber engagement type. Joiner-mover-leaver is the most-asked process in the round.",
  },
  {
    id: "cyberops",
    label: "Cyber Engagements",
    short: "Cyber Ops",
    icon: "🛡️",
    tone: "green",
    ref: "§4.2-4.5",
    blurb: "Security programme management, business continuity, privacy, and threat detection and response.",
  },
  {
    id: "technical",
    label: "Technical Fundamentals",
    short: "Technical",
    icon: "⚙️",
    tone: "red",
    ref: "Part 5",
    blurb: "Networking, cryptography, the OWASP categories, malware and attack techniques.",
  },
  {
    id: "cloudai",
    label: "Cloud, AI & Emerging",
    short: "Cloud & AI",
    icon: "☁️",
    tone: "yellow",
    ref: "§5.5",
    blurb: "Shared responsibility, cloud misconfiguration, prompt injection, shadow AI and agent identity.",
  },
  {
    id: "consulting",
    label: "Consulting Judgement",
    short: "Judgement",
    icon: "💼",
    tone: "purple",
    ref: "Part 7",
    blurb: "Structuring an answer, scoping, escalation, the group discussion and client conversations.",
  },
  {
    id: "hrethics",
    label: "HR, Ethics & Fit",
    short: "HR & Ethics",
    icon: "🤝",
    tone: "purple",
    ref: "Part 8",
    blurb: "STAR discipline, integrity scenarios, motivation questions and the practical ones.",
  },
  {
    id: "aptitude",
    label: "Aptitude & Reasoning",
    short: "Aptitude",
    icon: "🔢",
    tone: "blue",
    ref: "§6.5",
    blurb: "The online assessment set: quant, reasoning and the two traps that catch most candidates.",
  },
  {
    id: "resume",
    label: "From Your Resume",
    short: "Your Resume",
    icon: "📄",
    tone: "red",
    ref: "Resume",
    blurb:
      "Drawn from exactly what your page claims: ISO 27001:2022, ISO 20000 and ITIL 4, PinkVERIFY, CAPA, working papers, Wireshark, Nmap, malware analysis.",
  },
  {
    id: "rounds",
    label: "Reported Round Topics",
    short: "Real Rounds",
    icon: "🎤",
    tone: "purple",
    ref: "Real paper",
    blurb:
      "Built from what was actually asked: the VAPT lifecycle, Windows forensic artefacts, threat intelligence, SOX and SOC, cryptocurrency and the OWASP categories.",
  },
];

export const QUESTIONS = [
  ...CORE_QUESTIONS,
  ...CYBER_QUESTIONS,
  ...RESUME_QUESTIONS,
  ...ROUNDS_QUESTIONS,
  ...APTITUDE_QUESTIONS,
];

export const DOMAIN_BY_ID = Object.fromEntries(DOMAINS.map((d) => [d.id, d]));

/** questionId -> domainId, for progress maths. */
export const QUESTION_DOMAIN = Object.fromEntries(QUESTIONS.map((q) => [q.id, q.d]));

export function questionsFor(domainId) {
  if (!domainId || domainId === "all") return QUESTIONS;
  return QUESTIONS.filter((q) => q.d === domainId);
}

export function countFor(domainId) {
  return questionsFor(domainId).length;
}

export const TOTAL_QUESTIONS = QUESTIONS.length;

/** Deterministic-free shuffle used when starting a run. */
export function shuffle(list) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** A balanced mock: proportional pull across every domain. */
export function buildMock(size = 30) {
  const perDomain = Math.max(1, Math.round(size / DOMAINS.length));
  const picked = [];
  for (const d of DOMAINS) {
    picked.push(...shuffle(questionsFor(d.id)).slice(0, perDomain));
  }
  return shuffle(picked).slice(0, size);
}
