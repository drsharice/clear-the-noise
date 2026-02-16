import { Link, useParams, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { CERTS } from "../data/certs";

export default function Levels() {
  const { certId } = useParams();
  const cert = useMemo(() => CERTS.find((c) => c.id === certId), [certId]);

  if (!cert || !cert.enabled) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <Link to={`/cert/${cert.id}`} className="text-sm text-zinc-300 hover:text-white">
          ← Back to {cert.label}
        </Link>

        <h1 className="mt-3 text-3xl font-semibold">Levels</h1>
        <p className="mt-1 text-zinc-300">
          Next: Level 1 (Find the Signal) + Level 2 (Eliminate Distractors)
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">Level 1</div>
            <div className="mt-2 text-sm text-zinc-300">
              Question + correct answer shown. Tap only the signal words that justify it.
            </div>
            <button
              disabled
              className="mt-5 w-full rounded-2xl bg-red-600/40 px-4 py-3 text-sm font-semibold text-white/80"
            >
              Build next
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">Level 2</div>
            <div className="mt-2 text-sm text-zinc-300">
              Tap keywords that support the correct answer and kill distractors.
            </div>
            <button
              disabled
              className="mt-5 w-full rounded-2xl bg-yellow-400/30 px-4 py-3 text-sm font-semibold text-white/80"
            >
              Build next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
