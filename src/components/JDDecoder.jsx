"use client";

import { useState } from "react";
import {
  JD_SECTIONS,
  JD_DECODE,
  ENGAGEMENT_AREAS,
  FUNNEL,
  COMPETENCIES,
  EY_CONTEXT,
  VOCAB,
  ROLE,
} from "@/data/role";
import { Button, Card, Chip, Tag, Callout, tone, SectionTitle, FourBar } from "./ui";

const TABS = [
  { id: "decode", label: "Line-by-line decode", icon: "🔍" },
  { id: "jd", label: "The JD itself", icon: "📄" },
  { id: "funnel", label: "The four rounds", icon: "🪜" },
  { id: "firm", label: "The firm", icon: "🏢" },
  { id: "vocab", label: "Vocabulary", icon: "🗣️" },
];

export default function JDDecoder({ go }) {
  const [tab, setTab] = useState("decode");

  return (
    <div className="mx-auto max-w-4xl space-y-7">
      <SectionTitle
        eyebrow="The syllabus"
        title="The job description, decoded"
        sub="Every JD sentence is a hiring criterion, and most of them map to a question you will be asked. This is the highest-yield page here - read the decode table twice."
      />

      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <Chip key={t.id} active={tab === t.id} onClick={() => setTab(t.id)}>
            <span>{t.icon}</span> {t.label}
          </Chip>
        ))}
      </div>

      <div key={tab} className="anim-fade space-y-5">
        {tab === "decode" ? <Decode /> : null}
        {tab === "jd" ? <RawJD go={go} /> : null}
        {tab === "funnel" ? <Funnel /> : null}
        {tab === "firm" ? <Firm /> : null}
        {tab === "vocab" ? <Vocab /> : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Decode() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <Callout kind="edge" title="Quote the JD back at them once - precisely once">
        &ldquo;The description mentions leveraging internal and external resources before executing
        procedures, and that&rsquo;s the part of consulting I find most interesting - that the work
        starts well before you meet the client.&rdquo; It proves you read it closely. Doing it
        repeatedly sounds rehearsed.
      </Callout>

      <Card className="divide-y divide-[var(--border-soft)] p-0">
        {JD_DECODE.map((d, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--surface-2)]"
              >
                <span className="mt-0.5 shrink-0 font-mono text-[11px] text-[var(--text-faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[14.5px] font-medium italic leading-snug">
                    &ldquo;{d.says}&rdquo;
                  </span>
                  {!isOpen ? (
                    <span className="mt-1 block truncate text-[13px] text-[var(--text-muted)]">
                      {d.means}
                    </span>
                  ) : null}
                </span>
                <span className={`shrink-0 text-[var(--text-faint)] transition-transform ${isOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>

              {isOpen ? (
                <div className="anim-rise space-y-3 bg-[var(--surface-2)] px-5 pb-5 pl-[52px] pt-1">
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--text-faint)]">
                      What it really means
                    </div>
                    <p className="mt-1 text-[14px] leading-relaxed">{d.means}</p>
                  </div>
                  <div className="rounded-xl bg-[var(--g-blue-50)] px-4 py-3">
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--g-blue-600)]">
                      Expect to be asked
                    </div>
                    <p className="mt-1 text-[14px] leading-relaxed text-[var(--g-blue-900)]">
                      &ldquo;{d.expect}&rdquo;
                    </p>
                  </div>
                  <div className="rounded-xl bg-[var(--g-green-50)] px-4 py-3">
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--g-green-600)]">
                      How to answer
                    </div>
                    <p className="mt-1 text-[14px] leading-relaxed text-[var(--g-green-700)]">
                      {d.tip}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </Card>

      <Callout kind="key" title="Which of these areas interests you most?">
        Pick two, not one. Give a primary (with a reason rooted in your MBA and any project work)
        and a secondary, then add that you would want breadth in the first two years before
        specialising. That answer is both honest and exactly what a staffing model needs to hear.
      </Callout>
    </>
  );
}

/* ------------------------------------------------------------------ */

function RawJD({ go }) {
  return (
    <>
      <Card className="overflow-hidden p-0">
        <FourBar />
        <div className="px-6 py-7 sm:px-9 sm:py-9">
          <div className="flex flex-wrap items-center gap-2">
            <Tag t="yellow">Job specification</Tag>
            <Tag t="blue">2025</Tag>
          </div>
          <h2 className="mt-4 text-[28px] font-semibold leading-tight tracking-tight">
            {ROLE.title} - Cyber Security
          </h2>

          {JD_SECTIONS.map((s) => (
            <section key={s.heading} className="mt-8">
              <h3 className="text-[16px] font-semibold text-[var(--primary)]">{s.heading}</h3>
              {s.body?.map((p, i) => (
                <p
                  key={i}
                  className="mt-3 text-[15px] leading-[1.75] text-[var(--text-muted)] text-pretty"
                >
                  {p}
                </p>
              ))}
              {s.bullets ? (
                <ul className="mt-3 space-y-2.5">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                      <span className="text-[14.5px] leading-relaxed text-[var(--text-muted)] text-pretty">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="mt-9">
            <h3 className="text-[16px] font-semibold text-[var(--primary)]">
              Engagements would vary in the areas
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--g-yellow-50)] p-5">
                <div className="text-[13px] font-bold text-[var(--g-yellow-700)]">Tech Risk</div>
                <ul className="mt-2.5 space-y-1.5">
                  {ENGAGEMENT_AREAS.techRisk.map((a) => (
                    <li key={a.id} className="text-[13.5px] text-[var(--g-yellow-700)]">
                      • {a.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-[var(--g-green-50)] p-5">
                <div className="text-[13px] font-bold text-[var(--g-green-700)]">
                  Cyber Security
                </div>
                <ul className="mt-2.5 space-y-1.5">
                  {ENGAGEMENT_AREAS.cyber.map((a) => (
                    <li key={a.id} className="text-[13.5px] text-[var(--g-green-700)]">
                      • {a.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-9 rounded-2xl bg-[var(--surface-2)] p-5">
            <h3 className="text-[15px] font-semibold">About EY</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-muted)]">
              As a global leader in assurance, tax, transaction and advisory services, we hire and
              develop the most passionate people in their field to help build a better working
              world. This starts with a culture that believes in giving you the training,
              opportunities and creative freedom to make things better.
            </p>
          </section>
        </div>
      </Card>

      <Callout kind="key" title="You qualify - treat it as an advantage, not a gap">
        Read the qualification line again: EY asks for a Chartered Accountant and/or MBA/PGDM - 
        not a B.Tech. This role is deliberately hired from management and commerce backgrounds
        because the day job is risk, control, process, documentation and client communication, not
        writing exploit code. You are expected to be comfortable with technology, not to be a
        penetration tester.
      </Callout>

      <div className="flex flex-wrap gap-3">
        <Button onClick={() => go("learn", "p1")}>Study the role in depth</Button>
        <Button variant="outlined" onClick={() => go("practice", "consulting")}>
          Practise consulting judgement
        </Button>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */

function Funnel() {
  return (
    <>
      <div className="space-y-3">
        {FUNNEL.map((f) => {
          const c = tone(f.tone);
          return (
            <Card key={f.stage} className="p-6">
              <div className="flex items-start gap-4">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-[17px] font-bold ${c.soft} ${c.strong}`}>
                  {f.stage}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] font-semibold">{f.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-muted)]">
                    {f.content}
                  </p>
                  <div className={`mt-3 rounded-xl ${c.soft} px-4 py-2.5`}>
                    <span className={`text-[10.5px] font-bold uppercase tracking-wider ${c.strong}`}>
                      What decides it
                    </span>
                    <p className={`mt-0.5 text-[13.5px] leading-relaxed ${c.ink}`}>{f.decides}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Callout kind="key" title="Consistency across rounds">
        Interviewers compare notes. If you tell the technical panel that privacy fascinates you
        and tell HR you want to be a penetration tester, you have created a credibility problem
        that neither round individually would have caught. Decide your narrative once and hold it
        in every round.
      </Callout>

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">What is being scored behind the glass</h3>
        <p className="mt-1.5 text-[13.5px] text-[var(--text-muted)]">
          Firms assess against competency frameworks rather than gut feel.
        </p>
        <div className="mt-4 divide-y divide-[var(--border-soft)]">
          {COMPETENCIES.map((c) => (
            <div
              key={c.name}
              className="grid gap-1 py-3.5 sm:grid-cols-[minmax(150px,190px)_1fr] sm:gap-5"
            >
              <div className="text-[14px] font-semibold">{c.name}</div>
              <div className="text-[13.5px] leading-relaxed text-[var(--text-muted)]">
                {c.evidence}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Callout kind="edge" title="The closing clause that changes everything">
        At the end of a strong answer, add the one-line business consequence: &ldquo;…and the
        reason that control matters is that without it, a terminated employee keeps access to the
        payment system for months, which is both a fraud exposure and an audit finding.&rdquo; That
        single closing clause is the difference between a student answer and a consultant answer.
      </Callout>
    </>
  );
}

/* ------------------------------------------------------------------ */

function Firm() {
  return (
    <>
      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">The essentials</h3>
        <div className="mt-4 divide-y divide-[var(--border-soft)]">
          {EY_CONTEXT.essentials.map((e) => (
            <div key={e.k} className="grid gap-1 py-3.5 sm:grid-cols-[minmax(120px,150px)_1fr] sm:gap-5">
              <div className="text-[14px] font-semibold">{e.k}</div>
              <div className="text-[13.5px] leading-relaxed text-[var(--text-muted)]">{e.v}</div>
            </div>
          ))}
        </div>
      </Card>

      <Callout kind="trap" title="Never quote an unverified number">
        Do not state specific revenue, headcount, ranking or &ldquo;number one in X&rdquo; claims
        unless you have checked them on the firm&rsquo;s own site within a few days of the
        interview. Confidently quoting a stale or wrong number is worse than not quoting one.
      </Callout>

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">Published service offerings</h3>
        <p className="mt-1.5 text-[13.5px] text-[var(--text-muted)]">
          Note how closely these mirror the JD&rsquo;s own list - that alignment is worth pointing
          out in an interview. Verify on the firm&rsquo;s India site before your round.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {EY_CONTEXT.offerings.map(([name, what]) => (
            <div key={name} className="rounded-2xl bg-[var(--surface-2)] p-4">
              <div className="text-[13.5px] font-semibold">{name}</div>
              <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--text-muted)]">{what}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">
          Why would a company hire a consultant instead of doing this internally?
        </h3>
        <ol className="mt-4 space-y-3">
          {EY_CONTEXT.whyConsultants.map((w, i) => (
            <li key={w.t} className="flex gap-3.5">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--primary-soft)] text-[12px] font-bold text-[var(--primary-on-soft)]">
                {i + 1}
              </span>
              <div>
                <div className="text-[14.5px] font-semibold">{w.t}</div>
                <p className="mt-0.5 text-[13.5px] leading-relaxed text-[var(--text-muted)]">
                  {w.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Card>

      <Callout kind="say" title="Why EY and not Deloitte / PwC / KPMG?">
        &ldquo;Honestly, all four are strong platforms, so I looked at fit rather than rankings. Two
        things pulled me to EY. First, the breadth in this particular JD - eleven service areas
        across tech risk and cyber in one role, which is exactly the exposure I want in my first
        two years rather than being narrowed early. Second, the direction of the cyber practice
        towards quantification and performance management, because translating technical risk into
        business and financial terms is what my MBA has been about. And practically - this is the
        firm that came to campus, met me, and this is the conversation I want to be in.&rdquo;
      </Callout>
    </>
  );
}

/* ------------------------------------------------------------------ */

function Vocab() {
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const list = VOCAB.filter(
    ([k, v]) => !needle || k.toLowerCase().includes(needle) || v.toLowerCase().includes(needle)
  );

  return (
    <>
      <Callout kind="edge" title="Restraint is the skill">
        Using two or three of these terms correctly and naturally - &ldquo;I&rsquo;d raise it in the
        status call rather than let it surface at the end of fieldwork&rdquo; - instantly reads as
        someone who understands the working model. Using ten of them in five minutes reads as
        someone performing.
      </Callout>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filter consulting vocabulary…"
        className="w-full rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-[14px] outline-none transition-colors focus:border-[var(--primary)]"
      />

      <Card className="divide-y divide-[var(--border-soft)] p-0">
        {list.map(([k, v]) => (
          <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[minmax(160px,210px)_1fr] sm:gap-5">
            <div className="text-[14px] font-semibold">{k}</div>
            <div className="text-[13.5px] leading-relaxed text-[var(--text-muted)]">{v}</div>
          </div>
        ))}
      </Card>
    </>
  );
}
