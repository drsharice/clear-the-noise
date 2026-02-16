// src/pages/Home.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CERTS } from "../data/certs";
import { ArrowRight, Lock, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[var(--ctn-bg)] text-[var(--ctn-text)]"
      style={{
        backgroundImage: `
          radial-gradient(1200px circle at 20% 0%, var(--ctn-glow), transparent 55%),
          radial-gradient(900px circle at 80% 10%, rgba(37,99,235,0.16), transparent 55%)
        `,
      }}
    >
      <header className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,var(--ctn-accent),var(--ctn-accent-3))] shadow-lg" />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Clear the Noise</h1>
            <p className="text-sm text-[var(--ctn-muted)]">
              Train your eye to spot the signal words that unlock the correct answer.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-[var(--ctn-border)] bg-[var(--ctn-surface)] p-6 shadow-xl"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-[var(--ctn-muted)]">
                <Sparkles className="h-4 w-4" />
                Game Mode: Levels 1–2 Ready
              </div>

              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                Pick a certification to start training.
              </h2>
              <p className="mt-2 max-w-2xl text-[var(--ctn-muted)]">
                Level 1: Find the Signal. Level 2: Eliminate Distractors. We’ll expand into streaks,
                combos, and confetti next.
              </p>
            </div>

            <div className="hidden md:block rounded-2xl border border-[var(--ctn-border)] bg-[var(--ctn-surface)] p-4 text-xs text-[var(--ctn-muted)]">
              <div className="font-medium text-[var(--ctn-text)]">Scoring</div>
              <div className="mt-2">+10 required keywords</div>
              <div>-5 noise words • streak multiplier</div>
              <div className="mt-2 text-[var(--ctn-dim)]">
                Precision bonus when you pick only signal words.
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {CERTS.map((c) => (
              <motion.div
                key={c.id}
                whileHover={{ scale: c.enabled ? 1.01 : 1.0 }}
                className={`rounded-2xl border p-5 transition ${
                  c.enabled
                    ? "border-[var(--ctn-border)] bg-[var(--ctn-surface)] hover:bg-[var(--ctn-surface-2)] hover:border-white/20"
                    : "border-white/10 bg-white/5 opacity-60"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{c.label}</div>
                    <div className="text-sm text-[var(--ctn-muted)]">{c.subtitle}</div>
                  </div>

                  {c.enabled ? (
                    <div className="rounded-full bg-[var(--ctn-good-bg)] px-3 py-1 text-xs text-[var(--ctn-good)]">
                      Active
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-[var(--ctn-muted)]">
                      <Lock className="h-3.5 w-3.5" />
                      Coming soon
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-[var(--ctn-dim)]">
                    {c.enabled ? "Start with modules + Levels" : "Locked"}
                  </div>

                  {c.enabled ? (
                    <Link
                      to={`/cert/${c.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(135deg,var(--ctn-accent),var(--ctn-accent-2))] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                    >
                      Select <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-[var(--ctn-muted)]"
                    >
                      Select <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
