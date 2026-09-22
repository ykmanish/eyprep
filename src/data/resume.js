/**
 * The candidate's own resume, and what an EY panel will do with it.
 * Interviewers open the technical round by working down the page, so every
 * line here is a question she is inviting.
 */

export const CANDIDATE = {
  name: "Srishti Meena",
  first: "Srishti",
  email: "srishtimeenaoffical25@gmail.com",
  phone: "+91 91167 98518",
  linkedin: "linkedin.com/in/srishtimeena",
  headline: "MBA, Cyber Security Management",
  school: "National Forensic Sciences University",
};

export const RESUME = {
  summary:
    "ISO/IEC 27001:2022 Lead Auditor trained (CQI and IRCA certified PR373), with internship experience reviewing IT Service Management processes against ITIL 4, PinkVERIFY and ISO/IEC 20000. Built an ISMS GRC platform that carries a finding from the ISO control where it was raised through risk rating, corrective action and SLA tracking to verified closure.",

  skills: [
    {
      group: "Governance, Risk & Compliance",
      tone: "blue",
      items: [
        "ISO/IEC 27001:2022",
        "ISO/IEC 20000-1:2018",
        "NIST Cybersecurity Framework (CSF)",
        "ISMS internal audit",
        "Risk assessment and treatment",
        "Control evaluation",
        "Non conformity and corrective action (CAPA) tracking",
      ],
    },
    {
      group: "IT Service Management",
      tone: "green",
      items: [
        "ITIL 4 practices",
        "PinkVERIFY process requirements",
        "Incident Management",
        "Service Level Management",
        "IT Asset Management",
        "Release & Deployment",
        "Service Catalog",
        "Monitoring & Alerting",
        "SLA tracking",
      ],
    },
    {
      group: "IT Audit & Assurance",
      tone: "yellow",
      items: [
        "Process documentation review",
        "Gap analysis",
        "Evidence and work paper preparation",
        "Audit observation reporting",
        "Remediation ownership tracking and closure verification",
      ],
    },
    {
      group: "Security & Technical",
      tone: "red",
      items: [
        "Network security fundamentals",
        "TCP/IP",
        "Wireshark",
        "Nmap",
        "Network traffic analysis",
        "Digital forensics fundamentals",
        "Applied cryptography basics",
        "Static and dynamic malware analysis",
      ],
    },
    {
      group: "Communication & Delivery",
      tone: "purple",
      items: [
        "Technical writing and documentation",
        "Risk communication",
        "Requirement analysis and stakeholder discussions",
        "Analytical problem solving",
        "Teamwork",
        "Multitasking to deadlines",
      ],
    },
  ],

  experience: [
    {
      role: "Cyber Security Compliance Intern",
      org: "Tectona Software Solutions Pvt. Ltd.",
      place: "Ahmedabad",
      dates: "Jun 2026 to Jul 2026",
      bullets: [
        "Reviewed, validated and enhanced ITSM process documentation across six process areas, covering Service Level, IT Asset, Incident, Monitoring & Alerting, Release & Deployment and Service Catalog Management.",
        "Cross verified process documentation against ITIL 4 best practices, PinkVERIFY requirements and ISO/IEC 20000 guidelines, identifying documentation gaps and recommending targeted process improvements.",
        "Studied ITIL 4 practices and PinkVERIFY certification criteria to assess process maturity and readiness, building a working understanding of how service management controls are evidenced during assessment.",
        "Participated in requirement analysis sessions and team discussions, converting discussion outcomes into structured written process documentation suitable for audit review.",
        "Gained direct exposure to information security, ISO related compliance activities, audit requirements and remediation processes, observing that identifying a finding is only one part of the cycle and that tracking its risk, corrective action, ownership and final remediation matters equally.",
      ],
    },
  ],

  projects: [
    {
      name: "ISMS GRC Platform",
      sub: "ISO 27001 Internal Audit, Risk and Remediation Management",
      bullets: [
        "Built a centralised ISMS GRC platform that manages ISO 27001 internal audit, compliance findings, risk management and IT remediation from a single dashboard, replacing scattered tracking across spreadsheets and email.",
        "Connected the full compliance lifecycle in one traceable chain: ISO control assessment, finding, risk, corrective action, ITSM ticket, SLA tracking, final resolution.",
        "Delivered end to end traceability, so that instead of stopping at identifying a compliance issue, every issue can be traced from the ISO control where it was raised all the way to the actual remediation and its formal closure.",
        "Modelled risk rating, corrective action ownership and SLA based due dates against each finding, so overdue remediation is visible to management before it escalates into a repeat audit observation.",
      ],
    },
  ],

  certifications: [
    {
      name: "CQI & IRCA Certified PR373: ISO/IEC 27001:2022 Lead Auditor Training",
      by: "Bureau Veritas",
      when: "June 2026",
      note: "Covered ISMS implementation, risk assessment, compliance evaluation, audit planning and audit reporting.",
    },
    { name: "Introduction to Cybersecurity", by: "Cisco Networking Academy" },
    { name: "Certificate Course on Blockchain Technology" },
  ],

  education: [
    {
      degree: "MBA, Cyber Security Management",
      school: "National Forensic Sciences University",
      place: "Gandhinagar",
      score: "CGPI 8.50",
      years: "2025 to Present",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "University of Rajasthan",
      place: "Jaipur",
      score: "80.7%",
      years: "2022 to 2025",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Line by line: what the panel asks, and how to answer it             */
/* ------------------------------------------------------------------ */

export const RESUME_PROBES = [
  /* ---------------- Summary ---------------- */
  {
    id: "p-sum-1",
    section: "Summary",
    tone: "blue",
    risk: "high",
    line: "ISO/IEC 27001:2022 Lead Auditor trained (CQI and IRCA certified PR373)",
    asks: [
      "Walk me through how you would plan an ISO 27001 internal audit.",
      "What is the difference between a major and a minor non conformity?",
      "What is the Statement of Applicability and why does it exist?",
      "Are you a certified Lead Auditor?",
    ],
    answer:
      "This is the strongest line on the page and the one most likely to be tested properly, so be precise about what it is. The honest framing: I have completed the CQI and IRCA certified Lead Auditor training course and passed its assessment. Full registration as an auditor also requires logged audit days, which I do not have yet. Then show the training landed: audit planning starts from scope and the Statement of Applicability, you build a checklist against clauses 4 to 10 and the applicable Annex A controls, you sample evidence rather than accept assertions, and you grade findings as major non conformity, minor non conformity, or opportunity for improvement.",
    trap:
      "Saying you are a certified Lead Auditor when the credential is the training course. Interviewers at this firm verify certifications, and a discovered overstatement recontextualises everything else you said.",
  },
  {
    id: "p-sum-2",
    section: "Summary",
    tone: "blue",
    risk: "medium",
    line: "Reviewing IT Service Management processes against ITIL 4, PinkVERIFY and ISO/IEC 20000",
    asks: [
      "What is PinkVERIFY and who runs it?",
      "How is ISO/IEC 20000 different from ITIL?",
      "Give me an example of a documentation gap you found.",
    ],
    answer:
      "Separate the three cleanly, because most candidates blur them. ITIL 4 is a best practice framework for service management, not certifiable for an organisation. ISO/IEC 20000-1 is the certifiable management system standard for service management, so it is the one an organisation is audited against. PinkVERIFY is a third party assessment of whether a software tool supports ITIL practices to a defined set of criteria. Then give one concrete gap you found and what you recommended.",
    trap:
      "Describing PinkVERIFY as an organisational certification. It assesses tools, not companies.",
  },
  {
    id: "p-sum-3",
    section: "Summary",
    tone: "blue",
    risk: "medium",
    line: "Built an ISMS GRC platform that carries a finding ... to verified closure",
    asks: [
      "Show me that chain end to end with a real example.",
      "Who was it built for, and is anyone using it?",
      "What would you build differently now?",
    ],
    answer:
      "Lead with the insight, not the build. The point of the platform is that most organisations stop at identifying a finding, and the risk actually lives in whether the remediation happened. Then walk one finding through: ISO control assessed, finding raised, risk rated, corrective action assigned with an owner, ITSM ticket created, SLA due date tracked, closure verified with evidence. Be straight about the scope: this was a self directed project, not a production deployment with live users.",
    trap:
      "Implying it is deployed in an organisation if it is not. Say what it is and let the thinking carry it.",
  },

  /* ---------------- Skills: GRC ---------------- */
  {
    id: "p-grc-1",
    section: "Core skills",
    tone: "green",
    risk: "high",
    line: "ISO/IEC 27001:2022",
    asks: [
      "How is the 2022 revision structured compared with 2013?",
      "Which clauses are auditable?",
      "What is the relationship between 27001 and 27002?",
    ],
    answer:
      "93 Annex A controls across four themes: organisational, people, physical, technological. That replaced 114 controls in 14 domains. The auditable management system requirements are clauses 4 to 10: context, leadership, planning, support, operation, performance evaluation, improvement. 27002 is implementation guidance for the Annex A controls and is not certifiable.",
    trap:
      "Quoting the old 114 controls in 14 domains. If she lists the 2022 version, the 2022 structure is expected.",
  },
  {
    id: "p-grc-2",
    section: "Core skills",
    tone: "green",
    risk: "medium",
    line: "Risk assessment and treatment",
    asks: [
      "Take me through your risk assessment method.",
      "What are the treatment options?",
      "Who signs off a risk acceptance?",
    ],
    answer:
      "Identify the asset, the threat and the vulnerability, rate likelihood and impact to get inherent risk, apply controls, restate residual risk, then treat: mitigate, transfer, avoid or accept. The part that scores is the last one. Acceptance is a management decision recorded at the right level of authority, not something the auditor or the analyst decides.",
    trap:
      "Describing a scoring matrix and stopping. The governance step, who accepts and how it is recorded, is what separates an auditor from a student.",
  },
  {
    id: "p-grc-3",
    section: "Core skills",
    tone: "green",
    risk: "medium",
    line: "Non conformity and corrective action (CAPA) tracking",
    asks: [
      "What is the difference between a correction and a corrective action?",
      "How do you know a corrective action actually worked?",
    ],
    answer:
      "A correction fixes the instance. A corrective action removes the cause so it does not recur. If twelve leaver accounts were still active, revoking those twelve is the correction; automating de provisioning from HR and adding a monthly reconciliation is the corrective action. Effectiveness is verified later by re testing a fresh sample, not by the owner declaring it closed.",
    trap:
      "Treating closure as an administrative step. Verification of effectiveness is the whole point of CAPA.",
  },
  {
    id: "p-grc-4",
    section: "Core skills",
    tone: "green",
    risk: "low",
    line: "NIST Cybersecurity Framework (CSF)",
    asks: ["Name the functions.", "When would you use CSF rather than ISO 27001?"],
    answer:
      "Govern, Identify, Protect, Detect, Respond, Recover, with Govern added in version 2.0. Use CSF to structure a maturity assessment and board conversation; use ISO 27001 when the client needs a certificate customers recognise.",
    trap: "Giving five functions. Govern was the headline addition in 2.0.",
  },

  /* ---------------- Skills: ITSM ---------------- */
  {
    id: "p-itsm-1",
    section: "Core skills",
    tone: "yellow",
    risk: "medium",
    line: "Incident Management, Service Level Management, Release & Deployment",
    asks: [
      "Difference between incident management and problem management?",
      "What is in a good SLA?",
      "How would you audit release and deployment?",
    ],
    answer:
      "An incident is an unplanned interruption; the goal is restoring service fast, even with a workaround. Problem management looks for the underlying cause so the incident stops recurring. An SLA needs a measurable target, a defined measurement method, a reporting cadence and a consequence such as a service credit. Auditing release and deployment means testing that changes were approved before deployment, that testing including user acceptance was evidenced, and that developers cannot migrate their own code to production.",
    trap:
      "Using incident and problem interchangeably. This is the fastest tell in an ITSM conversation.",
  },
  {
    id: "p-itsm-2",
    section: "Core skills",
    tone: "yellow",
    risk: "medium",
    line: "IT Asset Management",
    asks: [
      "Why does asset management matter to security, not just to finance?",
      "How does it connect to vulnerability management?",
    ],
    answer:
      "An accurate inventory is the first CIS control and the prerequisite for everything else. You cannot patch what you do not know you have, you cannot assess a vendor you do not know you use, and end of life software is both a licence exposure and an unpatched attack surface. That cross over between an asset process and a cyber outcome is exactly the blended thinking this JD is built around.",
    trap: "Framing ITAM purely as cost control. The security angle is the differentiator.",
  },

  /* ---------------- Skills: Audit ---------------- */
  {
    id: "p-aud-1",
    section: "Core skills",
    tone: "purple",
    risk: "high",
    line: "Evidence and work paper preparation",
    asks: [
      "What goes into a working paper?",
      "How do you establish that a population is complete?",
      "How would you write up a finding?",
    ],
    answer:
      "A working paper records the objective, the population and how its completeness was corroborated, the sample and why that sample, the procedure performed, the evidence reference, the result and the conclusion, plus reviewer sign off. Population completeness is the step freshers miss: if the client hands you a spreadsheet, you corroborate it against an independent source such as the system log, or the sample proves nothing. Write the finding in 5C: condition, criteria, cause, consequence, corrective action.",
    trap:
      "Describing testing without mentioning population completeness or the evidence reference. Both are what a quality review looks for.",
  },
  {
    id: "p-aud-2",
    section: "Core skills",
    tone: "purple",
    risk: "medium",
    line: "Gap analysis",
    asks: [
      "How do you run a gap analysis against a standard?",
      "What do you deliver at the end of one?",
    ],
    answer:
      "Map each requirement of the standard to current practice, gather evidence rather than assertions, mark each as met, partially met or not met, and record why. The deliverable is not a list of gaps: it is a prioritised remediation roadmap, sequenced by risk reduction against effort and dependency, with owners and realistic dates.",
    trap: "Delivering a gap list with no sequencing. Clients buy the roadmap, not the list.",
  },

  /* ---------------- Skills: Security technical ---------------- */
  {
    id: "p-tec-1",
    section: "Core skills",
    tone: "red",
    risk: "high",
    line: "Wireshark, Nmap, network traffic analysis",
    asks: [
      "What would you actually do with Wireshark?",
      "What does an Nmap SYN scan do?",
      "You see traffic leaving on port 53 at 3am. What do you think?",
    ],
    answer:
      "Be specific and bounded. Wireshark for capturing and filtering traffic to confirm what a host is really talking to, reading a TCP handshake, spotting plaintext protocols that should not be in use. Nmap for host discovery and open port enumeration; a SYN scan sends SYN and never completes the handshake, so it is faster and quieter than a full connect scan. Unexpected port 53 volume suggests DNS tunnelling for command and control or exfiltration.",
    trap:
      "Listing tools she cannot demonstrate. Every listed item is fair game, and a bluffed tool is discovered in one follow up. If it is coursework level, say coursework level.",
  },
  {
    id: "p-tec-2",
    section: "Core skills",
    tone: "red",
    risk: "medium",
    line: "Static and dynamic malware analysis",
    asks: [
      "What is the difference between static and dynamic analysis?",
      "Why does fileless malware defeat signature detection?",
    ],
    answer:
      "Static analysis examines the sample without running it: strings, hashes, imports, packing. Dynamic analysis detonates it in an isolated sandbox and observes behaviour: processes spawned, files and registry touched, network callbacks. Fileless malware runs in memory using legitimate tools such as PowerShell and WMI, so there is no file to sign, which is why behavioural EDR matters more than signatures.",
    trap:
      "Overclaiming reverse engineering depth. For this role, recognising the categories and the control implication is the bar.",
  },
  {
    id: "p-tec-3",
    section: "Core skills",
    tone: "red",
    risk: "medium",
    line: "Applied cryptography basics, digital forensics fundamentals",
    asks: [
      "Encoding, hashing and encryption: separate them.",
      "What is chain of custody and why does it matter?",
    ],
    answer:
      "Encoding is representation and gives no security. Hashing is one way and gives integrity. Encryption is two way with a key and gives confidentiality. In forensics, chain of custody is the documented record of who handled evidence, when and why, with hashes taken at acquisition so integrity can be proven later. Without it the evidence may be worthless in a proceeding, however good the analysis.",
    trap: "Calling hashing a form of encryption. Interviewers use this to sort quickly.",
  },

  /* ---------------- Experience ---------------- */
  {
    id: "p-exp-1",
    section: "Experience",
    tone: "blue",
    risk: "high",
    line: "Reviewed, validated and enhanced ITSM process documentation across six process areas",
    asks: [
      "Pick one of the six and take me through what you actually did.",
      "What did you personally own versus what the team did?",
      "What was the hardest part?",
    ],
    answer:
      "Choose one area and go deep rather than listing all six. Incident Management is the safest choice because everyone in the room knows it. Say what the document claimed, what you checked it against, the specific gap you found, what you recommended, and what happened to the recommendation. Be scrupulous about ownership: I contributed to X and owned Y is stronger than an implied claim to all six.",
    trap:
      "Listing all six areas again when asked to go deep. The interviewer already read the line; they want the one you understood best.",
  },
  {
    id: "p-exp-2",
    section: "Experience",
    tone: "blue",
    risk: "medium",
    line: "Identifying documentation gaps and recommending targeted process improvements",
    asks: [
      "Give me the single best gap you found.",
      "Was your recommendation accepted? What if it had been rejected?",
    ],
    answer:
      "Have one gap ready in full detail: the process, what the document said, what ITIL 4 or ISO 20000 expects, why the difference mattered, and the recommendation. Then add the consulting layer: if a recommendation is not accepted, the answer is not to argue, it is to document the residual risk and let the owner accept it consciously.",
    trap:
      "A vague answer here undoes the whole bullet. One specific example beats five general ones.",
  },
  {
    id: "p-exp-3",
    section: "Experience",
    tone: "blue",
    risk: "medium",
    line: "Participated in requirement analysis sessions and team discussions",
    asks: [
      "How do you turn a messy discussion into a document someone can audit against?",
      "Tell me about a time you had to get information out of a reluctant stakeholder.",
    ],
    answer:
      "This maps directly to the JD line about conducting client interviews and drafting work papers, so use it. Describe the method: capture the process as the owner describes it, then play it back to confirm, then ask where it breaks, especially what happens when something is urgent and the normal route is too slow. Write it up so that someone who was not in the room can follow the sequence and test it.",
    trap: "Treating this as a soft bullet. It is the closest thing on the resume to the actual day job.",
  },
  {
    id: "p-exp-4",
    section: "Experience",
    tone: "blue",
    risk: "high",
    line: "Jun 2026 to Jul 2026",
    asks: [
      "This was two months. How much of it was hands on?",
      "What would you have done with another three months?",
    ],
    answer:
      "Do not be defensive about a short internship. State the scope plainly, then show you extracted more from it than the duration suggests: the insight that a finding without tracked remediation is not really closed, which is what the ISMS GRC platform was built to solve. An internship that changed what you built afterwards reads far better than a longer one that did not.",
    trap: "Padding the internship to sound longer. The dates are on the page and get verified.",
  },

  /* ---------------- Project ---------------- */
  {
    id: "p-proj-1",
    section: "Project",
    tone: "green",
    risk: "high",
    line: "Built a centralised ISMS GRC platform ... replacing scattered tracking across spreadsheets and email",
    asks: [
      "What did you build it with?",
      "Was this solo or a team? What did you own?",
      "What does it do that a spreadsheet cannot?",
    ],
    answer:
      "Answer the technology question briefly and honestly, then move to the design decisions, because that is what is being scored. What a spreadsheet cannot do: enforce that every finding has an owner and a due date, link a finding to the control it came from, surface overdue remediation before it becomes a repeat observation, and preserve an audit trail of who changed what.",
    trap:
      "Spending four minutes on the tech stack. The interviewer is assessing whether you understood the compliance problem, not your framework choice.",
  },
  {
    id: "p-proj-2",
    section: "Project",
    tone: "green",
    risk: "high",
    line: "ISO control assessment, finding, risk, corrective action, ITSM ticket, SLA tracking, final resolution",
    asks: [
      "Walk one real finding through that chain.",
      "Why does the ITSM ticket step matter?",
      "What decides the SLA due date?",
    ],
    answer:
      "Have one worked example memorised, ideally an access control finding since it is the most commonly tested. The ITSM ticket step matters because remediation is done by IT, not by the audit function, so without a ticket the corrective action lives in a document nobody actions. The due date should follow the risk rating, not a flat default, so high rated findings get weeks and low rated ones get a quarter.",
    trap:
      "Reciting the chain as a list. Walk one item through it; the chain is the claim, the example is the proof.",
  },
  {
    id: "p-proj-3",
    section: "Project",
    tone: "green",
    risk: "medium",
    line: "Overdue remediation is visible to management before it escalates into a repeat audit observation",
    asks: [
      "What would you put on a management dashboard?",
      "Is a repeat finding worse than a new one? Why?",
    ],
    answer:
      "A repeat finding is materially worse, because it says the corrective action process failed, not just the control. That moves the conversation from an operational gap to a governance gap and it is exactly what an audit committee reacts to. On the dashboard: open findings by risk rating, ageing against SLA, overdue by owner, and the closure verification rate.",
    trap: "Proposing a dashboard of raw counts. Ageing and trend beat totals every time.",
  },
  {
    id: "p-proj-4",
    section: "Project",
    tone: "green",
    risk: "medium",
    line: "What would you do differently?",
    asks: [
      "What is the biggest limitation of what you built?",
      "How would you extend it?",
    ],
    answer:
      "Name a real limitation before they find it. Honest options: it has not been tested against a live audit cycle with real reviewers; evidence attachment and retention were out of scope; it models one standard rather than mapping a control once and reporting it against several frameworks. Naming a limitation yourself is a strong signal; being caught without having thought about it is a weak one.",
    trap: "Claiming there are no limitations. Nobody believes that about any first build.",
  },

  /* ---------------- Education and certs ---------------- */
  {
    id: "p-edu-1",
    section: "Education",
    tone: "purple",
    risk: "medium",
    line: "BCA to MBA, Cyber Security Management",
    asks: [
      "You have a computer applications background. Why the management route?",
      "Do you miss the technical side?",
    ],
    answer:
      "This is a strength for this JD and should be said as one. The BCA means you can follow a system administrator explaining an Active Directory setup; the MBA means you can translate what is wrong with it into a business consequence. That combination is precisely what the role asks for, because EY hires this role from management and commerce backgrounds on purpose.",
    trap:
      "Apologising for not being an engineer. The JD asks for a CA or an MBA, not a B.Tech.",
  },
  {
    id: "p-edu-2",
    section: "Certifications",
    tone: "purple",
    risk: "low",
    line: "Certificate Course on Blockchain Technology",
    asks: ["Where does blockchain fit in your story?"],
    answer:
      "It is off the main narrative, so give it one honest sentence and move on: it was curiosity about distributed ledgers and it taught you something about integrity and non repudiation, which is where it touches this work. Do not try to make it central.",
    trap:
      "Stretching it into a career narrative. A small honest answer is better than a forced one.",
  },
  {
    id: "p-edu-3",
    section: "Certifications",
    tone: "purple",
    risk: "low",
    line: "What next?",
    asks: ["Which certifications do you plan to pursue?"],
    answer:
      "CISA first, because it maps directly to this role and builds on the audit training already done, then a privacy credential such as CIPP or India's DCPP given where DPDP is heading. CISSP later, once there is enough experience behind it to be worth having.",
    trap: "Naming CISSP first. It is a senior credential and naming it early reads as unaware.",
  },
];

/* ------------------------------------------------------------------ */
/* The three things they will go deep on                               */
/* ------------------------------------------------------------------ */

export const DEEP_DIVES = [
  {
    id: "d-iso",
    n: 1,
    title: "The ISO 27001:2022 Lead Auditor training",
    icon: "📘",
    tone: "blue",
    why: "It is the most credible line on the page, which is exactly why it gets tested rather than admired. If the training did not stick, this is where it shows.",
    opening:
      "Be exact about what the credential is, then prove the content landed. Precision here buys you credibility for the rest of the round.",
    followups: [
      {
        q: "How would you plan an ISO 27001 internal audit?",
        a: "Start from scope and the Statement of Applicability, because they define what is in and what was excluded and why. Review the previous audit findings and the risk register. Build an audit plan and a checklist against clauses 4 to 10 and the applicable Annex A controls, allocating time by risk rather than evenly. Hold an opening meeting, gather evidence by inspection and re performance rather than inquiry alone, record findings as you go, then a closing meeting to agree facts before grading anything.",
      },
      {
        q: "Major versus minor non conformity?",
        a: "A major is a total breakdown of a requirement, or a number of minors in the same area that together show the system is not working: for example no risk assessment has ever been performed. A minor is a single lapse in an otherwise functioning system: one record missing a sign off. An opportunity for improvement is not a non conformity at all and should not be written as one.",
      },
      {
        q: "What is the Statement of Applicability?",
        a: "The document that lists the Annex A controls, states whether each one applies, gives the justification for inclusion or exclusion, and records implementation status. It is the bridge between the risk assessment and the controls, and it is the first thing an auditor asks for because it defines the audit scope.",
      },
      {
        q: "Which clauses carry the management system requirements?",
        a: "Clauses 4 to 10: context of the organisation, leadership, planning, support, operation, performance evaluation, improvement. Annex A is the control set; the clauses are what make it a management system, and an organisation is certified against the clauses.",
      },
      {
        q: "An auditee gives you a policy document as evidence a control operates. Is that enough?",
        a: "No. A policy evidences design intent, not operation. To conclude on operating effectiveness I need records from across the period: approvals, review sign offs, tickets, system output. Inquiry and a policy alone is an opinion, not evidence.",
      },
    ],
    traps: [
      "Saying certified rather than trained. State it accurately and unprompted.",
      "Quoting the 2013 structure of 114 controls in 14 domains when the resume says 2022.",
      "Grading everything as a major. Interviewers listen for proportionality.",
    ],
  },
  {
    id: "d-intern",
    n: 2,
    title: "The Tectona compliance internship",
    icon: "🏢",
    tone: "yellow",
    why: "Two months is short, so the panel will test depth rather than breadth. One process area understood properly beats six listed.",
    opening:
      "Do not re list the six process areas. Pick one, ideally Incident Management or Service Level Management, and take them through it end to end with a real gap you found.",
    followups: [
      {
        q: "ITIL, ISO 20000 and PinkVERIFY: how do they relate?",
        a: "ITIL 4 is a best practice framework of service management practices and an organisation cannot be certified against it. ISO/IEC 20000-1 is the certifiable management system standard for service management, so that is what an organisation gets audited against. PinkVERIFY assesses whether a software tool supports ITIL practices against defined criteria, so it applies to tools, not to companies. In practice a client follows ITIL, certifies to 20000-1, and buys a PinkVERIFY assessed tool.",
      },
      {
        q: "What does good Incident Management documentation actually contain?",
        a: "Defined categorisation and prioritisation with an impact and urgency matrix, response and resolution targets tied to priority, escalation paths and who can invoke them, the interface to problem management for recurring incidents, major incident handling, and how incidents are recorded and closed with user confirmation. The common gap is that priority is defined but nothing enforces it.",
      },
      {
        q: "Give me a documentation gap you found and what you did about it.",
        a: "Pick one and give the full shape: what the document said, what ITIL 4 or ISO 20000 expects, why the difference creates risk, the recommendation, and what happened next. If the recommendation was not adopted, say so and say what you would have documented instead.",
      },
      {
        q: "How did that internship change how you think?",
        a: "The line to use is already on the resume: identifying a finding is only part of the cycle, and tracking its risk, corrective action, ownership and remediation matters just as much. That observation is what the ISMS GRC platform was built to solve, which makes the internship and the project one story rather than two bullets.",
      },
    ],
    traps: [
      "Claiming ownership of team output. Use we for the team and I for your part, in proportion.",
      "Being defensive about the two month duration. State it and show what you took from it.",
    ],
  },
  {
    id: "d-grc",
    n: 3,
    title: "The ISMS GRC platform",
    icon: "🛠️",
    tone: "green",
    why: "This is the differentiator. Almost no campus candidate has built something that models the compliance lifecycle, so expect five minutes on it and a lot of follow ups.",
    opening:
      "Lead with the problem, not the build. The problem is that findings get identified and then tracked across spreadsheets and email, so nobody can prove remediation happened. Then show the chain, then one worked example.",
    followups: [
      {
        q: "Walk one finding through the whole chain.",
        a: "Use a concrete one. During an access control review against Annex A, twelve of twenty five privileged accounts belonged to leavers. That becomes a finding linked to the control it came from. It is rated high because the accounts had transaction authority in a financial system. A corrective action is raised with a named owner in IT: automate de provisioning from the HR system and reconcile monthly. An ITSM ticket is created so the work sits in the queue where IT actually works. The due date follows the risk rating. Closure requires evidence, and the platform holds it open until that evidence is attached.",
      },
      {
        q: "Why route corrective actions through an ITSM ticket at all?",
        a: "Because remediation is executed by IT, not by the compliance function. If a corrective action lives only in an audit tracker, it competes with nothing and gets done last. Putting it in the queue that IT already works from is what makes it real, and it also gives you the SLA mechanics for free.",
      },
      {
        q: "How do you decide the risk rating on a finding?",
        a: "Likelihood and impact, but the impact should be expressed in business terms: what is exposed, which system, what regulatory or financial consequence follows. A high rating on a finance system with transaction authority is not the same as the identical finding on a test workstation, and the rating is what drives the due date.",
      },
      {
        q: "What stops someone just marking a finding closed?",
        a: "Closure verification. The owner proposes closure with evidence; verification is done by someone other than the owner, by re testing a fresh sample rather than accepting the assertion. Otherwise you have automated the rubber stamp rather than the control.",
      },
      {
        q: "How would you extend it for a consulting client?",
        a: "Map a control once and report it against several frameworks, so one piece of evidence serves ISO 27001, SOC 2 and a regulator's requirement instead of three separate exercises. That is where clients feel the cost, and it is the natural next step from what is already modelled.",
      },
    ],
    traps: [
      "Leading with the technology stack. The design decisions are what is being scored.",
      "Overstating deployment. A self directed project explained well beats an exaggerated one.",
      "Not having a worked example ready. The chain is the claim; the example is the proof.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Where this resume is exposed                                        */
/* ------------------------------------------------------------------ */

export const RESUME_RISKS = [
  {
    id: "r1",
    severity: "high",
    title: "Trained versus certified",
    issue:
      "The summary says Lead Auditor trained, which is accurate, but it is easy to slip into saying certified out loud. Offers are subject to verification and interviewers at this firm probe credentials specifically.",
    fix: "Rehearse the exact sentence until it is automatic, and say it before you are asked.",
    say: "I have completed the CQI and IRCA certified Lead Auditor training course and passed the assessment. Registration as an auditor also needs logged audit days, which I have not done yet, so I describe myself as trained rather than certified.",
  },
  {
    id: "r2",
    severity: "high",
    title: "The technical skills line is a standing invitation",
    issue:
      "Wireshark, Nmap, malware analysis and digital forensics are all listed. Every listed item is fair game, and a tool you cannot discuss is discovered in one follow up question.",
    fix: "For each tool, prepare one sentence on what you did with it and one on what you have not done. Where it is coursework level, label it coursework level before they ask.",
    say: "I have used Wireshark to capture and filter traffic on lab exercises and read a handshake; I have not done packet analysis on a production network under incident conditions.",
  },
  {
    id: "r3",
    severity: "medium",
    title: "A two month internship",
    issue:
      "Jun 2026 to Jul 2026 is short, and six process areas across eight weeks invites the question of how deep any one of them went.",
    fix: "Go deep on one area voluntarily. Depth on one reads better than breadth across six.",
    say: "It was an eight week internship, so I would rather tell you properly about one process area than summarise six.",
  },
  {
    id: "r4",
    severity: "medium",
    title: "The project has no stated outcome",
    issue:
      "The project bullets describe what the platform does but not what happened as a result, because it is a self directed build. The so what question is coming.",
    fix: "Reframe as learning impact and transferability rather than business impact, and name a limitation before they find one.",
    say: "It was a self directed build rather than a live deployment, so the honest outcome is what it taught me: that the hard part is not identifying a finding, it is designing the process so the remediation is provable.",
  },
  {
    id: "r5",
    severity: "medium",
    title: "Dates cluster in June 2026",
    issue:
      "The Lead Auditor training and the internship both land in June 2026, and the project sits after them. Expect a question about sequencing and whether the timeline is as described.",
    fix: "Know your own chronology cold and tell it as a progression, because it genuinely is one.",
    say: "The training came first and gave me the audit vocabulary; the internship showed me how findings behave in a real organisation; the platform came out of the gap I saw between the two.",
  },
  {
    id: "r6",
    severity: "low",
    title: "Blockchain sits off the narrative",
    issue:
      "It is unconnected to GRC and audit, and an interviewer may ask why it is there.",
    fix: "One honest sentence, then move on. Do not build a story around it.",
    say: "That was curiosity rather than career direction. The part that stayed with me was integrity and non repudiation, which does connect to this work.",
  },
  {
    id: "r7",
    severity: "low",
    title: "No quantification on the project",
    issue:
      "Consulting resumes without numbers read as vague. The internship bullets have six process areas; the project bullets have none.",
    fix: "Add counts where they are truthful: controls modelled, findings tracked in the demo data, process areas covered.",
    say: "Rewrite the bullet rather than invent a number in the room.",
  },
];

/* ------------------------------------------------------------------ */
/* Bullet rewrites                                                     */
/* ------------------------------------------------------------------ */

export const BULLET_REWRITES = [
  {
    before:
      "Built a centralised ISMS GRC platform that manages ISO 27001 internal audit, compliance findings, risk management and IT remediation from a single dashboard.",
    after:
      "Built an ISMS GRC platform covering ISO 27001 internal audit, findings, risk and remediation in one dashboard, modelling 93 Annex A controls and tracking each finding through risk rating, owner, SLA due date and evidence backed closure.",
    why: "Adds the numbers and names the mechanism. It also seeds three follow up questions you have already prepared for.",
  },
  {
    before:
      "Reviewed, validated and enhanced ITSM process documentation across six process areas.",
    after:
      "Reviewed and rewrote ITSM process documentation across six process areas against ITIL 4, PinkVERIFY and ISO/IEC 20000, raising documented gaps in Incident and Service Level Management and recommending changes adopted into the revised process set.",
    why: "Names what was measured against and what changed as a result. Reviewed on its own is an activity, not an outcome.",
  },
  {
    before: "Studied ITIL 4 practices and PinkVERIFY certification criteria.",
    after:
      "Assessed process maturity against PinkVERIFY criteria, mapping how each service management control would be evidenced during a tool assessment.",
    why: "Studied is the weakest verb on a consulting resume. Assessed and mapped describe work.",
  },
  {
    before: "Gained direct exposure to information security and ISO related compliance activities.",
    after:
      "Traced compliance findings through risk rating, corrective action ownership and remediation, which identified the tracking gap the ISMS GRC platform was built to close.",
    why: "Turns a passive exposure line into the hinge of your narrative, and links the internship to the project explicitly.",
  },
];

export const RESUME_RULES = [
  "One page. At campus stage, two pages signals an inability to prioritise.",
  "Lead with the MBA in Cyber Security Management, because the JD asks for an MBA or PGDM by name.",
  "Quantify whatever is truthful: controls modelled, process areas covered, findings tracked, stakeholders involved.",
  "Use the JD's own vocabulary where it is honest: risk assessment, controls, governance, compliance, documentation, stakeholder management.",
  "List only tools you have genuinely used, and be ready to say what you have not done with each.",
  "Label certifications precisely: trained, in progress or completed. Never leave it ambiguous.",
  "Keep one line of non academic substance. The JD mentions team and social events, and it gives the HR round a human hook.",
  "No photo, no age, no marital status, no declaration paragraph, no objective statement.",
];
