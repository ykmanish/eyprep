/**
 * Reported questions from a recent EY interview, passed on by a senior.
 * This is a recollection of what was asked, not an official paper, so treat
 * the topics as the signal and the exact wording as approximate.
 *
 * The single most important pattern in it: the resume is drilled in BOTH
 * rounds, five to six questions each time.
 */

export const ROUNDS_SOURCE =
  "Shared by a senior who went through the process. Topics are reliable; exact wording is a recollection. Treat it as the shape of the round rather than a question paper.";

export const ROUNDS_HEADLINE = [
  {
    stat: "12 of 16",
    label: "questions come off your resume",
    detail:
      "Five to six resume questions in round one, and five to six again in round two, plus a dedicated internship block. Nothing else in the process comes close to this weight.",
    tone: "red",
    go: ["resume", "probes"],
    cta: "Open the resume drill",
  },
  {
    stat: "4 topics",
    label: "appear in both rounds",
    detail:
      "VAPT, digital forensics, scenarios and the resume itself. If you prepare nothing else properly, prepare these four, because you get asked twice and inconsistency between rounds is noticed.",
    tone: "yellow",
  },
  {
    stat: "3 marked",
    label: "explicitly as scenario questions",
    detail:
      "VAPT lifecycle, threat intelligence, and a general scenario block in round two. They want the method spoken aloud, not a definition recited.",
    tone: "blue",
  },
];

export const ROUNDS = [
  {
    id: "r1",
    n: "Round 1",
    subtitle: "Technical and domain",
    tone: "blue",
    icon: "🛡️",
    note: "Heavily technical, heavily resume led, with two questions explicitly flagged as scenarios.",
    questions: [
      {
        id: "r1q1",
        n: 1,
        topic: "Resume deep dive",
        tone: "red",
        weight: "highest",
        verbatim:
          "Whole from the resume, technical and scenario based. Five to six questions related to internships, certifications and so on.",
        why: "This is the largest single block in the round. They open the page and work down it, and every claim becomes a question. Your ISO 27001 Lead Auditor training, the Tectona internship and the ISMS GRC platform are the three they will pick.",
        points: [
          "Be exact that the Lead Auditor credential is the CQI and IRCA certified training course, not auditor registration. Say it before you are asked.",
          "Pick one internship process area and go deep rather than re listing all six.",
          "Have one finding walked end to end through the ISMS GRC platform chain: control, finding, risk rating, corrective action, ITSM ticket, SLA, verified closure.",
          "Every tool you listed is fair game. For Wireshark, Nmap and malware analysis, have one sentence on what you did and one on what you have not done.",
        ],
        go: ["resume", "probes"],
        goLabel: "25 line by line probes",
      },
      {
        id: "r1q2",
        n: 2,
        topic: "VAPT lifecycle",
        tag: "scenario",
        tone: "blue",
        weight: "high",
        verbatim: "VAPT lifecycle, asked as a scenario.",
        why: "They want the phases in order and, because it is a scenario, the commercial and authorisation judgement around them. The phases alone are a textbook answer; the scoping questions are what score.",
        answer: [
          "I would run it in seven phases. One, scoping and rules of engagement: what is in scope by IP and domain, black, grey or white box, production or staging, the testing window, whether any WAF needs to whitelist us, test accounts, and critically written authorisation before anything is touched. Two, reconnaissance and information gathering. Three, scanning and enumeration to identify candidate weaknesses. Four, exploitation, to validate that a finding is real rather than a scanner false positive. Five, post exploitation: privilege escalation, lateral movement, and proving what an attacker could actually reach. Six, reporting, rated by exploitability and business impact rather than CVSS alone. Seven, remediation support and a retest to close.",
          "The consulting layer is what I would add. Authorisation in writing is not a formality, it is the difference between a penetration test and an offence. Testing against production needs a non destructive agreement and an out of hours window with a named escalation contact. And I would ask what they have already fixed, because commissioning a penetration test before remediating what the scanner already told you means paying premium rates for findings you already had.",
        ],
        points: [
          "A vulnerability assessment tells you the doors that are unlocked; a penetration test tells you what someone can do once through one.",
          "Scanning is continuous and cheap, penetration testing is periodic and expensive, so you run both at different cadences.",
          "Grey box is usually most cost effective because the tester spends time finding flaws rather than mapping.",
        ],
        traps: [
          "Reciting phases with no mention of authorisation or scope. That is the part a client actually argues about.",
        ],
        go: ["practice", "rounds"],
        goLabel: "Drill the reported topics",
      },
      {
        id: "r1q3",
        n: 3,
        topic: "Malware analysis",
        tone: "green",
        weight: "high",
        verbatim: "Malware analysis.",
        why: "It is on your resume as static and dynamic analysis, so expect them to test the boundary of what you actually did. The bar for this role is recognising the categories and the control implication, not reverse engineering.",
        answer: [
          "Static analysis examines the sample without running it: file hashes to check against threat intelligence, strings, PE headers and imports to infer capability, and entropy to spot packing. Dynamic analysis detonates it in an isolated sandbox and observes behaviour: the process tree, files and registry keys created, persistence mechanism, and network callbacks to command and control.",
          "For this role the point is not the reversing, it is what the analysis gives the engagement. It tells you the scope of compromise, the indicators to hunt for across the rest of the estate, the persistence you have to remove before you declare recovery, and the control that failed to stop it in the first place. If it arrived by email, the finding is about mail filtering and user reporting, not about the sample.",
        ],
        points: [
          "Fileless malware runs in memory using PowerShell and WMI, so there is no file to sign, which is why behavioural EDR matters more than signatures.",
          "Modern ransomware uses double extortion: exfiltrate first, then encrypt, so backups alone do not remove the leverage.",
          "Name tools honestly: VirusTotal, a sandbox, PEStudio, Process Monitor, Wireshark.",
        ],
        traps: [
          "Overclaiming reverse engineering depth. If it was coursework, say coursework, and pivot to the control implication.",
        ],
        go: ["learn", "p5"],
        goLabel: "Attacks, malware and defences",
      },
      {
        id: "r1q4",
        n: 4,
        topic: "SOX and SOC",
        tone: "yellow",
        weight: "high",
        verbatim: "SOX, SOC.",
        why: "Two things that sound alike and are unrelated, which is exactly why they are asked together. There is also a genuine ambiguity in SOC that you can use.",
        answer: [
          "SOX is the Sarbanes Oxley Act, US law for listed companies. Section 404 requires management to assess and report on internal control over financial reporting, with auditor attestation for larger filers, and Section 302 requires CEO and CFO certification. It is the engine behind most ITGC work, because if the numbers come out of a system the auditor has to be satisfied the system is controlled. The Indian analogue is Internal Financial Controls under the Companies Act 2013.",
          "SOC is ambiguous and I would check which one they mean. A SOC report is a Service Organization Control report on a service provider's controls: SOC 1 for controls relevant to a customer's financial reporting, SOC 2 against the Trust Services Criteria, and it is an attestation producing an opinion, never a certification. A SOC is also a Security Operations Centre, the monitoring and response function. If they mean the report: Type I is design at a point in time, Type II adds operating effectiveness over a period.",
        ],
        points: [
          "The four ITGC domains: access to programs and data, program change management, program development, computer operations.",
          "Never say a company is SOC 2 certified. It is an attestation.",
          "Weak ITGCs are not an IT problem, they are an audit scope and cost problem, and at the extreme a material weakness that has to be disclosed.",
        ],
        traps: [
          "Answering SOC without asking which one. Asking is the stronger move and takes four words.",
        ],
        go: ["learn", "p3"],
        goLabel: "Tech Risk engagements",
      },
      {
        id: "r1q5",
        n: 5,
        topic: "DPDP",
        tone: "green",
        weight: "high",
        verbatim: "DPDP.",
        why: "Indian regulatory awareness is a genuine differentiator because most candidates prepare only global frameworks. Expect a comparison with GDPR as the follow up.",
        answer: [
          "The Digital Personal Data Protection Act 2023 is India's principal personal data protection law. It received assent in August 2023 and the Rules were notified in November 2025, with phased implementation running through 2026, so I would verify the current position before advising a client rather than asserting a fixed deadline.",
          "The vocabulary: the individual is the Data Principal, the entity deciding purpose and means is the Data Fiduciary, and a Data Processor acts on its behalf. A Significant Data Fiduciary is designated on volume and sensitivity and carries extra obligations including an India based Data Protection Officer, an independent data auditor and periodic impact assessments. Consent must be free, specific, informed, unconditional and unambiguous with clear affirmative action, and notice has to be itemised and available in the Eighth Schedule languages. Children under eighteen need verifiable parental consent. Penalties run on a graded scale with the top tier for failing to take reasonable security safeguards.",
        ],
        points: [
          "The Consent Manager is the distinctive Indian feature with no GDPR equivalent: a registered intermediary through which consent is given, managed and withdrawn.",
          "DPDP versus GDPR in four points: digital data only; no separate sensitive category; the Consent Manager; a narrower rights set but with the right of nomination.",
          "Pair it with CERT-In: report specified incidents within six hours, retain ICT logs in India for 180 days.",
        ],
        go: ["learn", "p2"],
        goLabel: "India's regulatory landscape",
      },
      {
        id: "r1q6",
        n: 6,
        topic: "Threat intelligence",
        tag: "scenario",
        tone: "purple",
        weight: "medium",
        verbatim: "Threat intelligence, asked as a scenario.",
        why: "The definition is easy, so the scenario is the test: intelligence is worthless unless it changes something. They want to hear you action it.",
        answer: [
          "Threat intelligence works at three levels. Strategic: who targets our sector and why, which drives investment decisions. Operational: current campaigns and the tactics, techniques and procedures behind them. Tactical: indicators of compromise such as hashes, domains and IP addresses.",
          "Given a scenario, say intelligence that a ransomware group is actively targeting our sector, I would do four things. Map their known techniques to MITRE ATT&CK and check our detection coverage against those specific techniques rather than in general. Run a retrospective hunt for their indicators across historical logs, because the useful question is whether they are already in. Compare their typical initial access routes against our actual exposure: internet facing systems, VPN patch level, MFA coverage on remote access and email. And brief leadership in business terms with a decision attached, not a threat report.",
          "The point I would make is that indicators age out in days while techniques persist for years, so a programme built only on feeds of hashes and IP addresses is buying very little. Detection built around behaviour is what survives.",
        ],
        points: [
          "Intelligence is only valuable if it is actioned: into detection rules, blocklists and hunts.",
          "The kill chain is a narrative for explaining an attack; ATT&CK is a working taxonomy for measuring whether you could detect one.",
          "Threat hunting is hypothesis driven: if an attacker were using this technique, what would I see in the data?",
        ],
        go: ["learn", "p4"],
        goLabel: "Cyber threat management",
      },
      {
        id: "r1q7",
        n: 7,
        topic: "AI in security: pros and cons",
        tone: "blue",
        weight: "medium",
        verbatim: "Usage of AI in current security techniques, pros and cons.",
        why: "Every client is asking this and every interviewer knows it. Most candidates answer with either hype or fear, and both are lazy. The governance shaped answer is what lands.",
        answer: [
          "On the defensive side it genuinely helps with volume problems: triaging and enriching alerts so analysts spend time on judgement rather than lookups, anomaly detection where no signature exists, summarising evidence for reporting, and assisting detection engineering. Those are real and already deployed.",
          "On the risk side there are two halves. AI as a threat multiplier: fluent personalised phishing at scale, so the old advice about looking for bad grammar is dead; voice and video deepfakes making executive impersonation and payment fraud convincing; faster vulnerability discovery; and a lower barrier to entry for less skilled attackers. AI as a new attack surface: prompt injection, where instructions hidden in data are processed as commands, which is the defining weakness of agentic systems with tool access; staff pasting confidential data into public tools; hallucination relied on in a business decision; and shadow AI adopted departmentally outside any governance.",
          "The consulting position is that it should be treated as neither a security product nor a banned category. It needs what any technology needs: an inventory of where it is used, use cases classified by risk, rules about what data may go into which tool, human review where output drives a consequential decision, and identity governance for agents that can actually act. The genuinely new control is that an AI agent is a non human identity with permissions, and most organisations have no governance for those at all.",
        ],
        points: [
          "Frameworks to name: NIST AI Risk Management Framework, ISO/IEC 42001, the EU AI Act, the OWASP Top 10 for LLM Applications.",
          "The defensible summary: AI shifts the economics, making attacks cheaper and triage more efficient, so the net effect is a faster arms race rather than a resolved one.",
        ],
        traps: [
          "Claiming AI will replace analysts, or claiming it changes nothing. Both are heard constantly.",
        ],
        go: ["learn", "p5"],
        goLabel: "Cloud, AI and emerging risk",
      },
      {
        id: "r1q8",
        n: 8,
        topic: "Digital forensics and Windows forensics",
        tone: "red",
        weight: "high",
        verbatim: "Digital forensics related, Windows forensics.",
        why: "Your resume lists digital forensics fundamentals, and this is a forensic sciences university, so they will push harder here than they would with most candidates. Windows artefacts are the specific ask.",
        answer: [
          "The process first. Order of volatility decides what you collect and in what order: CPU registers and cache, then RAM, then network state and running processes, then disk, then backups and archives. Acquisition is a bit for bit image taken through a write blocker, hashed before and after with SHA 256 so integrity can be proven, and every handover recorded in the chain of custody. Without that documentation the analysis can be excellent and still worthless in a proceeding.",
          "On Windows specifically, the artefacts I would go to depend on the question being asked. For evidence of execution: Prefetch files, ShimCache and Amcache, and process creation events. For logons and account activity: the Security event log, particularly 4624 successful logon with the logon type, 4625 failed logon, 4672 special privileges assigned, and 4688 process creation where command line auditing is enabled. For file and folder activity: the Master File Table with its created, modified, accessed and MFT changed timestamps, Shellbags for folders that were browsed, LNK files and Jump Lists for recently opened documents, and the Recycle Bin. For persistence: Run keys in the registry, scheduled tasks and services. For external devices: the USBSTOR registry key. The registry hives themselves are SAM, SYSTEM, SOFTWARE, SECURITY and each user's NTUSER.DAT.",
          "I would also flag anti forensics, because it is often the finding. Timestomping alters MFT timestamps but frequently leaves the standard information and filename attributes inconsistent, and event log clearing itself generates event 1102, so the absence of logs is evidence rather than a dead end.",
        ],
        points: [
          "Memory is the highest value and the most perishable, which is why an affected host is isolated from the network rather than powered off.",
          "Tools worth naming: FTK Imager, Autopsy, Volatility for memory, the Eric Zimmerman registry and artefact tools.",
          "In an incident, forensics answers three questions: how they got in, how far they got, and whether data left.",
        ],
        traps: [
          "Claiming courtroom forensic experience you do not have. Fundamentals plus correct process language is the right pitch.",
        ],
        go: ["practice", "rounds"],
        goLabel: "Drill the reported topics",
      },
    ],
  },
  {
    id: "r2",
    n: "Round 2",
    subtitle: "Mixed technical and fit",
    tone: "green",
    icon: "🤝",
    note: "Opens and closes on you as a person, with a second full pass over the resume and more technical breadth in the middle.",
    questions: [
      {
        id: "r2q1",
        n: 1,
        topic: "Tell me about yourself",
        tone: "purple",
        weight: "high",
        verbatim: "About yourself.",
        why: "It sets the tone of the whole round before minute three, and it is the answer candidates most often deliver badly by reciting the resume the interviewer has already read.",
        answer: [
          "Ninety seconds in three parts. Present, about twenty seconds: final year MBA in Cyber Security Management at NFSU, and what you have been working on. Path, about forty seconds: the two or three decisions that brought you here as a logical progression, not a chronology. The BCA gave you the technology, the MBA was a deliberate move towards the governance and risk end, the Lead Auditor training gave you the audit vocabulary, the internship showed you how findings behave in a real organisation, and the gap you saw between those two is what you built the ISMS GRC platform to close. Pull, about thirty seconds: why this role specifically, and hand the conversation back with something they can pick up.",
          "Leave out school, family background and a list of courses. The purpose of the answer is to give them the narrative the resume does not contain, and to plant two or three hooks they will ask about, which is how you steer where the round goes next.",
        ],
        points: [
          "Your story has an unusually clean through line: training, then internship, then a build that came out of what the internship showed you. Say it in that order.",
          "Whatever you claim here has to match what you tell the technical panel. Interviewers compare notes.",
        ],
        go: ["lab", "star"],
        goLabel: "STAR bank and story structure",
      },
      {
        id: "r2q2",
        n: 2,
        topic: "Resume, second pass",
        tone: "red",
        weight: "highest",
        verbatim: "Again resume based, five to six questions.",
        why: "This is the detail that matters most in the whole sheet. The resume is drilled twice, by different people, and they compare notes. An answer that shifts between rounds is a credibility problem that neither round alone would have caught.",
        points: [
          "Fix your answers once and hold them. Same framing for the Lead Auditor credential, same internship example, same project limitations.",
          "Expect the second panel to probe what the first one did not. Depth on the areas you skimmed in round one is where this round goes.",
          "Between rounds, write down what you were asked and anything you fumbled. Two minutes of notes is the highest return activity of the day.",
        ],
        go: ["resume", "risks"],
        goLabel: "Where your resume is exposed",
      },
      {
        id: "r2q3",
        n: 3,
        topic: "VAPT, digital forensics, cloud and cryptocurrency",
        tone: "blue",
        weight: "high",
        verbatim: "VAPT, DF, cloud and cryptocurrency related.",
        why: "VAPT and forensics come back from round one, so consistency matters. Cloud and cryptocurrency are new, and cryptocurrency connects directly to your blockchain certificate, which is probably why it was asked.",
        answer: [
          "On cloud, the anchor is shared responsibility: the provider secures the cloud, the customer secures what is in it, and three things are always the customer's regardless of service model, namely their data, their identities and access, and their configuration. The dominant cause of cloud data exposure is customer misconfiguration such as public storage and over permissive policies, not provider breach. Cloud forensics is genuinely harder: instances are ephemeral and may be gone before you image them, you depend on provider logs which must have been enabled in advance, and data residency raises jurisdiction questions.",
          "On cryptocurrency, the security relevance is concrete. It is the payment rail for ransomware, which is why sanctions exposure is a real consideration in any payment decision. The important correction to make is that most public blockchains are pseudonymous, not anonymous: the ledger is permanent and public, which is exactly why chain analysis works and why funds are traced and seized. Mixers and privacy coins exist to break that, and are themselves a red flag in investigations. In India the regulatory position is that virtual digital assets are taxed at thirty per cent with one per cent tax deducted at source, and service providers have reporting obligations under anti money laundering rules.",
        ],
        points: [
          "Cloud tooling to name: CSPM for configuration, CIEM for entitlements, CWPP for workloads, CNAPP as the consolidated platform.",
          "Your blockchain certificate is the reason this is on the list. One honest sentence on what it taught you about integrity and non repudiation, then move to the security application.",
          "Keep VAPT and forensics answers identical to round one.",
        ],
        go: ["learn", "p5"],
        goLabel: "Cloud, AI and emerging risk",
      },
      {
        id: "r2q4",
        n: 4,
        topic: "Internship questions",
        tone: "yellow",
        weight: "high",
        verbatim: "Internship related questions.",
        why: "Called out separately from the resume block, which means it gets its own sustained attention. Two months across six process areas invites the question of how deep any one of them went.",
        points: [
          "Pick one process area voluntarily and go deep. Incident Management or Service Level Management are safest because everyone in the room knows them.",
          "Have one documentation gap ready in full: what the document said, what ITIL 4 or ISO 20000 expects, why the difference created risk, what you recommended, what happened next.",
          "Separate the three frameworks cleanly. ITIL 4 is best practice and not certifiable for an organisation, ISO/IEC 20000-1 is the certifiable standard, PinkVERIFY assesses tools rather than companies.",
          "Be scrupulous about ownership. I contributed to this and owned that is stronger than an implied claim to all six areas.",
        ],
        go: ["resume", "deep"],
        goLabel: "The Tectona deep dive",
      },
      {
        id: "r2q5",
        n: 5,
        topic: "Scenarios and ISO 27001",
        tone: "green",
        weight: "highest",
        verbatim: "Scenario based, and ISO 27001.",
        why: "This is your strongest card in the entire process. You hold the Lead Auditor training, so the expected standard is higher than for other candidates, and a vague answer costs you more than it would cost them.",
        answer: [
          "Know the structure cold. Clauses 4 to 10 are the auditable management system requirements: context, leadership, planning, support, operation, performance evaluation, improvement. Annex A in the 2022 revision is 93 controls across four themes, organisational, people, physical and technological, replacing the older 114 controls in 14 domains. An organisation is certified against the clauses, and 27002 is implementation guidance that is not certifiable.",
          "For the audit scenario: planning starts from scope and the Statement of Applicability, because they define what is in and what was excluded and why. Review prior findings and the risk register, build a checklist, allocate time by risk rather than evenly, hold an opening meeting, gather evidence by inspection and re performance rather than inquiry alone, then agree facts at a closing meeting before grading anything. A major non conformity is a total breakdown of a requirement or several minors in one area showing the system is not working; a minor is a single lapse in an otherwise functioning system.",
        ],
        points: [
          "Say trained rather than certified, unprompted. The credential is the CQI and IRCA certified training course.",
          "A policy evidences design intent, not operation. Operating effectiveness needs records sampled across the period.",
          "For any scenario: clarify, structure out loud, analyse each branch with stated assumptions, then recommend with a priority order and what would change your mind.",
        ],
        go: ["resume", "deep"],
        goLabel: "The ISO 27001 deep dive",
      },
      {
        id: "r2q6",
        n: 6,
        topic: "Hobbies",
        tone: "purple",
        weight: "low",
        verbatim: "Hobbies related.",
        why: "Not filler. The JD asks for participation in corporate social and team events, and this is the human hook the panel remembers you by at the end of a day of twenty candidates.",
        points: [
          "Have one genuine, specific answer. Specific beats impressive: what you actually did last month, not a category.",
          "Pick one that shows a quality relevant to the work if you honestly can, such as something sustained, something collaborative, or something you taught yourself.",
          "Be ready for one follow up. A hobby you cannot talk about for sixty seconds is the wrong hobby to name.",
          "Avoid listing reading, music and travelling as a trio. Everyone says it and it tells them nothing.",
        ],
        go: ["lab", "hr"],
        goLabel: "The HR question bank",
      },
      {
        id: "r2q7",
        n: 7,
        topic: "OWASP Top 10",
        tone: "red",
        weight: "medium",
        verbatim: "OWASP Top 10.",
        why: "A standard check. You are not expected to review code; you are expected to recognise the categories when a client describes a system and to know which control addresses each.",
        answer: [
          "The categories rather than a ranked list, because the ranking shifts between editions and saying so is itself a good answer. Broken access control, where a user acts outside their permissions, fixed by enforcing authorisation server side on every request. Cryptographic failures. Injection, including SQL injection and cross site scripting, where the definitive fix is parameterised queries because they keep data as data regardless of content. Insecure design, which no amount of implementation quality fixes, addressed by threat modelling. Security misconfiguration. Vulnerable and outdated components. Identification and authentication failures. Software and data integrity failures, including compromised CI/CD pipelines. Logging and monitoring failures. Server side request forgery, where the application fetches a user supplied URL and reaches internal systems or cloud metadata.",
        ],
        points: [
          "A WAF is a compensating control, not a substitute for secure code.",
          "Shift left: threat modelling at design, SAST during development, DAST and software composition analysis in test, penetration testing before release.",
          "Say openly that the ordering changes between editions and that you know the concepts rather than the current rank order.",
        ],
        go: ["learn", "p5"],
        goLabel: "Application security",
      },
      {
        id: "r2q8",
        n: 8,
        topic: "Family background and location preference",
        tone: "yellow",
        weight: "medium",
        verbatim: "Family background and location preference.",
        why: "The practical close. Location is the part with real consequences: the JD names willingness to travel twice, and hedging here is a genuine risk to the offer.",
        points: [
          "Family background: answer briefly, factually and warmly, then stop. It is rapport, not assessment.",
          "Location: say yes clearly. State any genuine preference as a preference rather than a condition. I would prefer this city, but I am open to wherever the practice needs me is fine. Only this city at campus stage is a real risk.",
          "Travel: unambiguous yes. If you have a genuine immovable constraint, disclose it at offer stage rather than concealing it.",
          "Expect service agreement or bond questions nearby. Ask factually about duration and terms rather than reacting.",
        ],
        go: ["lab", "hr"],
        goLabel: "Practical and logistical questions",
      },
    ],
  },
];

export const ROUNDS_PREP_ORDER = [
  {
    n: 1,
    title: "Your resume, both passes",
    detail:
      "Twelve of the sixteen questions. Fix your answers once so round two matches round one.",
    go: ["resume", "probes"],
  },
  {
    n: 2,
    title: "ISO 27001, to audit standard",
    detail:
      "You are held to a higher bar here than other candidates because you hold the training.",
    go: ["resume", "deep"],
  },
  {
    n: 3,
    title: "VAPT lifecycle and Windows forensics",
    detail:
      "Both come up twice across the rounds, and forensics is where a forensic sciences profile gets pushed hardest.",
    go: ["practice", "rounds"],
  },
  {
    n: 4,
    title: "DPDP, SOX and SOC, OWASP",
    detail: "Straight knowledge checks. Cheap marks if prepared, visible gaps if not.",
    go: ["learn", "p2"],
  },
  {
    n: 5,
    title: "AI, threat intelligence, cloud, crypto",
    detail:
      "Opinion questions where the governance shaped answer beats both hype and fear.",
    go: ["learn", "p5"],
  },
  {
    n: 6,
    title: "Yourself, hobbies, location",
    detail:
      "Opens and closes round two. Low effort to prepare, disproportionately memorable.",
    go: ["lab", "hr"],
  },
];
