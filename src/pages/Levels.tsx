// src/pages/Levels.tsx
import { Link, useParams, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { CERTS } from "../data/certs";

export default function Levels() {
  const { certId } = useParams();
  const cert = useMemo(() => CERTS.find((c) => c.id === certId), [certId]);

  if (!cert || !cert.enabled) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-[var(--ctn-bg)] text-[var(--ctn-text)]">
      <header className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <Link
          to={`/cert/${cert.id}`}
          className="text-sm text-[var(--ctn-muted)] hover:text-white"
        >
          ← Back to {cert.label}
        </Link>

        <h1 className="mt-3 text-3xl font-semibold">Levels</h1>
        <p className="mt-1 text-[var(--ctn-muted)]">
          Choose a training pack for Level 1. Level 2 unlocks later.
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Level 1 */}
          <div className="rounded-3xl border border-[var(--ctn-border)] bg-[var(--ctn-surface)] p-6">
            <div className="text-lg font-semibold">Level 1: Find the Signal</div>
            <div className="mt-2 text-sm text-[var(--ctn-muted)]">
              The correct answer is shown. Select only the keywords that justify it.
            </div>

            <div className="mt-5">
              <div className="mb-2 text-xs text-[var(--ctn-dim)]">Select a pack</div>

              <div className="grid gap-3">
                {(cert.packs ?? []).map((p) => (
                  <div
                    key={p.id}
                    className="rounded-2xl border border-[var(--ctn-border)] bg-white/5 p-4"
                  >
                    <div className="text-sm font-semibold">{p.title}</div>
                    <div className="mt-1 text-xs text-[var(--ctn-dim)]">
                      {p.moduleIds.length} module(s) • {p.questions.length} question(s)
                    </div>

                    <div className="mt-3 flex gap-2">
                      <Link
                        to={`/cert/${cert.id}/play?pack=${encodeURIComponent(p.id)}`}
                        className="inline-flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--ctn-accent),var(--ctn-accent-2))] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                      >
                        Start Level 1
                      </Link>

                      <span className="inline-flex items-center rounded-2xl bg-white/10 px-3 py-2 text-xs text-[var(--ctn-muted)]">
                        Pack ID: {p.id}
                      </span>
                    </div>
                  </div>
                ))}

                {(!cert.packs || cert.packs.length === 0) && (
                  <div className="rounded-2xl border border-[var(--ctn-border)] bg-white/5 p-4 text-sm text-[var(--ctn-muted)]">
                    No packs found yet. Add packs under <code>cert.packs</code>.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Level 2 */}
          <div className="rounded-3xl border border-[var(--ctn-border)] bg-[var(--ctn-surface)] p-6">
            <div className="text-lg font-semibold">Level 2: Eliminate Distractors</div>
            <div className="mt-2 text-sm text-[var(--ctn-muted)]">
              Identify keywords that support the correct answer and eliminate incorrect options.
            </div>

            <button
              disabled
              className="mt-5 w-full rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-[var(--ctn-muted)]"
            >
              Unlock After Level 1
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
