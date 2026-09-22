"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ProgressProvider, useProgress, useTheme, useHash, levelFor } from "@/lib/store";
import { IconButton, Ring } from "./ui";
import SearchOverlay from "./SearchOverlay";
import Home from "./Home";
import Learn from "./Learn";
import Practice from "./Practice";
import Flashcards from "./Flashcards";
import InterviewLab from "./InterviewLab";
import ResumeDrill from "./ResumeDrill";
import JDDecoder from "./JDDecoder";
import Toolkit from "./Toolkit";

export const NAV = [
  { id: "home", label: "Mission control", short: "Home", icon: "🏠" },
  { id: "learn", label: "Study modules", short: "Study", icon: "📘" },
  { id: "practice", label: "Practice questions", short: "Practice", icon: "🎯" },
  { id: "cards", label: "Flashcards", short: "Cards", icon: "🃏" },
  { id: "resume", label: "Resume drill", short: "Resume", icon: "📄" },
  { id: "lab", label: "Interview lab", short: "Lab", icon: "🎤" },
  { id: "jd", label: "The job description", short: "JD", icon: "📋" },
  { id: "kit", label: "Toolkit & cheat sheet", short: "Toolkit", icon: "🧰" },
];

function parseHash(hash) {
  const raw = hash.replace(/^#\/?/, "");
  const [view, arg] = raw.split("/");
  if (!view) return { view: "home", arg: null };
  return { view, arg: arg ? decodeURIComponent(arg) : null };
}

function Shell() {
  const route = parseHash(useHash());
  const [searchOpen, setSearchOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const { state, hydrated } = useProgress();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setSearchOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function go(view, arg) {
    const next = arg ? `#/${view}/${encodeURIComponent(arg)}` : `#/${view}`;
    if (typeof window !== "undefined") window.location.hash = next;
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  const lvl = levelFor(state.xp);
  const isDark =
    theme === "dark" ||
    (!theme &&
      hydrated &&
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches);

  const views = {
    home: <Home go={go} />,
    learn: <Learn go={go} arg={route.arg} />,
    practice: <Practice go={go} arg={route.arg} />,
    cards: <Flashcards />,
    resume: <ResumeDrill go={go} arg={route.arg} />,
    lab: <InterviewLab arg={route.arg} />,
    jd: <JDDecoder go={go} />,
    kit: <Toolkit arg={route.arg} />,
  };

  return (
    <div className="min-h-screen bg-[var(--bg-muted)]">
      {/* ---------------- Top app bar ---------------- */}
      <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[var(--surface)]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-2 px-4 sm:px-6">
          <IconButton
            label="Menu"
            className="lg:hidden"
            onClick={() => setNavOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </IconButton>

          <button
            onClick={() => go("home")}
            className="flex shrink-0 items-center gap-2.5 rounded-xl px-1.5 py-1 g-press"
          >
            <Logo />
            <span className="hidden text-[20px] font-semibold tracking-tight sm:block">
              Prep<span className="g-gradient-text">EY</span>
            </span>
          </button>

          {/* Search */}
          <button
            onClick={() => setSearchOpen(true)}
            className="group ml-1 flex h-11 min-w-0 flex-1 items-center gap-3 rounded-full bg-[var(--surface-2)] px-4 text-left transition-shadow hover:bg-[var(--surface)] hover:g-elev-2 sm:ml-4 sm:max-w-xl"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[var(--text-faint)]">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
            <span className="truncate text-[14px] text-[var(--text-faint)]">
              Search topics, questions, acronyms…
            </span>
            <kbd className="ml-auto hidden shrink-0 rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-faint)] sm:block">
              Ctrl K
            </kbd>
          </button>

          <div className="ml-auto flex items-center gap-1">
            <div
              className="hidden items-center gap-2.5 rounded-full bg-[var(--surface-2)] py-1 pl-1 pr-4 md:flex"
              title={`${state.xp} XP - ${lvl.cur.name}`}
            >
              <Ring value={hydrated ? lvl.pct : 0} size={34} stroke={3.5} t="blue">
                <span className="text-[13px] leading-none">{lvl.cur.icon}</span>
              </Ring>
              <div className="leading-tight">
                <div className="text-[12px] font-semibold">{hydrated ? state.xp : 0} XP</div>
                <div className="text-[10px] text-[var(--text-faint)]">{lvl.cur.name}</div>
              </div>
            </div>

            <IconButton label="Toggle theme" onClick={toggle}>
              {isDark ? (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              ) : (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <div className="g-fourbar h-[3px] w-full" />
      </header>

      <div className="mx-auto flex max-w-[1440px]">
        {/* ---------------- Nav rail ---------------- */}
        <nav
          className={`fixed inset-y-0 left-0 z-50 w-[272px] shrink-0 overflow-y-auto border-r border-[var(--border-soft)] bg-[var(--surface)] px-3 pb-8 pt-4 transition-transform duration-300 lg:sticky lg:top-[67px] lg:z-0 lg:h-[calc(100vh-67px)] lg:translate-x-0 lg:bg-transparent ${
            navOpen ? "translate-x-0 g-elev-3" : "-translate-x-full"
          }`}
        >
          <div className="mb-4 flex items-center justify-between px-3 lg:hidden">
            <span className="text-[17px] font-semibold">Menu</span>
            <IconButton label="Close" onClick={() => setNavOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </IconButton>
          </div>

          <ul className="space-y-1">
            {NAV.map((n) => {
              const active = route.view === n.id;
              return (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className={`flex w-full items-center gap-3.5 rounded-full px-4 py-2.5 text-left text-[14px] transition-colors g-press ${
                      active
                        ? "bg-[var(--primary-soft)] font-semibold text-[var(--primary-on-soft)]"
                        : "text-[var(--text-muted)] hover:bg-[var(--surface-2)]"
                    }`}
                  >
                    <span className="text-[17px] leading-none">{n.icon}</span>
                    <span className="truncate">{n.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mx-4 my-5 h-px bg-[var(--border-soft)]" />

          <div className="rounded-2xl bg-[var(--surface-2)] p-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-faint)]">
              Remember
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-muted)]">
              Do not memorise answers word for word. Read the reasoning, close the page, and say
              it out loud in your own words. The structure is what you memorise - the words
              should be yours.
            </p>
          </div>
        </nav>

        {navOpen ? (
          <button
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            onClick={() => setNavOpen(false)}
          />
        ) : null}

        {/* ---------------- Content ---------------- */}
        <main className="min-w-0 flex-1 px-4 pb-24 pt-6 sm:px-6 lg:px-10 lg:pb-16">
          <div key={route.view + (route.arg || "")} className="anim-fade">
            {views[route.view] || <Home go={go} />}
          </div>
        </main>
      </div>

      {searchOpen ? <SearchOverlay go={go} onClose={() => setSearchOpen(false)} /> : null}
    </div>
  );
}

/* The mark is dark on transparent, so it sits on a white tile to stay
   legible in dark mode. */
function Logo() {
  return (
    <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white ring-1 ring-black/10">
      <Image
        src="/ey-logo.png"
        alt="EY"
        width={960}
        height={970}
        priority
        className="h-[22px] w-auto"
      />
      <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#34a853] ring-2 ring-[var(--surface)]" />
    </span>
  );
}

export default function AppShell() {
  return (
    <ProgressProvider>
      <Shell />
    </ProgressProvider>
  );
}
