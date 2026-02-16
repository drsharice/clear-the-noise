import type { Pack } from "../../../../game/types";

export const dp700IngestPack: Pack = {
  id: "dp700-pack-ingest-01",
  title: "Ingest Essentials (Starter)",
  moduleIds: ["ingest", "dataflows", "orchestrate"],
  questions: [
    // 1
    {
  id: "dp700-q-001",
  moduleId: "dataflows",
  stem:
    "Which of the following is a limitation of using Dataflows Gen2 in Microsoft Fabric?",
  answers: [
    { id: "A", text: "They support low-code transformations." },
    { id: "B", text: "They are designed primarily for batch processing." },
    { id: "C", text: "They integrate with Power Query." },
    { id: "D", text: "They can connect to external data sources." },
  ],
  correctAnswerId: "B",
  keywords: [
    { id: "k-which", text: "Which", tag: "noise" },
    { id: "k-following", text: "following", tag: "noise" },
    { id: "k-limitation", text: "limitation", tag: "signal" },
    { id: "k-dataflows", text: "Dataflows Gen2", tag: "scope" },
    { id: "k-fabric", text: "Microsoft Fabric", tag: "scope" },
  ],
  requiredKeywordIds: ["k-limitation", "k-dataflows"],
  noiseKeywordIds: ["k-which", "k-following"],
}
,

    // 2
    {
      id: "dp700-q-002",
      moduleId: "dataflows",
      stem:
        "You need a low-code way to ingest and transform data on a schedule in Microsoft Fabric. Which option best fits?",
      answers: [
        { id: "A", text: "Eventstream" },
        { id: "B", text: "Dataflows Gen2" },
        { id: "C", text: "Real-Time Dashboard only" },
        { id: "D", text: "Notebook-only ingestion" },
      ],
      correctAnswerId: "B",
      keywords: [
        { id: "k-lowcode", text: "low-code", tag: "signal" },
        { id: "k-ingest", text: "ingest", tag: "signal" },
        { id: "k-transform", text: "transform", tag: "signal" },
        { id: "k-schedule", text: "on a schedule", tag: "constraint" },
        { id: "k-fabric", text: "Microsoft Fabric", tag: "scope" },
        { id: "k-realtime", text: "real-time", tag: "noise" },
      ],
      requiredKeywordIds: ["k-lowcode", "k-schedule", "k-fabric"],
      noiseKeywordIds: ["k-realtime"],
      distractorKillerKeywordIds: ["k-schedule", "k-lowcode"],
      distractorReasons: {
        A: "Eventstream is oriented to real-time streaming; the requirement is scheduled ingestion.",
        C: "Dashboards visualize; they do not perform ingestion + transformation.",
        D: "Notebook-only is not the best low-code option.",
      },
    },

    // 3
    {
      id: "dp700-q-003",
      moduleId: "orchestrate",
      stem:
        "You need to coordinate multiple steps (ingestion → transform → load) and run them in the correct order. What keyword tells you orchestration matters most?",
      answers: [
        { id: "A", text: "Coordinate" },
        { id: "B", text: "Multiple steps" },
        { id: "C", text: "Correct order" },
        { id: "D", text: "All of the above" },
      ],
      correctAnswerId: "D",
      keywords: [
        { id: "k-coordinate", text: "coordinate", tag: "signal" },
        { id: "k-steps", text: "multiple steps", tag: "signal" },
        { id: "k-order", text: "correct order", tag: "signal" },
        { id: "k-ingest", text: "ingestion", tag: "scope" },
        { id: "k-transform", text: "transform", tag: "scope" },
        { id: "k-load", text: "load", tag: "scope" },
      ],
      requiredKeywordIds: ["k-coordinate", "k-steps", "k-order"],
      noiseKeywordIds: [],
    },

    // 4
    {
      id: "dp700-q-004",
      moduleId: "ingest",
      stem:
        "You must ingest data from an external source and store it for analytics in Fabric. Which keyword most strongly implies persistence is required?",
      answers: [
        { id: "A", text: "External source" },
        { id: "B", text: "Store it" },
        { id: "C", text: "Which" },
        { id: "D", text: "Ingest" },
      ],
      correctAnswerId: "B",
      keywords: [
        { id: "k-external", text: "external source", tag: "scope" },
        { id: "k-store", text: "store it", tag: "signal" },
        { id: "k-which", text: "Which", tag: "noise" },
        { id: "k-ingest", text: "ingest", tag: "signal" },
        { id: "k-analytics", text: "analytics", tag: "scope" },
      ],
      requiredKeywordIds: ["k-store"],
      noiseKeywordIds: ["k-which"],
    },

    // 5
    {
      id: "dp700-q-005",
      moduleId: "dataflows",
      stem:
        "A user says: “I want a no-code way to clean and shape data for a dataset.” Which keyword points you to a Power Query-style tool?",
      answers: [
        { id: "A", text: "No-code" },
        { id: "B", text: "Clean and shape" },
        { id: "C", text: "Dataset" },
        { id: "D", text: "All of the above" },
      ],
      correctAnswerId: "D",
      keywords: [
        { id: "k-nocode", text: "no-code", tag: "signal" },
        { id: "k-clean", text: "clean", tag: "signal" },
        { id: "k-shape", text: "shape", tag: "signal" },
        { id: "k-dataset", text: "dataset", tag: "scope" },
        { id: "k-user", text: "user says", tag: "noise" },
      ],
      requiredKeywordIds: ["k-nocode", "k-clean", "k-shape"],
      noiseKeywordIds: ["k-user"],
    },

    // 6
    {
      id: "dp700-q-006",
      moduleId: "orchestrate",
      stem:
        "You need the pipeline to run every night at 1:00 AM and retry automatically if a step fails. Which phrase is the strongest scheduling indicator?",
      answers: [
        { id: "A", text: "Run every night at 1:00 AM" },
        { id: "B", text: "Retry automatically" },
        { id: "C", text: "Step fails" },
        { id: "D", text: "Pipeline" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-nightly", text: "every night at 1:00 AM", tag: "constraint" },
        { id: "k-retry", text: "retry automatically", tag: "signal" },
        { id: "k-fails", text: "fails", tag: "noise" },
        { id: "k-pipeline", text: "pipeline", tag: "scope" },
      ],
      requiredKeywordIds: ["k-nightly"],
      noiseKeywordIds: ["k-fails"],
    },

    // 7
    {
      id: "dp700-q-007",
      moduleId: "dataflows",
      stem:
        "You are choosing between real-time streaming and batch ingestion. Which keyword most strongly pushes you toward streaming?",
      answers: [
        { id: "A", text: "On a schedule" },
        { id: "B", text: "Near real-time" },
        { id: "C", text: "Daily" },
        { id: "D", text: "Batch" },
      ],
      correctAnswerId: "B",
      keywords: [
        { id: "k-near", text: "near real-time", tag: "signal" },
        { id: "k-schedule", text: "on a schedule", tag: "noise" },
        { id: "k-daily", text: "daily", tag: "noise" },
        { id: "k-batch", text: "batch", tag: "noise" },
      ],
      requiredKeywordIds: ["k-near"],
      noiseKeywordIds: ["k-schedule", "k-daily", "k-batch"],
    },

    // 8
    {
      id: "dp700-q-008",
      moduleId: "ingest",
      stem:
        "You need to ingest a large file one time to seed a dataset, then use incremental updates later. Which keyword points to the one-time load?",
      answers: [
        { id: "A", text: "Large file" },
        { id: "B", text: "One time" },
        { id: "C", text: "Later" },
        { id: "D", text: "Incremental" },
      ],
      correctAnswerId: "B",
      keywords: [
        { id: "k-large", text: "large file", tag: "scope" },
        { id: "k-onetime", text: "one time", tag: "signal" },
        { id: "k-later", text: "later", tag: "noise" },
        { id: "k-incremental", text: "incremental", tag: "constraint" },
      ],
      requiredKeywordIds: ["k-onetime"],
      noiseKeywordIds: ["k-later"],
    },

    // 9
    {
      id: "dp700-q-009",
      moduleId: "orchestrate",
      stem:
        "You must ensure step 2 only runs if step 1 succeeds. Which keyword best indicates dependency control?",
      answers: [
        { id: "A", text: "Ensure" },
        { id: "B", text: "Only runs if" },
        { id: "C", text: "Step 2" },
        { id: "D", text: "Must" },
      ],
      correctAnswerId: "B",
      keywords: [
        { id: "k-ensure", text: "ensure", tag: "noise" },
        { id: "k-onlyif", text: "only runs if", tag: "signal" },
        { id: "k-step2", text: "step 2", tag: "noise" },
        { id: "k-must", text: "must", tag: "constraint" },
      ],
      requiredKeywordIds: ["k-onlyif"],
      noiseKeywordIds: ["k-ensure", "k-step2"],
    },

    // 10
    {
      id: "dp700-q-010",
      moduleId: "dataflows",
      stem:
        "A question says: “Choose the BEST option.” Which keyword tells you it’s asking for the most appropriate choice (not just any correct one)?",
      answers: [
        { id: "A", text: "Choose" },
        { id: "B", text: "BEST" },
        { id: "C", text: "Option" },
        { id: "D", text: "Says" },
      ],
      correctAnswerId: "B",
      keywords: [
        { id: "k-choose", text: "choose", tag: "noise" },
        { id: "k-best", text: "BEST", tag: "signal" },
        { id: "k-option", text: "option", tag: "noise" },
        { id: "k-says", text: "says", tag: "noise" },
      ],
      requiredKeywordIds: ["k-best"],
      noiseKeywordIds: ["k-choose", "k-option", "k-says"],
    },

    // 11
    {
      id: "dp700-q-011",
      moduleId: "ingest",
      stem:
        "The requirement says: “Minimize code.” Which phrase most strongly indicates a preference for a GUI-driven approach?",
      answers: [
        { id: "A", text: "Minimize code" },
        { id: "B", text: "Requirement says" },
        { id: "C", text: "Most strongly" },
        { id: "D", text: "Preference" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-mincode", text: "minimize code", tag: "signal" },
        { id: "k-require", text: "requirement", tag: "noise" },
        { id: "k-strong", text: "most strongly", tag: "noise" },
        { id: "k-prefer", text: "preference", tag: "noise" },
      ],
      requiredKeywordIds: ["k-mincode"],
      noiseKeywordIds: ["k-require", "k-strong", "k-prefer"],
    },

    // 12
    {
      id: "dp700-q-012",
      moduleId: "orchestrate",
      stem:
        "You need to trigger an ingestion job when a file lands in storage. Which keyword suggests an event-based trigger?",
      answers: [
        { id: "A", text: "Every night" },
        { id: "B", text: "When a file lands" },
        { id: "C", text: "Ingestion job" },
        { id: "D", text: "Storage" },
      ],
      correctAnswerId: "B",
      keywords: [
        { id: "k-everynight", text: "every night", tag: "noise" },
        { id: "k-whenlands", text: "when a file lands", tag: "signal" },
        { id: "k-job", text: "ingestion job", tag: "scope" },
        { id: "k-storage", text: "storage", tag: "scope" },
      ],
      requiredKeywordIds: ["k-whenlands"],
      noiseKeywordIds: ["k-everynight"],
      distractorKillerKeywordIds: ["k-whenlands"],
      distractorReasons: {
        A: "A scheduled trigger is different from an event-based trigger.",
      },
    },
  ],
};
