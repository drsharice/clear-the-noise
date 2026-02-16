import type { Cert } from "../../game/types";
import { dp700Cert } from "./dp700";

export const CERTS: Cert[] = [
  dp700Cert,
  { id: "dp203", label: "DP-203", subtitle: "Azure Data Engineer", enabled: false, modules: [], packs: [] },
  { id: "ai102", label: "AI-102", subtitle: "Azure AI Engineer", enabled: false, modules: [], packs: [] },
];
