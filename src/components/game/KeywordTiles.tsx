import { useMemo } from "react";
import type { Keyword } from "../../game/types";

type Props = {
  keywords: Keyword[];
  selectedIds: string[];
  onToggle: (id: string) => void;
};

export default function KeywordTiles({ keywords, selectedIds, onToggle }: Props) {
  const selected = useMemo(() => new Set(selectedIds), [selectedIds]);

  return (
    <div className="flex flex-wrap gap-2">
      {keywords.map((k) => {
        const isOn = selected.has(k.id);

        const base =
          "select-none rounded-2xl border px-3 py-2 text-sm transition active:scale-[0.98]";
        const off =
          "border-[var(--ctn-border)] bg-white/5 text-[var(--ctn-muted)] hover:bg-white/10";
        const on =
          "border-white/20 bg-[var(--ctn-surface-2)] text-[var(--ctn-text)] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]";

        return (
          <button
            key={k.id}
            type="button"
            onClick={() => onToggle(k.id)}
            className={`${base} ${isOn ? on : off}`}
          >
            {k.text}
          </button>
        );
      })}
    </div>
  );
}
