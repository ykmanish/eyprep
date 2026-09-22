/**
 * Part 1 - The landscape
 * Part 2 - Foundations every risk consultant must own
 */

export const PART_1 = {
  id: "p1",
  n: "01",
  title: "The landscape",
  subtitle: "The role, the firm, and how you will be assessed",
  tone: "blue",
  icon: "🧭",
  blurb:
    "Candidates lose this interview not because they do not know what a firewall is, but because they cannot explain what a consultant does on a Tuesday afternoon.",
  sections: [
    {
      id: "1.1",
      title: "What an Associate Consultant actually does",
      minutes: 8,
      blocks: [
        {
          type: "p",
          text: "An Associate Consultant is the delivery engine of an engagement. The Partner sells the work and owns the relationship, the Manager scopes it and manages the client, the Senior designs the testing approach and reviews the output - and you gather the evidence, run the tests, document the working papers, and draft the observations that eventually become the report the client's board reads.",
        },
        { type: "h", text: "A realistic week" },
        {
          type: "table",
          head: ["Activity", "What it looks like in practice", "Time"],
          rows: [
            ["Fieldwork & testing", "Requesting evidence, reviewing configuration screenshots, user access lists, change tickets, policy documents; testing a sample against a control objective and recording the result.", "35-45%"],
            ["Documentation", "Writing working papers: what was tested, the population, the sample, the method, the evidence reference, the conclusion. The audit trail that survives quality review years later.", "20-25%"],
            ["Client interaction", "Walkthrough meetings, status calls, chasing open evidence requests, clarifying a process with a system owner. You will be on client calls far earlier than you expect.", "15-20%"],
            ["Deliverable drafting", "Turning findings into an observation: condition, criteria, cause, effect, recommendation. Building the report, the risk register, the management summary slides.", "10-15%"],
            ["Internal & L&D", "Methodology training, certification study, quality checklists, independence confirmations, engagement acceptance.", "5-10%"],
          ],
        },
        {
          type: "box",
          kind: "key",
          title: "The deliverable is the product",
          text: "In consulting, the client does not buy your effort. They buy a document that they can show to an auditor, a regulator, a board or a customer. Everything you do is in service of that document being defensible. This is why documentation quality is not bureaucracy - it is the job.",
        },
        { type: "h", text: "The four hats you wear" },
        {
          type: "num",
          items: [
            "Investigator. You are figuring out how a client's process really works, which is usually different from how the policy says it works, and different again from how the process owner describes it. You triangulate: policy document, system configuration, and a sample of actual transactions.",
            "Translator. You take something technical - a misconfigured privileged account, an untested backup - and express it as a business consequence a CFO understands: financial misstatement risk, regulatory penalty, customer-contract breach.",
            "Scribe. You write clearly, in a house style, at volume, under deadline. Written communication appears explicitly in the JD's skills list for a reason.",
            "Diplomat. You are telling somebody that the process they built has a weakness, and you need them to agree with you and sign a remediation commitment. Tone decides whether that conversation goes well.",
          ],
        },
        {
          type: "box",
          kind: "say",
          title: "If asked what you think this role involves",
          text: "Do not describe cyber security. Describe consulting. \"As I read it, I'd be part of an engagement team executing risk and cyber reviews for clients - understanding their environment through walkthroughs, testing whether their controls actually operate, documenting the evidence, and helping draft the observations. The technical depth varies by engagement - an IAM review looks very different from a SOC 2 readiness - but the method is consistent: understand the process, identify the risk, test the control, report it in business terms.\"",
        },
        { type: "h", text: "This role versus adjacent roles" },
        {
          type: "table",
          head: ["Role", "Primary focus", "How it differs"],
          rows: [
            ["Associate Consultant (this JD)", "Client-facing advisory and assurance across tech risk and cyber", "Broad, engagement-based, travel-heavy, generalist first then specialised"],
            ["SOC Analyst", "Monitoring alerts in a security operations centre", "Operational, shift-based, single employer's environment, deep tooling"],
            ["Penetration tester", "Actively finding exploitable vulnerabilities", "Deep technical specialisation; usually a separate sub-practice"],
            ["Internal auditor (industry)", "Assurance for one organisation", "Single environment, slower cadence, less client-management exposure"],
            ["GRC analyst", "Running an organisation's own compliance programme", "You build and run it; a consultant assesses and designs it for many clients"],
          ],
        },
        {
          type: "box",
          kind: "trap",
          title: "Do not say you want to get into ethical hacking",
          text: "It signals a mismatch with a JD explicitly built around audit, risk, governance and client delivery, and hiring managers read it as 'will leave within a year'. If offensive security genuinely interests you, frame it as technical curiosity that helps you assess threat management engagements better - not as your career goal.",
        },
      ],
    },
    {
      id: "1.3",
      title: "EY: the firm, the structure, the vocabulary",
      minutes: 7,
      blocks: [
        {
          type: "p",
          text: "You do not need to recite revenue figures. You do need to speak about the firm without sounding like you learned it from a search result five minutes before the interview - and you need the vocabulary, because interviewers use it casually and expect you to follow.",
        },
        {
          type: "box",
          kind: "trap",
          title: "Never quote an unverified number",
          text: "Do not state specific revenue, headcount, ranking or 'number one in X' claims unless you have checked them on the firm's own site within a few days of the interview. Confidently quoting a stale or wrong number is worse than not quoting one. Percentages and superlatives are where candidates get caught.",
        },
        {
          type: "box",
          kind: "edge",
          title: "Restraint is the skill",
          text: "Using two or three consulting terms correctly and naturally - \"I'd raise it in the status call rather than let it surface at the end of fieldwork\" - instantly reads as someone who understands the working model. Using ten of them in five minutes reads as someone performing.",
        },
      ],
    },
    {
      id: "1.4",
      title: "EY's cyber and technology risk practice",
      minutes: 6,
      blocks: [
        {
          type: "p",
          text: "This is the question campus candidates almost universally fail: 'what do you know about our cyber business?'. EY India's practice publicly describes offerings that mirror the JD's own list closely - and that alignment is worth pointing out.",
        },
        {
          type: "box",
          kind: "key",
          title: "One recent, specific fact is worth ten generic ones",
          text: "In July 2026 EY India announced an AI-powered Cyber Performance Management platform, positioned to quantify cyber risk in real time - integrating across a large number of security tools to translate technical exposure into financial and business terms. Why this is useful: it lets you make a genuine point rather than a compliment. \"What struck me is that the platform is framed around quantification - translating exposure into financial terms for the board. That's the direction the whole discipline is moving, and it's the part my MBA is most useful for.\"",
        },
        {
          type: "box",
          kind: "trap",
          title: "Verify before you assert",
          text: "Check these offerings and any launch details on the firm's own India website in the 48 hours before your interview. Practice names, platform names and leadership change. Say 'as I understand it' when referring to something you read rather than asserting it as fact.",
        },
        {
          type: "box",
          kind: "say",
          title: "Why EY and not Deloitte / PwC / KPMG?",
          text: "\"Honestly, all four are strong platforms, so I looked at fit rather than rankings. Two things pulled me to EY. First, the breadth in this particular JD - eleven service areas across tech risk and cyber in one role, which is exactly the exposure I want in my first two years rather than being narrowed early. Second, the direction of the cyber practice towards quantification and performance management, because translating technical risk into business and financial terms is what my MBA has been about. And practically - this is the firm that came to campus, met me, and this is the conversation I want to be in.\"",
        },
      ],
    },
    {
      id: "1.5",
      title: "The recruitment funnel, stage by stage",
      minutes: 5,
      blocks: [
        {
          type: "box",
          kind: "key",
          title: "Consistency across rounds",
          text: "Interviewers compare notes. If you tell the technical panel that privacy fascinates you and tell HR you want to be a penetration tester, you have created a credibility problem that neither round individually would have caught. Decide your narrative once and hold it in every round.",
        },
        {
          type: "box",
          kind: "edge",
          title: "The closing clause that changes everything",
          text: "At the end of a strong answer, add the one-line business consequence. \"...and the reason that control matters is that without it, a terminated employee keeps access to the payment system for months, which is both a fraud exposure and an audit finding.\" That single closing clause is the difference between a student answer and a consultant answer.",
        },
      ],
    },
  ],
};

export const PART_2 = {
  id: "p2",
  n: "02",
  title: "Foundations",
  subtitle: "Risk, controls, the engagement lifecycle, frameworks and Indian regulation",
  tone: "red",
  icon: "🏗️",
  blurb:
    "This part is the grammar of the job. Every domain is built from the same pieces: a risk, a control, a test, a finding. Get fluent here and the eleven service areas stop feeling like eleven separate subjects.",
  sections: [
    {
      id: "2.1",
      title: "The vocabulary of risk",
      minutes: 10,
      blocks: [
        {
          type: "p",
          text: "Interviewers test this first because it is quick and it separates people instantly. Candidates who use 'threat', 'risk' and 'vulnerability' interchangeably are marked down in the first two minutes.",
        },
        {
          type: "formula",
          text: "Threat × Vulnerability × Asset value → Risk     |     Risk = Likelihood × Impact",
        },
        {
          type: "kv",
          items: [
            ["Asset", "Anything of value - data, a system, a process, a person, a reputation. Always begins the analysis, because a control with no asset behind it is wasted money."],
            ["Threat", "A potential cause of an unwanted incident. External and largely outside your control: a ransomware group, a flood, a disgruntled insider, a power failure."],
            ["Threat actor", "The entity behind the threat: organised crime, nation state, hacktivist, insider, competitor, or simply accident."],
            ["Vulnerability", "A weakness a threat can exploit. Internal and within your control: an unpatched server, a shared administrator password, an unreviewed access list."],
            ["Inherent risk", "The risk level before considering controls."],
            ["Residual risk", "The risk level after controls are applied. This is what management actually decides to accept or treat."],
            ["Risk appetite", "The amount and type of risk the organisation is willing to pursue to meet its objectives - set at board level."],
            ["Risk tolerance", "The acceptable variation around that appetite for a specific risk. Appetite is strategic and broad; tolerance is specific and measurable."],
            ["Impact", "Consequence if the risk materialises - financial, regulatory, operational, reputational, safety, legal."],
            ["Likelihood", "Probability of occurrence in a defined period, qualitative (rare to almost certain) or quantitative."],
          ],
        },
        {
          type: "box",
          kind: "key",
          title: "Say it in one clean line",
          text: "\"A threat exploits a vulnerability to affect an asset, and the risk is the combination of how likely that is and how badly it would hurt.\" Add an example in the same breath and you have answered better than most candidates: \"A ransomware group is the threat; an unpatched internet-facing server is the vulnerability; the customer database is the asset; the risk is that we lose availability for three days, which for an e-commerce client is direct revenue loss plus a DPDP breach notification.\"",
        },
        { type: "h", text: "The four (or five) treatment options" },
        {
          type: "table",
          head: ["Option", "What it means", "Example"],
          rows: [
            ["Mitigate / Reduce", "Implement controls to lower likelihood or impact. The most common response.", "Deploy MFA to reduce credential-theft risk."],
            ["Transfer / Share", "Move financial consequence to a third party. You can transfer cost, never accountability.", "Cyber insurance; contractual indemnity with a vendor."],
            ["Avoid", "Stop doing the activity that creates the risk.", "Discontinue storing card data; exit a market with unacceptable data-localisation exposure."],
            ["Accept", "Consciously retain the risk with documented approval at the right level.", "A legacy application retired in six months is not re-architected now; the CIO signs a formal risk acceptance."],
            ["Exploit", "Used in upside / opportunity risk frameworks - take more of a risk because it creates value.", "Rarely asked at this level; know that it exists."],
          ],
        },
        {
          type: "box",
          kind: "trap",
          title: "The insurance trap",
          text: "\"We bought cyber insurance so the risk is transferred\" is a favourite interviewer trap. Insurance transfers financial loss only. Regulatory liability, customer trust and the obligation to notify a data protection authority cannot be outsourced. A well-placed answer here scores heavily.",
        },
        {
          type: "box",
          kind: "key",
          title: "The three lines model",
          text: "First line: the business that owns and manages the risk day to day (the IT team running access management). Second line: risk and compliance functions that set policy, challenge and monitor (the CISO's governance team). Third line: internal audit, providing independent assurance to the board. External audit and consultants like EY sit outside all three as independent parties. Being able to place a control owner in the right line is a genuinely senior-sounding move.",
        },
        { type: "h", text: "Quantifying risk" },
        {
          type: "formula",
          text: "SLE = Asset Value × Exposure Factor     ALE = SLE × ARO     Justified if control cost < reduction in ALE",
        },
        {
          type: "p",
          text: "Worked example. A customer database is valued at ₹4 crore. A ransomware event would render 50% of its value unrecoverable within the recovery window (EF = 0.5), so SLE = ₹2 crore. Threat intelligence suggests such an event once in five years (ARO = 0.2). ALE = ₹40 lakh per year. An immutable-backup programme costing ₹15 lakh a year that cuts ARO to 0.05 reduces ALE to ₹10 lakh - a ₹30 lakh annual reduction for ₹15 lakh of spend. Economically justified.",
        },
        {
          type: "box",
          kind: "edge",
          title: "Name FAIR",
          text: "Qualitative scoring (high/medium/low heat maps) is what most organisations actually use - fast but subjective and non-additive. Quantitative methods such as FAIR (Factor Analysis of Information Risk) express risk in monetary and probabilistic terms so the board can compare cyber spend against other investments. Naming FAIR, and knowing when each approach is appropriate, is a strong differentiator for an MBA candidate.",
        },
      ],
    },
    {
      id: "2.2",
      title: "Controls: the consultant's core toolkit",
      minutes: 12,
      blocks: [
        {
          type: "p",
          text: "A control is any measure that modifies risk. Almost every engagement in this JD reduces to a single repeated question: does this control exist, is it designed correctly, and does it actually operate?",
        },
        { type: "h", text: "Classification by function" },
        {
          type: "table",
          head: ["Type", "Purpose", "Examples"],
          rows: [
            ["Preventive", "Stop the event before it happens", "Access restrictions, MFA, segregation of duties, firewall rules, input validation, approval before payment"],
            ["Detective", "Identify that the event happened", "Log monitoring, SIEM alerts, reconciliations, access reviews, exception reports, intrusion detection"],
            ["Corrective", "Restore after the event", "Backups and restoration, incident response, patching, disciplinary process"],
            ["Deterrent", "Discourage the actor", "Warning banners, visible CCTV, published sanctions policy"],
            ["Compensating", "Alternative when the primary control is not feasible", "Legacy system cannot enforce password complexity, so it is isolated on a segmented network with enhanced logging and quarterly manual review"],
            ["Directive", "Instruct the required behaviour", "Policies, standards, procedures, mandatory training"],
          ],
        },
        { type: "h", text: "Automated, manual and IT-dependent manual" },
        {
          type: "kv",
          items: [
            ["Automated control", "Performed entirely by the system - a three-way match in the ERP that blocks payment where invoice, goods receipt and purchase order disagree. Tested once for configuration, plus assurance that the configuration cannot change without authorisation."],
            ["Manual control", "Performed by a person - a manager reviewing and signing a reconciliation. Tested by sampling, because human performance varies."],
            ["IT-dependent manual control", "A person performs the control but relies on a system-generated report. Here you must also test the completeness and accuracy of the report itself (IPE). A classic interview question that very few freshers know."],
          ],
        },
        {
          type: "box",
          kind: "key",
          title: "Design versus operating effectiveness",
          text: "Design effectiveness asks: if this control worked exactly as described, would it actually prevent or detect the risk? A quarterly access review is poorly designed if quarterly is too slow for a high-turnover call centre, or if the reviewer is the same person who grants the access. Operating effectiveness asks: did it in fact operate as designed, consistently, throughout the period? The order matters and interviewers check it - you never test operating effectiveness of a control that is not designed effectively, because you would be proving that a broken control was reliably broken.",
        },
        { type: "h", text: "Segregation of duties" },
        {
          type: "p",
          text: "SoD ensures that no single individual can execute and conceal an error or fraud. The classic split is between authorisation, custody, recording and reconciliation. In IT terms: a developer should not deploy their own code to production; the person who creates a vendor in the master file should not approve payments to it; an administrator who grants access should not be the person who reviews access. Where SoD is genuinely impossible - a small team, a single-person finance function - you implement compensating controls: independent review by a manager, enhanced logging with periodic review by someone outside the process, or mandatory leave so activity surfaces in their absence.",
        },
        { type: "h", text: "Testing methods, in increasing order of strength" },
        {
          type: "num",
          items: [
            "Inquiry. Asking the control owner how it works. Weakest - never sufficient on its own, but always the starting point.",
            "Observation. Watching the control performed. Good for physical and real-time controls, but only evidences the moment you watched.",
            "Inspection / examination. Reviewing documentary evidence - signed approvals, tickets, system logs, configuration screenshots. The workhorse of audit.",
            "Re-performance. Independently performing the control yourself and comparing results. Strongest evidence.",
          ],
        },
        {
          type: "box",
          kind: "edge",
          title: "Inquiry alone is never enough",
          text: "Then give the consequence: \"If I only ask whether user access reviews happen, I've documented an opinion. If I pull the last four quarterly review records, check the sign-off dates, and verify that the three revocations identified were actually actioned in the system within the SLA, I've documented evidence.\"",
        },
        { type: "h", text: "Sampling" },
        {
          type: "kv",
          items: [
            ["Population", "The complete set of occurrences in the period - all changes deployed, all new joiners, all privileged accounts."],
            ["Completeness of population", "Evidence that the list you were given is the whole list. If the client hands you an Excel of changes, you must corroborate it against the system, or your sample means nothing."],
            ["Statistical sampling", "Random selection allowing mathematical extrapolation."],
            ["Judgemental / haphazard", "Selection based on risk-based judgement; no statistical projection."],
            ["Frequency-based sizing", "Annual control → 1 item; quarterly → 2; monthly → 2-5; weekly → 5-15; daily → 15-25; many-times-daily → 25-60. Numbers vary by methodology; know that sample size scales with frequency and risk."],
            ["Deviation / exception", "An instance where the control did not operate. One exception does not always mean control failure, but it always requires investigation, root cause and often sample extension."],
          ],
        },
        { type: "h", text: "Writing a finding: the 5C structure" },
        {
          type: "table",
          head: ["Element", "Question", "Example"],
          rows: [
            ["Condition", "What did we find?", "12 of 25 privileged accounts sampled belonged to users who had left the organisation, the earliest 14 months prior."],
            ["Criteria", "What should it have been?", "The client's Access Management Policy requires revocation within 24 hours of exit; ISO 27001:2022 control on removal of access rights applies."],
            ["Cause", "Why did it happen?", "HR exit notification is emailed to IT but there is no automated trigger or reconciliation between the HR master and Active Directory."],
            ["Consequence", "So what?", "Former employees retain privileged access to the financial reporting system - unauthorised transaction and data-exfiltration exposure, and an ITGC deficiency affecting audit reliance."],
            ["Corrective action", "What should they do?", "Automate de-provisioning from the HR system; implement monthly HR-to-AD reconciliation; immediately revoke the 12 identified accounts and perform a full population review."],
          ],
        },
        {
          type: "box",
          kind: "say",
          title: "Announce the structure, then fill it",
          text: "\"I'd write it in five parts - condition, criteria, cause, consequence and corrective action. So: the condition is that twelve of twenty-five privileged accounts we sampled belonged to leavers. The criteria is their own policy requiring revocation in twenty-four hours...\" This is one of the fastest ways to sound trained rather than coached.",
        },
        {
          type: "box",
          kind: "trap",
          title: "Never skip cause",
          text: "Freshers write the condition and jump straight to a recommendation. Without root cause the recommendation treats a symptom - 'revoke these twelve accounts' fixes twelve accounts and guarantees the same finding next year. Always ask 'why did the control fail?' before proposing what to do.",
        },
      ],
    },
    {
      id: "2.3",
      title: "The engagement lifecycle",
      minutes: 8,
      blocks: [
        {
          type: "num",
          items: [
            "Acceptance and planning. Independence and conflict checks, engagement letter, scope, timeline, team, fee. Understanding the client's business, sector, systems landscape, regulatory obligations and prior findings.",
            "Risk assessment and scoping. Identify which processes, systems and locations are in scope and why. For financial-statement-driven work this is driven by materiality and which applications are relevant to financial reporting.",
            "Understanding and documentation. Walkthroughs with process owners, process flow documentation, identification of the key controls that address each risk. Output: process narratives, the risk and control matrix.",
            "Testing. Design effectiveness first, then operating effectiveness. Evidence requested, samples selected, tests performed, results recorded.",
            "Reporting. Draft observations, rate them, agree facts with process owners, obtain management responses, hold a closing meeting, issue the report.",
            "Follow-up and closure. Track remediation of prior findings, retest where required, archive the file to quality standards.",
          ],
        },
        {
          type: "box",
          kind: "key",
          title: "The risk and control matrix (RACM)",
          text: "The single most important working document in tech risk. Each row is one control, with columns for: process, sub-process, risk description, risk rating, control ID, control description, control owner, control type (preventive/detective), control nature (manual/automated/IT-dependent), frequency, test procedure for design, test procedure for operating effectiveness, sample size, test result, and exceptions. If you can describe a RACM's columns, you have described the mechanics of the job.",
        },
        {
          type: "p",
          text: "Agreeing facts before agreeing conclusions. Before a finding goes into a draft report, you validate the facts with the process owner - not the rating, not the recommendation, just 'is it correct that these twelve accounts were active?'. This separates a factual dispute (which you must resolve) from a disagreement about severity (which management can record in their response). Mentioning this shows unusual maturity for a fresher.",
        },
        {
          type: "table",
          head: ["Rating", "Typical meaning", "Example"],
          rows: [
            ["High / Significant", "Control absent or failed; material exposure; regulatory or financial statement impact; needs action in weeks", "No access reviews performed at all for a core banking application during the period"],
            ["Medium / Moderate", "Control exists but operates inconsistently; meaningful but contained exposure", "Access reviews performed but two of four quarters were late and evidence of follow-up is incomplete"],
            ["Low / Minor", "Documentation or efficiency weakness; limited exposure", "Review is performed and effective but the policy document has not been updated since a 2023 system change"],
          ],
        },
        {
          type: "p",
          text: "In financial-audit language the equivalent escalation is control deficiency → significant deficiency → material weakness, based on the likelihood and magnitude of a misstatement that could result.",
        },
        {
          type: "box",
          kind: "edge",
          title: "\"The client pressures you to drop a finding\"",
          text: "Four-part structure: (1) separate fact from judgement - if they have new evidence, evaluate it properly and be willing to change the finding; (2) if the facts hold, the finding stays; (3) I do not negotiate it myself - I escalate to my senior and manager, because the report is issued in the firm's name, not mine; (4) management always has the right to record their disagreement in the management response, which is the proper channel for it.",
        },
      ],
    },
    {
      id: "2.4",
      title: "The framework and standards map",
      minutes: 10,
      blocks: [
        {
          type: "p",
          text: "You are not expected to have memorised clause numbers. You are expected to know what each framework is for, and to stop confusing frameworks with regulations and certifications with attestations.",
        },
        {
          type: "table",
          head: ["Framework", "Type", "What it is"],
          rows: [
            ["ISO/IEC 27001", "Certifiable standard", "Requirements for an ISMS. The 2022 revision restructured Annex A into 93 controls across 4 themes - organisational, people, physical, technological - replacing the older 114 controls in 14 domains."],
            ["ISO/IEC 27002", "Guidance", "Implementation guidance for the controls in 27001 Annex A. Not certifiable."],
            ["ISO 22301", "Certifiable standard", "Business continuity management systems."],
            ["ISO/IEC 27701", "Extension", "Privacy information management extension to 27001/27002."],
            ["ISO/IEC 19770", "Standard family", "IT asset and software asset management."],
            ["NIST CSF 2.0", "Voluntary framework", "Six functions: Govern, Identify, Protect, Detect, Respond, Recover. Version 2.0 added Govern and broadened applicability beyond critical infrastructure."],
            ["NIST SP 800-53", "Control catalogue", "Detailed security and privacy controls, used heavily in US federal contexts."],
            ["NIST SP 800-61", "Guidance", "Computer security incident handling - the incident response lifecycle."],
            ["COBIT (2019)", "Governance framework", "Governance and management of enterprise IT, from ISACA. Separates governance objectives (EDM) from management objectives (plan, build, run, monitor)."],
            ["COSO Internal Control", "Control framework", "Five components: control environment, risk assessment, control activities, information and communication, monitoring."],
            ["ITIL", "Practice framework", "IT service management - incident, problem, change, configuration and release management."],
            ["CIS Critical Security Controls", "Prioritised control set", "A prescriptive list with implementation groups. Useful for a small client that needs to know what to do first."],
            ["MITRE ATT&CK", "Knowledge base", "Adversary tactics and techniques, used for detection engineering, threat hunting and purple teaming."],
            ["PCI DSS", "Contractual standard", "Applies to anyone storing, processing or transmitting cardholder data. Version 4.0 / 4.0.1 is the current generation."],
            ["SOC 1 / SOC 2", "Attestation reports", "Reports on a service organisation's controls. Attestations, not certifications."],
            ["SSAE 18 / ISAE 3402 / 3000", "Attestation standards", "The professional standards under which SOC-type reports are issued - US and international respectively."],
            ["CSA STAR / CCM", "Cloud assurance", "Cloud Security Alliance's Cloud Controls Matrix and the STAR registry."],
          ],
        },
        {
          type: "box",
          kind: "key",
          title: "Three words candidates confuse",
          text: "Certification - an accredited body audits you against a standard and issues a certificate (ISO 27001). Attestation - a practitioner examines and reports an opinion on your controls for the benefit of specified users (SOC 2). Compliance - meeting an obligation imposed by law, regulation or contract (DPDP, PCI DSS). Getting this distinction right, unprompted, is a strong signal.",
        },
        {
          type: "box",
          kind: "edge",
          title: "ISO 27001 versus NIST CSF",
          text: "\"ISO 27001 is a certifiable management-system standard - it tells you how to build and run an ISMS, and you can get a certificate that customers recognise. NIST CSF is a voluntary framework organised around six functions that's excellent for assessing and communicating maturity, but you can't be certified against it. In practice clients often use CSF to structure the assessment and the board reporting, and ISO 27001 when they need a recognised credential for customers or tenders.\"",
        },
      ],
    },
    {
      id: "2.5",
      title: "India's regulatory landscape",
      minutes: 10,
      blocks: [
        {
          type: "p",
          text: "You will be asked about at least one of these. Indian regulatory awareness is a genuine differentiator because most candidates prepare only global frameworks.",
        },
        { type: "h", text: "Digital Personal Data Protection Act, 2023 and the DPDP Rules" },
        {
          type: "p",
          text: "India's principal personal data protection law. The Act received assent in August 2023; the DPDP Rules were notified in November 2025, operationalising much of the Act with a phased implementation running through 2026 and beyond. Several areas - including aspects of cross-border transfer and Significant Data Fiduciary designation - were still being rolled out through notifications during 2026, so check the current position before your interview rather than asserting a fixed deadline.",
        },
        {
          type: "kv",
          items: [
            ["Data Principal", "The individual the personal data relates to (GDPR calls this the data subject)."],
            ["Data Fiduciary", "The entity that determines the purpose and means of processing (GDPR: controller)."],
            ["Data Processor", "An entity processing on behalf of a fiduciary."],
            ["Significant Data Fiduciary", "Designated based on volume and sensitivity of data and risk to rights - carries enhanced obligations including an India-based DPO, an independent data auditor, and periodic DPIAs."],
            ["Consent Manager", "A registered intermediary through which a Data Principal can give, manage, review and withdraw consent - a distinctive feature of the Indian regime with no direct GDPR equivalent."],
            ["Data Principal rights", "Access to information about processing, correction and erasure, grievance redressal, and nomination of another individual to exercise rights in case of death or incapacity."],
            ["Notice and consent", "Consent must be free, specific, informed, unconditional and unambiguous, with clear affirmative action; notice must be itemised and available in English or the Eighth Schedule languages."],
            ["Children's data", "Verifiable parental consent required for children under 18; behavioural tracking and targeted advertising directed at children restricted."],
            ["Penalties", "A graded scale, with the highest tier for failure to take reasonable security safeguards - up to ₹250 crore per instance under the Act's schedule."],
          ],
        },
        {
          type: "box",
          kind: "edge",
          title: "DPDP versus GDPR in four points",
          text: "Scope: DPDP covers digital personal data only; GDPR covers personal data in any form including structured paper filing systems. No separate sensitive category: GDPR has 'special categories' with extra conditions; DPDP does not create an equivalent statutory class. Consent architecture: DPDP introduces the registered Consent Manager; GDPR has no such intermediary. Rights set: GDPR includes data portability and a broad right to object and restrict processing; DPDP's enumerated rights are narrower but add the right of nomination.",
        },
        { type: "h", text: "CERT-In directions" },
        {
          type: "p",
          text: "The Indian Computer Emergency Response Team issued directions in 2022 requiring, among other things, reporting of specified cyber incidents within six hours of noticing them, maintenance of ICT system logs within India for 180 days, clock synchronisation to NPL or NIC time sources, and retention of specified subscriber and customer records by intermediaries and service providers. The six-hour reporting window is the single most quoted Indian cyber requirement - know it.",
        },
        { type: "h", text: "Sector regulators" },
        {
          type: "kv",
          items: [
            ["RBI", "Banks, NBFCs, payment system operators. Expectations include a board-approved cyber security policy, a Cyber Crisis Management Plan, a SOC, periodic VAPT, incident reporting, IT governance and outsourcing/third-party risk requirements."],
            ["SEBI", "The Cybersecurity and Cyber Resilience Framework (CSCRF) applies across SEBI regulated entities with obligations scaled by category - governance, VAPT, SOC coverage, red teaming for higher categories, and CERT-In empanelled testing."],
            ["IRDAI", "Information and cyber security guidelines for insurers and intermediaries, including governance, risk assessment and incident reporting."],
            ["MeitY / IT Act 2000", "Section 43A (compensation for failure to protect data), Section 72A (disclosure in breach of lawful contract), Section 66 offences, and the intermediary guidelines."],
          ],
        },
        { type: "h", text: "International regimes worth naming" },
        {
          type: "kv",
          items: [
            ["GDPR (EU)", "72-hour breach notification to the supervisory authority; DPIAs; DPO requirement in defined cases; penalties up to 4% of global annual turnover or €20m."],
            ["NIS2 (EU)", "Raises cyber risk-management and reporting obligations for essential and important entities, with management accountability."],
            ["DORA (EU)", "Digital operational resilience for financial entities, with a strong focus on ICT third-party risk and resilience testing."],
            ["HIPAA (US)", "Protected health information - relevant to healthcare and pharma clients and to Indian GCCs serving them."],
            ["SOX (US)", "Internal control over financial reporting for US-listed companies. Directly drives the work in Financial Audit IT integration."],
          ],
        },
        {
          type: "box",
          kind: "trap",
          title: "Hedge deliberately",
          text: "Regulatory detail moves fast, and an out-of-date confident claim reads worse than a hedged accurate one. \"As of my last check the rules were being phased in through 2026 - I'd verify the current position before advising a client.\" That sentence is exactly what a consultant should say, and interviewers notice it.",
        },
        {
          type: "q",
          q: "If a client asks 'do we need to comply with DPDP or GDPR?', how would you approach it?",
          a: [
            "I'd start by mapping the data, not the law. Three questions: whose personal data do they process, where are those individuals located, and where is the processing done. If they process personal data of individuals in India, DPDP applies - and it also applies extra-territorially where processing outside India relates to offering goods or services to Data Principals in India. If they offer goods or services to individuals in the EU or monitor their behaviour, GDPR applies regardless of where the company sits.",
            "In practice for most Indian companies with an export or GCC footprint the answer is both, so the practical advice is to build one control set to the higher bar and map it to each regime, rather than running two parallel programmes. Then I'd flag the places where they genuinely diverge - consent architecture, breach timelines, the rights set - because those need regime-specific handling.",
          ],
          why: "It starts with facts before law, it knows extra-territoriality, and it ends with commercially sensible advice rather than a compliance recital.",
        },
      ],
    },
  ],
};
