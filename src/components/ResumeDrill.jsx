"use client";

import { useState } from "react";
import {
  CANDIDATE,
  RESUME,
  RESUME_PROBES,
  DEEP_DIVES,
  RESUME_RISKS,
  BULLET_REWRITES,
  RESUME_RULES,
} from "@/data/resume";
import { Button, Card, Chip, Tag, Callout, tone, SectionTitle, FourBar } from "./ui";

const TABS = [
  { id: "probes", label: "Line by line", icon: "🔍" },
  { id: "deep", label: "Deep dives", icon: "🎯" },
  { id: "risks", label: "Where you are exposed", icon: "🛡️" },
  { id: "rewrite", label: "Stronger bullets", icon: "✍️" },
  { id: "paper", label: "The resume", icon: "📄" },
];

/* AppShell keys this view on the route argument, so the initial tab can
   simply come from `arg`. */
export default function ResumeDrill({ go, arg }) {
  const [tab, setTab] = useState(() =>
    TABS.some((t) => t.id === arg) ? arg : "probes"
  );

  return (
    <div className="mx-auto max-w-4xl space-y-7">
      <SectionTitle
        eyebrow="Resume drill"
        title="Your resume is the script for the technical round"
        sub="Interviewers open by working down the page, which means every line on it is a question you are inviting. This section turns each of those lines into the question it will become, and the answer that survives the follow up."
      />

      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <Chip key={t.id} active={tab === t.id} onClick={() => setTab(t.id)}>
            <span>{t.icon}</span> {t.label}
          </Chip>
        ))}
      </div>

      <div key={tab} className="anim-fade space-y-5">
        {tab === "probes" ? <Probes go={go} /> : null}
        {tab === "deep" ? <Deep /> : null}
        {tab === "risks" ? <Risks /> : null}
        {tab === "rewrite" ? <Rewrites /> : null}
        {tab === "paper" ? <Paper /> : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

const RISK_META = {
  high: { t: "red", label: "High probability" },
  medium: { t: "yellow", label: "Likely" },
  low: { t: "green", label: "Possible" },
};

function Probes({ go }) {
  const sections = [...new Set(RESUME_PROBES.map((p) => p.section))];
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);

  const list =
    filter === "all"
      ? RESUME_PROBES
      : filter === "high"
        ? RESUME_PROBES.filter((p) => p.risk === "high")
        : RESUME_PROBES.filter((p) => p.section === filter);

  const highCount = RESUME_PROBES.filter((p) => p.risk === "high").length;

  return (
    <>
      <Callout kind="key" title="Read your own resume as an interviewer would">
        Write down the five questions you would ask yourself, then prepare those five. That is the
        single highest return hour in the day before. The {RESUME_PROBES.length} probes below are
        that exercise done in full, and {highCount} of them are near certainties.
      </Callout>

      <div className="flex flex-wrap gap-2">
        <Chip active={filter === "all"} onClick={() => setFilter("all")}>
          All {RESUME_PROBES.length}
        </Chip>
        <Chip t="red" active={filter === "high"} onClick={() => setFilter("high")}>
          🔥 High probability {highCount}
        </Chip>
        {sections.map((s) => (
          <Chip key={s} active={filter === s} onClick={() => setFilter(s)}>
            {s}
          </Chip>
        ))}
      </div>

      <div className="space-y-3">
        {list.map((p) => {
          const meta = RISK_META[p.risk];
          const c = tone(meta.t);
          const isOpen = open === p.id;
          return (
            <Card key={p.id} className="overflow-hidden p-0">
              <button
                onClick={() => setOpen(isOpen ? null : p.id)}
                className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--surface-2)]"
              >
                <span
                  className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${c.dot}`}
                  title={meta.label}
                />
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <Tag t={meta.t}>{meta.label}</Tag>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">
                      {p.section}
                    </span>
                  </span>
                  <span className="mt-1.5 block text-[15px] font-medium leading-snug">
                    {p.line}
                  </span>
                  {!isOpen ? (
                    <span className="mt-1 block truncate text-[13px] italic text-[var(--text-muted)]">
                      {p.asks[0]}
                    </span>
                  ) : null}
                </span>
                <span
                  className={`shrink-0 text-[var(--text-faint)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>

              {isOpen ? (
                <div className="anim-rise space-y-4 border-t border-[var(--border-soft)] px-5 py-5">
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--text-faint)]">
                      What they ask
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {p.asks.map((a) => (
                        <li key={a} className="flex gap-2.5">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                          <span className="text-[14px] italic leading-relaxed">
                            &ldquo;{a}&rdquo;
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-[var(--g-green-50)] px-4 py-3.5">
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--g-green-600)]">
                      How to answer it
                    </div>
                    <p className="mt-1.5 text-[14px] leading-[1.7] text-[var(--g-green-700)] text-pretty">
                      {p.answer}
                    </p>
                  </div>

                  {p.trap ? (
                    <div className="rounded-2xl bg-[var(--g-red-50)] px-4 py-3.5">
                      <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--g-red-600)]">
                        Trap
                      </div>
                      <p className="mt-1.5 text-[14px] leading-[1.7] text-[var(--g-red-700)] text-pretty">
                        {p.trap}
                      </p>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">Test yourself on what you listed</h3>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--text-muted)]">
          35 questions drawn from exactly what this resume claims: ISO 27001:2022, ISO 20000 and
          ITIL 4, PinkVERIFY, CAPA, working papers, Wireshark and Nmap, malware analysis,
          forensics.
        </p>
        <Button className="mt-4" onClick={() => go("practice", "resume")}>
          Drill the resume question set
        </Button>
      </Card>
    </>
  );
}

/* ------------------------------------------------------------------ */

function Deep() {
  const [open, setOpen] = useState(DEEP_DIVES[0].id);

  return (
    <>
      <Callout kind="edge" title="Expect five minutes on one of these three">
        The panel will not sample evenly across the page. They pick the most credible claim and
        push on it until it stops holding. Prepare these three properly and the rest of the resume
        conversation takes care of itself.
      </Callout>

      {DEEP_DIVES.map((d) => {
        const c = tone(d.tone);
        const isOpen = open === d.id;
        return (
          <Card key={d.id} className="overflow-hidden p-0">
            <button
              onClick={() => setOpen(isOpen ? null : d.id)}
              className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-[var(--surface-2)]"
            >
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-[23px] ${c.soft}`}
              >
                {d.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className={`font-mono text-[11px] font-bold ${c.strong}`}>
                  DEEP DIVE {d.n}
                </span>
                <span className="mt-0.5 block text-[18px] font-semibold leading-snug">
                  {d.title}
                </span>
                <span className="mt-1.5 block text-[13.5px] leading-relaxed text-[var(--text-muted)]">
                  {d.why}
                </span>
              </span>
              <span
                className={`shrink-0 text-[var(--text-faint)] transition-transform ${isOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            {isOpen ? (
              <div className="anim-rise border-t border-[var(--border-soft)] px-5 py-5">
                <div className={`rounded-2xl ${c.soft} px-4 py-3.5`}>
                  <div className={`text-[10.5px] font-bold uppercase tracking-wider ${c.strong}`}>
                    How to open
                  </div>
                  <p className={`mt-1.5 text-[14px] leading-relaxed ${c.ink}`}>{d.opening}</p>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--text-faint)]">
                    The follow ups, and what a strong answer sounds like
                  </div>
                  {d.followups.map((f, i) => (
                    <FollowUp key={i} q={f.q} a={f.a} />
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-[var(--g-red-50)] px-4 py-3.5">
                  <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--g-red-600)]">
                    Traps in this area
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {d.traps.map((t) => (
                      <li key={t} className="flex gap-2.5">
                        <span className="mt-0.5 shrink-0 text-[var(--g-red-600)]">✕</span>
                        <span className="text-[13.5px] leading-relaxed text-[var(--g-red-700)]">
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </Card>
        );
      })}
    </>
  );
}

function FollowUp({ q, a }) {
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-2)] p-4">
      <div className="flex items-start gap-3">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--g-grey-900)] text-[11px] font-bold text-white">
          Q
        </span>
        <p className="flex-1 pt-0.5 text-[14.5px] font-medium leading-snug">{q}</p>
      </div>
      {show ? (
        <p className="anim-rise mt-3 border-l-[3px] border-[var(--primary)] pl-4 text-[14px] leading-[1.7] text-[var(--text-muted)] text-pretty">
          {a}
        </p>
      ) : (
        <Button size="sm" variant="text" className="mt-2" onClick={() => setShow(true)}>
          Say it out loud, then reveal →
        </Button>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

const SEV = {
  high: { t: "red", label: "Fix before the round" },
  medium: { t: "yellow", label: "Have an answer ready" },
  low: { t: "green", label: "One sentence is enough" },
};

function Risks() {
  return (
    <>
      <Callout kind="trap" title="Everything on this page gets verified">
        Never inflate a role, never list a tool you have only watched a tutorial on, and never
        leave a certification ambiguous. A single discovered exaggeration recontextualises
        everything else you said in the room.
      </Callout>

      {RESUME_RISKS.map((r) => {
        const meta = SEV[r.severity];
        const c = tone(meta.t);
        return (
          <Card key={r.id} className="p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Tag t={meta.t}>{meta.label}</Tag>
              <h3 className="text-[16px] font-semibold">{r.title}</h3>
            </div>

            <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-muted)] text-pretty">
              {r.issue}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-[minmax(0,1fr)]">
              <div className="rounded-xl bg-[var(--surface-2)] px-4 py-3">
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--text-faint)]">
                  What to do
                </div>
                <p className="mt-1 text-[13.5px] leading-relaxed">{r.fix}</p>
              </div>
              <div className={`rounded-xl ${c.soft} px-4 py-3`}>
                <div className={`text-[10.5px] font-bold uppercase tracking-wider ${c.strong}`}>
                  Say it like this
                </div>
                <p className={`mt-1 text-[13.5px] leading-relaxed ${c.ink}`}>
                  &ldquo;{r.say}&rdquo;
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}

/* ------------------------------------------------------------------ */

function Rewrites() {
  return (
    <>
      <Callout kind="key" title="The anatomy of a strong bullet">
        Action verb, what you did, how you did it, quantified outcome. A bullet that answers scope,
        method, output and result also generates three natural follow up questions you have already
        prepared for, which is how you steer the round.
      </Callout>

      {BULLET_REWRITES.map((b, i) => (
        <Card key={i} className="p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[var(--g-red-50)] p-4">
              <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--g-red-600)]">
                On the page now
              </div>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--g-red-700)]">
                {b.before}
              </p>
            </div>
            <div className="rounded-xl bg-[var(--g-green-50)] p-4">
              <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--g-green-600)]">
                Stronger
              </div>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--g-green-700)]">
                {b.after}
              </p>
            </div>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-[var(--text-muted)]">
            <span className="font-semibold text-[var(--text)]">Why: </span>
            {b.why}
          </p>
        </Card>
      ))}

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">Rules for this specific role</h3>
        <ul className="mt-3 space-y-2.5">
          {RESUME_RULES.map((r) => (
            <li key={r} className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
              <span className="text-[14px] leading-relaxed text-[var(--text-muted)]">{r}</span>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}

/* ------------------------------------------------------------------ */

function Paper() {
  return (
    <Card className="overflow-hidden p-0">
      <FourBar />
      <div className="px-6 py-8 sm:px-10">
        <header className="border-b border-[var(--border-soft)] pb-5 text-center">
          <h1 className="text-[28px] font-semibold tracking-tight">{CANDIDATE.name}</h1>
          <p className="mt-2 text-[12.5px] text-[var(--text-muted)]">
            {CANDIDATE.email} · {CANDIDATE.phone} · {CANDIDATE.linkedin}
          </p>
        </header>

        <Block title="Summary">
          <p className="text-[14px] leading-[1.7] text-[var(--text-muted)] text-pretty">
            {RESUME.summary}
          </p>
        </Block>

        <Block title="Core skills">
          <div className="space-y-3">
            {RESUME.skills.map((g) => {
              const c = tone(g.tone);
              return (
                <div key={g.group}>
                  <div className={`text-[13px] font-semibold ${c.strong}`}>{g.group}</div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className={`rounded-full ${c.soft} ${c.ink} px-2.5 py-1 text-[12px]`}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Block>

        <Block title="Experience">
          {RESUME.experience.map((e) => (
            <div key={e.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[15px] font-semibold">{e.role}</h3>
                <span className="text-[12px] text-[var(--text-faint)]">{e.dates}</span>
              </div>
              <p className="text-[13px] text-[var(--text-muted)]">
                {e.org}, {e.place}
              </p>
              <ul className="mt-3 space-y-2">
                {e.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    <span className="text-[13.5px] leading-relaxed text-[var(--text-muted)] text-pretty">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Block>

        <Block title="Projects">
          {RESUME.projects.map((p) => (
            <div key={p.name}>
              <h3 className="text-[15px] font-semibold">{p.name}</h3>
              <p className="text-[13px] text-[var(--text-muted)]">{p.sub}</p>
              <ul className="mt-3 space-y-2">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--g-green-600)]" />
                    <span className="text-[13.5px] leading-relaxed text-[var(--text-muted)] text-pretty">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Block>

        <Block title="Certifications">
          <ul className="space-y-2.5">
            {RESUME.certifications.map((c) => (
              <li key={c.name} className="flex gap-3">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--g-yellow-600)]" />
                <span className="text-[13.5px] leading-relaxed">
                  <span className="font-medium">{c.name}</span>
                  {c.by ? (
                    <span className="text-[var(--text-muted)]">
                      {" "}
                      · {c.by}
                      {c.when ? ` · ${c.when}` : ""}
                    </span>
                  ) : null}
                  {c.note ? (
                    <span className="mt-0.5 block text-[12.5px] text-[var(--text-faint)]">
                      {c.note}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Education" last>
          <div className="space-y-3">
            {RESUME.education.map((e) => (
              <div key={e.degree}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-[14.5px] font-semibold">{e.degree}</h3>
                  <span className="text-[12px] text-[var(--text-faint)]">{e.years}</span>
                </div>
                <p className="text-[13px] text-[var(--text-muted)]">
                  {e.school}, {e.place} · {e.score}
                </p>
              </div>
            ))}
          </div>
        </Block>
      </div>
    </Card>
  );
}

function Block({ title, children, last }) {
  return (
    <section className={last ? "pt-6" : "border-b border-[var(--border-soft)] py-6"}>
      <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-faint)]">
        {title}
      </h2>
      {children}
    </section>
  );
}
