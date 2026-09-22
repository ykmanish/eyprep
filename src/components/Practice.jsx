"use client";

import { useEffect, useState } from "react";
import { useProgress } from "@/lib/store";
import {
  DOMAINS,
  DOMAIN_BY_ID,
  QUESTIONS,
  QUESTION_DOMAIN,
  questionsFor,
  countFor,
  shuffle,
  buildMock,
  TOTAL_QUESTIONS,
} from "@/data/questions";
import { APTITUDE_TRAPS } from "@/data/aptitude";
import {
  Button,
  Card,
  Chip,
  Tag,
  Ring,
  Bar,
  Confetti,
  Empty,
  SectionTitle,
  tone,
} from "./ui";

const LETTERS = ["A", "B", "C", "D", "E"];

/* The route argument is the source of truth for which run is open:
   #/practice/<domainId> or #/practice/daily|mock|rapid|starred|missed */
export default function Practice({ go, arg }) {
  const { state, hydrated } = useProgress();
  const [attempt, setAttempt] = useState(0);

  function start(kind) {
    window.location.hash = `#/practice/${kind}`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function exit() {
    window.location.hash = "#/practice";
  }

  if (arg) {
    return (
      // Remounting builds a fresh (reshuffled) run - on restart, and once
      // more when the stored progress finishes hydrating.
      <QuizHost
        key={`${arg}-${attempt}-${hydrated ? "h" : "s"}`}
        kind={arg}
        onExit={exit}
        onRestart={() => setAttempt((a) => a + 1)}
      />
    );
  }

  return <Picker go={go} state={state} hydrated={hydrated} start={start} />;
}

function QuizHost({ kind, onExit, onRestart }) {
  const { state, recordAnswer, toggleStar, finishRun } = useProgress();
  const [run] = useState(() => buildRun(kind, state));

  if (!run || run.items.length === 0) {
    return (
      <Empty
        icon="🗂️"
        title="Nothing in this set yet"
        sub="Answer or star some questions first, then come back."
        action={<Button onClick={onExit}>Back to practice</Button>}
      />
    );
  }

  return (
    <Quiz
      run={run}
      onExit={onExit}
      onRestart={onRestart}
      recordAnswer={recordAnswer}
      toggleStar={toggleStar}
      starred={state.starred}
      finishRun={finishRun}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Run builder                                                         */
/* ------------------------------------------------------------------ */

function buildRun(kind, state) {
  if (kind === "daily") {
    const unseen = QUESTIONS.filter((q) => !state.answered[q.id]);
    const pool = unseen.length >= 10 ? unseen : QUESTIONS;
    return {
      kind,
      label: "Today's ten",
      icon: "⚡",
      t: "blue",
      timed: false,
      items: shuffle(pool).slice(0, 10),
    };
  }
  if (kind === "mock") {
    return {
      kind,
      label: "Timed mock test",
      icon: "⏱️",
      t: "red",
      timed: true,
      seconds: 30 * 60,
      items: buildMock(30),
    };
  }
  if (kind === "rapid") {
    return {
      kind,
      label: "Rapid fire",
      icon: "🔥",
      t: "yellow",
      timed: true,
      perQuestion: 20,
      items: shuffle(QUESTIONS).slice(0, 20),
    };
  }
  if (kind === "starred") {
    const items = QUESTIONS.filter((q) => state.starred[q.id]);
    return { kind, label: "Starred questions", icon: "⭐", t: "yellow", timed: false, items };
  }
  if (kind === "missed") {
    const items = QUESTIONS.filter(
      (q) => state.answered[q.id] && !state.answered[q.id].ok
    );
    return { kind, label: "Questions you missed", icon: "🔁", t: "red", timed: false, items: shuffle(items) };
  }
  const d = DOMAIN_BY_ID[kind];
  if (d) {
    return {
      kind,
      label: d.label,
      icon: d.icon,
      t: d.tone,
      timed: false,
      items: shuffle(questionsFor(d.id)),
    };
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Picker                                                              */
/* ------------------------------------------------------------------ */

function Picker({ go, state, hydrated, start }) {
  const answered = Object.keys(state.answered);
  const starredCount = Object.keys(state.starred).length;
  const missedCount = answered.filter((id) => !state.answered[id].ok).length;

  const MODES = [
    {
      k: "daily",
      t: "blue",
      icon: "⚡",
      title: "Today's ten",
      body: "Ten questions pulled across every domain, weighted towards what you have not seen yet. The default warm-up.",
      meta: "10 questions · ~6 min",
      ok: true,
    },
    {
      k: "mock",
      t: "red",
      icon: "⏱️",
      title: "Timed mock test",
      body: "Thirty balanced questions under a thirty-minute clock, scored at the end with a per-domain breakdown.",
      meta: "30 questions · 30 min",
      ok: true,
    },
    {
      k: "rapid",
      t: "yellow",
      icon: "🔥",
      title: "Rapid fire",
      body: "Twenty seconds per question, twenty questions. Trains recall under pressure - which is what the round actually is.",
      meta: "20 questions · 20s each",
      ok: true,
    },
    {
      k: "missed",
      t: "green",
      icon: "🔁",
      title: "Redo what you missed",
      body: "Every question you have got wrong, reshuffled. The single highest-yield thing on this page.",
      meta: hydrated ? `${missedCount} question${missedCount === 1 ? "" : "s"}` : "0 questions",
      ok: missedCount > 0,
    },
  ];

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Practice"
        title="Practice questions"
        sub={`${TOTAL_QUESTIONS} MCQs written from the handbook - every one with the reasoning behind the right answer, not just the letter.`}
        right={
          starredCount > 0 ? (
            <Button variant="outlined" onClick={() => start("starred")}>
              ⭐ Starred ({starredCount})
            </Button>
          ) : null
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {MODES.map((m) => {
          const c = tone(m.t);
          return (
            <Card
              key={m.k}
              hover={m.ok}
              onClick={m.ok ? () => start(m.k) : undefined}
              className={`flex flex-col p-6 ${m.ok ? "" : "opacity-55"}`}
            >
              <div className={`grid h-12 w-12 place-items-center rounded-2xl text-[23px] ${c.soft}`}>
                {m.icon}
              </div>
              <h3 className="mt-4 text-[17px] font-semibold">{m.title}</h3>
              <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[var(--text-muted)]">
                {m.body}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11.5px] font-medium text-[var(--text-faint)]">
                  {m.meta}
                </span>
                {m.ok ? (
                  <span className={`text-[13px] font-semibold ${c.strong}`}>Start →</span>
                ) : (
                  <span className="text-[12px] text-[var(--text-faint)]">nothing yet</span>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <section>
        <SectionTitle eyebrow="By domain" title="Drill one area at a time" />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {DOMAINS.map((d) => {
            const c = tone(d.tone);
            const total = countFor(d.id);
            const seen = answered.filter((id) => QUESTION_DOMAIN[id] === d.id);
            const ok = seen.filter((id) => state.answered[id].ok).length;
            const pct = total ? Math.round((seen.length / total) * 100) : 0;
            return (
              <Card key={d.id} hover onClick={() => start(d.id)} className="p-5">
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[19px] ${c.soft}`}>
                    {d.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-[15px] font-semibold">{d.label}</h3>
                    <p className="text-[12px] text-[var(--text-faint)]">
                      {total} questions · {d.ref}
                    </p>
                  </div>
                  <Ring value={hydrated ? pct : 0} size={40} stroke={4} t={d.tone}>
                    <span className="text-[10px] font-bold">{hydrated ? pct : 0}</span>
                  </Ring>
                </div>
                <p className="mt-3 line-clamp-2 text-[12.5px] leading-snug text-[var(--text-muted)]">
                  {d.blurb}
                </p>
                {hydrated && seen.length ? (
                  <div className="mt-3 text-[11.5px] text-[var(--text-faint)]">
                    {ok} of {seen.length} correct so far
                  </div>
                ) : null}
              </Card>
            );
          })}
        </div>
      </section>

      {state.runs.length ? (
        <section>
          <SectionTitle eyebrow="History" title="Your recent runs" />
          <Card className="divide-y divide-[var(--border-soft)] p-0">
            {state.runs.slice(0, 8).map((r, i) => {
              const pct = Math.round((r.score / r.total) * 100);
              const t = pct >= 80 ? "green" : pct >= 55 ? "yellow" : "red";
              const c = tone(t);
              return (
                <div key={i} className="flex items-center gap-4 px-5 py-3.5">
                  <span className={`grid h-9 w-9 place-items-center rounded-xl text-[15px] ${c.soft}`}>
                    {r.icon || "🎯"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[14px] font-medium">{r.label}</div>
                    <div className="text-[11.5px] text-[var(--text-faint)]">
                      {new Date(r.ts).toLocaleString()}
                    </div>
                  </div>
                  <div className={`text-[15px] font-semibold ${c.strong}`}>
                    {r.score}/{r.total}
                  </div>
                </div>
              );
            })}
          </Card>
        </section>
      ) : null}

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">Two traps worth internalising</h3>
        <ul className="mt-3 space-y-2">
          {APTITUDE_TRAPS.map((t) => (
            <li key={t} className="flex gap-3 text-[13.5px] leading-relaxed text-[var(--text-muted)]">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--g-red-600)]" />
              {t}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Quiz                                                                */
/* ------------------------------------------------------------------ */

function Quiz({ run, onExit, onRestart, recordAnswer, toggleStar, starred, finishRun }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [log, setLog] = useState([]);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [done, setDone] = useState(false);
  const [left, setLeft] = useState(run.seconds || run.perQuestion || 0);

  const q = run.items[i];
  const c = tone(run.t);
  const answered = picked !== null;

  /* Timer */
  useEffect(() => {
    if (!run.timed || done) return;
    const id = setInterval(() => setLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [run.timed, done]);

  /* Time up */
  useEffect(() => {
    if (!run.timed || done || left > 0) return;
    if (run.perQuestion) {
      if (picked === null) choose(-1);
      else next();
    } else {
      finish();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [left]);

  /* Keyboard */
  useEffect(() => {
    function onKey(e) {
      if (done) return;
      const n = Number(e.key);
      if (n >= 1 && n <= q.o.length && picked === null) choose(n - 1);
      if ((e.key === "Enter" || e.key === " ") && picked !== null) {
        e.preventDefault();
        next();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picked, done, i]);

  function choose(idx) {
    if (picked !== null) return;
    const ok = idx === q.a;
    setPicked(idx);
    recordAnswer(q.id, ok);
    setLog((l) => [...l, { id: q.id, d: q.d, ok, picked: idx }]);
    setStreak((s) => {
      const ns = ok ? s + 1 : 0;
      setBest((b) => Math.max(b, ns));
      return ns;
    });
  }

  function next() {
    if (i + 1 >= run.items.length) finish();
    else {
      setI(i + 1);
      setPicked(null);
      if (run.perQuestion) setLeft(run.perQuestion);
    }
  }

  function finish() {
    const score = log.filter((l) => l.ok).length;
    setDone(true);
    finishRun({
      kind: run.kind,
      label: run.label,
      icon: run.icon,
      score,
      total: run.items.length,
      streak: best,
    });
  }

  if (done) {
    return (
      <Results
        run={run}
        log={log}
        best={best}
        onExit={onExit}
        onRestart={() => {
          onRestart();
          setI(0);
          setPicked(null);
          setLog([]);
          setStreak(0);
          setBest(0);
          setDone(false);
          setLeft(run.seconds || run.perQuestion || 0);
        }}
      />
    );
  }

  const domain = DOMAIN_BY_ID[q.d];
  const pct = Math.round((i / run.items.length) * 100);
  const lvlLabel = { 1: "Warm-up", 2: "Standard", 3: "Sharp end" }[q.lvl] || "Standard";

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium text-[var(--text-muted)] hover:bg-[var(--surface-2)]"
        >
          ← Exit
        </button>
        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[13px] font-semibold ${c.soft} ${c.ink}`}>
          <span>{run.icon}</span> {run.label}
        </span>
        <span className="text-[13px] text-[var(--text-faint)]">
          {i + 1} / {run.items.length}
        </span>

        <div className="ml-auto flex items-center gap-3">
          {streak >= 2 ? (
            <span className="anim-pop inline-flex items-center gap-1 rounded-full bg-[var(--g-yellow-50)] px-3 py-1.5 text-[13px] font-bold text-[var(--g-yellow-700)]">
              🔥 {streak}
            </span>
          ) : null}
          {run.timed ? (
            <span
              className={`rounded-full px-3 py-1.5 font-mono text-[13px] font-bold tabular-nums ${
                left <= 10
                  ? "bg-[var(--g-red-50)] text-[var(--g-red-600)] anim-blink"
                  : "bg-[var(--surface-2)] text-[var(--text-muted)]"
              }`}
            >
              {fmt(Math.max(0, left))}
            </span>
          ) : null}
        </div>
      </div>

      <Bar value={pct} t={run.t} className="mb-6" />

      {/* Question card */}
      <Card className="relative overflow-visible p-6 sm:p-8">
        <Confetti fire={picked !== null && picked === q.a} />

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Tag t={domain?.tone || "blue"}>
            {domain?.icon} {domain?.short || "Question"}
          </Tag>
          <Tag t={q.lvl === 3 ? "red" : q.lvl === 2 ? "yellow" : "green"}>{lvlLabel}</Tag>
          {q.topic ? <Tag t="purple">{q.topic}</Tag> : null}
          <button
            onClick={() => toggleStar(q.id)}
            className="ml-auto rounded-full px-2 py-1 text-[16px] transition-transform g-press hover:scale-110"
            title={starred[q.id] ? "Remove star" : "Star for later"}
          >
            {starred[q.id] ? "⭐" : "☆"}
          </button>
        </div>

        <h2 className="text-[19px] font-semibold leading-snug text-balance sm:text-[21px]">
          {q.q}
        </h2>

        <div className="mt-6 space-y-2.5">
          {q.o.map((opt, idx) => {
            const isRight = idx === q.a;
            const isPicked = idx === picked;
            let cls =
              "border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)]";
            if (answered && isRight)
              cls = "border-[var(--g-green-600)] bg-[var(--g-green-50)]";
            else if (answered && isPicked)
              cls = "border-[var(--g-red-600)] bg-[var(--g-red-50)] anim-shake";
            else if (answered) cls = "border-[var(--border-soft)] opacity-55";

            return (
              <button
                key={idx}
                disabled={answered}
                onClick={() => choose(idx)}
                className={`flex w-full items-start gap-3.5 rounded-2xl border-2 px-4 py-3.5 text-left transition-all g-press disabled:cursor-default ${cls}`}
              >
                <span
                  className={`mt-px grid h-7 w-7 shrink-0 place-items-center rounded-full text-[12px] font-bold ${
                    answered && isRight
                      ? "bg-[var(--g-green-600)] text-white"
                      : answered && isPicked
                        ? "bg-[var(--g-red-600)] text-white"
                        : "bg-[var(--surface-3)] text-[var(--text-muted)]"
                  }`}
                >
                  {answered && isRight ? "✓" : answered && isPicked ? "✕" : LETTERS[idx]}
                </span>
                <span className="flex-1 text-[14.5px] leading-relaxed">{opt}</span>
              </button>
            );
          })}
        </div>

        {answered ? (
          <div className="anim-rise mt-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-2)] p-5">
            <div className="flex items-center gap-2">
              <span className="text-[17px]">{picked === q.a ? "🎉" : "📌"}</span>
              <span
                className={`text-[13px] font-bold uppercase tracking-[0.1em] ${
                  picked === q.a
                    ? "text-[var(--g-green-600)]"
                    : "text-[var(--g-red-600)]"
                }`}
              >
                {picked === q.a
                  ? streak >= 3
                    ? `Correct - ${streak} in a row`
                    : "Correct"
                  : picked === -1
                    ? "Time up"
                    : "Not quite"}
              </span>
            </div>
            {picked !== q.a ? (
              <p className="mt-2 text-[14px] font-medium">
                The answer is <strong>{LETTERS[q.a]}</strong> - {q.o[q.a]}
              </p>
            ) : null}
            <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-muted)]">{q.e}</p>
          </div>
        ) : null}

        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="hidden text-[12px] text-[var(--text-faint)] sm:block">
            {answered ? "Press Enter for the next one" : "Press 1-4 to answer"}
          </span>
          <div className="ml-auto flex gap-2">
            {!answered ? (
              <Button variant="ghost" onClick={() => choose(-1)}>
                Skip
              </Button>
            ) : null}
            <Button onClick={answered ? next : undefined} disabled={!answered}>
              {i + 1 >= run.items.length ? "Finish" : "Next"} →
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Results                                                             */
/* ------------------------------------------------------------------ */

function Results({ run, log, best, onExit, onRestart }) {
  const score = log.filter((l) => l.ok).length;
  const total = run.items.length;
  const pct = total ? Math.round((score / total) * 100) : 0;
  const t = pct >= 80 ? "green" : pct >= 55 ? "yellow" : "red";
  const c = tone(t);

  const verdict =
    pct >= 90
      ? { icon: "🏆", head: "That is interview-ready.", body: "Now do it out loud. Recognition is not recall - the round is spoken, not written." }
      : pct >= 75
        ? { icon: "🎯", head: "Solid.", body: "Read the explanations on the ones you missed, then come back to this set tomorrow rather than today." }
        : pct >= 50
          ? { icon: "📈", head: "Halfway there.", body: "The gap is usually one or two domains, not everything. Look at the breakdown below and drill the weakest one." }
          : { icon: "🌱", head: "Early days - that is fine.", body: "Read the study module for the weakest domain first, then come back. Practising before reading burns questions." };

  const byDomain = {};
  for (const l of log) {
    const d = l.d;
    byDomain[d] = byDomain[d] || { ok: 0, n: 0 };
    byDomain[d].n += 1;
    if (l.ok) byDomain[d].ok += 1;
  }

  const wrong = log
    .map((l, idx) => ({ ...l, q: run.items[idx] }))
    .filter((l) => !l.ok);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Card className="relative overflow-hidden p-8 text-center">
        <Confetti fire={pct >= 75} />
        <div className="mx-auto w-fit">
          <Ring value={pct} size={140} stroke={11} t={t}>
            <div>
              <div className={`text-[36px] font-semibold leading-none ${c.strong}`}>{pct}%</div>
              <div className="mt-1 text-[12px] text-[var(--text-faint)]">
                {score} of {total}
              </div>
            </div>
          </Ring>
        </div>
        <div className="mt-5 text-[30px]">{verdict.icon}</div>
        <h2 className="mt-1 text-[24px] font-semibold tracking-tight">{verdict.head}</h2>
        <p className="mx-auto mt-2 max-w-md text-[14.5px] leading-relaxed text-[var(--text-muted)]">
          {verdict.body}
        </p>
        {best >= 3 ? (
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--g-yellow-50)] px-3 py-1.5 text-[13px] font-semibold text-[var(--g-yellow-700)]">
            🔥 Best streak this run: {best}
          </p>
        ) : null}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button onClick={onRestart}>Run it again</Button>
          <Button variant="outlined" onClick={onExit}>
            Back to practice
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">Breakdown by domain</h3>
        <div className="mt-4 space-y-4">
          {Object.entries(byDomain)
            .sort((a, b) => a[1].ok / a[1].n - b[1].ok / b[1].n)
            .map(([id, v]) => {
              const d = DOMAIN_BY_ID[id];
              const p = Math.round((v.ok / v.n) * 100);
              return (
                <div key={id}>
                  <div className="mb-1.5 flex items-center justify-between text-[13px]">
                    <span className="font-medium">
                      {d?.icon} {d?.label || id}
                    </span>
                    <span className="text-[var(--text-faint)]">
                      {v.ok}/{v.n}
                    </span>
                  </div>
                  <Bar value={p} t={p >= 75 ? "green" : p >= 50 ? "yellow" : "red"} />
                </div>
              );
            })}
        </div>
      </Card>

      {wrong.length ? (
        <Card className="p-6">
          <h3 className="text-[15px] font-semibold">
            Review - {wrong.length} to revisit
          </h3>
          <div className="mt-4 space-y-4">
            {wrong.map((w) => (
              <div
                key={w.id}
                className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-2)] p-4"
              >
                <p className="text-[14px] font-medium leading-snug">{w.q.q}</p>
                <p className="mt-2 text-[13.5px] text-[var(--g-green-700)]">
                  ✓ {w.q.o[w.q.a]}
                </p>
                {w.picked >= 0 ? (
                  <p className="mt-1 text-[13.5px] text-[var(--g-red-600)] line-through opacity-75">
                    ✕ {w.q.o[w.picked]}
                  </p>
                ) : (
                  <p className="mt-1 text-[13px] italic text-[var(--text-faint)]">
                    skipped / timed out
                  </p>
                )}
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-muted)]">
                  {w.q.e}
                </p>
              </div>
            ))}
          </div>
        </Card>
      ) : (
        <Empty icon="✨" title="Nothing to review" sub="You got every one of them. Go and say the reasoning out loud." />
      )}
    </div>
  );
}

function fmt(s) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return m > 0 ? `${m}:${String(r).padStart(2, "0")}` : `0:${String(r).padStart(2, "0")}`;
}
