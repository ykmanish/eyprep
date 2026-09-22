"use client";

import { useProgress, levelFor, LEVELS } from "@/lib/store";
import { DOMAINS, countFor, TOTAL_QUESTIONS, QUESTION_DOMAIN } from "@/data/questions";
import { PARTS, TOTAL_SECTIONS } from "@/data/modules";
import { ROLE, FOUR_TESTS, ENGAGEMENT_AREAS, TEN_DAY_PLAN, EIGHTY_TWENTY } from "@/data/role";
import { Button, Card, Ring, Bar, Tag, tone, SectionTitle, FourBar } from "./ui";

function greeting() {
  const h = new Date().getHours();
  if (h < 5) return "Still up";
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  if (h < 21) return "Good evening";
  return "Late session";
}

export default function Home({ go }) {
  const { state, hydrated } = useProgress();
  // Rendered on the server before we know the reader's clock.
  const hello = hydrated ? greeting() : "Welcome";

  const answeredIds = Object.keys(state.answered);
  const correct = answeredIds.filter((id) => state.answered[id].ok).length;
  const accuracy = answeredIds.length ? Math.round((correct / answeredIds.length) * 100) : 0;
  const sectionsDone = Object.keys(state.sections).length;
  const lvl = levelFor(state.xp);
  const planDone = Object.keys(state.plan).length;

  const domainStats = DOMAINS.map((d) => {
    const total = countFor(d.id);
    const seen = answeredIds.filter((id) => QUESTION_DOMAIN[id] === d.id);
    const ok = seen.filter((id) => state.answered[id].ok).length;
    return {
      ...d,
      total,
      seen: seen.length,
      ok,
      pct: total ? Math.round((seen.length / total) * 100) : 0,
    };
  });

  const weakest = domainStats
    .filter((d) => d.seen >= 3)
    .sort((a, b) => a.ok / Math.max(1, a.seen) - b.ok / Math.max(1, b.seen))[0];

  const nextPlanDay = TEN_DAY_PLAN.find((d) => !state.plan[d.day]) || TEN_DAY_PLAN[9];

  return (
    <div className="space-y-10">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative overflow-hidden rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] g-elev-1">
        <div className="g-dotgrid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--g-blue-50)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-24 h-64 w-64 rounded-full bg-[var(--g-yellow-50)] blur-3xl" />

        <div className="relative px-6 py-10 sm:px-10 sm:py-14">
          <div className="flex flex-wrap items-center gap-2">
            <Tag t="yellow">EY campus drive</Tag>
            <Tag t="blue">{ROLE.campus}</Tag>
            <Tag t="green">{ROLE.window} to go</Tag>
          </div>

          <h1 className="mt-5 max-w-3xl text-[34px] font-semibold leading-[1.1] tracking-tight text-balance sm:text-[46px]">
            {hello}, {ROLE.candidate.split(" ")[0]}. You are preparing for{" "}
            <span className="g-gradient-text">Associate Consultant</span>,{" "}
            <span className="whitespace-nowrap">Cyber Security</span>.
          </h1>

          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[var(--text-muted)] text-pretty sm:text-[17px]">
            Eleven service domains. Four rounds. One narrative you have to hold consistently
            across all of them. Everything in the handbook is here - restructured so you can
            actually <em>practise</em> it rather than re-read it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => go("practice", "daily")}>
              <span className="text-base">⚡</span> Start today&rsquo;s 10
            </Button>
            <Button size="lg" variant="tonal" onClick={() => go("learn")}>
              Open study modules
            </Button>
            <Button size="lg" variant="outlined" onClick={() => go("jd")}>
              Decode the JD
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {ROLE.stats.map((s) => {
              const c = tone(s.tone);
              return (
                <div
                  key={s.label}
                  className={`rounded-2xl border ${c.border} ${c.soft} px-4 py-4`}
                >
                  <div className={`text-[30px] font-semibold leading-none ${c.strong}`}>
                    {s.value}
                  </div>
                  <div className={`mt-2 text-[12.5px] leading-snug ${c.ink} opacity-80`}>
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------ The real paper ------------------------ */}
      <section className="relative overflow-hidden rounded-[28px] border border-[var(--g-red-100)] bg-[var(--g-red-50)]">
        <div className="relative grid gap-6 p-6 sm:p-9 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Tag t="red">🔥 Reported from a real interview</Tag>
            </div>
            <h2 className="mt-3 text-[26px] font-semibold leading-tight tracking-tight text-[var(--g-red-700)] sm:text-[30px]">
              You have the actual questions.
            </h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-[var(--g-red-700)] opacity-90 text-pretty">
              Sixteen questions across two rounds, passed on by a senior who sat them. Everything
              else here is a prediction. Start from this, then fill the gaps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={() => go("rounds", "r1")}
                className="bg-[var(--g-red-600)] hover:brightness-110"
              >
                See both rounds
              </Button>
              <Button variant="outlined" onClick={() => go("practice", "rounds")}>
                Drill the 36 topic questions
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-[var(--surface)] p-5 g-elev-1">
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-faint)]">
              The one number that matters
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-[42px] font-semibold leading-none text-[var(--g-red-600)]">
                12
              </span>
              <span className="text-[15px] text-[var(--text-muted)]">of 16 questions</span>
            </div>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--text-muted)]">
              come straight off your resume. Five to six in round one, five to six again in round
              two, plus a separate internship block. Nothing else comes close.
            </p>
            <Button
              size="sm"
              variant="tonal"
              className="mt-4"
              onClick={() => go("resume", "probes")}
            >
              Open the resume drill
            </Button>
          </div>
        </div>
      </section>

      {/* --------------------------- Your progress --------------------------- */}
      <section>
        <SectionTitle
          eyebrow="Where you are"
          title="Your progress"
          sub="Everything is stored in this browser only. Nothing leaves your device."
        />

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <Card className="overflow-hidden p-0">
            <div className="flex flex-wrap items-center gap-6 p-6">
              <Ring value={hydrated ? lvl.pct : 0} size={112} stroke={9} t="blue">
                <div className="text-center">
                  <div className="text-[26px] leading-none">{lvl.cur.icon}</div>
                  <div className="mt-1 text-[11px] font-semibold text-[var(--text-faint)]">
                    {hydrated ? state.xp : 0} XP
                  </div>
                </div>
              </Ring>
              <div className="min-w-[180px] flex-1">
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-faint)]">
                  Current stage
                </div>
                <div className="mt-1 text-[22px] font-semibold">{lvl.cur.name}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--text-muted)]">
                  {lvl.next
                    ? `${lvl.toNext} XP to reach “${lvl.next.name}”. Answer a question (+10), finish a study section (+25), or flip a card (+4).`
                    : "You have run the whole ladder. Now go and say it all out loud to a friend."}
                </p>
              </div>
            </div>

            <div className="border-t border-[var(--border-soft)] px-6 py-4">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {LEVELS.map((l, i) => (
                  <div
                    key={l.name}
                    className={`flex items-center gap-1.5 text-[12px] ${
                      hydrated && i <= lvl.idx
                        ? "font-semibold text-[var(--text)]"
                        : "text-[var(--text-faint)]"
                    }`}
                  >
                    <span className={hydrated && i <= lvl.idx ? "" : "opacity-40 grayscale"}>
                      {l.icon}
                    </span>
                    {l.name}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <StatCard
              t="green"
              icon="✅"
              value={hydrated ? `${answeredIds.length}` : "0"}
              suffix={`/ ${TOTAL_QUESTIONS}`}
              label="Questions attempted"
            />
            <StatCard
              t="blue"
              icon="🎯"
              value={hydrated ? `${accuracy}%` : "0%"}
              label="Overall accuracy"
            />
            <StatCard
              t="yellow"
              icon="📘"
              value={hydrated ? `${sectionsDone}` : "0"}
              suffix={`/ ${TOTAL_SECTIONS}`}
              label="Sections read"
            />
            <StatCard
              t="red"
              icon="🔥"
              value={hydrated ? `${state.bestStreak}` : "0"}
              label="Best answer streak"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------- Next moves ---------------------------- */}
      <section>
        <SectionTitle
          eyebrow="Do this next"
          title="Four moves that pay the most"
          sub="Pick one. Ten focused minutes beats an hour of scrolling."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <NextCard
            t="blue"
            icon="⚡"
            title="Today's ten"
            body="A balanced ten-question set pulled across every domain, weighted to what you have not seen yet."
            cta="Start the set"
            onClick={() => go("practice", "daily")}
          />
          <NextCard
            t="purple"
            icon="📄"
            title="Drill your own resume"
            body="Every line on your page turned into the question it becomes, with the answer that survives the follow up. Three deep dives and seven exposed spots."
            cta="Open the drill"
            onClick={() => go("resume", "probes")}
          />
          <NextCard
            t="red"
            icon={weakest ? weakest.icon : "🎭"}
            title={weakest ? `Shore up ${weakest.short}` : "Run a scenario"}
            body={
              weakest
                ? `Your accuracy here is ${Math.round((weakest.ok / Math.max(1, weakest.seen)) * 100)}%. This is the cheapest place to gain marks.`
                : "Ten worked consulting scenarios. Say your answer out loud before you reveal the model."
            }
            cta={weakest ? "Drill this domain" : "Open the lab"}
            onClick={() => (weakest ? go("practice", weakest.id) : go("lab", "scenarios"))}
          />
          <NextCard
            t="green"
            icon="🗓️"
            title={`Day ${nextPlanDay.day} of the plan`}
            body={nextPlanDay.core}
            cta="See the plan"
            onClick={() => go("kit", "plan")}
          />
        </div>
      </section>

      {/* ------------------------ Domain mastery ------------------------ */}
      <section>
        <SectionTitle
          eyebrow="Coverage"
          title="Domain mastery"
          sub="Every domain maps to something the JD names. Grey means you have not touched it yet."
          right={
            <Button variant="text" onClick={() => go("practice")}>
              Open practice →
            </Button>
          }
        />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {domainStats.map((d) => {
            const c = tone(d.tone);
            const acc = d.seen ? Math.round((d.ok / d.seen) * 100) : 0;
            return (
              <Card
                key={d.id}
                hover
                onClick={() => go("practice", d.id)}
                className="p-5"
              >
                <div className="flex items-start gap-3">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[19px] ${c.soft}`}>
                    {d.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="truncate text-[15px] font-semibold">{d.label}</h3>
                      <span className="shrink-0 text-[11px] font-medium text-[var(--text-faint)]">
                        {d.ref}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-2 text-[12.5px] leading-snug text-[var(--text-muted)]">
                      {d.blurb}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Bar value={hydrated ? d.pct : 0} t={d.tone} />
                  <div className="mt-2 flex items-center justify-between text-[11.5px] text-[var(--text-faint)]">
                    <span>
                      {hydrated ? d.seen : 0} of {d.total} seen
                    </span>
                    <span className={d.seen ? c.strong : ""}>
                      {hydrated && d.seen ? `${acc}% correct` : "not started"}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ------------------------ What EY is testing ------------------------ */}
      <section>
        <SectionTitle
          eyebrow="The scoring rubric"
          title="The four things EY is actually testing"
          sub="Not one of them is 'do you know what a firewall is'."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 stagger">
          {FOUR_TESTS.map((f) => {
            const c = tone(f.tone);
            return (
              <div
                key={f.title}
                className={`rounded-2xl border ${c.border} ${c.soft} p-5`}
              >
                <div className="text-[26px] anim-float">{f.icon}</div>
                <h3 className={`mt-3 text-[16px] font-semibold ${c.ink}`}>{f.title}</h3>
                <p className={`mt-1.5 text-[13.5px] leading-relaxed ${c.ink} opacity-80`}>
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------------- Engagement map ---------------------- */}
      <section>
        <SectionTitle
          eyebrow="The JD, as a map"
          title="Eleven engagement areas"
          sub="Nobody expects a fresher to be deep in all eleven - but you must be able to say, in two sentences each, what the service is and why a client buys it."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            { key: "tr", title: "Tech Risk", count: "six", dot: "bg-[var(--g-yellow-600)]", part: "p3", items: ENGAGEMENT_AREAS.techRisk },
            { key: "cy", title: "Cyber Security", count: "five", dot: "bg-[var(--g-green-600)]", part: "p4", items: ENGAGEMENT_AREAS.cyber },
          ].map((grp) => (
            // min-w-0 stops the grid track being sized by the longest
            // service name, which otherwise overflows on narrow screens.
            <Card key={grp.key} className="min-w-0 p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${grp.dot}`} />
                <h3 className="text-[15px] font-semibold">{grp.title}</h3>
                <span className="truncate text-[12px] text-[var(--text-faint)]">
                  - {grp.count} services
                </span>
              </div>
              <ul className="space-y-2">
                {grp.items.map((a) => (
                  <li key={a.id}>
                    <button
                      onClick={() => go("learn", grp.part)}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-[14px] transition-colors hover:bg-[var(--surface-2)]"
                    >
                      <span className="shrink-0 font-mono text-[11px] text-[var(--text-faint)]">
                        §{a.ref}
                      </span>
                      <span className="min-w-0 flex-1 truncate">{a.name}</span>
                      <span className="shrink-0 text-[var(--text-faint)]">→</span>
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------------- 80/20 ---------------------- */}
      <section className="overflow-hidden rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] g-elev-1">
        <FourBar />
        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-faint)]">
              If you only have two days
            </div>
            <h2 className="mt-2 text-[26px] font-semibold leading-tight tracking-tight">
              The 80/20 of the whole handbook
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--text-muted)]">
              Read in this order. That sequence covers the majority of what actually gets asked.
            </p>
            <Button className="mt-5" variant="tonal" onClick={() => go("kit", "cheat")}>
              Open the cheat sheet
            </Button>
          </div>
          <ol className="space-y-2">
            {EIGHTY_TWENTY.map((x, i) => (
              <li
                key={x}
                className="flex items-center gap-4 rounded-2xl bg-[var(--surface-2)] px-4 py-3"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--surface)] text-[13px] font-bold text-[var(--primary)]">
                  {i + 1}
                </span>
                <span className="text-[14.5px] font-medium">{x}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------- Parts index ---------------------- */}
      <section>
        <SectionTitle
          eyebrow="The whole syllabus"
          title="Eight study parts"
          right={
            <Button variant="text" onClick={() => go("learn")}>
              Browse all →
            </Button>
          }
        />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {PARTS.map((p) => {
            const c = tone(p.tone);
            const done = p.sections.filter((s) => state.sections[s.id]).length;
            return (
              <Card key={p.id} hover onClick={() => go("learn", p.id)} className="p-5">
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[11px] font-bold ${c.strong}`}>
                    PART {p.n}
                  </span>
                  <span className="text-[20px]">{p.icon}</span>
                </div>
                <h3 className="mt-3 text-[16px] font-semibold">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-[12.5px] leading-snug text-[var(--text-muted)]">
                  {p.subtitle}
                </p>
                <div className="mt-4">
                  <Bar
                    value={hydrated ? Math.round((done / p.sections.length) * 100) : 0}
                    t={p.tone}
                  />
                  <div className="mt-2 text-[11.5px] text-[var(--text-faint)]">
                    {hydrated ? done : 0} of {p.sections.length} sections
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ---------------------- Footer note ---------------------- */}
      <footer className="rounded-2xl border border-dashed border-[var(--border)] px-6 py-5 text-[12.5px] leading-relaxed text-[var(--text-faint)]">
        Built from a personal study handbook compiled from the published job description,
        publicly available information about the firm&rsquo;s services, and standard industry
        frameworks. It is not produced, endorsed or published by EY. Verify all firm-specific
        facts and figures independently before quoting them in an interview.
      </footer>
    </div>
  );
}

/* ---------------------------------------------------------------- */

function StatCard({ t, icon, value, suffix, label }) {
  const c = tone(t);
  return (
    <Card className="flex flex-col justify-between p-5">
      <div className={`grid h-9 w-9 place-items-center rounded-xl text-[17px] ${c.soft}`}>
        {icon}
      </div>
      <div className="mt-4">
        <div className="flex items-baseline gap-1">
          <span className="text-[26px] font-semibold leading-none">{value}</span>
          {suffix ? (
            <span className="text-[12px] text-[var(--text-faint)]">{suffix}</span>
          ) : null}
        </div>
        <div className="mt-1.5 text-[12px] leading-snug text-[var(--text-muted)]">{label}</div>
      </div>
    </Card>
  );
}

function NextCard({ t, icon, title, body, cta, onClick }) {
  const c = tone(t);
  return (
    <Card hover onClick={onClick} className="flex flex-col p-6">
      <div className={`grid h-11 w-11 place-items-center rounded-2xl text-[21px] ${c.soft}`}>
        {icon}
      </div>
      <h3 className="mt-4 text-[17px] font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[var(--text-muted)]">{body}</p>
      <span className={`mt-4 text-[13px] font-semibold ${c.strong}`}>{cta} →</span>
    </Card>
  );
}
