import type { Pack } from "../../../../game/types";

export const dp700WarehousePack: Pack = {
  id: "dp700-pack-warehouse-01",
  title: "Warehouse Essentials (Starter)",
  moduleIds: ["warehouse"],
  questions: [
    // 1 — Choose Warehouse for SQL + star schema + BI
    {
      id: "dp700-warehouse-q-001",
      moduleId: "warehouse",
      stem:
        "Acme’s BI team needs a SQL-first analytics store with modeled tables (facts/dimensions) for reporting. Which Fabric item best fits?",
      answers: [
        { id: "A", text: "Data Warehouse" },
        { id: "B", text: "Eventstream" },
        { id: "C", text: "Real-Time Dashboard" },
        { id: "D", text: "Dataflow Gen2" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-sqlfirst", text: "SQL-first", tag: "signal" },
        { id: "k-modeled", text: "modeled tables", tag: "signal" },
        { id: "k-factdim", text: "facts/dimensions", tag: "signal" },
        { id: "k-reporting", text: "reporting", tag: "signal" },
        { id: "k-biteam", text: "BI team", tag: "scope" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-sqlfirst", "k-factdim", "k-reporting"],
      noiseKeywordIds: ["k-acme"],
    },

    // 2 — Need transactional-style updates in warehouse context
    {
      id: "dp700-warehouse-q-002",
      moduleId: "warehouse",
      stem:
        "Acme needs to support frequent SQL updates to curated analytics tables and enforce strong consistency for reporting. Which signal words point to a Warehouse approach?",
      answers: [
        { id: "A", text: "Data Warehouse" },
        { id: "B", text: "Lakehouse" },
        { id: "C", text: "Eventstream" },
        { id: "D", text: "Real-Time Dashboard" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-frequpdates", text: "frequent SQL updates", tag: "signal" },
        { id: "k-curated", text: "curated analytics tables", tag: "signal" },
        { id: "k-consistency", text: "strong consistency", tag: "signal" },
        { id: "k-reporting", text: "for reporting", tag: "signal" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-frequpdates", "k-consistency", "k-reporting"],
      noiseKeywordIds: ["k-acme"],
    },

    // 3 — “Best” indicator
    {
      id: "dp700-warehouse-q-003",
      moduleId: "warehouse",
      stem:
        "A DP-700 question says: “Choose the BEST option for a SQL-first analytics store used by BI.” What does BEST signal?",
      answers: [
        { id: "A", text: "Best-practice selection (not just any valid choice)" },
        { id: "B", text: "Pick the first option listed" },
        { id: "C", text: "Any option works" },
        { id: "D", text: "Choose the cheapest option only" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-best", text: "BEST", tag: "signal" },
        { id: "k-sqlfirst", text: "SQL-first", tag: "scope" },
        { id: "k-analytics", text: "analytics store", tag: "scope" },
        { id: "k-bi", text: "used by BI", tag: "scope" },
        { id: "k-says", text: "says", tag: "noise" },
      ],
      requiredKeywordIds: ["k-best"],
      noiseKeywordIds: ["k-says"],
    },

    // 4 — Warehouse vs streaming
    {
      id: "dp700-warehouse-q-004",
      moduleId: "warehouse",
      stem:
        "Acme wants users to run ad-hoc SQL queries over curated reporting tables (not streaming telemetry). Which destination best fits?",
      answers: [
        { id: "A", text: "Data Warehouse" },
        { id: "B", text: "Eventstream" },
        { id: "C", text: "KQL Database" },
        { id: "D", text: "Real-Time Dashboard" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-adhocsql", text: "ad-hoc SQL queries", tag: "signal" },
        { id: "k-curated", text: "curated reporting tables", tag: "signal" },
        { id: "k-notstreaming", text: "not streaming", tag: "signal" },
        { id: "k-telemetry", text: "telemetry", tag: "noise" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-adhocsql", "k-curated", "k-notstreaming"],
      noiseKeywordIds: ["k-telemetry", "k-acme"],
    },

    // 5 — Modeled layer emphasis
    {
      id: "dp700-warehouse-q-005",
      moduleId: "warehouse",
      stem:
        "Acme is designing a star schema for consistent metrics across reports. Which requirement is being emphasized?",
      answers: [
        { id: "A", text: "Modeled relational layer for BI" },
        { id: "B", text: "Event-driven ingestion" },
        { id: "C", text: "Notebook experimentation" },
        { id: "D", text: "Real-time dashboards only" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-starschema", text: "star schema", tag: "signal" },
        { id: "k-consistent", text: "consistent metrics", tag: "signal" },
        { id: "k-acrossreports", text: "across reports", tag: "signal" },
        { id: "k-designing", text: "designing", tag: "noise" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-starschema", "k-consistent", "k-acrossreports"],
      noiseKeywordIds: ["k-designing", "k-acme"],
    },

    // 6 — Separation of concerns: curated SQL serving
    {
      id: "dp700-warehouse-q-006",
      moduleId: "warehouse",
      stem:
        "Acme wants a curated SQL serving layer so analysts can query trusted tables without handling raw files. Which Fabric item best supports this pattern?",
      answers: [
        { id: "A", text: "Data Warehouse" },
        { id: "B", text: "Eventstream" },
        { id: "C", text: "Real-Time Dashboard" },
        { id: "D", text: "Notebook only" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-curated", text: "curated SQL serving layer", tag: "signal" },
        { id: "k-analysts", text: "analysts can query", tag: "signal" },
        { id: "k-trusted", text: "trusted tables", tag: "signal" },
        { id: "k-withoutraw", text: "without handling raw files", tag: "signal" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-curated", "k-trusted", "k-withoutraw"],
      noiseKeywordIds: ["k-acme"],
    },
  ],
};
