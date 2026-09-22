/** Part 6 - Aptitude, online assessment, group discussion
 *  Part 7 - How to structure any consulting answer
 *  Part 9 - Positioning yourself
 */

export const PART_6 = {
  id: "p6",
  n: "06",
  title: "Aptitude & GD",
  subtitle: "The online assessment, quant shortcuts, and the group discussion",
  tone: "red",
  icon: "🔢",
  blurb:
    "The online test is a filter, not a differentiator - nobody gets hired for a great aptitude score, but a large number of good candidates are eliminated by a mediocre one. Treat this as risk management.",
  sections: [
    {
      id: "6.1",
      title: "What the online test looks like",
      minutes: 5,
      blocks: [
        {
          type: "table",
          head: ["Section", "Typical content", "Weight"],
          rows: [
            ["Quantitative aptitude", "Percentages, profit and loss, ratio and proportion, averages, time and work, time-speed-distance, simple and compound interest, mixtures, partnership, number system, basic probability and permutations", "High"],
            ["Logical reasoning", "Series, coding-decoding, blood relations, directions, seating arrangement, syllogisms, statement-conclusion, puzzles", "High"],
            ["Verbal ability", "Reading comprehension, error spotting, sentence correction, para jumbles, synonyms and antonyms, fill in the blanks", "Medium"],
            ["Data interpretation", "Tables, bar and line charts, pie charts, caselets - percentage change, ratios, averages across data", "Medium-high"],
            ["Situational judgement", "Workplace scenarios with ranked responses, testing values and judgement rather than knowledge", "Low but read 6.4"],
            ["Domain / technical MCQs", "On some drives, basic security and IT questions", "Covered by Parts 2-5"],
            ["Coding", "Appears on some technical-stream drives; typically easy array or string problems. Less likely for an MBA-stream role - confirm with your placement cell", "Confirm first"],
            ["Essay", "A short written response on a business or general topic", "Medium"],
          ],
        },
        {
          type: "box",
          kind: "key",
          title: "Test-taking strategy that adds marks without adding knowledge",
          text: "Three-pass method. Pass one: answer everything you can do in under 45 seconds. Pass two: the medium ones. Pass three: the rest. Most candidates lose ten easy marks by stalling on question four. Set a per-question ceiling of roughly 60-75 seconds and honour it - the sunk-cost instinct is the single biggest destroyer of aptitude scores. Check the negative marking rule before you start: with no negative marking, attempt everything; with negative marking, guess only when you have eliminated at least two options. Read the question's last line first in data interpretation. Options are data - back-solving from the answer choices is frequently faster than solving forward.",
        },
      ],
    },
    {
      id: "6.2",
      title: "Quantitative aptitude: formulas and shortcuts",
      minutes: 12,
      blocks: [
        { type: "h", text: "Percentages" },
        {
          type: "formula",
          text: "Percentage change = (New − Old) / Old × 100\nSuccessive changes of a% and b% → net = a + b + (ab/100)\nIf A is x% more than B, then B is [100x / (100 + x)]% less than A\nIf price rises by x%, consumption must fall by [100x/(100+x)]% to keep spend constant",
        },
        {
          type: "p",
          text: "Fraction equivalents worth memorising: 1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%, 1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%, 1/16 = 6.25%. Converting a percentage to a fraction is the fastest single trick in quant.",
        },
        { type: "h", text: "Profit and loss" },
        {
          type: "formula",
          text: "Profit% = (SP − CP)/CP × 100     Loss% = (CP − SP)/CP × 100\nSP = CP × (100 + P%)/100\nSingle discount equivalent to successive d1%, d2% = d1 + d2 − (d1·d2/100)\nIf SP of x articles = CP of y articles, Profit% = (y − x)/x × 100\nSelling two items at the same price, one at +x% and one at −x% → always a net LOSS of (x²/100)%",
        },
        { type: "h", text: "Ratio, proportion and averages" },
        {
          type: "formula",
          text: "If a:b = x:y, then a = kx and b = ky\nAverage = Sum / Count          Sum = Average × Count\nWeighted average = (n1·a1 + n2·a2)/(n1 + n2)\nAlligation: (Cheaper qty)/(Dearer qty) = (Dearer price − Mean)/(Mean − Cheaper price)",
        },
        { type: "h", text: "Time and work" },
        {
          type: "formula",
          text: "If A takes a days and B takes b days, together they take ab/(a + b) days\nWork done in 1 day by A = 1/a\nM1·D1·H1 / W1 = M2·D2·H2 / W2\nPipes: filling is positive work, emptying is negative work",
        },
        {
          type: "p",
          text: "Shortcut: take total work as the LCM of the individual times. If A takes 12 days and B takes 18, let total work = 36 units; A does 3 units/day, B does 2, together 5 units/day → 36/5 = 7.2 days. This avoids fractions entirely and is much faster under time pressure.",
        },
        { type: "h", text: "Time, speed and distance" },
        {
          type: "formula",
          text: "Speed = Distance / Time      1 km/h = 5/18 m/s      1 m/s = 18/5 km/h\nAverage speed for equal distances at u and v = 2uv/(u + v)  [harmonic mean]\nTrain crossing a pole: distance = length of train\nTrain crossing a platform: distance = length of train + length of platform\nRelative speed - same direction: |u − v| ; opposite directions: u + v\nBoats - downstream = b + s ; upstream = b − s ; b = (down + up)/2 ; s = (down − up)/2",
        },
        { type: "h", text: "Interest, numbers and counting" },
        {
          type: "formula",
          text: "SI = P·R·T/100          CI amount = P(1 + R/100)^T          CI = Amount − P\nDifference between CI and SI for 2 years = P(R/100)²\nDoubling time ≈ 72/R years (rule of 72)\nProbability = Favourable / Total. Two dice: 36 outcomes. Deck: 52 cards, 13 per suit, 12 face cards\nnPr = n!/(n−r)!          nCr = n!/[r!(n−r)!]\nArrangements of n letters with a letter repeating p times = n!/p!\nHCF × LCM = product of the two numbers",
        },
        {
          type: "box",
          kind: "edge",
          title: "The five shortcuts that save the most time",
          text: "1. LCM method for work problems - converts every fraction into whole units. 2. Percentage-to-fraction conversion - 37.5% of 160 is 3/8 of 160 = 60, done mentally. 3. Successive change formula a + b + ab/100 - handles discounts, population growth and price changes identically. 4. Back-solving from options - especially ages, mixtures and 'find the number' problems. 5. Approximation in DI - when options are far apart, round aggressively; you are choosing, not computing.",
        },
      ],
    },
    {
      id: "6.3",
      title: "Logical reasoning and data interpretation",
      minutes: 7,
      blocks: [
        {
          type: "table",
          head: ["Type", "Method"],
          rows: [
            ["Number and letter series", "Check in order: constant difference → constant ratio → difference of differences → squares/cubes ± constant → alternating patterns → prime sequences. For letters, convert to position numbers (A=1 ... Z=26) immediately."],
            ["Coding-decoding", "Write both strings with letter positions underneath and find the shift. Check whether the shift is constant, alternating, or positional."],
            ["Blood relations", "Draw it. Triangle for male, circle for female, horizontal line for spouse, vertical for parent-child. Never attempt these mentally."],
            ["Directions", "Draw axes and plot each move. Right turn while facing north → east; the net displacement is usually a right triangle, so Pythagoras finishes it."],
            ["Seating arrangement", "Start with the most restrictive condition, not the first one given. For circular arrangements, fix one person to remove rotational ambiguity, and check whether they face the centre."],
            ["Syllogisms", "Venn diagrams, and test the least favourable arrangement. A conclusion is valid only if it holds in every possible diagram. 'Some A are B' always allows 'some B are A'. 'All A are B' never allows 'all B are A'."],
            ["Statement and assumption", "An assumption is taken for granted and necessary for the statement to make sense - not merely plausible. Test by negating it: if negating destroys the statement, it is an assumption."],
            ["Data sufficiency", "Determine whether you can answer, never actually compute the answer. Evaluate each statement in complete isolation first - the most common error is carrying information from statement 1 into statement 2."],
            ["Data interpretation", "Read the axis labels, units and any footnote before the questions. Watch for values in different units within one chart, and for percentages of different bases."],
          ],
        },
      ],
    },
    {
      id: "6.4",
      title: "Verbal ability and the essay",
      minutes: 6,
      blocks: [
        {
          type: "p",
          text: "Reading comprehension: read the passage first, quickly, for structure - what is the author's position, and where does it turn (look for 'however', 'although', 'yet'). Then read the questions. For inference questions the answer must be supported by the passage and not by outside knowledge; the most common wrong answer is a true statement that the passage does not actually make. Extreme words - always, never, all, none - usually mark a wrong option.",
        },
        {
          type: "kv",
          items: [
            ["Subject-verb agreement", "\"The list of items is on the desk\" - the subject is list, not items."],
            ["Pronoun reference", "Every pronoun must have one unambiguous antecedent."],
            ["Misplaced modifier", "\"Walking into the room, the lights were off\" - the lights were not walking."],
            ["Parallelism", "\"He likes reading, writing and to swim\" → \"and swimming\"."],
            ["Tense consistency", "Do not switch tense mid-sentence without reason."],
            ["Comparison errors", "Compare like with like: \"his salary is higher than that of his peers\", not \"than his peers\"."],
            ["Confused pairs", "affect/effect, principal/principle, complement/compliment, fewer/less, among/between, its/it's, lie/lay, imply/infer."],
          ],
        },
        {
          type: "p",
          text: "Para jumbles: find the opening sentence first - it introduces a subject by full name rather than a pronoun and contains no back-reference. Then chain by linkage: pronouns, 'this', 'such', 'however', and repeated key terms. Verify the last sentence concludes rather than introduces.",
        },
        {
          type: "box",
          kind: "key",
          title: "An essay structure that works in 250-300 words",
          text: "1. Opening (2-3 lines): state your position plainly. No dictionary definitions, no 'since time immemorial'. 2. Body paragraph 1: your strongest argument with a concrete example or data point. 3. Body paragraph 2: your second argument, ideally from a different angle - economic, regulatory, social. 4. Body paragraph 3: acknowledge the strongest counter-argument honestly, then explain why your position still holds. This is what separates a top essay from an average one. 5. Conclusion (2-3 lines): restate the position and give a forward-looking implication. Short sentences. One idea per paragraph.",
        },
        {
          type: "box",
          kind: "edge",
          title: "Situational judgement sections",
          text: "The pattern that scores: gather facts before acting → consult or escalate to the right person → take responsibility for your own part → never conceal, never go around your manager, never act unilaterally on something outside your authority. Options that involve ignoring the issue, or handling something serious entirely alone without telling anyone, are almost always the lowest-ranked.",
        },
      ],
    },
    {
      id: "6.6",
      title: "Group discussion: method and topics",
      minutes: 8,
      blocks: [
        {
          type: "p",
          text: "A GD is not a debate you win. The panel is scoring whether they would want you in a client meeting - which means content, clarity, and whether the discussion went better because you were in it. Typically 8-12 candidates, 10-15 minutes.",
        },
        {
          type: "box",
          kind: "say",
          title: "The highest-leverage 20 seconds",
          text: "Speaking first is an advantage only if you have something structured to say. The reliable opening is to define and structure rather than to take a position: \"Before we take positions, it might help to define what we mean by [term], because I think the group could end up arguing about different things. I'd suggest we look at this from three angles - the economic, the regulatory, and the social impact. Taking the first...\" This gives the group a structure to use, signals leadership without dominance, and buys you ownership of the framework everyone then speaks within.",
        },
        {
          type: "twocol",
          left: {
            title: "Earns marks",
            items: [
              "Entering early with a frame rather than an opinion",
              "Specific facts, examples and numbers - one good data point beats three opinions",
              "Building explicitly: 'Extending what she said about cost, the second-order effect is...'",
              "Bringing in a quieter participant",
              "Resolving a deadlock by identifying the actual disagreement",
              "Offering a summary near the end that fairly captures both sides",
              "Steady eye contact with the group, not the panel",
            ],
          },
          right: {
            title: "Loses marks",
            items: [
              "Interrupting, or raising your voice to hold the floor",
              "Repeating a point already made, in different words",
              "Speaking at length without structure - quantity is not participation",
              "Fabricating statistics; if challenged, the round is effectively over",
              "Personalising disagreement rather than addressing the argument",
              "Complete silence, or one token sentence at the end",
              "Rigidly refusing to update your position when given good evidence",
            ],
          },
        },
        {
          type: "box",
          kind: "edge",
          title: "If you cannot get a word in",
          text: "Do not raise your volume. Wait for the natural half-second pause when a speaker finishes a clause, use a hand gesture and an opening phrase that signals brevity - 'Can I add one point on that?' - and then actually be brief. If the group is genuinely chaotic, the highest-scoring intervention available is: \"We're going in circles a bit - could we agree on the two or three factors that matter and take them one at a time?\" A panel notices whoever restores order.",
        },
      ],
    },
  ],
};

export const GD_TOPICS = [
  ["Is AI a threat to jobs in professional services?", "Distinguish task automation from role elimination; entry-level work changes shape, and judgement, client trust and accountability remain human."],
  ["Should India have stricter data protection enforcement?", "Enforcement capacity and compliance cost for MSMEs versus the deterrent value of penalties."],
  ["Work from home versus work from office", "Distinguish by role and career stage - apprenticeship-heavy early careers lose the most from remote work."],
  ["Is cyber security a technology problem or a people problem?", "It is a business-process problem; most incidents start with a human action but succeed because of a process gap."],
  ["Should companies pay ransomware demands?", "Legal and sanctions exposure, funding the ecosystem, and no guarantee of recovery - versus a genuine survival case for some firms."],
  ["Privacy versus national security", "Reject the binary; the real question is proportionality, oversight and judicial review."],
  ["Digital India: achievements and gaps", "Digital public infrastructure success versus the digital divide and fraud risk on new rails."],
  ["Are MBAs overrated?", "Signalling value versus skill value; the answer depends on what the market is actually buying."],
  ["Should social media be regulated?", "Who regulates, and the enforcement asymmetry between global platforms and local jurisdictions."],
  ["Cryptocurrency: opportunity or risk?", "Separate the asset class from the underlying ledger technology; regulatory treatment differs entirely."],
  ["Is remote auditing as effective as on-site?", "Evidence quality and the informal observation you lose; hybrid is the practical answer."],
  ["Startups versus corporates for a first job", "Learning breadth versus depth of training infrastructure; risk tolerance at different life stages."],
  ["Does India need a cyber security law separate from the IT Act?", "Fragmentation across CERT-In, sector regulators and DPDP versus regulatory overload."],
  ["Gig economy: empowerment or exploitation?", "Flexibility versus absence of social security; regulatory classification is the crux."],
  ["Should critical infrastructure be air-gapped?", "Air gaps degrade in practice; IT-OT convergence means the honest question is segmentation and monitoring."],
  ["Is ESG reporting meaningful or greenwashing?", "Assurance and standardisation are what separate the two - an audit-adjacent angle that will land well."],
  ["Can technology eliminate corruption?", "Transparency and audit trails reduce discretion; but technology procurement itself creates new discretion."],
  ["Should schools teach cyber hygiene?", "Where in the curriculum, and who teaches the teachers - a practical angle beats agreeing with the premise."],
  ["Globalisation: is it reversing?", "Distinguish trade in goods, services and data; digital services globalisation is still growing."],
  ["Are cashless economies safer?", "Reduces cash theft and improves traceability; concentrates systemic and fraud risk and creates exclusion."],
  ["Does India's demographic dividend need a skills correction?", "Employability versus employment; the mismatch is sectoral, not just volumetric."],
  ["Should organisations disclose breaches publicly?", "Mandatory notification already exists in many regimes; the real debate is timing versus investigation integrity."],
  ["Is 'zero trust' realistic for Indian SMEs?", "It is a strategy, not a purchase; identity-first steps are achievable, full architecture is not."],
  ["Ethics in consulting: can you audit a client you also advise?", "Independence rules exist precisely for this; a well-informed answer here is very strong for this role."],
];

export const PART_7 = {
  id: "p7",
  n: "07",
  title: "Case method",
  subtitle: "How to structure any consulting answer, and guesstimates",
  tone: "purple",
  icon: "🧠",
  blurb:
    "Consulting interviews test process over answer. A candidate who reaches a mediocre conclusion through a clear, transparent structure scores higher than one who blurts the right answer with no visible reasoning - because on an engagement, the client buys the reasoning.",
  sections: [
    {
      id: "7.1",
      title: "How to structure any consulting answer",
      minutes: 7,
      blocks: [
        {
          type: "box",
          kind: "key",
          title: "The four-move pattern",
          text: "1. Clarify. Restate the problem in your own words and ask one or two scoping questions. 2. Structure. Say out loud how you will break the problem down, before you solve any part of it. 3. Analyse. Work through each branch, stating assumptions as assumptions. 4. Recommend. Land on a clear answer with a priority order, name the risks and what would change your mind. The move most candidates skip is number two - and it is the one being scored.",
        },
        {
          type: "table",
          head: ["Structure", "When to use it"],
          rows: [
            ["People, Process, Technology", "The default for any 'why did this control fail' or 'how would you improve this' question. Add Governance and Data for a fourth and fifth dimension."],
            ["NIST CSF functions", "Govern, Identify, Protect, Detect, Respond, Recover - excellent for 'assess their security posture' or 'where should they invest'."],
            ["Prevent, Detect, Respond", "A fast three-part frame when you have thirty seconds rather than five minutes."],
            ["Short, medium, long term", "0-3 months, 3-12 months, 12-36 months. Always pair recommendations with a horizon; it demonstrates realism."],
            ["Likelihood × Impact", "For any prioritisation question. Adding 'and effort to remediate' turns a risk view into a roadmap."],
            ["Stakeholder map", "For questions about communication, resistance or change: board, executives, IT, business units, customers, regulators, auditors."],
            ["Cost, Risk, Time, Quality", "For trade-off questions - something must give, and naming which is the answer."],
            ["5C finding format", "Condition, criteria, cause, consequence, corrective action - for 'describe an issue you found'."],
          ],
        },
        {
          type: "box",
          kind: "edge",
          title: "Three phrases that buy you credibility",
          text: "\"Let me make sure I've understood the question...\" - buys thinking time and prevents answering the wrong question. \"I'm going to assume X - tell me if that's wrong.\" - converts guessing into a stated assumption, which is what consultants actually do. \"The thing that would change my recommendation is...\" - shows you know your answer is conditional, which reads as seniority.",
        },
        {
          type: "box",
          kind: "trap",
          title: "Silence while thinking reads as being stuck",
          text: "It is entirely acceptable - expected, even - to say \"Give me a few seconds to structure this.\" Then take them. What you must not do is fill the silence with unstructured talking while you hope a structure appears.",
        },
      ],
    },
    {
      id: "7.3",
      title: "Guesstimates and sizing questions",
      minutes: 5,
      blocks: [
        {
          type: "box",
          kind: "key",
          title: "The method is the answer",
          text: "Nobody expects the right number. They are watching whether you: state your approach before calculating, use round numbers you can actually compute aloud, state every assumption explicitly, sanity-check the result against something you know, and identify which assumption your answer is most sensitive to.",
        },
        {
          type: "p",
          text: "Worked example - how many laptops does a large Indian IT services company need to replace each year? Approach: annual replacements = total device fleet ÷ refresh cycle, plus growth, plus attrition-driven churn and breakage. Assumptions, stated: employee base of roughly 300,000; near one laptop per employee for a services business, so a fleet of about 300,000 devices; a four-year refresh cycle is typical, giving 75,000 annual replacements from ageing alone. Add headcount growth of say 5%, another 15,000 devices. Add breakage and loss at perhaps 2%, around 6,000. Attrition itself doesn't add devices because a leaver's machine is reissued, though it does add reimaging effort. Total: roughly 95,000 to 100,000 laptops a year. Sanity check: that is about a third of the fleet annually, consistent with a four-year cycle plus growth. Most sensitive assumption: the refresh cycle - moving from four years to five reduces the ageing component by 15,000 units.",
        },
        {
          type: "box",
          kind: "edge",
          title: "End a guesstimate by naming the lever",
          text: "It converts an arithmetic exercise into a business insight, which is the whole reason the question is asked.",
        },
      ],
    },
  ],
};

export const PART_9 = {
  id: "p9",
  n: "09",
  title: "Positioning",
  subtitle: "Resume lines, talking about projects, and the day-of checklist",
  tone: "yellow",
  icon: "📄",
  blurb:
    "Everything else is about what you know. This part is about how it is presented - on a page that gets eight seconds of attention, in the projects you choose to talk about, and in the details of the day itself.",
  sections: [
    {
      id: "9.1",
      title: "Resume lines that survive a consulting screen",
      minutes: 7,
      blocks: [
        {
          type: "p",
          text: "Your resume's job in this process is narrow: get you into the room, and give the interviewer good things to ask about. It is also the script for most of the technical round, because interviewers open by working down it - which means every line is a question you are inviting.",
        },
        {
          type: "box",
          kind: "key",
          title: "The anatomy of a strong bullet",
          text: "Action verb + what you did + how you did it + quantified outcome. Weak: \"Worked on a vulnerability assessment project.\" Strong: \"Assessed 40 endpoints and 6 network devices against CIS benchmarks using Nessus, documented 23 findings rated by CVSS and business impact, and presented a prioritised remediation plan adopted for 9 high-severity items.\" The second version answers scope, method, output and result - and generates three natural follow-up questions you can prepare for.",
        },
        {
          type: "list",
          items: [
            "One page. At campus stage, two pages signals an inability to prioritise.",
            "Lead with the qualification that matches the JD. 'MBA - Cyber Security Management' belongs in the top block.",
            "Quantify everything you can. Number of systems, size of team, duration, percentage improvement, number of findings, number of stakeholders.",
            "Use the JD's own vocabulary where it is truthful - risk assessment, controls, governance, compliance, stakeholder management, documentation. Many campus resumes are screened by keyword first.",
            "Name tools and frameworks you have genuinely used - and only those. Every listed item is fair game for a question.",
            "Separate certifications, completed and in progress, honestly labelled. 'CISA (planned, 2027)' is credible; listing it without qualification is not.",
            "Include one line of non-academic substance - a committee role, a sport, a volunteering commitment.",
            "No photo, no age, no marital status, no declaration paragraph. No objective statement - the role you applied for is the objective.",
          ],
        },
        {
          type: "beforeafter",
          items: [
            {
              before: "\"Did a project on ISO 27001.\"",
              after: "\"Conducted a gap assessment of a simulated mid-size organisation against ISO 27001:2022 Annex A, mapping 93 controls across the four themes; identified 31 gaps and built a three-phase remediation roadmap with effort estimates.\"",
            },
            {
              before: "\"Familiar with risk management.\"",
              after: "\"Built a risk register of 25 risks for a case organisation, scored on likelihood and impact, and defended a treatment plan prioritising 6 risks against a defined appetite.\"",
            },
            {
              before: "\"Internship at a company in the security team.\"",
              after: "\"Supported the information security team during a 10-week internship: reviewed user access for 3 applications covering ~450 users, identified 18 dormant and 4 orphan accounts, and drafted the revised access review procedure adopted by the team.\"",
            },
            {
              before: "\"Good communication skills.\"",
              after: "Delete. Unevidenced adjectives occupy space and persuade nobody. Demonstrate it through a bullet about presenting, writing or negotiating.",
            },
            {
              before: "\"Member of college fest committee.\"",
              after: "\"Coordinated sponsorship for the annual technical festival: approached 30 organisations, closed 7 sponsorships worth ₹2.4 lakh, and managed deliverable commitments to each.\"",
            },
          ],
        },
        {
          type: "box",
          kind: "trap",
          title: "Everything is verified",
          text: "Never list a certification you have not completed without labelling it, never inflate a role from 'participant' to 'led', and never list a tool you have only watched a tutorial on. Interviewers at this firm probe resumes specifically, offers are subject to verification, and a single discovered exaggeration recontextualises everything else you said.",
        },
      ],
    },
    {
      id: "9.2",
      title: "Projects: how to talk about what you have built",
      minutes: 6,
      blocks: [
        {
          type: "p",
          text: "Expect at least five minutes on one project. The interviewer is not evaluating the project's sophistication - they are evaluating whether you understood what you did, made decisions, and can explain it to someone who was not there.",
        },
        {
          type: "num",
          items: [
            "The problem in one sentence - what question were you answering, and for whom.",
            "Your specific role - team size and what you personally owned. 'I contributed to X and owned Y' is stronger than an implied claim to everything.",
            "The approach and one real decision - the framework or method, and at least one choice you made between alternatives, with the reason. Decisions are what make a project yours.",
            "The hard part - where it went wrong or got stuck, and what you did. Interviewers listen hardest here.",
            "The outcome and the limitation - what you produced, and honestly what you would do differently. Naming a limitation yourself is a strong signal.",
          ],
        },
        {
          type: "box",
          kind: "edge",
          title: "The 'so what' test",
          text: "For an academic project the honest answer is not business impact - so reframe it as learning impact and transferability: \"It was a simulated environment so there was no live remediation, but two things transferred. I learned that the hardest part wasn't finding the gaps - it was sequencing them into something an organisation could actually afford. And I learned to write a finding so that someone who wasn't in the room could act on it, which took me three rewrites to get right.\"",
        },
        {
          type: "box",
          kind: "say",
          title: "Turning a gap into evidence",
          text: "\"I'll be honest that my hands-on exposure is limited compared to someone from an engineering background - my programme is management-focused. What I did about that was [specific]: I read ISO 27001:2022 and the NIST CSF properly rather than summaries, worked through a set of published incident reports to understand how controls actually fail, and set up [a small lab / a tool / an exercise] so the concepts weren't purely theoretical. I'd expect to keep closing that gap, and I'd rather tell you where it is than have you find it.\" This works because it is honest, it demonstrates initiative, and it pre-empts the concern the interviewer already had.",
        },
      ],
    },
  ],
};
