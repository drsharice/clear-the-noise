

type Keyword = {
  id: string;
  text: string;
};

type KeywordStatus = "off" | "selected" | "correct" | "wrong" | "missed";

type Props = {
  keywords: Keyword[];
  statusById: Record<string, KeywordStatus>;
  onToggle: (id: string) => void;
  locked?: boolean;
};

export default function KeywordTiles({
  keywords,
  statusById,
  onToggle,
  locked = false,
}: Props) {
  const base =
    "select-none rounded-2xl border px-3 py-2 text-sm transition-all duration-150 active:scale-95";

  const clsFor = (status: KeywordStatus) => {
    switch (status) {
      case "selected":
        // BEFORE check (blue)
        return "border-[var(--ctn-accent-2)] bg-[var(--ctn-surface-2)] text-white shadow-md";
      case "correct":
        // AFTER check required keywords (green)
        return "border-[var(--ctn-good)] bg-[var(--ctn-good-bg)] text-[var(--ctn-good)] shadow-[0_0_0_1px_rgba(34,197,94,0.25)]";
      case "missed":
        // AFTER check required but not selected (soft green)
        return "border-[var(--ctn-good)] bg-[var(--ctn-good-bg)] text-[var(--ctn-good)] opacity-75";
      case "wrong":
        // AFTER check selected but not required (red)
        return "border-red-500 bg-red-500/10 text-red-300 shadow-[0_0_0_1px_rgba(239,68,68,0.25)]";
      case "off":
      default:
        return "border-[var(--ctn-border)] bg-white/5 text-[var(--ctn-muted)] hover:bg-white/10 hover:border-white/20";
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {keywords.map((k) => {
        const status = statusById[k.id] ?? "off";
        const cls = `${base} ${clsFor(status)}`;

        return (
          <button
            key={k.id}
            type="button"
            onClick={() => !locked && onToggle(k.id)}
            className={cls}
          >
            {k.text}
          </button>
        );
      })}
    </div>
  );
}
