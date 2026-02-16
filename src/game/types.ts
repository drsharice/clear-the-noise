export type CertId = "dp700" | "dp203" | "ai102";

export type Module = {
  id: string;
  title: string;
};

export type KeywordTag = "signal" | "noise" | "constraint" | "scope";

export type Keyword = {
  id: string;
  text: string;
  tag: KeywordTag;
};

export type AnswerId = "A" | "B" | "C" | "D";

export type Question = {
  id: string;
  moduleId: string;
  stem: string;
  answers: { id: AnswerId; text: string }[];
  correctAnswerId: AnswerId;

  // Keyword game layer
  keywords: Keyword[];
  requiredKeywordIds: string[]; // must select to "clear the noise"
  noiseKeywordIds: string[];    // selecting costs points

  // Level 2 ready (optional for now)
  distractorKillerKeywordIds?: string[];
  distractorReasons?: Partial<Record<AnswerId, string>>;
};

export type Pack = {
  id: string;
  title: string;
  moduleIds: string[];
  questions: Question[];
};

export type Cert = {
  id: CertId;
  label: string;
  subtitle: string;
  enabled: boolean;
  modules: Module[];
  packs: Pack[];
};
