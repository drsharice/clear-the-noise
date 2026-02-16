import type { Pack } from "../../../../game/types";

export const dp700IngestPack: Pack = {
  id: "dp700-pack-ingest-01",
  title: "Ingest Essentials (Starter)",
  moduleIds: ["ingest", "dataflows", "orchestrate"],
  questions: [
    {
      id: "dp700-q-001",
      moduleId: "dataflows",
      stem: "Which keyword best indicates the question is asking you to identify a drawback?",
      answers: [
        { id: "A", text: "Which" },
        { id: "B", text: "Following" },
        { id: "C", text: "Limitation" },
        { id: "D", text: "Dataflows Gen2" },
      ],
      correctAnswerId: "C",
      keywords: [
        { id: "k-which", text: "Which", tag: "noise" },
        { id: "k-following", text: "following", tag: "noise" },
        { id: "k-limitation", text: "limitation", tag: "signal" },
        { id: "k-scope", text: "Dataflows Gen2", tag: "scope" },
      ],
      requiredKeywordIds: ["k-limitation"],
      noiseKeywordIds: ["k-which", "k-following"],
    },

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
        A: "Eventstream implies real-time streaming; the requirement is scheduled ingestion.",
        C: "Dashboards visualize; they do not perform ingestion + transformation.",
        D: "Notebook-only is not the best low-code option.",
      },
    },
  ],
};
