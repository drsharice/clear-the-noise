import type { Pack } from "../../../../game/types";

export const dp700RealtimePack: Pack = {
  id: "dp700-pack-realtime-01",
  title: "Real-Time Essentials (Starter)",
  moduleIds: ["realtime"],
  questions: [
    // 1 — streaming requirement
    {
      id: "dp700-rt-q-001",
      moduleId: "realtime",
      stem:
        "Acme needs dashboards to reflect device telemetry within seconds (continuous ingestion). Which Fabric feature best fits?",
      answers: [
        { id: "A", text: "Eventstream" },
        { id: "B", text: "Dataflows Gen2" },
        { id: "C", text: "Data Warehouse" },
        { id: "D", text: "Manual CSV upload" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-telemetry", text: "device telemetry", tag: "signal" },
        { id: "k-withinseconds", text: "within seconds", tag: "constraint" },
        { id: "k-continuous", text: "continuous ingestion", tag: "signal" },
        { id: "k-dashboards", text: "dashboards reflect", tag: "scope" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-withinseconds", "k-continuous", "k-telemetry"],
      noiseKeywordIds: ["k-acme"],
    },

    // 2 — not batch
    {
      id: "dp700-rt-q-002",
      moduleId: "realtime",
      stem:
        "A requirement says: “Do NOT wait for nightly batch. We need updates as events arrive.” Which approach is being tested?",
      answers: [
        { id: "A", text: "Streaming (event-driven) ingestion" },
        { id: "B", text: "Scheduled batch ingestion" },
        { id: "C", text: "Manual refresh" },
        { id: "D", text: "One-time seed load" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-notnightly", text: "Do NOT wait for nightly batch", tag: "signal" },
        { id: "k-eventsarrive", text: "as events arrive", tag: "signal" },
        { id: "k-updates", text: "need updates", tag: "signal" },
        { id: "k-requirement", text: "requirement says", tag: "noise" },
      ],
      requiredKeywordIds: ["k-notnightly", "k-eventsarrive"],
      noiseKeywordIds: ["k-requirement"],
    },

    // 3 — monitoring/alerting vibe (real-time ops)
    {
      id: "dp700-rt-q-003",
      moduleId: "realtime",
      stem:
        "Acme is monitoring live operational metrics and needs to spot spikes as they happen. Which keyword best signals a real-time scenario?",
      answers: [
        { id: "A", text: "as they happen" },
        { id: "B", text: "daily report" },
        { id: "C", text: "one time" },
        { id: "D", text: "historical archive" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-live", text: "live", tag: "signal" },
        { id: "k-spikes", text: "spot spikes", tag: "signal" },
        { id: "k-as-happen", text: "as they happen", tag: "signal" },
        { id: "k-monitoring", text: "monitoring", tag: "scope" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-as-happen", "k-live"],
      noiseKeywordIds: ["k-acme"],
    },

    // 4 — latency sensitivity
    {
      id: "dp700-rt-q-004",
      moduleId: "realtime",
      stem:
        "Acme has a strict latency requirement: end-to-end processing must complete in under 5 seconds. What type of solution is implied?",
      answers: [
        { id: "A", text: "Real-time (low-latency) pipeline" },
        { id: "B", text: "Nightly batch pipeline" },
        { id: "C", text: "Manual export/import" },
        { id: "D", text: "Spreadsheet workflow" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-under5", text: "under 5 seconds", tag: "constraint" },
        { id: "k-latency", text: "latency requirement", tag: "signal" },
        { id: "k-endtoend", text: "end-to-end processing", tag: "scope" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-under5", "k-latency"],
      noiseKeywordIds: ["k-acme"],
    },

    // 5 — BEST indicator (exam language)
    {
      id: "dp700-rt-q-005",
      moduleId: "realtime",
      stem:
        "A DP-700 question says: “Choose the BEST option for near real-time ingestion.” What does BEST signal?",
      answers: [
        { id: "A", text: "Best-practice selection (not just any valid choice)" },
        { id: "B", text: "Pick the first option listed" },
        { id: "C", text: "Any option works" },
        { id: "D", text: "Choose the cheapest option only" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-best", text: "BEST", tag: "signal" },
        { id: "k-near", text: "near real-time", tag: "scope" },
        { id: "k-ingest", text: "ingestion", tag: "scope" },
        { id: "k-says", text: "says", tag: "noise" },
      ],
      requiredKeywordIds: ["k-best"],
      noiseKeywordIds: ["k-says"],
    },
  ],
};
