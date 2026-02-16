import type { Pack } from "../../../../game/types";

export const dp700SparkPack: Pack = {
  id: "dp700-pack-spark-01",
  title: "Spark Essentials (Starter)",
  moduleIds: ["spark"],
  questions: [
    {
      id: "dp700-spark-q-001",
      moduleId: "spark",
      stem:
        "You need to perform large-scale transformations using code and reuse the logic across runs. Which keyword most strongly points to Spark?",
      answers: [
        { id: "A", text: "Large-scale transformations" },
        { id: "B", text: "Using code" },
        { id: "C", text: "Reuse across runs" },
        { id: "D", text: "All of the above" },
      ],
      correctAnswerId: "D",
      keywords: [
        { id: "k-large", text: "large-scale", tag: "signal" },
        { id: "k-transform", text: "transformations", tag: "signal" },
        { id: "k-code", text: "using code", tag: "signal" },
        { id: "k-reuse", text: "reuse", tag: "signal" },
        { id: "k-runs", text: "across runs", tag: "signal" },
        { id: "k-which", text: "Which", tag: "noise" },
      ],
      requiredKeywordIds: ["k-large", "k-code", "k-reuse"],
      noiseKeywordIds: ["k-which"],
    },

    {
      id: "dp700-spark-q-002",
      moduleId: "spark",
      stem:
        "You want to interactively explore a dataset and run code in small steps while seeing results immediately. Which term most strongly suggests a Notebook?",
      answers: [
        { id: "A", text: "Interactively" },
        { id: "B", text: "Explore" },
        { id: "C", text: "Run code in small steps" },
        { id: "D", text: "All of the above" },
      ],
      correctAnswerId: "D",
      keywords: [
        { id: "k-interactive", text: "interactively", tag: "signal" },
        { id: "k-explore", text: "explore", tag: "signal" },
        { id: "k-smallsteps", text: "small steps", tag: "signal" },
        { id: "k-immediate", text: "immediately", tag: "signal" },
        { id: "k-dataset", text: "dataset", tag: "scope" },
      ],
      requiredKeywordIds: ["k-interactive", "k-smallsteps", "k-immediate"],
      noiseKeywordIds: [],
    },

    {
      id: "dp700-spark-q-003",
      moduleId: "spark",
      stem:
        "A requirement states: “Minimize compute cost.” Which keyword should make you think about stopping the session when not in use?",
      answers: [
        { id: "A", text: "Requirement" },
        { id: "B", text: "Minimize" },
        { id: "C", text: "Compute cost" },
        { id: "D", text: "States" },
      ],
      correctAnswerId: "C",
      keywords: [
        { id: "k-minimize", text: "minimize", tag: "signal" },
        { id: "k-compute", text: "compute cost", tag: "signal" },
        { id: "k-require", text: "requirement", tag: "noise" },
        { id: "k-states", text: "states", tag: "noise" },
      ],
      requiredKeywordIds: ["k-compute"],
      noiseKeywordIds: ["k-require", "k-states"],
    },

    {
      id: "dp700-spark-q-004",
      moduleId: "spark",
      stem:
        "You need to read structured data and apply transformations using a distributed engine. Which keyword most strongly indicates distributed processing?",
      answers: [
        { id: "A", text: "Read structured data" },
        { id: "B", text: "Apply transformations" },
        { id: "C", text: "Distributed engine" },
        { id: "D", text: "Need" },
      ],
      correctAnswerId: "C",
      keywords: [
        { id: "k-distributed", text: "distributed", tag: "signal" },
        { id: "k-engine", text: "engine", tag: "signal" },
        { id: "k-structured", text: "structured data", tag: "scope" },
        { id: "k-transform", text: "transformations", tag: "signal" },
        { id: "k-need", text: "need", tag: "noise" },
      ],
      requiredKeywordIds: ["k-distributed"],
      noiseKeywordIds: ["k-need"],
    },

    {
      id: "dp700-spark-q-005",
      moduleId: "spark",
      stem:
        "You need to persist transformed data in a format that supports ACID and is optimized for analytics. Which keyword points to Delta?",
      answers: [
        { id: "A", text: "Persist" },
        { id: "B", text: "ACID" },
        { id: "C", text: "Optimized for analytics" },
        { id: "D", text: "All of the above" },
      ],
      correctAnswerId: "D",
      keywords: [
        { id: "k-persist", text: "persist", tag: "signal" },
        { id: "k-acid", text: "ACID", tag: "signal" },
        { id: "k-analytics", text: "optimized for analytics", tag: "signal" },
        { id: "k-format", text: "format", tag: "noise" },
      ],
      requiredKeywordIds: ["k-acid", "k-analytics"],
      noiseKeywordIds: ["k-format"],
    },

    {
      id: "dp700-spark-q-006",
      moduleId: "spark",
      stem:
        "You need to rerun the same transformations daily without manual steps. Which keyword most strongly suggests automation?",
      answers: [
        { id: "A", text: "Rerun" },
        { id: "B", text: "Daily" },
        { id: "C", text: "Without manual steps" },
        { id: "D", text: "All of the above" },
      ],
      correctAnswerId: "D",
      keywords: [
        { id: "k-rerun", text: "rerun", tag: "signal" },
        { id: "k-daily", text: "daily", tag: "constraint" },
        { id: "k-nomanual", text: "without manual steps", tag: "signal" },
        { id: "k-transform", text: "transformations", tag: "scope" },
      ],
      requiredKeywordIds: ["k-daily", "k-nomanual"],
      noiseKeywordIds: [],
    },

    {
      id: "dp700-spark-q-007",
      moduleId: "spark",
      stem:
        "A user asks for a no-code approach to shape data. Which keyword most strongly suggests Spark is NOT the best first choice?",
      answers: [
        { id: "A", text: "No-code" },
        { id: "B", text: "Approach" },
        { id: "C", text: "Shape" },
        { id: "D", text: "User asks" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-nocode", text: "no-code", tag: "signal" },
        { id: "k-shape", text: "shape data", tag: "scope" },
        { id: "k-user", text: "user asks", tag: "noise" },
        { id: "k-approach", text: "approach", tag: "noise" },
      ],
      requiredKeywordIds: ["k-nocode"],
      noiseKeywordIds: ["k-user", "k-approach"],
    },

    {
      id: "dp700-spark-q-008",
      moduleId: "spark",
      stem:
        "Which phrase most strongly indicates you should prioritize performance tuning in Spark?",
      answers: [
        { id: "A", text: "Small dataset" },
        { id: "B", text: "Large dataset" },
        { id: "C", text: "One-time test" },
        { id: "D", text: "Prototype" },
      ],
      correctAnswerId: "B",
      keywords: [
        { id: "k-large", text: "large dataset", tag: "signal" },
        { id: "k-small", text: "small dataset", tag: "noise" },
        { id: "k-onetime", text: "one-time test", tag: "noise" },
        { id: "k-proto", text: "prototype", tag: "noise" },
      ],
      requiredKeywordIds: ["k-large"],
      noiseKeywordIds: ["k-small", "k-onetime", "k-proto"],
    },

    {
      id: "dp700-spark-q-009",
      moduleId: "spark",
      stem:
        "The requirement says: “Use SQL for transformations.” Which keyword indicates Spark SQL might be appropriate?",
      answers: [
        { id: "A", text: "Requirement" },
        { id: "B", text: "Use SQL" },
        { id: "C", text: "Transformations" },
        { id: "D", text: "Says" },
      ],
      correctAnswerId: "B",
      keywords: [
        { id: "k-sql", text: "Use SQL", tag: "signal" },
        { id: "k-transform", text: "transformations", tag: "signal" },
        { id: "k-require", text: "requirement", tag: "noise" },
        { id: "k-says", text: "says", tag: "noise" },
      ],
      requiredKeywordIds: ["k-sql"],
      noiseKeywordIds: ["k-require", "k-says"],
    },

    {
      id: "dp700-spark-q-010",
      moduleId: "spark",
      stem:
        "You need to join multiple large tables efficiently. Which keyword most strongly indicates you should consider partitioning strategy?",
      answers: [
        { id: "A", text: "Join" },
        { id: "B", text: "Multiple" },
        { id: "C", text: "Large tables" },
        { id: "D", text: "Efficiently" },
      ],
      correctAnswerId: "C",
      keywords: [
        { id: "k-join", text: "join", tag: "scope" },
        { id: "k-large", text: "large tables", tag: "signal" },
        { id: "k-efficient", text: "efficiently", tag: "signal" },
        { id: "k-multiple", text: "multiple", tag: "noise" },
      ],
      requiredKeywordIds: ["k-large", "k-efficient"],
      noiseKeywordIds: ["k-multiple"],
    },

    {
      id: "dp700-spark-q-011",
      moduleId: "spark",
      stem:
        "Which keyword tells you the question is asking for a best-practice choice rather than any working option?",
      answers: [
        { id: "A", text: "Choose" },
        { id: "B", text: "Best" },
        { id: "C", text: "Option" },
        { id: "D", text: "Working" },
      ],
      correctAnswerId: "B",
      keywords: [
        { id: "k-best", text: "best", tag: "signal" },
        { id: "k-choose", text: "choose", tag: "noise" },
        { id: "k-option", text: "option", tag: "noise" },
        { id: "k-working", text: "working", tag: "noise" },
      ],
      requiredKeywordIds: ["k-best"],
      noiseKeywordIds: ["k-choose", "k-option", "k-working"],
    },

    {
      id: "dp700-spark-q-012",
      moduleId: "spark",
      stem:
        "You want to store transformed outputs so they can be queried later by other tools. Which keyword implies downstream consumption?",
      answers: [
        { id: "A", text: "Store outputs" },
        { id: "B", text: "Queried later" },
        { id: "C", text: "Other tools" },
        { id: "D", text: "All of the above" },
      ],
      correctAnswerId: "D",
      keywords: [
        { id: "k-store", text: "store outputs", tag: "signal" },
        { id: "k-later", text: "queried later", tag: "signal" },
        { id: "k-tools", text: "other tools", tag: "signal" },
        { id: "k-want", text: "want", tag: "noise" },
      ],
      requiredKeywordIds: ["k-store", "k-later"],
      noiseKeywordIds: ["k-want"],
    },

    {
      id: "dp700-spark-q-013",
      moduleId: "spark",
      stem:
        "Your dataset includes semi-structured data (nested fields). Which keyword should push you toward Spark-based parsing?",
      answers: [
        { id: "A", text: "Semi-structured" },
        { id: "B", text: "Nested fields" },
        { id: "C", text: "Includes" },
        { id: "D", text: "All of the above" },
      ],
      correctAnswerId: "D",
      keywords: [
        { id: "k-semi", text: "semi-structured", tag: "signal" },
        { id: "k-nested", text: "nested fields", tag: "signal" },
        { id: "k-includes", text: "includes", tag: "noise" },
      ],
      requiredKeywordIds: ["k-semi", "k-nested"],
      noiseKeywordIds: ["k-includes"],
    },

    {
      id: "dp700-spark-q-014",
      moduleId: "spark",
      stem:
        "A job must complete within a strict time window. Which keyword most strongly indicates latency sensitivity?",
      answers: [
        { id: "A", text: "Must" },
        { id: "B", text: "Strict time window" },
        { id: "C", text: "Complete" },
        { id: "D", text: "Job" },
      ],
      correctAnswerId: "B",
      keywords: [
        { id: "k-window", text: "strict time window", tag: "constraint" },
        { id: "k-must", text: "must", tag: "noise" },
        { id: "k-complete", text: "complete", tag: "noise" },
        { id: "k-job", text: "job", tag: "scope" },
      ],
      requiredKeywordIds: ["k-window"],
      noiseKeywordIds: ["k-must", "k-complete"],
    },

    {
      id: "dp700-spark-q-015",
      moduleId: "spark",
      stem:
        "A teammate says: “We can just do it in Excel.” Which keyword tells you this is likely beyond a desktop tool?",
      answers: [
        { id: "A", text: "We can" },
        { id: "B", text: "Just" },
        { id: "C", text: "Large-scale" },
        { id: "D", text: "Excel" },
      ],
      correctAnswerId: "C",
      keywords: [
        { id: "k-large", text: "large-scale", tag: "signal" },
        { id: "k-excel", text: "Excel", tag: "noise" },
        { id: "k-just", text: "just", tag: "noise" },
        { id: "k-wecan", text: "we can", tag: "noise" },
      ],
      requiredKeywordIds: ["k-large"],
      noiseKeywordIds: ["k-excel", "k-just", "k-wecan"],
      distractorKillerKeywordIds: ["k-large"],
      distractorReasons: {
        D: "Excel is not designed for distributed, large-scale transformations.",
      },
    },
  ],
};
