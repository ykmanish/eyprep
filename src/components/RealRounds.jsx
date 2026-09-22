"use client";

import { useState } from "react";
import {
  ROUNDS,
  ROUNDS_HEADLINE,
  ROUNDS_PREP_ORDER,
  ROUNDS_SOURCE,
} from "@/data/actualRounds";
import { Button, Card, Chip, Tag, Callout, tone, SectionTitle } from "./ui";

const WEIGHT = {
  highest: { t: "red", label: "Prepare first" },
  high: { t: "yellow", label: "High weight" },
  medium: { t: "blue", label: "Standard" },
  low: { t: "green", label: "Quick win" },
};

export default function RealRounds({ go, arg }) {
  const [openRound, setOpenRound] = useState(() =>
    ROUNDS.some((r) => r.id === arg) ? arg : "r1"
  );
  const [open, setOpen] = useState(null);

  const round = ROUNDS.find((r) => r.id === openRound) || ROUNDS[0];

  return (
    <div className="mx-auto max-w-4xl space-y-7">
      <SectionTitle
        eyebrow="What was actually asked"
        title="The real rounds"
        sub="These are the questions reported from a recent EY interview for this role, passed on by a senior. Everything else here is a prediction. This is the paper."
      />

      {/* Headline stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {ROUNDS_HEADLINE.map((h) => {
          const c = tone(h.tone);
          return (
            <Card key={h.label} className="flex flex-col p-5">
              <div className={`text-[30px] font-semibold leading-none ${c.strong}`}>
                {h.stat}
              </div>
              <div className="mt-1.5 text-[14px] font-semibold">{h.label}</div>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[var(--text-muted)]">
                {h.detail}
              </p>
              {h.go ? (
                <Button
                  size="sm"
                  variant="tonal"
                  className="mt-4 self-start"
                  onClick={() => go(h.go[0], h.go[1])}
                >
                  {h.cta}
                </Button>
              ) : null}
            </Card>
          );
        })}
      </div>

      <Callout kind="trap" title="Read this before you use the list">
        {ROUNDS_SOURCE} Do not walk in expecting these exact words. Panels vary, and a candidate
        reciting a prepared answer to a question that was not quite asked is obvious from the
        first clause.
      </Callout>

      {/* Round switch */}
      <div className="flex flex-wrap gap-2">
        {ROUNDS.map((r) => (
          <Chip
            key={r.id}
            t={r.tone}
            active={openRound === r.id}
            onClick={() => {
              setOpenRound(r.id);
              setOpen(null);
            }}
          >
            <span>{r.icon}</span> {r.n}: {r.subtitle}
          </Chip>
        ))}
      </div>

      <div key={round.id} className="anim-fade space-y-3">
        <div className={`rounded-2xl ${tone(round.tone).soft} px-5 py-4`}>
          <div className={`text-[11px] font-bold uppercase tracking-[0.12em] ${tone(round.tone).strong}`}>
            {round.n} · {round.subtitle}
          </div>
          <p className={`mt-1 text-[14px] leading-relaxed ${tone(round.tone).ink}`}>
            {round.note}
          </p>
        </div>

        {round.questions.map((q) => {
          const meta = WEIGHT[q.weight] || WEIGHT.medium;
          const c = tone(q.tone);
          const isOpen = open === q.id;
          return (
            <Card key={q.id} className="overflow-hidden p-0">
              <button
                onClick={() => setOpen(isOpen ? null : q.id)}
                className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--surface-2)]"
              >
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[14px] font-bold ${c.soft} ${c.strong}`}
                >
                  {q.n}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <Tag t={meta.t}>{meta.label}</Tag>
                    {q.tag ? <Tag t="purple">{q.tag}</Tag> : null}
                  </span>
                  <span className="mt-1.5 block text-[16px] font-semibold leading-snug">
                    {q.topic}
                  </span>
                  <span className="mt-1 block text-[13px] italic leading-snug text-[var(--text-muted)]">
                    &ldquo;{q.verbatim}&rdquo;
                  </span>
                </span>
                <span
                  className={`shrink-0 text-[var(--text-faint)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>

              {isOpen ? (
                <div className="anim-rise space-y-4 border-t border-[var(--border-soft)] px-5 py-5">
                  {q.why ? (
                    <div className={`rounded-2xl ${c.soft} px-4 py-3.5`}>
                      <div className={`text-[10.5px] font-bold uppercase tracking-wider ${c.strong}`}>
                        Why they ask it
                      </div>
                      <p className={`mt-1.5 text-[14px] leading-relaxed ${c.ink}`}>{q.why}</p>
                    </div>
                  ) : null}

                  {q.answer ? <AnswerBlock paras={q.answer} /> : null}

                  {q.points?.length ? (
                    <div>
                      <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--text-faint)]">
                        Have these ready
                      </div>
                      <ul className="mt-2 space-y-2">
                        {q.points.map((p) => (
                          <li key={p} className="flex gap-2.5">
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                            <span className="text-[13.5px] leading-relaxed text-[var(--text-muted)]">
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {q.traps?.length ? (
                    <div className="rounded-2xl bg-[var(--g-red-50)] px-4 py-3.5">
                      <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--g-red-600)]">
                        Trap
                      </div>
                      <ul className="mt-1.5 space-y-1.5">
                        {q.traps.map((t) => (
                          <li key={t} className="text-[13.5px] leading-relaxed text-[var(--g-red-700)]">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {q.go ? (
                    <Button size="sm" variant="outlined" onClick={() => go(q.go[0], q.go[1])}>
                      {q.goLabel} →
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>

      {/* Prep order */}
      <section>
        <SectionTitle
          eyebrow="Given this paper"
          title="Prepare in this order"
          sub="Weighted by how much of the two rounds each topic actually accounts for."
        />
        <Card className="divide-y divide-[var(--border-soft)] p-0">
          {ROUNDS_PREP_ORDER.map((p) => (
            <button
              key={p.n}
              onClick={() => go(p.go[0], p.go[1])}
              className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--surface-2)]"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--primary-soft)] text-[13px] font-bold text-[var(--primary-on-soft)]">
                {p.n}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold">{p.title}</span>
                <span className="mt-0.5 block text-[13px] leading-relaxed text-[var(--text-muted)]">
                  {p.detail}
                </span>
              </span>
              <span className="shrink-0 pt-1 text-[var(--text-faint)]">→</span>
            </button>
          ))}
        </Card>
      </section>

      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">Drill exactly these topics</h3>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--text-muted)]">
          36 questions built from this paper, weighted to the parts the rest of this app covers
          least: the VAPT lifecycle, Windows forensic artefacts, threat intelligence in practice,
          and cryptocurrency.
        </p>
        <Button className="mt-4" onClick={() => go("practice", "rounds")}>
          Start the reported topics set
        </Button>
      </Card>
    </div>
  );
}

function AnswerBlock({ paras }) {
  const [show, setShow] = useState(false);
  if (!show) {
    return (
      <div className="rounded-2xl bg-[var(--surface-2)] px-4 py-3.5">
        <p className="text-[13.5px] text-[var(--text-muted)]">
          Answer it out loud first. The round is spoken, not written.
        </p>
        <Button size="sm" variant="tonal" className="mt-3" onClick={() => setShow(true)}>
          Reveal the model answer
        </Button>
      </div>
    );
  }
  return (
    <div className="anim-rise">
      <div className="space-y-3.5 border-l-[3px] border-[var(--primary)] pl-4">
        {paras.map((p, i) => (
          <p key={i} className="text-[14.5px] leading-[1.75] text-[var(--text-muted)] text-pretty">
            {p}
          </p>
        ))}
      </div>
      <Button size="sm" variant="ghost" className="mt-3" onClick={() => setShow(false)}>
        Hide
      </Button>
    </div>
  );
}
