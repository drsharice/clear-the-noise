import type { Pack } from "../../../../game/types";

export const dp700GovernancePack: Pack = {
  id: "dp700-pack-governance-01",
  title: "Governance Essentials (Starter)",
  moduleIds: ["governance"],
  questions: [
    // 1 — principle of least privilege
    {
      id: "dp700-gov-q-001",
      moduleId: "governance",
      stem:
        "Acme must restrict access so analysts can query curated data but cannot view raw landing files. What governance principle is being applied?",
      answers: [
        { id: "A", text: "Least privilege / access separation" },
        { id: "B", text: "Real-time ingestion" },
        { id: "C", text: "Batch scheduling" },
        { id: "D", text: "Performance tuning" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-restrict", text: "restrict access", tag: "signal" },
        { id: "k-analysts", text: "analysts can query", tag: "scope" },
        { id: "k-curated", text: "curated data", tag: "signal" },
        { id: "k-notraw", text: "cannot view raw", tag: "signal" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-restrict", "k-notraw", "k-curated"],
      noiseKeywordIds: ["k-acme"],
    },

    // 2 — lineage/auditability
    {
      id: "dp700-gov-q-002",
      moduleId: "governance",
      stem:
        "Acme must prove where a report’s numbers came from and which transformations were applied. What capability is being tested?",
      answers: [
        { id: "A", text: "Data lineage / traceability" },
        { id: "B", text: "Streaming ingestion" },
        { id: "C", text: "Notebook interactivity" },
        { id: "D", text: "Manual exports" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-prove", text: "prove where numbers came from", tag: "signal" },
        { id: "k-transform", text: "transformations were applied", tag: "signal" },
        { id: "k-report", text: "report’s numbers", tag: "scope" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-prove", "k-transform"],
      noiseKeywordIds: ["k-acme"],
    },

    // 3 — definition of “governed dataset”
    {
      id: "dp700-gov-q-003",
      moduleId: "governance",
      stem:
        "Acme wants a single trusted dataset so multiple teams don’t create their own conflicting versions. What governance goal is being emphasized?",
      answers: [
        { id: "A", text: "Single source of truth (standardization)" },
        { id: "B", text: "Lowest latency possible" },
        { id: "C", text: "Maximize manual control" },
        { id: "D", text: "Avoid permissions" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-singletrusted", text: "single trusted dataset", tag: "signal" },
        { id: "k-multipleteams", text: "multiple teams", tag: "scope" },
        { id: "k-conflicting", text: "conflicting versions", tag: "signal" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-singletrusted", "k-conflicting"],
      noiseKeywordIds: ["k-acme"],
    },

    // 4 — compliance / audit
    {
      id: "dp700-gov-q-004",
      moduleId: "governance",
      stem:
        "A compliance team asks: “Who accessed this dataset and when?” Which governance requirement is being tested?",
      answers: [
        { id: "A", text: "Auditing / access logs" },
        { id: "B", text: "Streaming ingestion" },
        { id: "C", text: "Partitioning strategy" },
        { id: "D", text: "No-code transformation" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-who", text: "Who accessed", tag: "signal" },
        { id: "k-when", text: "and when", tag: "signal" },
        { id: "k-compliance", text: "compliance team", tag: "scope" },
        { id: "k-asks", text: "asks", tag: "noise" },
      ],
      requiredKeywordIds: ["k-who", "k-when"],
      noiseKeywordIds: ["k-asks"],
    },

    // 5 — BEST indicator (exam language)
    {
      id: "dp700-gov-q-005",
      moduleId: "governance",
      stem:
        "A DP-700 question says: “Choose the BEST approach to enforce controlled access to curated datasets.” What does BEST signal?",
      answers: [
        { id: "A", text: "Best-practice selection (not just any valid choice)" },
        { id: "B", text: "Pick the first option listed" },
        { id: "C", text: "Any option works" },
        { id: "D", text: "Choose the cheapest option only" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-best", text: "BEST", tag: "signal" },
        { id: "k-controlled", text: "controlled access", tag: "scope" },
        { id: "k-curated", text: "curated datasets", tag: "scope" },
        { id: "k-says", text: "says", tag: "noise" },
      ],
      requiredKeywordIds: ["k-best"],
      noiseKeywordIds: ["k-says"],
    },
  ],
};
