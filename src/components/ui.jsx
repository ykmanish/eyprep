"use client";

/* ------------------------------------------------------------------ */
/* Tone system - maps a Google colour name to background / text / border */
/* ------------------------------------------------------------------ */

export const TONES = {
  blue: {
    soft: "bg-[var(--g-blue-50)]",
    ink: "text-[var(--g-blue-900)]",
    strong: "text-[var(--g-blue-600)]",
    dot: "bg-[var(--g-blue-600)]",
    border: "border-[var(--g-blue-100)]",
    ring: "ring-[var(--g-blue-600)]",
    bar: "bg-[var(--g-blue-600)]",
    hex: "#1a73e8",
  },
  red: {
    soft: "bg-[var(--g-red-50)]",
    ink: "text-[var(--g-red-700)]",
    strong: "text-[var(--g-red-600)]",
    dot: "bg-[var(--g-red-600)]",
    border: "border-[var(--g-red-100)]",
    ring: "ring-[var(--g-red-600)]",
    bar: "bg-[var(--g-red-600)]",
    hex: "#d93025",
  },
  yellow: {
    soft: "bg-[var(--g-yellow-50)]",
    ink: "text-[var(--g-yellow-700)]",
    strong: "text-[var(--g-yellow-600)]",
    dot: "bg-[var(--g-yellow-600)]",
    border: "border-[var(--g-yellow-100)]",
    ring: "ring-[var(--g-yellow-600)]",
    bar: "bg-[var(--g-yellow-600)]",
    hex: "#f9ab00",
  },
  green: {
    soft: "bg-[var(--g-green-50)]",
    ink: "text-[var(--g-green-700)]",
    strong: "text-[var(--g-green-600)]",
    dot: "bg-[var(--g-green-600)]",
    border: "border-[var(--g-green-100)]",
    ring: "ring-[var(--g-green-600)]",
    bar: "bg-[var(--g-green-600)]",
    hex: "#1e8e3e",
  },
  purple: {
    soft: "bg-[var(--g-purple-50)]",
    ink: "text-[var(--g-purple-700)]",
    strong: "text-[var(--g-purple-600)]",
    dot: "bg-[var(--g-purple-600)]",
    border: "border-[var(--g-purple-100)]",
    ring: "ring-[var(--g-purple-600)]",
    bar: "bg-[var(--g-purple-600)]",
    hex: "#9334e6",
  },
};

export const tone = (t) => TONES[t] || TONES.blue;

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

export function Button({
  children,
  variant = "filled",
  size = "md",
  className = "",
  ...rest
}) {
  const sizes = {
    sm: "h-9 px-4 text-[13px]",
    md: "h-11 px-6 text-sm",
    lg: "h-13 px-8 text-[15px]",
  };
  const variants = {
    filled:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] g-elev-1 hover:g-elev-2",
    tonal:
      "bg-[var(--primary-soft)] text-[var(--primary-on-soft)] hover:brightness-[0.97]",
    outlined:
      "border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface-2)]",
    text: "text-[var(--primary)] hover:bg-[var(--primary-soft)]",
    ghost: "text-[var(--text-muted)] hover:bg-[var(--surface-2)]",
  };
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium g-press transition-colors disabled:opacity-40 disabled:pointer-events-none ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function IconButton({ children, className = "", label, ...rest }) {
  return (
    <button
      aria-label={label}
      title={label}
      className={`grid h-10 w-10 place-items-center rounded-full text-[var(--text-muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)] g-press transition-colors ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Surfaces                                                            */
/* ------------------------------------------------------------------ */

export function Card({ children, className = "", hover = false, ...rest }) {
  return (
    <div
      className={`g-card g-elev-1 ${hover ? "g-hoverlift cursor-pointer" : ""} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Chip({ children, active = false, t = "blue", className = "", ...rest }) {
  const c = tone(t);
  return (
    <button
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[13px] font-medium g-press transition-all ${
        active
          ? `${c.soft} ${c.ink} border-transparent g-elev-1`
          : "border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--surface-2)]"
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Tag({ children, t = "blue", className = "" }) {
  const c = tone(t);
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold tracking-wide ${c.soft} ${c.ink} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionTitle({ eyebrow, title, sub, right }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        {eyebrow ? (
          <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-faint)]">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-[26px] font-semibold leading-tight tracking-tight text-balance sm:text-[30px]">
          {title}
        </h2>
        {sub ? (
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[var(--text-muted)] text-pretty">
            {sub}
          </p>
        ) : null}
      </div>
      {right}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Progress ring                                                       */
/* ------------------------------------------------------------------ */

export function Ring({ value = 0, size = 72, stroke = 7, t = "blue", children }) {
  const c = tone(t);
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (Math.min(100, Math.max(0, value)) / 100) * circ;
  return (
    <div
      className="relative grid shrink-0 place-items-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="block">
        <circle
          className="ring-track"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
        />
        <circle
          className="ring-bar"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={c.hex}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  );
}

export function Bar({ value = 0, t = "blue", className = "" }) {
  const c = tone(t);
  return (
    <div
      className={`h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-3)] ${className}`}
    >
      <div
        className={`h-full rounded-full ${c.bar} transition-[width] duration-700 ease-out`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Confetti                                                            */
/* ------------------------------------------------------------------ */

const CONFETTI_COLOURS = ["#4285f4", "#ea4335", "#fbbc04", "#34a853", "#a142f4"];

/* Returns null when not firing, so each burst mounts fresh and the
   CSS animation restarts without any state of its own. */
export function Confetti({ fire }) {
  if (!fire) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-20 overflow-visible"
    >
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="confetti-bit"
          style={{
            left: `${6 + i * 5.2}%`,
            background: CONFETTI_COLOURS[i % CONFETTI_COLOURS.length],
            animationDelay: `${(i % 6) * 40}ms`,
            "--cx": `${(i % 2 ? 1 : -1) * (10 + (i % 5) * 12)}px`,
            "--cr": `${180 + i * 37}deg`,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Handbook callout boxes                                              */
/* ------------------------------------------------------------------ */

const BOX_KINDS = {
  key: { t: "blue", icon: "◆", label: "Key concept" },
  edge: { t: "green", icon: "▲", label: "Interview edge" },
  trap: { t: "red", icon: "✕", label: "Trap" },
  say: { t: "purple", icon: "❝", label: "Say it like this" },
};

export function Callout({ kind = "key", title, children }) {
  const meta = BOX_KINDS[kind] || BOX_KINDS.key;
  const c = tone(meta.t);
  return (
    <div className={`my-5 overflow-hidden rounded-2xl border ${c.border} ${c.soft}`}>
      <div className="flex items-start gap-3 px-5 pt-4">
        <span
          className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-bold text-white ${c.dot}`}
        >
          {meta.icon}
        </span>
        <div className="min-w-0">
          <div className={`text-[11px] font-bold uppercase tracking-[0.12em] ${c.strong}`}>
            {meta.label}
          </div>
          {title ? (
            <div className={`mt-0.5 text-[15px] font-semibold ${c.ink}`}>{title}</div>
          ) : null}
        </div>
      </div>
      <div className={`px-5 pb-4 pl-14 pt-2 text-[14.5px] leading-relaxed ${c.ink} opacity-90`}>
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Empty state                                                         */
/* ------------------------------------------------------------------ */

export function Empty({ icon = "🔍", title, sub, action }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-dashed border-[var(--border)] px-6 py-16 text-center">
      <div className="mb-3 text-4xl">{icon}</div>
      <div className="text-[17px] font-semibold">{title}</div>
      {sub ? (
        <p className="mt-1.5 max-w-sm text-sm text-[var(--text-muted)]">{sub}</p>
      ) : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Google four-colour rule                                             */
/* ------------------------------------------------------------------ */

export function FourBar({ className = "" }) {
  return <div className={`g-fourbar h-1 w-full rounded-full ${className}`} />;
}
