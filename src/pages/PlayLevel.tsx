import { useMemo, useState, useEffect } from "react";
import { Link, useParams, Navigate, useSearchParams } from "react-router-dom";
import { CERTS } from "../data/certs";
import { scoreSelection } from "../game/scoring";
import KeywordTiles from "../components/game/KeywordTiles";

type KeywordStatus = "off" | "selected" | "correct" | "wrong" | "missed";

export default function PlayLevel() {
  const { certId } = useParams();
  const [searchParams] = useSearchParams();

  const cert = useMemo(() => CERTS.find((c) => c.id === certId), [certId]);
  if (!cert || !cert.enabled) return <Navigate to="/" replace />;

  const requestedPackId = searchParams.get("pack");

  const pack = useMemo(() => {
    if (!cert.packs?.length) return undefined;
    if (!requestedPackId) return cert.packs[0];
    return cert.packs.find((p) => p.id === requestedPackId) ?? cert.packs[0];
  }, [cert.packs, requestedPackId]);

  if (!pack) return <Navigate to={`/cert/${cert.id}`} replace />;

  // ✅ Reset quiz state if pack changes
  useEffect(() => {
    setQIndex(0);
    setSelectedIds([]);
    setShowResult(false);
  }, [pack.id]);

  const [qIndex, setQIndex] = useState(0);
  const q = pack.questions[qIndex];

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const score = useMemo(
    () =>
      scoreSelection({
        selectedIds,
        requiredIds: q.requiredKeywordIds,
        noiseIds: q.noiseKeywordIds,
      }),
    [selectedIds, q.requiredKeywordIds, q.noiseKeywordIds]
  );

  const statusById: Record<string, KeywordStatus> = useMemo(() => {
    const map: Record<string, KeywordStatus> = {};

    for (const kw of q.keywords) map[kw.id] = "off";

    const selected = new Set(selectedIds);
    const required = new Set(q.requiredKeywordIds);

    if (!showResult) {
      for (const id of selected) map[id] = "selected";
      return map;
    }

    for (const id of required) {
      map[id] = selected.has(id) ? "correct" : "missed";
    }

    for (const id of selected) {
      if (!required.has(id)) map[id] = "wrong";
    }

    return map;
  }, [q.keywords, q.requiredKeywordIds, selectedIds, showResult]);

  function toggle(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function submit() {
    setShowResult(true);
  }

  function next() {
    setShowResult(false);
    setSelectedIds([]);
    setQIndex((i) => Math.min(i + 1, (pack?.questions.length ?? 1) - 1));

  }

  const correctAnswer =
    q.answers.find((a) => a.id === q.correctAnswerId)?.text ?? "";

  const pickedWrong =
    showResult && selectedIds.some((id) => statusById[id] === "wrong");

  const allRequiredSelected =
    showResult && q.requiredKeywordIds.every((id) => statusById[id] === "correct");

  return (
    <div className="min-h-screen bg-[var(--ctn-bg)] text-[var(--ctn-text)]">
      <header className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <Link
          to={`/cert/${cert.id}`}
          className="text-sm text-[var(--ctn-muted)] hover:text-white"
        >
          ← Back to {cert.label}
        </Link>

        <div className="mt-3 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Level 1: Find the Signal</h1>
            <p className="text-sm text-[var(--ctn-muted)]">{pack.title}</p>

            {/* optional: show pack id for debugging */}
            {/* <div className="mt-1 text-xs text-[var(--ctn-dim)]">pack: {pack.id}</div> */}
          </div>

          <div className="rounded-2xl border border-[var(--ctn-border)] bg-[var(--ctn-surface)] px-4 py-3 text-sm">
            <div className="text-[var(--ctn-muted)]">Score</div>
            <div className="text-lg font-semibold">{score.total}</div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl border border-[var(--ctn-border)] bg-[var(--ctn-surface)] p-6">
          <div className="text-xs text-[var(--ctn-dim)]">
            Question {qIndex + 1} of {pack.questions.length}
          </div>

          <div className="mt-3 text-lg font-semibold">{q.stem}</div>

          <div className="mt-4 rounded-2xl border border-[var(--ctn-border)] bg-white/5 p-4">
            <div className="text-xs text-[var(--ctn-muted)]">
              Correct answer (shown in Level 1)
            </div>
            <div className="mt-1">{correctAnswer}</div>
          </div>

          <div className="mt-6">
            <div className="mb-2 text-sm text-[var(--ctn-muted)]">
              Select the minimum keywords that prove the shown answer is correct:
            </div>

            <KeywordTiles
              keywords={q.keywords}
              statusById={statusById}
              onToggle={toggle}
              locked={showResult}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-[var(--ctn-muted)]">
              +10 required • -5 noise • +15 precision
            </div>

            <div className="flex gap-2">
              {!showResult ? (
                <button
                  onClick={submit}
                  className="rounded-2xl bg-[linear-gradient(135deg,var(--ctn-accent),var(--ctn-accent-2))] px-5 py-2 text-sm font-semibold hover:opacity-90"
                >
                  Check
                </button>
              ) : (
                <button
                  onClick={next}
                  className="rounded-2xl bg-[var(--ctn-good-bg)] px-5 py-2 text-sm font-semibold text-[var(--ctn-good)] hover:opacity-90"
                >
                  Next
                </button>
              )}
            </div>
          </div>

          {showResult && (
            <div className="mt-5 rounded-2xl border border-[var(--ctn-border)] bg-white/5 p-4 text-sm">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div>
                  Gained: <span className="text-white">{score.gained}</span>
                </div>
                <div>
                  Lost: <span className="text-white">{score.lost}</span>
                </div>
                <div>
                  Bonus: <span className="text-white">{score.precisionBonus}</span>
                </div>
              </div>

              <div className="mt-3">
                {pickedWrong ? (
                  <span className="text-red-300">You selected some noise words.</span>
                ) : allRequiredSelected ? (
                  <span className="text-[var(--ctn-good)]">Clean selection.</span>
                ) : (
                  <span className="text-[var(--ctn-muted)]">
                    Review the highlighted keywords.
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
