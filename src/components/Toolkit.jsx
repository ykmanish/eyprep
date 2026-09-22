"use client";

import { useState } from "react";
import { useProgress } from "@/lib/store";
import {
  CHEAT_DEFINITIONS,
  CHEAT_FRAMEWORKS,
  CHEAT_STRUCTURES,
  CHEAT_SENTENCES,
  ACRONYMS,
  LAST_THING,
} from "@/data/reference";
import { TEN_DAY_PLAN, DAY_BEFORE, DAY_OF, EIGHTY_TWENTY } from "@/data/role";
import { GD_TOPICS } from "@/data/partsSkills";
import { Button, Card, Chip, Callout, Bar, tone, SectionTitle, FourBar, Empty } from "./ui";

const TABS = [
  { id: "cheat", label: "Cheat sheet", icon: "⚡" },
  { id: "plan", label: "10-day plan", icon: "🗓️" },
  { id: "acronyms", label: "Acronyms", icon: "🔤" },
  { id: "gd", label: "GD topics", icon: "💬" },
  { id: "checklist", label: "Day-of checklist", icon: "✅" },
];

/* AppShell keys this view on the route argument, so the initial tab can
   simply come from `arg` - a change to it remounts the component. */
export default function Toolkit({ arg }) {
  const [tab, setTab] = useState(() =>
    TABS.some((t) => t.id === arg) ? arg : "cheat"
  );

  return (
    <div className="mx-auto max-w-4xl space-y-7">
      <SectionTitle
        eyebrow="Rapid revision"
        title="Toolkit"
        sub="Use this in the final two days and in the twenty minutes before you walk in - not to learn anything new, but to make what you already know retrievable under pressure."
      />

      <div className="no-print flex flex-wrap gap-2">
        {TABS.map((t) => (
          <Chip key={t.id} active={tab === t.id} onClick={() => setTab(t.id)}>
            <span>{t.icon}</span> {t.label}
          </Chip>
        ))}
      </div>

      <div key={tab} className="anim-fade space-y-5">
        {tab === "cheat" ? <Cheat /> : null}
        {tab === "plan" ? <Plan /> : null}
        {tab === "acronyms" ? <Acronyms /> : null}
        {tab === "gd" ? <GD /> : null}
        {tab === "checklist" ? <Checklist /> : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Cheat() {
  return (
    <>
      <Card className="overflow-hidden p-0">
        <FourBar />
        <div className="px-6 py-6 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            {["Structure first", "Business consequence last", "Never bluff"].map((x, i) => (
              <span key={x} className="flex items-center gap-4">
                {i > 0 ? <span className="text-[var(--text-faint)]">·</span> : null}
                <span className="text-[15px] font-semibold">{x}</span>
              </span>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-[15px] font-semibold text-[var(--g-blue-600)]">
            Definitions you must nail instantly
          </h3>
          <ul className="mt-3 space-y-2.5">
            {CHEAT_DEFINITIONS.map((x) => (
              <li key={x} className="flex gap-3 text-[13.5px] leading-relaxed">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--g-blue-600)]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-[15px] font-semibold text-[var(--g-green-600)]">
            Frameworks in one breath
          </h3>
          <ul className="mt-3 space-y-2.5">
            {CHEAT_FRAMEWORKS.map((x) => (
              <li key={x} className="flex gap-3 text-[13.5px] leading-relaxed">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--g-green-600)]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold text-[var(--g-yellow-700)]">
          Answer structures to reach for
        </h3>
        <div className="mt-4 divide-y divide-[var(--border-soft)]">
          {CHEAT_STRUCTURES.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-3 sm:grid-cols-[minmax(170px,230px)_1fr] sm:gap-5">
              <div className="text-[13.5px] font-semibold">{k}</div>
              <div className="text-[13.5px] leading-relaxed text-[var(--text-muted)]">{v}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold text-[var(--g-purple-600)]">
          Five sentences worth having ready
        </h3>
        <ol className="mt-4 space-y-3">
          {CHEAT_SENTENCES.map((x, i) => (
            <li key={x} className="flex gap-3.5">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--g-purple-50)] text-[12px] font-bold text-[var(--g-purple-600)]">
                {i + 1}
              </span>
              <span className="pt-0.5 text-[14px] font-medium leading-relaxed">
                &ldquo;{x}&rdquo;
              </span>
            </li>
          ))}
        </ol>
      </Card>

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">If you only have two days</h3>
        <ol className="mt-3 flex flex-wrap items-center gap-2">
          {EIGHTY_TWENTY.map((x, i) => (
            <li key={x} className="flex items-center gap-2">
              {i > 0 ? <span className="text-[var(--text-faint)]">→</span> : null}
              <span className="rounded-full bg-[var(--surface-2)] px-3.5 py-1.5 text-[13px] font-medium">
                {x}
              </span>
            </li>
          ))}
        </ol>
      </Card>

      <Callout kind="key" title="The last thing to remember">
        {LAST_THING}
      </Callout>

      <div className="no-print flex justify-center">
        <Button variant="outlined" onClick={() => window.print()}>
          🖨️ Print this page
        </Button>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */

function Plan() {
  const { state, hydrated, togglePlan } = useProgress();
  const done = Object.keys(state.plan).length;

  return (
    <>
      <Card className="p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-[17px] font-semibold">
              {hydrated ? done : 0} of 10 days complete
            </h3>
            <p className="mt-1 text-[13.5px] text-[var(--text-muted)]">
              Roughly two to three focused hours a day. Compress to five days by merging paired
              days; stretch to fourteen by giving Parts 3 and 4 two days each.
            </p>
          </div>
          <span className="text-[30px]">{done === 10 ? "🏆" : "🗓️"}</span>
        </div>
        <Bar value={hydrated ? done * 10 : 0} t="green" className="mt-4" />
      </Card>

      <div className="space-y-3">
        {TEN_DAY_PLAN.map((d) => {
          const checked = Boolean(state.plan[d.day]);
          return (
            <Card
              key={d.day}
              className={`p-5 transition-opacity ${hydrated && checked ? "opacity-60" : ""}`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => togglePlan(d.day)}
                  className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl text-[13px] font-bold transition-colors g-press ${
                    hydrated && checked
                      ? "bg-[var(--g-green-600)] text-white"
                      : "border-2 border-[var(--border)] text-[var(--text-faint)]"
                  }`}
                  aria-label={`Mark day ${d.day}`}
                >
                  {hydrated && checked ? "✓" : d.day}
                </button>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-faint)]">
                    Day {d.day}
                  </div>
                  <p className={`mt-1 text-[14.5px] leading-relaxed ${hydrated && checked ? "line-through" : "font-medium"}`}>
                    {d.core}
                  </p>
                  <div className="mt-2.5 rounded-xl bg-[var(--surface-2)] px-3.5 py-2.5">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--text-faint)]">
                      Parallel task · 30-40 min
                    </span>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-[var(--text-muted)]">
                      {d.side}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Callout kind="trap" title="The most common failure mode in a ten-day plan">
        Reading everything and rehearsing nothing. Reading builds recognition; speaking builds
        recall. From Day 5 onwards, at least a third of your time should be you talking out loud.
        Play back one recording; it will be uncomfortable and it will be the most useful thirty
        minutes of your preparation.
      </Callout>
    </>
  );
}

/* ------------------------------------------------------------------ */

function Acronyms() {
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const list = ACRONYMS.filter(
    ([a, f]) => !needle || a.toLowerCase().includes(needle) || f.toLowerCase().includes(needle)
  );

  return (
    <>
      <Callout kind="key" title="Scan until every entry is instantly recognisable">
        If an interviewer uses one of these casually and you have to ask, the conversation stalls.
      </Callout>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={`Search ${ACRONYMS.length} acronyms…`}
        className="w-full rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-[14px] outline-none transition-colors focus:border-[var(--primary)]"
      />

      {list.length === 0 ? (
        <Empty icon="🔤" title="No match" sub={`Nothing matched “${q}”.`} />
      ) : (
        <div className="grid gap-2 sm:grid-cols-2">
          {list.map(([a, f]) => (
            <div
              key={a}
              className="flex items-baseline gap-3 rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-3"
            >
              <span className="shrink-0 font-mono text-[13px] font-bold text-[var(--primary)]">
                {a}
              </span>
              <span className="text-[13px] leading-snug text-[var(--text-muted)]">{f}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */

function GD() {
  return (
    <>
      <Callout kind="edge" title="A GD is not a debate you win">
        The panel is scoring whether they would want you in a client meeting - which means
        content, clarity, and whether the discussion went better because you were in it. Enter
        early with a frame rather than an opinion.
      </Callout>

      <Card className="divide-y divide-[var(--border-soft)] p-0">
        {GD_TOPICS.map(([topic, angle], i) => (
          <div key={topic} className="px-5 py-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 font-mono text-[11px] text-[var(--text-faint)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[14.5px] font-semibold">{topic}</div>
                <p className="mt-1 text-[13px] leading-relaxed text-[var(--text-muted)]">
                  <span className="font-medium text-[var(--g-green-600)]">
                    An angle that is not obvious:{" "}
                  </span>
                  {angle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </>
  );
}

/* ------------------------------------------------------------------ */

function Checklist() {
  const { state, hydrated, toggleCheck } = useProgress();

  const groups = [
    { id: "before", title: "The day before", icon: "🌙", t: "blue", items: DAY_BEFORE },
    { id: "day", title: "On the day", icon: "☀️", t: "yellow", items: DAY_OF },
  ];

  const total = DAY_BEFORE.length + DAY_OF.length;
  const done = Object.keys(state.checks).length;

  return (
    <>
      <Card className="p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-[17px] font-semibold">
              {hydrated ? done : 0} of {total} done
            </h3>
            <p className="mt-1 text-[13.5px] text-[var(--text-muted)]">
              Stop by a fixed time and sleep. Marginal revision the night before costs more in
              alertness than it adds in knowledge.
            </p>
          </div>
          <span className="text-[30px]">{done === total ? "🎯" : "📝"}</span>
        </div>
        <Bar value={hydrated ? Math.round((done / total) * 100) : 0} t="green" className="mt-4" />
      </Card>

      {groups.map((g) => {
        const c = tone(g.t);
        return (
          <Card key={g.id} className="p-6">
            <div className="flex items-center gap-2.5">
              <span className={`grid h-9 w-9 place-items-center rounded-xl text-[17px] ${c.soft}`}>
                {g.icon}
              </span>
              <h3 className="text-[16px] font-semibold">{g.title}</h3>
            </div>
            <ul className="mt-4 space-y-1">
              {g.items.map((x, i) => {
                const key = `${g.id}-${i}`;
                const checked = Boolean(state.checks[key]);
                return (
                  <li key={key}>
                    <button
                      onClick={() => toggleCheck(key)}
                      className="flex w-full items-start gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-[var(--surface-2)]"
                    >
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md text-[11px] transition-colors ${
                          hydrated && checked
                            ? "bg-[var(--g-green-600)] text-white"
                            : "border-2 border-[var(--border)]"
                        }`}
                      >
                        {hydrated && checked ? "✓" : ""}
                      </span>
                      <span
                        className={`text-[14px] leading-relaxed ${
                          hydrated && checked
                            ? "text-[var(--text-faint)] line-through"
                            : "text-[var(--text-muted)]"
                        }`}
                      >
                        {x}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Card>
        );
      })}

      <Callout kind="edge" title="Between rounds - the highest-return two minutes of the day">
        Write down, immediately, the questions you were asked and anything you fumbled. You will
        have another round, possibly the same day, and interviewers do compare notes - an answer
        you improve between rounds is noticed favourably, while an inconsistency is noticed
        unfavourably.
      </Callout>

      <Callout kind="key" title="If a round goes badly">
        Reset completely. Panels are frequently independent, and candidates recover from a poor
        technical round with a strong HR round more often than you would expect. Take three
        minutes, get some air, reread your six STAR stories, and walk in as if it is the first
        round of the day.
      </Callout>
    </>
  );
}
