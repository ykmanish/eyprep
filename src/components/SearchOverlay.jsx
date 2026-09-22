"use client";

import { useEffect, useRef, useState } from "react";
import { ALL_SECTIONS } from "@/data/modules";
import { QUESTIONS, DOMAIN_BY_ID } from "@/data/questions";
import { ACRONYMS, FLASHCARD_GROUPS } from "@/data/reference";
import { SCENARIOS, HR_QUESTIONS } from "@/data/interview";
import { RESUME_PROBES, DEEP_DIVES } from "@/data/resume";
import { tone } from "./ui";

const INDEX = [
  ...ALL_SECTIONS.map((s) => ({
    kind: "Study",
    icon: s.icon,
    t: s.tone,
    title: `${s.id} ${s.title}`,
    sub: s.partTitle,
    view: "learn",
    arg: s.partId,
  })),
  ...QUESTIONS.map((q) => ({
    kind: "Question",
    icon: DOMAIN_BY_ID[q.d]?.icon || "🎯",
    t: DOMAIN_BY_ID[q.d]?.tone || "blue",
    title: q.q,
    sub: DOMAIN_BY_ID[q.d]?.label || "",
    view: "practice",
    arg: q.d,
  })),
  ...ACRONYMS.map(([a, full]) => ({
    kind: "Acronym",
    icon: "🔤",
    t: "purple",
    title: a,
    sub: full,
    view: "kit",
    arg: "acronyms",
  })),
  ...FLASHCARD_GROUPS.flatMap((g) =>
    g.cards.map(([front, back]) => ({
      kind: "Flashcard",
      icon: "🃏",
      t: g.tone,
      title: front,
      sub: back,
      view: "cards",
      arg: g.id,
    }))
  ),
  ...SCENARIOS.map((s) => ({
    kind: "Scenario",
    icon: "🎭",
    t: s.tone,
    title: s.q,
    sub: s.tag,
    view: "lab",
    arg: "scenarios",
  })),
  ...HR_QUESTIONS.map((h) => ({
    kind: "HR question",
    icon: "🤝",
    t: "green",
    title: h.q,
    sub: h.g,
    view: "lab",
    arg: "hr",
  })),
  ...RESUME_PROBES.flatMap((p) =>
    p.asks.map((a) => ({
      kind: "Resume probe",
      icon: "📄",
      t: p.tone,
      title: a,
      sub: `${p.section}: ${p.line}`,
      view: "resume",
      arg: "probes",
    }))
  ),
  ...DEEP_DIVES.flatMap((d) =>
    d.followups.map((f) => ({
      kind: "Deep dive",
      icon: d.icon,
      t: d.tone,
      title: f.q,
      sub: d.title,
      view: "resume",
      arg: "deep",
    }))
  ),
];

function score(item, needle) {
  const title = item.title.toLowerCase();
  const sub = (item.sub || "").toLowerCase();
  if (title.startsWith(needle)) return 0;
  const ti = title.indexOf(needle);
  if (ti >= 0) return 1 + ti / 400;
  const si = sub.indexOf(needle);
  if (si >= 0) return 3 + si / 400;
  return Infinity;
}

export default function SearchOverlay({ go, onClose }) {
  const [q, setQ] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const needle = q.trim().toLowerCase();
  const results = needle.length < 2
    ? []
    : INDEX.map((item) => ({ item, s: score(item, needle) }))
        .filter((r) => r.s !== Infinity)
        .sort((a, b) => a.s - b.s)
        .slice(0, 24)
        .map((r) => r.item);

  function open(item) {
    go(item.view, item.arg);
    onClose();
  }

  function onKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(results.length - 1, c + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(0, c - 1));
    } else if (e.key === "Enter" && results[cursor]) {
      e.preventDefault();
      open(results[cursor]);
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 px-4 pt-[8vh] backdrop-blur-sm">
      <button aria-label="Close search" className="absolute inset-0" onClick={onClose} />
      <div className="anim-pop relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[var(--surface)] g-elev-3">
        <div className="flex items-center gap-3 border-b border-[var(--border-soft)] px-5 py-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[var(--text-faint)]">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setCursor(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Search everything - RTO, CUEC, joiner-mover-leaver, DPDP…"
            className="min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-[var(--text-faint)]"
          />
          <button
            onClick={onClose}
            className="rounded-full px-2 py-1 text-[11px] font-medium text-[var(--text-faint)] hover:bg-[var(--surface-2)]"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[56vh] overflow-y-auto p-2">
          {needle.length < 2 ? (
            <div className="px-4 py-10 text-center text-sm text-[var(--text-faint)]">
              Type at least two characters. Searches {INDEX.length.toLocaleString()} study
              sections, questions, flashcards, scenarios and acronyms.
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-10 text-center text-sm text-[var(--text-faint)]">
              Nothing matched “{q}”.
            </div>
          ) : (
            results.map((item, i) => {
              const c = tone(item.t);
              return (
                <button
                  key={`${item.kind}-${i}-${item.title.slice(0, 24)}`}
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => open(item)}
                  className={`flex w-full items-start gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors ${
                    i === cursor ? "bg-[var(--surface-2)]" : ""
                  }`}
                >
                  <span
                    className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[15px] ${c.soft}`}
                  >
                    {item.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[14px] font-medium">{item.title}</span>
                    {item.sub ? (
                      <span className="block truncate text-[12.5px] text-[var(--text-faint)]">
                        {item.sub}
                      </span>
                    ) : null}
                  </span>
                  <span className={`mt-1 shrink-0 text-[10px] font-bold uppercase tracking-wider ${c.strong}`}>
                    {item.kind}
                  </span>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
