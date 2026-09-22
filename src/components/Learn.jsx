"use client";

import { useState } from "react";
import { useProgress } from "@/lib/store";
import { PARTS } from "@/data/modules";
import { Button, Card, Callout, Tag, Bar, tone, SectionTitle } from "./ui";

export default function Learn({ go, arg }) {
  const { state, hydrated, markSection } = useProgress();
  const part = PARTS.find((p) => p.id === arg);

  if (!part) {
    return <PartIndex state={state} hydrated={hydrated} go={go} />;
  }

  return (
    <PartReader
      key={part.id}
      part={part}
      state={state}
      hydrated={hydrated}
      markSection={markSection}
      onBack={() => go("learn")}
      onNext={() => {
        const i = PARTS.findIndex((p) => p.id === part.id);
        const n = PARTS[i + 1];
        if (n) go("learn", n.id);
        else go("practice");
      }}
    />
  );
}

/* ------------------------------------------------------------------ */

function PartIndex({ state, hydrated, go }) {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Study"
        title="The handbook, restructured"
        sub="Read a section, then go and answer questions on it - that pairing is what actually moves recall. Each section marks itself read when you finish it."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {PARTS.map((p) => {
          const c = tone(p.tone);
          const done = p.sections.filter((s) => state.sections[s.id]).length;
          const pct = Math.round((done / p.sections.length) * 100);
          const mins = p.sections.reduce((n, s) => n + (s.minutes || 0), 0);
          return (
            <Card key={p.id} hover onClick={() => go("learn", p.id)} className="p-6">
              <div className="flex items-start gap-4">
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-[26px] ${c.soft}`}>
                  {p.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-[11px] font-bold ${c.strong}`}>
                      PART {p.n}
                    </span>
                    <span className="text-[11px] text-[var(--text-faint)]">
                      {p.sections.length} sections · ~{mins} min
                    </span>
                  </div>
                  <h3 className="mt-1 text-[19px] font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-0.5 text-[13px] text-[var(--text-muted)]">{p.subtitle}</p>
                </div>
              </div>

              <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--text-muted)] text-pretty">
                {p.blurb}
              </p>

              <div className="mt-5">
                <Bar value={hydrated ? pct : 0} t={p.tone} />
                <div className="mt-2 flex items-center justify-between text-[11.5px]">
                  <span className="text-[var(--text-faint)]">
                    {hydrated ? done : 0} of {p.sections.length} read
                  </span>
                  <span className={`font-semibold ${c.strong}`}>Open →</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function PartReader({ part, state, hydrated, markSection, onBack, onNext }) {
  const [active, setActive] = useState(part.sections[0].id);
  const c = tone(part.tone);
  const section = part.sections.find((s) => s.id === active) || part.sections[0];
  const idx = part.sections.findIndex((s) => s.id === section.id);
  const read = Boolean(state.sections[section.id]);

  function goSection(id) {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
      {/* Section list */}
      <aside className="lg:sticky lg:top-[92px] lg:self-start">
        <button
          onClick={onBack}
          className="mb-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium text-[var(--text-muted)] hover:bg-[var(--surface-2)]"
        >
          ← All parts
        </button>
        <div className={`rounded-2xl ${c.soft} p-4`}>
          <div className={`font-mono text-[11px] font-bold ${c.strong}`}>PART {part.n}</div>
          <div className={`mt-1 text-[17px] font-semibold ${c.ink}`}>{part.title}</div>
        </div>
        <ul className="mt-3 space-y-1">
          {part.sections.map((s) => {
            const on = s.id === section.id;
            const done = Boolean(state.sections[s.id]);
            return (
              <li key={s.id}>
                <button
                  onClick={() => goSection(s.id)}
                  className={`flex w-full items-start gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13.5px] leading-snug transition-colors ${
                    on
                      ? "bg-[var(--primary-soft)] font-semibold text-[var(--primary-on-soft)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface-2)]"
                  }`}
                >
                  <span
                    className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[9px] ${
                      hydrated && done
                        ? "bg-[var(--g-green-600)] text-white"
                        : "border border-[var(--border)]"
                    }`}
                  >
                    {hydrated && done ? "✓" : ""}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="font-mono text-[11px] opacity-60">{s.id}</span>{" "}
                    {s.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Content */}
      <article key={section.id} className="anim-rise min-w-0 max-w-3xl">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Tag t={part.tone}>
            {part.icon} Part {part.n} · {part.title}
          </Tag>
          {section.minutes ? (
            <span className="text-[12px] text-[var(--text-faint)]">
              ~{section.minutes} min read
            </span>
          ) : null}
        </div>

        <h1 className="text-[30px] font-semibold leading-tight tracking-tight text-balance sm:text-[34px]">
          <span className={`font-mono text-[20px] ${c.strong}`}>{section.id}</span>{" "}
          {section.title}
        </h1>

        {section.chips?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {section.chips.map((ch) => (
              <span
                key={ch}
                className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[11.5px] text-[var(--text-muted)]"
              >
                {ch}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-7 space-y-1">
          {section.blocks.map((b, i) => (
            <Block key={i} b={b} t={part.tone} />
          ))}
        </div>

        {/* Footer controls */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-[var(--border-soft)] pt-6">
          <Button
            variant={read ? "outlined" : "filled"}
            onClick={() => {
              markSection(section.id);
              const n = part.sections[idx + 1];
              if (n) goSection(n.id);
              else onNext();
            }}
          >
            {read ? "✓ Read" : "Mark as read"} · {idx + 1 < part.sections.length ? "next section" : "next part"} →
          </Button>
          {idx > 0 ? (
            <Button variant="ghost" onClick={() => goSection(part.sections[idx - 1].id)}>
              ← Previous
            </Button>
          ) : null}
          <span className="ml-auto text-[12.5px] text-[var(--text-faint)]">
            Section {idx + 1} of {part.sections.length}
          </span>
        </div>
      </article>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Block renderer                                                      */
/* ------------------------------------------------------------------ */

function Block({ b, t }) {
  const c = tone(t);

  switch (b.type) {
    case "p":
      return (
        <p className="my-4 text-[15.5px] leading-[1.75] text-[var(--text-muted)] text-pretty">
          {b.text}
        </p>
      );

    case "h":
      return (
        <h2 className="mb-3 mt-9 text-[19px] font-semibold tracking-tight">{b.text}</h2>
      );

    case "list":
      return (
        <ul className="my-4 space-y-2.5">
          {b.items.map((x, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
              <span className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} />
              <span className="text-pretty">{x}</span>
            </li>
          ))}
        </ul>
      );

    case "num":
      return (
        <ol className="my-5 space-y-3">
          {b.items.map((x, i) => (
            <li key={i} className="flex gap-3.5">
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-bold ${c.soft} ${c.strong}`}
              >
                {i + 1}
              </span>
              <span className="flex-1 pt-0.5 text-[15px] leading-relaxed text-[var(--text-muted)] text-pretty">
                {x}
              </span>
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <div className="my-6 overflow-x-auto rounded-2xl border border-[var(--border-soft)]">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="bg-[var(--surface-2)]">
                {b.head.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider text-[var(--text-faint)]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i} className="border-t border-[var(--border-soft)] align-top">
                  {r.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3.5 text-[13.5px] leading-relaxed ${
                        j === 0
                          ? "font-medium text-[var(--text)]"
                          : "text-[var(--text-muted)]"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "kv":
      return (
        <dl className="my-6 divide-y divide-[var(--border-soft)] overflow-hidden rounded-2xl border border-[var(--border-soft)]">
          {b.items.map(([k, v], i) => (
            <div key={i} className="grid gap-1 px-4 py-3.5 sm:grid-cols-[minmax(150px,220px)_1fr] sm:gap-5">
              <dt className="text-[13.5px] font-semibold">{k}</dt>
              <dd className="text-[13.5px] leading-relaxed text-[var(--text-muted)] text-pretty">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      );

    case "ports":
      return (
        <div className="my-6 grid gap-2 sm:grid-cols-2">
          {b.items.map(([port, what], i) => (
            <div
              key={i}
              className="flex items-baseline gap-3 rounded-xl bg-[var(--surface-2)] px-3.5 py-2.5"
            >
              <span className="shrink-0 font-mono text-[13px] font-bold text-[var(--primary)]">
                {port}
              </span>
              <span className="text-[13px] leading-snug text-[var(--text-muted)]">{what}</span>
            </div>
          ))}
        </div>
      );

    case "formula":
      return (
        <pre className="my-6 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-2)] px-5 py-4 font-mono text-[13px] leading-[1.9] text-[var(--text)]">
          {b.text}
        </pre>
      );

    case "box":
      return (
        <Callout kind={b.kind} title={b.title}>
          {b.text}
        </Callout>
      );

    case "twocol":
      return (
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          {[b.left, b.right].map((col, i) => {
            const cc = tone(i === 0 ? "green" : "red");
            return (
              <div key={i} className={`rounded-2xl border ${cc.border} ${cc.soft} p-5`}>
                <h4 className={`text-[14px] font-bold ${cc.ink}`}>{col.title}</h4>
                <ul className="mt-3 space-y-2">
                  {col.items.map((x, j) => (
                    <li key={j} className={`flex gap-2.5 text-[13.5px] leading-relaxed ${cc.ink} opacity-85`}>
                      <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${cc.dot}`} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      );

    case "beforeafter":
      return (
        <div className="my-6 space-y-3">
          {b.items.map((x, i) => (
            <div
              key={i}
              className="grid gap-3 rounded-2xl border border-[var(--border-soft)] p-4 sm:grid-cols-2"
            >
              <div className="rounded-xl bg-[var(--g-red-50)] p-3.5">
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--g-red-600)]">
                  Before
                </div>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--g-red-700)]">
                  {x.before}
                </p>
              </div>
              <div className="rounded-xl bg-[var(--g-green-50)] p-3.5">
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--g-green-600)]">
                  After
                </div>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--g-green-700)]">
                  {x.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      );

    case "q":
      return <QuestionBlock b={b} />;

    default:
      return null;
  }
}

function QuestionBlock({ b }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-7 overflow-hidden rounded-2xl border-2 border-[var(--border-soft)]">
      <div className="bg-[var(--surface-2)] px-5 py-4">
        <div className="flex items-start gap-3">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--g-grey-900)] text-[12px] font-bold text-white">
            Q
          </span>
          <p className="flex-1 pt-0.5 text-[15.5px] font-semibold leading-snug">{b.q}</p>
        </div>
        {!open ? (
          <div className="mt-4 pl-10">
            <p className="text-[13px] italic text-[var(--text-faint)]">
              Say your answer out loud first - then reveal the model.
            </p>
            <Button size="sm" variant="tonal" className="mt-3" onClick={() => setOpen(true)}>
              Reveal model answer
            </Button>
          </div>
        ) : null}
      </div>

      {open ? (
        <div className="anim-rise px-5 py-5">
          <div className="space-y-3.5 border-l-[3px] border-[var(--primary)] pl-4">
            {b.a.map((para, i) => (
              <p key={i} className="text-[14.5px] leading-[1.75] text-[var(--text-muted)] text-pretty">
                {para}
              </p>
            ))}
          </div>
          {b.why ? (
            <div className="mt-5 rounded-xl bg-[var(--g-green-50)] px-4 py-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--g-green-600)]">
                Why this works
              </span>
              <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--g-green-700)]">
                {b.why}
              </p>
            </div>
          ) : null}
          <Button size="sm" variant="ghost" className="mt-4" onClick={() => setOpen(false)}>
            Hide
          </Button>
        </div>
      ) : null}
    </div>
  );
}
