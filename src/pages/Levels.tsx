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
          Train your eye to identify signal words and eliminate distractors.
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-2">

          {/* LEVEL 1 */}
          <div className="rounded-3xl border border-[var(--ctn-border)] bg-[var(--ctn-surface)] p-6">
            <div className="text-lg font-semibold">Level 1: Find the Signal</div>

            <div className="mt-2 text-sm text-[var(--ctn-muted)]">
              The correct answer is shown. Select only the keywords that justify it.
            </div>

            <Link
              to={`/cert/${cert.id}/play`}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,var(--ctn-accent),var(--ctn-accent-2))] px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Start Level 1
            </Link>
          </div>

          {/* LEVEL 2 (future-ready) */}
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
