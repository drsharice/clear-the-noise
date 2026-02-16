import type { Pack } from "../../../../game/types";

export const dp700LakehousePack: Pack = {
  id: "dp700-pack-lakehouse-01",
  title: "Lakehouse Essentials (Starter)",
  moduleIds: ["lakehouse"],
  questions: [
    // 1
    {
      id: "dp700-lakehouse-q-001",
      moduleId: "lakehouse",
      stem:
        "Acme needs to store raw files and curated analytics tables in one place so multiple teams can reuse the data. Which Fabric item best fits?",
      answers: [
        { id: "A", text: "Lakehouse" },
        { id: "B", text: "Real-Time Dashboard" },
        { id: "C", text: "Eventstream" },
        { id: "D", text: "KQL Database" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-rawfiles", text: "raw files", tag: "signal" },
        { id: "k-curated", text: "curated analytics tables", tag: "signal" },
        { id: "k-oneplace", text: "in one place", tag: "signal" },
        { id: "k-reuse", text: "reuse", tag: "signal" },
        { id: "k-multipleteams", text: "multiple teams", tag: "signal" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-rawfiles", "k-curated", "k-reuse"],
      noiseKeywordIds: ["k-acme"],
    },

    // 2
    {
      id: "dp700-lakehouse-q-002",
      moduleId: "lakehouse",
      stem:
        "Acme already ingests data. Now they need long-term storage optimized for analytics and easy reuse across projects. Which destination should they choose?",
      answers: [
        { id: "A", text: "Lakehouse" },
        { id: "B", text: "Real-Time Dashboard" },
        { id: "C", text: "Eventstream" },
        { id: "D", text: "Notebook only" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-longterm", text: "long-term storage", tag: "signal" },
        { id: "k-optanalytics", text: "optimized for analytics", tag: "signal" },
        { id: "k-reuse", text: "easy reuse", tag: "signal" },
        { id: "k-projects", text: "across projects", tag: "scope" },
        { id: "k-ingests", text: "already ingests", tag: "noise" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-longterm", "k-optanalytics", "k-reuse"],
      noiseKeywordIds: ["k-ingests", "k-acme"],
    },

    // 3
    {
      id: "dp700-lakehouse-q-003",
      moduleId: "lakehouse",
      stem:
        "Acme wants to separate raw ingestion data from cleaned, business-ready tables. Which design pattern is implied?",
      answers: [
        { id: "A", text: "Layered (medallion-style) design" },
        { id: "B", text: "Real-time streaming only" },
        { id: "C", text: "Dashboard-first design" },
        { id: "D", text: "Single flat table for everything" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-raw", text: "raw ingestion", tag: "signal" },
        { id: "k-cleaned", text: "cleaned", tag: "signal" },
        { id: "k-businessready", text: "business-ready", tag: "signal" },
        { id: "k-separate", text: "separate", tag: "signal" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-raw", "k-cleaned", "k-businessready", "k-separate"],
      noiseKeywordIds: ["k-acme"],
    },

    // 4
    {
      id: "dp700-lakehouse-q-004",
      moduleId: "lakehouse",
      stem:
        "Acme must restrict access so most users can query curated tables but cannot access the raw landing data. What requirement is being emphasized?",
      answers: [
        { id: "A", text: "Access separation (security boundaries)" },
        { id: "B", text: "Real-time latency" },
        { id: "C", text: "No-code transformation" },
        { id: "D", text: "Streaming ingestion" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-restrict", text: "restrict access", tag: "signal" },
        { id: "k-curated", text: "query curated tables", tag: "signal" },
        { id: "k-noraw", text: "cannot access raw", tag: "signal" },
        { id: "k-mostusers", text: "most users", tag: "scope" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-restrict", "k-noraw"],
      noiseKeywordIds: ["k-acme"],
    },

    // 5
    {
      id: "dp700-lakehouse-q-005",
      moduleId: "lakehouse",
      stem:
        "Acme needs to investigate what the data looked like yesterday for audit purposes. What capability does this point to?",
      answers: [
        { id: "A", text: "Historical versions / time-based auditing" },
        { id: "B", text: "Streaming ingestion" },
        { id: "C", text: "Real-time dashboarding" },
        { id: "D", text: "Manual exports" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-yesterday", text: "yesterday", tag: "signal" },
        { id: "k-audit", text: "audit purposes", tag: "signal" },
        { id: "k-lookedlike", text: "what the data looked like", tag: "signal" },
        { id: "k-investigate", text: "investigate", tag: "noise" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-yesterday", "k-audit", "k-lookedlike"],
      noiseKeywordIds: ["k-investigate", "k-acme"],
    },

    // 6
    {
      id: "dp700-lakehouse-q-006",
      moduleId: "lakehouse",
      stem:
        "Acme wants to process only new or changed records each run instead of reprocessing everything. What approach does this describe?",
      answers: [
        { id: "A", text: "Incremental processing" },
        { id: "B", text: "Full reload every time" },
        { id: "C", text: "Streaming only" },
        { id: "D", text: "Manual ad-hoc refresh" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-onlynew", text: "only new or changed records", tag: "signal" },
        { id: "k-eachrun", text: "each run", tag: "constraint" },
        { id: "k-instead", text: "instead of reprocessing everything", tag: "signal" },
        { id: "k-reprocess", text: "reprocessing everything", tag: "noise" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-onlynew", "k-instead"],
      noiseKeywordIds: ["k-reprocess", "k-acme"],
    },

    // 7
    {
      id: "dp700-lakehouse-q-007",
      moduleId: "lakehouse",
      stem:
        "Acme needs BI users to query curated tables easily without touching raw files. Which requirement is being emphasized?",
      answers: [
        { id: "A", text: "Curated serving layer for consumption" },
        { id: "B", text: "Event-based triggers" },
        { id: "C", text: "Real-time metrics dashboards" },
        { id: "D", text: "Notebook experimentation" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-biusers", text: "BI users", tag: "signal" },
        { id: "k-curatedtables", text: "curated tables", tag: "signal" },
        { id: "k-notraw", text: "without touching raw files", tag: "signal" },
        { id: "k-easily", text: "easily", tag: "noise" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-biusers", "k-curatedtables", "k-notraw"],
      noiseKeywordIds: ["k-easily", "k-acme"],
    },

    // 8
    {
      id: "dp700-lakehouse-q-008",
      moduleId: "lakehouse",
      stem:
        "A DP-700 question says: “Choose the BEST storage design for raw + curated data.” What does BEST signal?",
      answers: [
        { id: "A", text: "Best-practice selection (not just any working option)" },
        { id: "B", text: "Pick the first option listed" },
        { id: "C", text: "Any option works" },
        { id: "D", text: "Choose the cheapest option only" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-best", text: "BEST", tag: "signal" },
        { id: "k-rawcurated", text: "raw + curated", tag: "scope" },
        { id: "k-storage", text: "storage design", tag: "scope" },
        { id: "k-says", text: "says", tag: "noise" },
      ],
      requiredKeywordIds: ["k-best"],
      noiseKeywordIds: ["k-says"],
    },
  ],
};
