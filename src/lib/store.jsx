"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

const KEY = "prepey.progress.v1";
const THEME_KEY = "prepey.theme";

const EMPTY = {
  hydrated: false,
  xp: 0,
  answered: {}, // questionId -> { ok: boolean, ts: number }
  starred: {}, // questionId -> true
  sections: {}, // sectionId -> ts
  cards: {}, // cardKey -> "known" | "again"
  plan: {}, // day number -> true
  checks: {}, // checklist key -> true
  stories: {}, // STAR story id -> text
  runs: [], // { mode, label, score, total, ts }
  bestStreak: 0,
};

/* ------------------------------------------------------------------ */
/* An external store over localStorage.                                */
/* Read once at module load on the client; `getServerSnapshot` keeps    */
/* hydration in step with the server-rendered HTML.                     */
/* ------------------------------------------------------------------ */

function readFromDisk() {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? { ...EMPTY, ...JSON.parse(raw), hydrated: true } : { ...EMPTY, hydrated: true };
  } catch {
    return { ...EMPTY, hydrated: true };
  }
}

let snapshot = EMPTY;
if (typeof window !== "undefined") snapshot = readFromDisk();

const listeners = new Set();

function subscribe(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

const getSnapshot = () => snapshot;
const getServerSnapshot = () => EMPTY;

function update(fn) {
  const next = fn(snapshot);
  if (next === snapshot) return;
  snapshot = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* private mode or blocked storage - progress just will not persist */
  }
  for (const cb of listeners) cb();
}

/* ------------------------------------------------------------------ */
/* Actions - plain functions, stable across renders                    */
/* ------------------------------------------------------------------ */

const actions = {
  recordAnswer(id, ok, xp = 10) {
    update((s) => {
      const firstTime = !s.answered[id];
      const gain = ok ? (firstTime ? xp : Math.round(xp / 3)) : 2;
      return {
        ...s,
        xp: s.xp + gain,
        answered: { ...s.answered, [id]: { ok, ts: Date.now() } },
      };
    });
  },
  toggleStar(id) {
    update((s) => {
      const next = { ...s.starred };
      if (next[id]) delete next[id];
      else next[id] = true;
      return { ...s, starred: next };
    });
  },
  markSection(id) {
    update((s) =>
      s.sections[id]
        ? s
        : { ...s, xp: s.xp + 25, sections: { ...s.sections, [id]: Date.now() } }
    );
  },
  markCard(key, verdict) {
    update((s) => ({
      ...s,
      xp: s.xp + (s.cards[key] ? 0 : 4),
      cards: { ...s.cards, [key]: verdict },
    }));
  },
  togglePlan(day) {
    update((s) => {
      const next = { ...s.plan };
      if (next[day]) delete next[day];
      else next[day] = true;
      return { ...s, plan: next };
    });
  },
  toggleCheck(key) {
    update((s) => {
      const next = { ...s.checks };
      if (next[key]) delete next[key];
      else next[key] = true;
      return { ...s, checks: next };
    });
  },
  saveStory(id, text) {
    update((s) => ({ ...s, stories: { ...s.stories, [id]: text } }));
  },
  finishRun(run) {
    update((s) => ({
      ...s,
      runs: [{ ...run, ts: Date.now() }, ...s.runs].slice(0, 40),
      bestStreak: Math.max(s.bestStreak, run.streak || 0),
    }));
  },
  resetAll() {
    update(() => ({ ...EMPTY, hydrated: true }));
  },
};

/* ------------------------------------------------------------------ */
/* React binding                                                       */
/* ------------------------------------------------------------------ */

const Ctx = createContext(null);

export function ProgressProvider({ children }) {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <Ctx.Provider value={{ state, hydrated: state.hydrated, ...actions }}>
      {children}
    </Ctx.Provider>
  );
}

export function useProgress() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useProgress must be used inside <ProgressProvider>");
  return v;
}

/* ------------------------------------------------------------------ */
/* Level maths                                                         */
/* ------------------------------------------------------------------ */

export const LEVELS = [
  { at: 0, name: "Applicant", icon: "🌱" },
  { at: 150, name: "Shortlisted", icon: "📋" },
  { at: 400, name: "Aptitude cleared", icon: "🔢" },
  { at: 800, name: "GD survivor", icon: "💬" },
  { at: 1300, name: "Technical round", icon: "🛡️" },
  { at: 2000, name: "Partner round", icon: "🤝" },
  { at: 3000, name: "Offer in hand", icon: "🏆" },
];

export function levelFor(xp) {
  let idx = 0;
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].at) idx = i;
  const cur = LEVELS[idx];
  const next = LEVELS[idx + 1] || null;
  const span = next ? next.at - cur.at : 1;
  const into = next ? xp - cur.at : 1;
  return {
    idx,
    cur,
    next,
    pct: next ? Math.min(100, Math.round((into / span) * 100)) : 100,
    toNext: next ? next.at - xp : 0,
  };
}

/* ------------------------------------------------------------------ */
/* Theme - its own tiny external store                                 */
/* ------------------------------------------------------------------ */

function readTheme() {
  try {
    return window.localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

let themeSnapshot = null;
if (typeof window !== "undefined") themeSnapshot = readTheme();

const themeListeners = new Set();
const subscribeTheme = (cb) => {
  themeListeners.add(cb);
  return () => themeListeners.delete(cb);
};
const getTheme = () => themeSnapshot;
const getServerTheme = () => null;

function applyTheme(next) {
  themeSnapshot = next;
  try {
    if (next) {
      window.localStorage.setItem(THEME_KEY, next);
      document.documentElement.dataset.theme = next;
    } else {
      window.localStorage.removeItem(THEME_KEY);
      delete document.documentElement.dataset.theme;
    }
  } catch {
    /* ignore */
  }
  for (const cb of themeListeners) cb();
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);

  function toggle() {
    const isDark =
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    applyTheme(isDark ? "light" : "dark");
  }

  return { theme, toggle };
}

/* ------------------------------------------------------------------ */
/* Location hash - the router                                          */
/* ------------------------------------------------------------------ */

const subscribeHash = (cb) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};
const getHash = () => window.location.hash;
const getServerHash = () => "";

export function useHash() {
  return useSyncExternalStore(subscribeHash, getHash, getServerHash);
}
