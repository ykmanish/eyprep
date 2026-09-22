"use client";

import { useState } from "react";
import { useProgress } from "@/lib/store";
import {
  SCENARIOS,
  STAR_STORIES,
  HR_QUESTIONS,
  QUESTIONS_TO_ASK,
  DO_NOT_ASK,
  STUMPED,
} from "@/data/interview";
import { PART_7 } from "@/data/partsSkills";
import { Button, Card, Chip, Tag, Callout, tone, SectionTitle, Empty } from "./ui";

const TABS = [
  { id: "scenarios", label: "Scenarios", icon: "🎭" },
  { id: "star", label: "STAR bank", icon: "⭐" },
  { id: "hr", label: "50 questions", icon: "🤝" },
  { id: "ask", label: "Ask them", icon: "❓" },
  { id: "method", label: "Answer method", icon: "🧠" },
];

/* AppShell keys this view on the route argument, so the initial tab can
   simply come from `arg` - a change to it remounts the component. */
export default function InterviewLab({ arg }) {
  const [tab, setTab] = useState(() =>
    TABS.some((t) => t.id === arg) ? arg : "scenarios"
  );

  return (
    <div className="mx-auto max-w-4xl space-y-7">
      <SectionTitle
        eyebrow="Interview lab"
        title="Rehearsal, not revision"
        sub="Reading builds recognition; speaking builds recall. From here on, at least a third of your time should be you talking out loud - to a friend, a mirror, or your phone's voice recorder."
      />

      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <Chip key={t.id} active={tab === t.id} onClick={() => setTab(t.id)}>
            <span>{t.icon}</span> {t.label}
          </Chip>
        ))}
      </div>

      <div key={tab} className="anim-fade">
        {tab === "scenarios" ? <Scenarios /> : null}
        {tab === "star" ? <StarBank /> : null}
        {tab === "hr" ? <HRBank /> : null}
        {tab === "ask" ? <AskThem /> : null}
        {tab === "method" ? <Method /> : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Scenarios() {
  const [open, setOpen] = useState(null);
  const [hints, setHints] = useState({});

  return (
    <div className="space-y-4">
      <Callout kind="edge" title="How to use these ten">
        Attempt each aloud before reading the model. Announce your structure first - &ldquo;I&rsquo;d
        look at this in three parts&rdquo; - then fill it. A candidate who reaches a mediocre
        conclusion through a clear structure scores higher than one who blurts the right answer
        with no visible reasoning.
      </Callout>

      {SCENARIOS.map((s) => {
        const c = tone(s.tone);
        const isOpen = open === s.id;
        return (
          <Card key={s.id} className="overflow-hidden p-0">
            <button
              onClick={() => setOpen(isOpen ? null : s.id)}
              className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-[var(--surface-2)]"
            >
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[15px] font-bold ${c.soft} ${c.strong}`}>
                {s.n}
              </span>
              <span className="min-w-0 flex-1">
                <Tag t={s.tone}>{s.tag}</Tag>
                <span className="mt-2 block text-[16px] font-semibold leading-snug">{s.q}</span>
              </span>
              <span className={`shrink-0 text-[var(--text-faint)] transition-transform ${isOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            {isOpen ? (
              <div className="anim-rise border-t border-[var(--border-soft)] px-5 py-5">
                {!hints[s.id] ? (
                  <div className="rounded-2xl bg-[var(--surface-2)] p-4">
                    <p className="text-[13.5px] text-[var(--text-muted)]">
                      Answer it out loud first. Stuck? Take a nudge before the full model.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button size="sm" variant="tonal" onClick={() => setHints((h) => ({ ...h, [s.id]: "hint" }))}>
                        💡 Give me a nudge
                      </Button>
                      <Button size="sm" variant="outlined" onClick={() => setHints((h) => ({ ...h, [s.id]: "full" }))}>
                        Reveal the model answer
                      </Button>
                    </div>
                  </div>
                ) : null}

                {hints[s.id] === "hint" ? (
                  <div className="anim-rise">
                    <div className={`rounded-2xl border ${c.border} ${c.soft} p-4`}>
                      <div className={`text-[11px] font-bold uppercase tracking-wider ${c.strong}`}>
                        Nudge
                      </div>
                      <p className={`mt-1 text-[14px] leading-relaxed ${c.ink}`}>{s.hint}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outlined"
                      className="mt-3"
                      onClick={() => setHints((h) => ({ ...h, [s.id]: "full" }))}
                    >
                      Now show the model answer
                    </Button>
                  </div>
                ) : null}

                {hints[s.id] === "full" ? (
                  <div className="anim-rise">
                    <div className="space-y-3.5 border-l-[3px] border-[var(--primary)] pl-4">
                      {s.a.map((p, i) => (
                        <p key={i} className="text-[14.5px] leading-[1.75] text-[var(--text-muted)] text-pretty">
                          {p}
                        </p>
                      ))}
                    </div>
                    <div className="mt-5 rounded-xl bg-[var(--g-green-50)] px-4 py-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--g-green-600)]">
                        Why this works
                      </span>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--g-green-700)]">
                        {s.why}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="mt-4"
                      onClick={() => setHints((h) => ({ ...h, [s.id]: undefined }))}
                    >
                      Hide again
                    </Button>
                  </div>
                ) : null}
              </div>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function StarBank() {
  const { state, hydrated, saveStory } = useProgress();
  const written = hydrated
    ? STAR_STORIES.filter((s) => (state.stories[s.id] || "").trim().length > 40).length
    : 0;

  return (
    <div className="space-y-4">
      <Callout kind="key" title="STAR, with the emphasis in the right place">
        Situation (15%) - the context, in two sentences. Task (15%) - what you specifically had
        to achieve, and why it was difficult. Action (55%) - what you did, step by step,
        including the decisions you made and the alternatives you rejected. Result (15%) - the
        outcome, quantified where possible, plus what you learned.
      </Callout>

      <div className="flex items-center justify-between rounded-2xl bg-[var(--surface-2)] px-5 py-4">
        <div>
          <div className="text-[15px] font-semibold">
            {written} of 6 stories written
          </div>
          <p className="text-[13px] text-[var(--text-muted)]">
            Writing them out is the highest-return day in the whole plan. Saved in this browser.
          </p>
        </div>
        <span className="text-[26px]">{written === 6 ? "🏆" : "✍️"}</span>
      </div>

      {STAR_STORIES.map((s) => (
        <StoryCard
          key={s.id}
          s={s}
          value={state.stories[s.id] || ""}
          onSave={(v) => saveStory(s.id, v)}
        />
      ))}

      <Callout kind="trap" title="The follow-up that breaks fabricated answers">
        Interviewers probe: &ldquo;What would you do differently?&rdquo; · &ldquo;How did the other
        person react?&rdquo; · &ldquo;What was the hardest moment?&rdquo; · &ldquo;Who disagreed with
        you?&rdquo; · &ldquo;What did that cost?&rdquo; A real story survives all five. An invented
        one falls apart at the second.
      </Callout>
    </div>
  );
}

function StoryCard({ s, value, onSave }) {
  const [draft, setDraft] = useState(value);
  const [lastSaved, setLastSaved] = useState(value);
  const [open, setOpen] = useState(false);
  const c = tone(s.tone);

  // The saved value only changes when the store loads or we write to it;
  // adjust the draft during render rather than in an effect.
  if (value !== lastSaved) {
    setLastSaved(value);
    setDraft(value);
  }

  const saved = draft === value && value.trim().length > 0;

  return (
    <Card className="overflow-hidden p-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-[var(--surface-2)]"
      >
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[19px] ${c.soft}`}>
          {s.icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <span className="text-[16px] font-semibold">
              {s.n}. {s.title}
            </span>
            {value.trim().length > 40 ? <Tag t="green">written</Tag> : null}
          </span>
          <span className="mt-1 block text-[13.5px] text-[var(--text-muted)]">{s.must}</span>
        </span>
        <span className={`shrink-0 text-[var(--text-faint)] transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open ? (
        <div className="anim-rise border-t border-[var(--border-soft)] px-5 py-5">
          <p className="text-[13.5px] leading-relaxed text-[var(--text-muted)]">{s.include}</p>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={() => onSave(draft)}
            rows={8}
            placeholder={"Situation - …\nTask - …\nAction - (this is 55% of it) …\nResult - …"}
            className="mt-4 w-full resize-y rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4 text-[14px] leading-relaxed outline-none transition-colors focus:border-[var(--primary)]"
          />
          <div className="mt-3 flex items-center gap-3">
            <Button size="sm" onClick={() => onSave(draft)}>
              Save story
            </Button>
            <span className="text-[12px] text-[var(--text-faint)]">
              {saved ? "✓ Saved in this browser" : `${draft.trim().split(/\s+/).filter(Boolean).length} words`}
            </span>
          </div>
        </div>
      ) : null}
    </Card>
  );
}

/* ------------------------------------------------------------------ */

function HRBank() {
  const groups = [...new Set(HR_QUESTIONS.map((q) => q.g))];
  const [g, setG] = useState("all");
  const [open, setOpen] = useState(null);
  const [q, setQ] = useState("");

  const needle = q.trim().toLowerCase();
  const list = HR_QUESTIONS.filter(
    (x) =>
      (g === "all" || x.g === g) &&
      (!needle || x.q.toLowerCase().includes(needle) || x.a.toLowerCase().includes(needle))
  );

  return (
    <div className="space-y-4">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filter the question bank…"
        className="w-full rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-[14px] outline-none transition-colors focus:border-[var(--primary)]"
      />

      <div className="flex flex-wrap gap-2">
        <Chip active={g === "all"} onClick={() => setG("all")}>
          All {HR_QUESTIONS.length}
        </Chip>
        {groups.map((x) => (
          <Chip key={x} active={g === x} onClick={() => setG(x)}>
            {x}
          </Chip>
        ))}
      </div>

      {list.length === 0 ? (
        <Empty icon="🔍" title="No match" sub={`Nothing in the bank matched “${q}”.`} />
      ) : (
        <Card className="divide-y divide-[var(--border-soft)] p-0">
          {list.map((x, i) => {
            const isOpen = open === `${x.g}-${i}`;
            return (
              <div key={`${x.g}-${i}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : `${x.g}-${i}`)}
                  className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-[var(--surface-2)]"
                >
                  <span className="min-w-0 flex-1 text-[14.5px] font-medium">{x.q}</span>
                  <span className={`shrink-0 text-[var(--text-faint)] transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {isOpen ? (
                  <div className="anim-rise bg-[var(--surface-2)] px-5 pb-5 pt-1">
                    <p className="border-l-[3px] border-[var(--primary)] pl-4 text-[14px] leading-[1.75] text-[var(--text-muted)] text-pretty">
                      {x.a}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </Card>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function AskThem() {
  const rounds = [...new Set(QUESTIONS_TO_ASK.map((q) => q.round))];
  return (
    <div className="space-y-5">
      <Callout kind="key" title="This is a scored question, not a courtesy">
        Having none signals disinterest. Having three good ones signals that you are evaluating
        them too. Prepare five, ask two or three - and make one of them arise from something they
        said during the round, because that proves you were listening in a way no prepared
        question can.
      </Callout>

      {rounds.map((r) => (
        <Card key={r} className="p-6">
          <h3 className="text-[15px] font-semibold">{r} round</h3>
          <ul className="mt-3 space-y-2.5">
            {QUESTIONS_TO_ASK.filter((q) => q.round === r).map((q) => (
              <li key={q.q} className="flex gap-3">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                <span className="text-[14px] leading-relaxed text-[var(--text-muted)]">
                  &ldquo;{q.q}&rdquo;
                </span>
              </li>
            ))}
          </ul>
        </Card>
      ))}

      <Card className="border-[var(--g-red-100)] bg-[var(--g-red-50)] p-6">
        <h3 className="text-[15px] font-semibold text-[var(--g-red-700)]">
          Do not ask these in a first or second round
        </h3>
        <ul className="mt-3 space-y-2.5">
          {DO_NOT_ASK.map((x) => (
            <li key={x} className="flex gap-3">
              <span className="mt-0.5 shrink-0 text-[var(--g-red-600)]">✕</span>
              <span className="text-[14px] leading-relaxed text-[var(--g-red-700)]">{x}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">Closing the interview</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-muted)]">
          If the round has gone well, close deliberately: &ldquo;Thank you - this was genuinely
          useful. Based on what we&rsquo;ve discussed, I&rsquo;m more interested in the role than
          when I walked in, particularly the [specific area]. Is there anything else you&rsquo;d
          want from me?&rdquo; It is brief, specific, and memorable in a day of twenty candidates
          who said &ldquo;thank you for your time&rdquo;.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Method() {
  const s71 = PART_7.sections[0];
  const structures = s71.blocks.find((b) => b.type === "table");

  return (
    <div className="space-y-5">
      <Callout kind="key" title="The four-move pattern">
        1. Clarify. Restate the problem in your own words and ask one or two scoping questions.
        2. Structure. Say out loud how you will break the problem down, before you solve any part
        of it. 3. Analyse. Work through each branch, stating assumptions as assumptions.
        4. Recommend. Land on a clear answer with a priority order, name the risks and what would
        change your mind. The move most candidates skip is number two - and it is the one being
        scored.
      </Callout>

      <Card className="overflow-hidden p-0">
        <div className="border-b border-[var(--border-soft)] px-6 py-4">
          <h3 className="text-[15px] font-semibold">Structures to have ready</h3>
        </div>
        <div className="divide-y divide-[var(--border-soft)]">
          {structures?.rows.map(([name, when]) => (
            <div key={name} className="grid gap-1 px-6 py-4 sm:grid-cols-[minmax(160px,230px)_1fr] sm:gap-6">
              <div className="text-[14px] font-semibold">{name}</div>
              <div className="text-[13.5px] leading-relaxed text-[var(--text-muted)]">{when}</div>
            </div>
          ))}
        </div>
      </Card>

      <Callout kind="edge" title="Three phrases that buy you credibility">
        &ldquo;Let me make sure I&rsquo;ve understood the question…&rdquo; - buys thinking time and
        prevents answering the wrong question. &ldquo;I&rsquo;m going to assume X - tell me if
        that&rsquo;s wrong.&rdquo; - converts guessing into a stated assumption, which is what
        consultants actually do. &ldquo;The thing that would change my recommendation is…&rdquo; - 
        shows you know your answer is conditional, which reads as seniority.
      </Callout>

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">If a question genuinely stumps you</h3>
        <ol className="mt-4 space-y-3">
          {STUMPED.map((s) => (
            <li key={s.n} className="flex gap-3.5">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--primary-soft)] text-[12px] font-bold text-[var(--primary-on-soft)]">
                {s.n}
              </span>
              <div className="flex-1">
                <div className="text-[14.5px] font-semibold">{s.title}</div>
                <p className="mt-0.5 text-[13.5px] leading-relaxed text-[var(--text-muted)]">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Card>

      <Callout kind="trap" title="Silence while thinking reads as being stuck">
        It is entirely acceptable - expected, even - to say &ldquo;Give me a few seconds to
        structure this.&rdquo; Then take them. What you must not do is fill the silence with
        unstructured talking while you hope a structure appears.
      </Callout>
    </div>
  );
}
