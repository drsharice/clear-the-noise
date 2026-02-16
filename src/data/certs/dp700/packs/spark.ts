import type { Pack } from "../../../../game/types";

export const dp700SparkPack: Pack = {
  id: "dp700-pack-spark-01",
  title: "Spark Essentials (Starter)",
  moduleIds: ["spark"],
  questions: [
    // 1
    {
      id: "dp700-spark-q-001",
      moduleId: "spark",
      stem:
        "Acme needs to run code-based transformations on millions of rows and reuse the logic daily. Which Fabric compute option should they use?",
      answers: [
        { id: "A", text: "Spark" },
        { id: "B", text: "Dataflows Gen2" },
        { id: "C", text: "Real-Time Dashboard" },
        { id: "D", text: "Data Warehouse" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-codebased", text: "code-based", tag: "signal" },
        { id: "k-millions", text: "millions of rows", tag: "signal" },
        { id: "k-reuse", text: "reuse the logic", tag: "signal" },
        { id: "k-daily", text: "daily", tag: "constraint" },
        { id: "k-acme", text: "Acme", tag: "noise" },
        { id: "k-which", text: "Which", tag: "noise" },
      ],
      requiredKeywordIds: ["k-codebased", "k-millions", "k-reuse"],
      noiseKeywordIds: ["k-acme", "k-which"],
    },

    // 2
    {
      id: "dp700-spark-q-002",
      moduleId: "spark",
      stem:
        "A data engineer wants to explore data interactively and run code in small steps while seeing results immediately. Which tool best fits?",
      answers: [
        { id: "A", text: "Notebook (Spark)" },
        { id: "B", text: "Data Warehouse" },
        { id: "C", text: "Eventstream" },
        { id: "D", text: "Real-Time Dashboard" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-interactive", text: "interactively", tag: "signal" },
        { id: "k-smallsteps", text: "small steps", tag: "signal" },
        { id: "k-immediate", text: "immediately", tag: "signal" },
        { id: "k-explore", text: "explore", tag: "signal" },
        { id: "k-engineer", text: "data engineer", tag: "noise" },
        { id: "k-wants", text: "wants", tag: "noise" },
      ],
      requiredKeywordIds: ["k-interactive", "k-smallsteps", "k-immediate"],
      noiseKeywordIds: ["k-engineer", "k-wants"],
    },

    // 3
    {
      id: "dp700-spark-q-003",
      moduleId: "spark",
      stem:
        "Acme must minimize compute cost for ad-hoc exploration. What action best supports cost control?",
      answers: [
        { id: "A", text: "Stop the Spark session when not in use" },
        { id: "B", text: "Convert to real-time streaming" },
        { id: "C", text: "Store everything in a dashboard" },
        { id: "D", text: "Avoid using code entirely" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-minimize", text: "minimize compute cost", tag: "signal" },
        { id: "k-adhoc", text: "ad-hoc exploration", tag: "signal" },
        { id: "k-costcontrol", text: "cost control", tag: "signal" },
        { id: "k-acme", text: "Acme", tag: "noise" },
        { id: "k-must", text: "must", tag: "noise" },
      ],
      requiredKeywordIds: ["k-minimize", "k-adhoc"],
      noiseKeywordIds: ["k-acme", "k-must"],
    },

    // 4
    {
      id: "dp700-spark-q-004",
      moduleId: "spark",
      stem:
        "Acme must process data across multiple nodes to meet runtime targets. Which capability is the key requirement?",
      answers: [
        { id: "A", text: "Distributed processing" },
        { id: "B", text: "No-code UI" },
        { id: "C", text: "Real-time visualization only" },
        { id: "D", text: "Manual refresh" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-multinodes", text: "across multiple nodes", tag: "signal" },
        { id: "k-runtime", text: "runtime targets", tag: "constraint" },
        { id: "k-process", text: "process data", tag: "scope" },
        { id: "k-acme", text: "Acme", tag: "noise" },
        { id: "k-which", text: "Which", tag: "noise" },
      ],
      requiredKeywordIds: ["k-multinodes"],
      noiseKeywordIds: ["k-acme", "k-which"],
    },

    // 5
    {
      id: "dp700-spark-q-005",
      moduleId: "spark",
      stem:
        "Acme needs to join multiple very large tables and keep performance high. Which approach should you prioritize first?",
      answers: [
        { id: "A", text: "Optimize data layout and partitioning strategy" },
        { id: "B", text: "Move the logic into a dashboard" },
        { id: "C", text: "Use only manual steps" },
        { id: "D", text: "Convert to a no-code flow" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-join", text: "join", tag: "signal" },
        { id: "k-verylarge", text: "very large tables", tag: "signal" },
        { id: "k-performance", text: "keep performance high", tag: "signal" },
        { id: "k-acme", text: "Acme", tag: "noise" },
        { id: "k-first", text: "first", tag: "noise" },
      ],
      requiredKeywordIds: ["k-join", "k-verylarge", "k-performance"],
      noiseKeywordIds: ["k-acme", "k-first"],
    },

    // 6
    {
      id: "dp700-spark-q-006",
      moduleId: "spark",
      stem:
        "Acme ingests JSON with nested fields and needs to parse and transform it at scale. Which Fabric option best fits?",
      answers: [
        { id: "A", text: "Spark" },
        { id: "B", text: "Real-Time Dashboard" },
        { id: "C", text: "Data Warehouse" },
        { id: "D", text: "Power BI semantic model" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-json", text: "JSON", tag: "signal" },
        { id: "k-nested", text: "nested fields", tag: "signal" },
        { id: "k-parse", text: "parse", tag: "signal" },
        { id: "k-scale", text: "at scale", tag: "signal" },
        { id: "k-acme", text: "Acme", tag: "noise" },
      ],
      requiredKeywordIds: ["k-json", "k-nested", "k-scale"],
      noiseKeywordIds: ["k-acme"],
    },

    // 7
    {
      id: "dp700-spark-q-007",
      moduleId: "spark",
      stem:
        "A business user requests a no-code way to clean and shape data. Which feature is the better first choice than Spark?",
      answers: [
        { id: "A", text: "Dataflows Gen2" },
        { id: "B", text: "Spark" },
        { id: "C", text: "Eventstream" },
        { id: "D", text: "Real-Time Dashboard" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-nocode", text: "no-code", tag: "signal" },
        { id: "k-clean", text: "clean and shape", tag: "signal" },
        { id: "k-business", text: "business user", tag: "signal" },
        { id: "k-requests", text: "requests", tag: "noise" },
        { id: "k-first", text: "first choice", tag: "noise" },
      ],
      requiredKeywordIds: ["k-nocode", "k-clean", "k-business"],
      noiseKeywordIds: ["k-requests", "k-first"],
    },

    // 8
    {
      id: "dp700-spark-q-008",
      moduleId: "spark",
      stem:
        "A DP-700 question says: “Choose the BEST option for large-scale code-based transformations.” What does BEST signal?",
      answers: [
        { id: "A", text: "Best-practice selection (not just any valid option)" },
        { id: "B", text: "Pick the first option listed" },
        { id: "C", text: "Any option works" },
        { id: "D", text: "Choose the cheapest option only" },
      ],
      correctAnswerId: "A",
      keywords: [
        { id: "k-best", text: "BEST", tag: "signal" },
        { id: "k-large", text: "large-scale", tag: "scope" },
        { id: "k-code", text: "code-based", tag: "scope" },
        { id: "k-transform", text: "transformations", tag: "scope" },
        { id: "k-says", text: "says", tag: "noise" },
      ],
      requiredKeywordIds: ["k-best"],
      noiseKeywordIds: ["k-says"],
    },
  ],
};
