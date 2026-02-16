import type { Pack } from "../../../../game/types";

export const dp700IngestPack: Pack = {
  id: "dp700-pack-ingest-01",
  title: "Ingest Essentials (Starter)",
  moduleIds: ["ingest", "dataflows", "orchestrate"],
  questions: [
    // 1 — Scheduled low-code ingest + transform
    {
      id: "dp700-ingest-q-001",
      moduleId: "dataflows",
      stem:
        "Acme needs a low-code way to ingest and transform data every morning at 6 AM in Microsoft Fabric. Which feature best fits?",
      answers: [
        { id: "A", text: "Dataflows Gen2" },
        { id: "B", text: "Eventstream" },
        { id: "C", text: "Real-Time Dashboard" },
        { id: "D", text: "Notebook-only ingestion" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-lowcode", text: "low-code", tag: "signal" },
        { id: "k-ingest", text: "ingest", tag: "signal" },
        { id: "k-transform", text: "transform", tag: "signal" },
        { id: "k-schedule", text: "every morning at 6 AM", tag: "constraint" },
        { id: "k-fabric", text: "Microsoft Fabric", tag: "scope" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-lowcode", "k-schedule", "k-transform"],
      noiseKeywordIds: ["k-acme"],
    },

    // 2 — Streaming indicator
    {
      id: "dp700-ingest-q-002",
      moduleId: "ingest",
      stem:
        "Acme needs near real-time ingestion of device telemetry so dashboards update within seconds. Which feature best fits?",
      answers: [
        { id: "A", text: "Eventstream" },
        { id: "B", text: "Dataflows Gen2" },
        { id: "C", text: "Scheduled pipeline only" },
        { id: "D", text: "Manual upload" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-nearrealtime", text: "near real-time", tag: "signal" },
        { id: "k-telemetry", text: "telemetry", tag: "signal" },
        { id: "k-withinseconds", text: "within seconds", tag: "constraint" },
        { id: "k-dashboards", text: "dashboards update", tag: "scope" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-nearrealtime", "k-telemetry", "k-withinseconds"],
      noiseKeywordIds: ["k-acme"],
    },

    // 3 — Orchestration: multiple steps in order
    {
      id: "dp700-ingest-q-003",
      moduleId: "orchestrate",
      stem:
        "Acme must run ingestion → transform → load in the correct order and track failures. Which Fabric feature best fits?",
      answers: [
        { id: "A", text: "Data pipeline (orchestration)" },
        { id: "B", text: "Real-Time Dashboard" },
        { id: "C", text: "Eventstream" },
        { id: "D", text: "Semantic model" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-steps", text: "ingestion → transform → load", tag: "signal" },
        { id: "k-order", text: "correct order", tag: "signal" },
        { id: "k-trackfails", text: "track failures", tag: "signal" },
        { id: "k-acme", text: "Acme", tag: "noise" },
        { id: "k-must", text: "must", tag: "noise" },
      ],
      requiredKeywordIds: ["k-steps", "k-order", "k-trackfails"],
      noiseKeywordIds: ["k-acme", "k-must"],
    },

    // 4 — Persistence required
    {
      id: "dp700-ingest-q-004",
      moduleId: "ingest",
      stem:
        "Acme ingests data from an external system and must store it for analytics and reporting. Which requirement is most important?",
      answers: [
        { id: "A", text: "Persistence (store for reuse)" },
        { id: "B", text: "Streaming latency" },
        { id: "C", text: "No-code only" },
        { id: "D", text: "One-time visualization" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-external", text: "external system", tag: "scope" },
        { id: "k-store", text: "must store it", tag: "signal" },
        { id: "k-analytics", text: "analytics", tag: "signal" },
        { id: "k-reporting", text: "reporting", tag: "signal" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-store", "k-analytics", "k-reporting"],
      noiseKeywordIds: ["k-acme"],
    },

    // 5 — Event-based trigger vs schedule
    {
      id: "dp700-ingest-q-005",
      moduleId: "orchestrate",
      stem:
        "Acme needs ingestion to start when a file lands in storage (not at a fixed time). Which trigger type is implied?",
      answers: [
        { id: "A", text: "Event-based trigger" },
        { id: "B", text: "Nightly schedule trigger" },
        { id: "C", text: "Manual run" },
        { id: "D", text: "Dashboard refresh" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-whenlands", text: "when a file lands", tag: "signal" },
        { id: "k-notfixed", text: "not at a fixed time", tag: "signal" },
        { id: "k-storage", text: "storage", tag: "scope" },
        { id: "k-acme", text: "Acme", tag: "noise" },
        { id: "k-needs", text: "needs", tag: "noise" },
      ],
      requiredKeywordIds: ["k-whenlands", "k-notfixed"],
      noiseKeywordIds: ["k-acme", "k-needs"],
    },

    // 6 — One-time seed load
    {
      id: "dp700-ingest-q-006",
      moduleId: "ingest",
      stem:
        "Acme needs to load a large historical file one time to seed a dataset, then apply incremental updates later. Which phrase signals the one-time load?",
      answers: [
        { id: "A", text: "one time" },
        { id: "B", text: "incremental updates" },
        { id: "C", text: "later" },
        { id: "D", text: "seed a dataset" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-onetime", text: "one time", tag: "signal" },
        { id: "k-historical", text: "large historical file", tag: "scope" },
        { id: "k-seed", text: "seed a dataset", tag: "scope" },
        { id: "k-incremental", text: "incremental updates", tag: "constraint" },
        { id: "k-later", text: "later", tag: "noise" },
      ],
      requiredKeywordIds: ["k-onetime"],
      noiseKeywordIds: ["k-later"],
    },

    // 7 — BEST indicator
    {
      id: "dp700-ingest-q-007",
      moduleId: "dataflows",
      stem:
        "A DP-700 question says: “Choose the BEST option for scheduled low-code ingestion.” What does BEST signal?",
      answers: [
        { id: "A", text: "Best-practice selection (not just any valid choice)" },
        { id: "B", text: "Pick the first option listed" },
        { id: "C", text: "Any option works" },
        { id: "D", text: "Choose the cheapest option only" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-best", text: "BEST", tag: "signal" },
        { id: "k-scheduled", text: "scheduled", tag: "scope" },
        { id: "k-lowcode", text: "low-code", tag: "scope" },
        { id: "k-ingestion", text: "ingestion", tag: "scope" },
        { id: "k-says", text: "says", tag: "noise" },
      ],
      requiredKeywordIds: ["k-best"],
      noiseKeywordIds: ["k-says"],
    },

    // 8 — Dependency control
    {
      id: "dp700-ingest-q-008",
      moduleId: "orchestrate",
      stem:
        "Acme must ensure Step 2 runs only if Step 1 succeeds. Which pipeline capability is being tested?",
      answers: [
        { id: "A", text: "Dependency control (activity conditions)" },
        { id: "B", text: "Streaming ingestion" },
        { id: "C", text: "No-code shaping" },
        { id: "D", text: "Dashboard visuals" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-onlyif", text: "only if", tag: "signal" },
        { id: "k-succeeds", text: "succeeds", tag: "signal" },
        { id: "k-step2", text: "Step 2 runs", tag: "scope" },
        { id: "k-step1", text: "Step 1", tag: "scope" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-onlyif", "k-succeeds"],
      noiseKeywordIds: ["k-acme"],
    },

    // 9 — Retry/resiliency indicator
    {
      id: "dp700-ingest-q-009",
      moduleId: "orchestrate",
      stem:
        "Acme needs the pipeline to retry automatically when a step fails. Which capability is required?",
      answers: [
        { id: "A", text: "Retry / resiliency configuration" },
        { id: "B", text: "Streaming latency" },
        { id: "C", text: "No-code transformation" },
        { id: "D", text: "Semantic model refresh" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-retry", text: "retry automatically", tag: "signal" },
        { id: "k-fails", text: "fails", tag: "signal" },
        { id: "k-pipeline", text: "pipeline", tag: "scope" },
        { id: "k-step", text: "step", tag: "noise" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-retry", "k-fails"],
      noiseKeywordIds: ["k-step", "k-acme"],
    },

    // 10 — No-code shaping points away from Spark
    {
      id: "dp700-ingest-q-010",
      moduleId: "dataflows",
      stem:
        "A business analyst needs a no-code UI to clean and shape data before loading it. Which feature should you recommend?",
      answers: [
        { id: "A", text: "Dataflows Gen2" },
        { id: "B", text: "Spark (code-first)" },
        { id: "C", text: "Eventstream" },
        { id: "D", text: "Real-Time Dashboard" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-business", text: "business analyst", tag: "signal" },
        { id: "k-nocodeui", text: "no-code UI", tag: "signal" },
        { id: "k-cleanshape", text: "clean and shape", tag: "signal" },
        { id: "k-before", text: "before loading", tag: "scope" },
        { id: "k-recommend", text: "recommend", tag: "noise" },
      ],
      requiredKeywordIds: ["k-nocodeui", "k-cleanshape", "k-business"],
      noiseKeywordIds: ["k-recommend"],
    },
  ],
};
