export type ScoreBreakdown = {
  gained: number;
  lost: number;
  precisionBonus: number;
  total: number;
};

export function scoreSelection(params: {
  selectedIds: string[];
  requiredIds: string[];
  noiseIds: string[];
}): ScoreBreakdown {
  const { selectedIds, requiredIds, noiseIds } = params;

  const selected = new Set(selectedIds);
  const required = new Set(requiredIds);
  const noise = new Set(noiseIds);

  let gained = 0;
  let lost = 0;

  // +10 per required keyword selected
  for (const id of required) {
    if (selected.has(id)) gained += 10;
  }

  // -5 per noise keyword selected
  for (const id of noise) {
    if (selected.has(id)) lost += 5;
  }

  // Precision bonus: you selected all required and no extras beyond 1
  const selectedCount = selectedIds.length;
  const requiredSelectedCount = requiredIds.filter((id) => selected.has(id)).length;
  const extras = selectedCount - requiredSelectedCount;

  const allRequiredPicked = requiredSelectedCount === requiredIds.length;
  const precisionBonus = allRequiredPicked && extras <= 1 ? 15 : 0;

  const total = Math.max(0, gained - lost + precisionBonus);

  return { gained, lost, precisionBonus, total };
}
