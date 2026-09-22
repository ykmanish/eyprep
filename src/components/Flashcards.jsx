"use client";

import { useEffect, useState } from "react";
import { useProgress } from "@/lib/store";
import { FLASHCARD_GROUPS } from "@/data/reference";
import { Button, Card, Chip, Ring, Bar, tone, SectionTitle, Empty } from "./ui";

const ALL = FLASHCARD_GROUPS.flatMap((g) =>
  g.cards.map(([front, back], i) => ({ key: `${g.id}-${i}`, front, back, group: g.id, tone: g.tone }))
);

/* A seeded shuffle so the deck order stays stable across re-renders - 
   a new seed is what reshuffles it. */
function seededShuffle(list, seed) {
  if (!seed) return list;
  let s = seed >>> 0;
  const rand = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = list.slice();
  for (let k = out.length - 1; k > 0; k--) {
    const j = Math.floor(rand() * (k + 1));
    [out[k], out[j]] = [out[j], out[k]];
  }
  return out;
}

export default function Flashcards() {
  const { state, hydrated, markCard } = useProgress();
  const [group, setGroup] = useState("all");
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [onlyUnknown, setOnlyUnknown] = useState(false);
  const [seed, setSeed] = useState(0);

  const pool = group === "all" ? ALL : ALL.filter((c) => c.group === group);
  const filtered = onlyUnknown ? pool.filter((c) => state.cards[c.key] !== "known") : pool;
  const deck = seededShuffle(filtered, seed);
  const idx = deck.length ? Math.min(i, deck.length - 1) : 0;
  const card = deck[idx];

  function rewind() {
    setI(0);
    setFlipped(false);
  }
  function pickGroup(g) {
    setGroup(g);
    rewind();
  }
  function advance() {
    setFlipped(false);
    setI(idx + 1 >= deck.length ? 0 : idx + 1);
  }
  function back() {
    setFlipped(false);
    setI(idx - 1 < 0 ? Math.max(0, deck.length - 1) : idx - 1);
  }
  function verdict(v) {
    if (!card) return;
    markCard(card.key, v);
    advance();
  }
  function shuffleDeck() {
    setSeed(Date.now() >>> 0);
    rewind();
  }

  useEffect(() => {
    function onKey(e) {
      if (!card) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
      if (e.key === "ArrowRight") advance();
      if (e.key === "ArrowLeft") back();
      if (flipped && (e.key === "1" || e.key.toLowerCase() === "a")) verdict("again");
      if (flipped && (e.key === "2" || e.key.toLowerCase() === "k")) verdict("known");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card, flipped, idx, deck.length]);

  const knownCount = hydrated
    ? deck.filter((c) => state.cards[c.key] === "known").length
    : 0;
  const pct = deck.length ? Math.round((knownCount / deck.length) * 100) : 0;
  const c = tone(card?.tone || "blue");

  return (
    <div className="mx-auto max-w-4xl space-y-7">
      <SectionTitle
        eyebrow="Rapid revision"
        title="Flashcards"
        sub={`${ALL.length} cards from the rapid-fire bank. Answer each aloud in one or two sentences before you flip. If you cannot, go back to the study module.`}
      />

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2">
        <Chip active={group === "all"} onClick={() => pickGroup("all")}>
          All {ALL.length}
        </Chip>
        {FLASHCARD_GROUPS.map((g) => (
          <Chip key={g.id} t={g.tone} active={group === g.id} onClick={() => pickGroup(g.id)}>
            {g.label} · {g.cards.length}
          </Chip>
        ))}
        <div className="ml-auto flex gap-2">
          <Chip
            active={onlyUnknown}
            t="red"
            onClick={() => {
              setOnlyUnknown((v) => !v);
              rewind();
            }}
          >
            {onlyUnknown ? "✓ " : ""}Hide cards I know
          </Chip>
          <Chip onClick={shuffleDeck}>🔀 Shuffle</Chip>
        </div>
      </div>

      {!card ? (
        <Empty
          icon="🎉"
          title="Nothing left in this pile"
          sub="You have marked every card here as known. Turn off the filter to run them again."
          action={<Button onClick={() => setOnlyUnknown(false)}>Show all cards</Button>}
        />
      ) : (
        <>
          {/* Progress strip */}
          <div className="flex items-center gap-4">
            <Ring value={pct} size={52} stroke={5} t={card.tone}>
              <span className="text-[11px] font-bold">{pct}%</span>
            </Ring>
            <div className="min-w-0 flex-1">
              <div className="mb-1.5 flex justify-between text-[12.5px]">
                <span className="font-medium">
                  Card {idx + 1} of {deck.length}
                </span>
                <span className="text-[var(--text-faint)]">{knownCount} marked known</span>
              </div>
              <Bar value={Math.round(((idx + 1) / deck.length) * 100)} t={card.tone} />
            </div>
          </div>

          {/* The card */}
          <div className="flip-scene">
            <div
              className={`flip-inner relative h-[340px] w-full sm:h-[300px] ${flipped ? "is-flipped" : ""}`}
            >
              {/* Front */}
              <button
                onClick={() => setFlipped(true)}
                aria-hidden={flipped}
                tabIndex={flipped ? -1 : 0}
                className={`flip-face grid w-full place-items-center rounded-3xl border ${c.border} ${c.soft} px-8 text-center g-elev-2`}
              >
                <div>
                  <div className={`text-[11px] font-bold uppercase tracking-[0.14em] ${c.strong}`}>
                    {FLASHCARD_GROUPS.find((g) => g.id === card.group)?.label}
                  </div>
                  <p className={`mt-4 text-[22px] font-semibold leading-snug text-balance sm:text-[26px] ${c.ink}`}>
                    {card.front}
                  </p>
                  <p className={`mt-6 text-[13px] ${c.ink} opacity-60`}>
                    Say it out loud · tap or press space to flip
                  </p>
                </div>
              </button>

              {/* Back */}
              <button
                onClick={() => setFlipped(false)}
                aria-hidden={!flipped}
                tabIndex={flipped ? 0 : -1}
                className="flip-back flip-face grid w-full place-items-center rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] px-8 text-center g-elev-2"
              >
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-faint)]">
                    The answer
                  </div>
                  <p className="mt-4 text-[18px] leading-relaxed text-balance sm:text-[19px]">
                    {card.back}
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="ghost" onClick={back}>
              ← Back
            </Button>
            {flipped ? (
              <>
                <Button
                  variant="outlined"
                  onClick={() => verdict("again")}
                  className="border-[var(--g-red-600)] text-[var(--g-red-600)]"
                >
                  ↻ Show again
                </Button>
                <Button
                  onClick={() => verdict("known")}
                  className="bg-[var(--g-green-600)] hover:bg-[var(--g-green-700)]"
                >
                  ✓ Got it
                </Button>
              </>
            ) : (
              <Button onClick={() => setFlipped(true)}>Flip the card</Button>
            )}
            <Button variant="ghost" onClick={advance}>
              Skip →
            </Button>
          </div>

          <p className="text-center text-[12px] text-[var(--text-faint)]">
            Keyboard: space to flip · ← → to move · 1 show again · 2 got it
          </p>
        </>
      )}

      {/* Deck overview */}
      <Card className="p-6">
        <h3 className="text-[15px] font-semibold">Deck coverage</h3>
        <div className="mt-4 space-y-4">
          {FLASHCARD_GROUPS.map((g) => {
            const total = g.cards.length;
            const known = hydrated
              ? g.cards.filter((_, k) => state.cards[`${g.id}-${k}`] === "known").length
              : 0;
            const p = Math.round((known / total) * 100);
            return (
              <div key={g.id}>
                <div className="mb-1.5 flex items-center justify-between text-[13px]">
                  <span className="font-medium">{g.label}</span>
                  <span className="text-[var(--text-faint)]">
                    {known} / {total}
                  </span>
                </div>
                <Bar value={p} t={g.tone} />
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
