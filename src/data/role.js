/**
 * Role, job description and firm context.
 * Source: the EY campus preparation handbook + the published JD
 * "Associate Consultant - Cyber Security" (2025).
 */

export const ROLE = {
  candidate: "Srishti Meena",
  title: "Associate Consultant",
  practice: "Cyber Security & Technology Risk",
  firm: "EY",
  campus: "National Forensic Sciences University",
  profile: "MBA, Cyber Security Management",
  window: "10 days",
  stats: [
    { value: "11", label: "service domains from the JD", tone: "blue" },
    { value: "10", label: "parts, fundamentals to checklist", tone: "red" },
    { value: "355", label: "practice questions with answers", tone: "yellow" },
    { value: "4", label: "rounds you have to clear", tone: "green" },
  ],
};

export const FOUR_TESTS = [
  {
    title: "Structure",
    icon: "🧩",
    tone: "blue",
    body: "Can you break an open problem into parts and speak in a sequence rather than a spray of facts?",
  },
  {
    title: "Business framing",
    icon: "💰",
    tone: "red",
    body: "Can you connect a control to a risk, and a risk to a rupee or a regulator?",
  },
  {
    title: "Client readiness",
    icon: "🤝",
    tone: "yellow",
    body: "Would they put you in front of a client's IT head in month three?",
  },
  {
    title: "Coachability",
    icon: "🌱",
    tone: "green",
    body: "Do you take a correction well and build on it, rather than defending a wrong answer?",
  },
];

export const JD_SECTIONS = [
  {
    heading: "The Opportunity",
    body: [
      "You would be responsible for executing client engagements under supervision and guidance of your seniors. This means you would be playing a key role in teams: conducting client interviews, understanding the client's environment, working on the deliverables (reports/work papers) and helping to draft recommendations.",
      "In this role you would be required to be inquisitive, analytical, ambitious and great at working with people. You'll need to be a good team player and demonstrate the potential to become a future business leader. You'll need to be prepared to challenge us, to act on your own initiative and to make an impact on our teams and clients from day one.",
    ],
  },
  {
    heading: "Your key responsibilities",
    bullets: [
      "Consistently delivering quality client services. Staying abreast of current business and industry trends relevant to the client's business.",
      "Leveraging internal and external resources to gain an understanding of the client, its business, and areas under review before executing engagement procedures.",
      "Proactively participating in meetings with client personnel to understand the current state of business and in scope IT processes and procedures.",
      "Ensuring high quality in client service by directing daily progress of fieldwork, informing supervisors of engagement status, and managing staff performance.",
      "Communicate issues to the engagement team through written correspondence and verbal presentations.",
      "Collaborating with members of the engagement team to plan engagements and develop work programs, risk assessments, and planning documents.",
      "Attending L&D programs and exhibit through knowledge of advisory methodology and consulting attributes.",
      "Exhibiting initiative and participate in corporate social and team events.",
    ],
  },
  {
    heading: "To qualify for the role",
    bullets: ["Chartered Accountant &/or MBA/PGDM"],
  },
  {
    heading: "Skills & attributes",
    bullets: [
      "Good written and verbal communication skills",
      "Excellent teamwork skills",
      "Demonstrated integrity within a professional environment",
      "Willingness to travel",
      "Ability to work within deadlines by multi-tasking and managing priorities",
    ],
  },
  {
    heading: "What we look for",
    body: [
      "People with the ability to work in a collaborative way to provide services across multiple client departments while adhering to commercial and legal requirements. You will need a practical approach to solving issues and complex problems with the ability to deliver insightful and practical solutions.",
    ],
  },
];

/** The highest-yield page in the handbook: JD language vs what it is really testing. */
export const JD_DECODE = [
  {
    says: "Executing client engagements under supervision and guidance of your seniors",
    means:
      "You are expected to be coachable and low-maintenance, not independent.",
    expect: "Tell me about a time you received critical feedback.",
    tip: "Answer showing you changed behaviour, not that you argued.",
  },
  {
    says: "Conducting client interviews, understanding the client's environment",
    means: "Walkthroughs. They may role-play the IT manager.",
    expect: "I'm the IT manager - ask me about our user access process.",
    tip: "Prepare five good open questions. Question 4 is the killer: what happens when it's urgent?",
  },
  {
    says: "Working on the deliverables (reports/work papers) and helping to draft recommendations",
    means: "Writing quality is being graded.",
    expect: "Describe a finding you would write up.",
    tip: "Deliver it in 5C: condition, criteria, cause, consequence, corrective action.",
  },
  {
    says: "Inquisitive, analytical, ambitious and great at working with people",
    means: "This is the competency set, verbatim.",
    expect: "Behavioural questions across all four.",
    tip: "One story each: curiosity that uncovered something, analysis under ambiguity, initiative beyond your brief, resolving a conflict.",
  },
  {
    says: "Prepared to challenge us, act on your own initiative",
    means: "They want measured pushback, not compliance.",
    expect: "An interviewer states something you believe is wrong.",
    tip: "Politely test it. Handled well, this scores.",
  },
  {
    says: "Staying abreast of current business and industry trends",
    means: "You will be asked about a recent breach, regulation, or AI-and-security.",
    expect: "Tell me about a recent cyber incident in the news.",
    tip: "Prepare three current items you actually understand.",
  },
  {
    says: "Leveraging internal and external resources ... before executing engagement procedures",
    means: "Preparation discipline.",
    expect: "How would you prepare for a new client?",
    tip: "Prior-year reports, annual report and filings, regulator circulars, firm methodology and sector knowledge - before you set foot on site.",
  },
  {
    says: "Directing daily progress of fieldwork, informing supervisors of engagement status",
    means: "Ownership and proactive status reporting.",
    expect: "What do you do when a task is slipping?",
    tip: "Flag it early rather than at the deadline.",
  },
  {
    says: "Communicate issues ... written correspondence and verbal presentations",
    means: "Both channels are graded.",
    expect: "Any long answer.",
    tip: "Signpost: three things - first, second, third.",
  },
  {
    says: "Develop work programs, risk assessments, and planning documents",
    means: "Know what a RACM and a work programme are.",
    expect: "What is a risk and control matrix?",
    tip: "Describe its columns and you have described the mechanics of the job.",
  },
  {
    says: "Consistent review of own work to identify and improve on approach",
    means: "Self-review discipline.",
    expect: "How do you check your own work?",
    tip: "Reference a personal checklist you run before submitting.",
  },
  {
    says: "Attending L&D programs ... knowledge of advisory methodology",
    means: "Learning appetite.",
    expect: "What certifications will you pursue?",
    tip: "CISA for audit, CRISC/CISM for risk and management, ISO 27001 LA, CIPP/DCPP for privacy, CISSP later.",
  },
  {
    says: "Participate in corporate social and team events",
    means: "Culture fit.",
    expect: "What do you do outside academics?",
    tip: "Any genuine community, sports, club or committee involvement is worth a line.",
  },
  {
    says: "Chartered Accountant &/or MBA/PGDM",
    means:
      "You qualify. The role is deliberately designed for business-side thinkers who can handle technology.",
    expect: "Why not a technical security role?",
    tip: "This is your positioning, not your gap. Say so with confidence.",
  },
  {
    says: "Willingness to travel",
    means: "Named twice in the JD. Any hedging is a real risk to your candidature.",
    expect: "Are you willing to travel?",
    tip: "Unambiguous yes.",
  },
  {
    says: "Ability to work within deadlines by multi-tasking and managing priorities",
    means: "A workload-conflict scenario is coming.",
    expect: "Two engagements, both due Friday - what do you do?",
    tip: "Escalate early to your manager with options. Do not silently hero it.",
  },
  {
    says: "Demonstrated integrity within a professional environment",
    means: "An ethics scenario is likely.",
    expect: "A client pressures you to drop a finding.",
    tip: "Always escalate. Never alter, backdate or omit evidence.",
  },
];

export const ENGAGEMENT_AREAS = {
  techRisk: [
    { id: "fait", name: "Financial Audit IT integration", ref: "3.1" },
    { id: "itaudit", name: "IT and IS audit", ref: "3.2" },
    { id: "socr", name: "Service Organization Controls Reporting", ref: "3.3" },
    { id: "tprm", name: "Vendor risk management", ref: "3.4" },
    { id: "contract", name: "Contract risk services", ref: "3.5" },
    { id: "sam", name: "Software Asset Management", ref: "3.6" },
  ],
  cyber: [
    { id: "iam", name: "Identity and Access Management", ref: "4.1" },
    { id: "spm", name: "Security Program Management", ref: "4.2" },
    { id: "bcm", name: "Business Continuity Management", ref: "4.3" },
    { id: "privacy", name: "Information protection and privacy", ref: "4.4" },
    { id: "ctm", name: "Cyber threat management", ref: "4.5" },
  ],
};

export const FUNNEL = [
  {
    stage: "01",
    name: "Online assessment",
    tone: "blue",
    content:
      "Quantitative aptitude, logical reasoning, verbal ability. Some drives add situational judgement, a short essay, or basic domain MCQs.",
    decides: "Speed and accuracy. Attempt-rate management matters more than difficulty.",
  },
  {
    stage: "02",
    name: "Group discussion",
    tone: "red",
    content:
      "Not run on every campus. Abstract, business or current-affairs topic. 8-12 candidates, 10-15 minutes.",
    decides: "Getting in early with structure, then bringing others in.",
  },
  {
    stage: "03",
    name: "Technical / domain interview",
    tone: "yellow",
    content:
      "Resume deep-dive, cyber and risk fundamentals, scenario questions, occasionally a mini case. For an MBA profile: more governance and process, less command-line depth.",
    decides: "Structure, honesty about limits, and connecting technology to business risk.",
  },
  {
    stage: "04",
    name: "HR / partner round",
    tone: "green",
    content:
      "Motivation, values, travel and relocation, long-term intent, behavioural competency questions, ethics scenarios.",
    decides: "Authenticity, consistency with earlier rounds, and clear commitment.",
  },
];

export const COMPETENCIES = [
  {
    name: "Analytical thinking",
    evidence:
      "You decompose a problem before answering; you distinguish what you know from what you are assuming.",
  },
  {
    name: "Communication",
    evidence: "Signposted answers; no rambling; you stop when you have answered.",
  },
  {
    name: "Client orientation",
    evidence:
      "You consider the client's constraints - budget, business continuity, politics - not just the textbook control.",
  },
  {
    name: "Teaming",
    evidence:
      "Your stories use 'we' for the team and 'I' for your specific contribution. Both, in proportion.",
  },
  {
    name: "Drive and resilience",
    evidence: "Concrete example of pushing through difficulty, with a result.",
  },
  {
    name: "Integrity",
    evidence:
      "In an ethics scenario you escalate rather than improvise, and you never adjust evidence.",
  },
  {
    name: "Learning agility",
    evidence:
      "You can describe something technical you taught yourself recently and how.",
  },
];

export const EY_CONTEXT = {
  essentials: [
    {
      k: "Who they are",
      v: "One of the Big Four professional services organisations, alongside Deloitte, PwC and KPMG. A global network of legally separate member firms.",
    },
    {
      k: "Purpose",
      v: "'Building a better working world' is the long-standing purpose statement; recent India brand messaging also uses 'Shape the future with confidence'. Verify on their current site before quoting.",
    },
    {
      k: "Service lines",
      v: "Assurance, Consulting, Strategy and Transactions, Tax, plus a large technology and managed-services footprint. Cyber and tech risk sit primarily within Consulting and Assurance-adjacent risk practices.",
    },
    {
      k: "Career ladder",
      v: "Associate Consultant → Senior Consultant → Manager → Senior Manager → Director / Associate Partner → Partner. Roughly two to three years per level early on.",
    },
    {
      k: "GDS",
      v: "EY Global Delivery Services - large offshore delivery centres in India serving global engagements. It is entirely reasonable to politely ask which you would join.",
    },
  ],
  offerings: [
    ["Cyber Performance Management", "Analysing, measuring and governing cyber risk with unified visibility, risk quantification, compliance and AI trust."],
    ["Cybersecurity managed services", "Running security capability for clients on an ongoing basis rather than as a one-off project."],
    ["Cognitive Cyber Centre", "An integrated, AI-assisted cyber management platform for detection, response and prevention."],
    ["Identity and Access Management", "Managing digital identities across people, systems and services."],
    ["Service Organization Controls Reporting", "Independent assessment of a service organisation's controls to build trust with its customers."],
    ["Data protection and privacy", "Data security, lifecycle management, compliance frameworks and privacy risk assessment."],
    ["Cyber due diligence in M&A", "Identifying and quantifying cyber risk in a target company during a transaction."],
    ["Next-generation security operations", "Designing and modernising SOC and response capability."],
    ["Privacy and cyber response", "Incident response, breach handling and resilience support."],
    ["Cybersecurity transformation", "Designing, delivering and sustaining large security programmes."],
    ["Supply chain cyber risk", "Managing third-party and supplier ecosystem exposure as a managed service."],
    ["FedRAMP assessment", "Supporting cloud providers through US federal authorisation."],
  ],
  whyConsultants: [
    {
      t: "Independence",
      d: "Some outputs are only credible if an independent party produces them - a SOC report, a certification audit, an assurance opinion. The client structurally cannot self-certify.",
    },
    {
      t: "Scarce specialisation",
      d: "A mid-size company needs a privacy impact assessment twice a year. Hiring a full-time expert is uneconomic; buying the capability is not.",
    },
    {
      t: "Benchmarking",
      d: "A firm that has done the same review at forty peers knows what 'good' looks like in that sector. An internal team only knows its own environment.",
    },
    {
      t: "Capacity and pace",
      d: "Transformation programmes need a surge of skilled people for nine months, not permanently.",
    },
  ],
};

export const VOCAB = [
  ["Engagement", "A single piece of client work with a defined scope, fee and team. The unit of everything."],
  ["Scoping", "Agreeing exactly what is and is not covered - which entities, systems, processes, period and locations."],
  ["Engagement letter / SOW", "The contract defining scope, deliverables, fees, timelines, responsibilities and limitations."],
  ["Fieldwork", "The execution phase where evidence is gathered and controls tested."],
  ["Working paper", "The documented record of a test: objective, population, sample, procedure, evidence, result, conclusion, reviewer sign-off."],
  ["Walkthrough", "Tracing one transaction end to end with the process owner to confirm your understanding of the process and its controls."],
  ["Observation / finding", "A control weakness identified. Written as condition, criteria, cause, consequence, recommendation."],
  ["Management response", "The client's written reply to each observation: agree/disagree, action owner, target date."],
  ["Utilisation", "The share of your hours charged to billable client work. A core performance metric."],
  ["Time writing", "Booking your hours to engagement codes, usually daily. It matters more than freshers expect."],
  ["Staffing / bench", "How you are allocated to engagements. 'On the bench' means unallocated."],
  ["Independence", "Rules preventing conflicts of interest - e.g. restrictions on holding shares in audit clients. It applies to you personally."],
  ["Quality review", "Internal re-examination of engagement files against methodology. Poor documentation is found here."],
  ["Methodology", "The firm's standardised approach and templates for a service. 'Follow the methodology' is a real instruction."],
  ["Deliverable", "What the client receives: report, dashboard, policy set, roadmap, matrix."],
  ["Scope creep", "Work expanding beyond what was contracted. Managed by referring to the engagement letter and raising a change request."],
  ["Escalation", "Raising an issue to the next level. In consulting this is a virtue, not an admission of failure."],
];

export const TEN_DAY_PLAN = [
  { day: 1, core: "Parts 1 and 2. Read the JD decode table twice. Write your own one-paragraph answer to 'what does this role involve'.", side: "Aptitude: percentages, ratios, averages - 20 questions timed." },
  { day: 2, core: "Risk vocabulary, control types, the engagement lifecycle. Practise writing one finding in 5C format.", side: "Aptitude: profit and loss, interest - 20 questions timed." },
  { day: 3, core: "Financial audit IT integration, IT/IS audit, SOCR. The highest-probability technical topics for a Tech Risk interviewer.", side: "Aptitude: time and work, time-speed-distance." },
  { day: 4, core: "Vendor risk, contract risk, SAM. Lower probability individually, but being the candidate who can explain SAM is a differentiator.", side: "Logical reasoning: arrangements, directions, syllogisms." },
  { day: 5, core: "IAM and Security Program Management. Learn joiner-mover-leaver cold; it is the single most-asked cyber process question.", side: "Verbal: reading comprehension, two passages timed." },
  { day: 6, core: "BCM, privacy, threat management. Memorise RTO/RPO, the incident response lifecycle, and the DPDP essentials.", side: "Full-length mock aptitude test, timed, one sitting." },
  { day: 7, core: "Technical fundamentals. Target the gaps, not what you already know. Say the OSI model and OWASP Top 10 out loud.", side: "Read three current security news items; write two lines on each." },
  { day: 8, core: "Build your STAR story bank. Write six stories in full. This takes longer than you expect and is the highest-return day.", side: "Practise one GD topic aloud for 90 seconds." },
  { day: 9, core: "Cases and scenarios. Work through the ten scenarios speaking aloud before reading the model answer.", side: "Refine your resume. Verify every claim on it." },
  { day: 10, core: "Rapid revision. One full mock interview with a friend, recorded. Verify firm facts on the official site. Sleep.", side: "Logistics: documents, clothes, route, timings, charged devices." },
];

export const EIGHTY_TWENTY = [
  "JD decode table",
  "Risk and controls vocabulary",
  "Identity and Access Management",
  "SOC reporting",
  "Why EY, why cyber, tell me about yourself",
  "Rapid-fire bank",
];

export const DAY_BEFORE = [
  "Verify firm facts on the official website - service offerings, any recent announcement you plan to mention.",
  "Re-read the JD once, slowly. It is the syllabus.",
  "Read your own resume as an interviewer would, and write down the five questions you would ask yourself. Prepare those five.",
  "Say your 'tell me about yourself' answer out loud three times. Not in your head - out loud.",
  "Skim the cheat sheet. Do not attempt to learn anything new the night before.",
  "Print extra copies of your resume and assemble documents per your placement cell's instructions.",
  "Clothes ready and checked. Route and timing confirmed. Devices charged.",
  "Stop by a fixed time and sleep.",
];

export const DAY_OF = [
  "Arrive early enough that a delay is not a crisis. For a virtual round, join five minutes early and test audio, video, lighting and background.",
  "Silence your phone. Water within reach.",
  "Be courteous to everyone - coordinators, security, juniors. It is noticed and sometimes reported.",
  "In the room: a clear greeting, eye contact, sit when invited, notebook and pen out.",
  "Listen to the whole question before answering. A two-second pause reads as considered, not slow.",
  "Signpost your longer answers - 'three things' - and then deliver three.",
  "If you do not know, say so and reason aloud. Never bluff.",
  "Take a brief note when they explain something. It signals attention and gives you material for a question.",
  "Ask your two prepared questions, including one drawn from something they said.",
  "Close deliberately, thank them by name if you have it, and leave the room the way you entered it.",
];
