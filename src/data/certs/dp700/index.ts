import type { Cert } from "../../../game/types";
import { dp700Modules } from "./modules";
import { dp700IngestPack } from "./packs/ingest";
import { dp700SparkPack } from "./packs/spark";


export const dp700Cert: Cert = {
  id: "dp700",
  label: "DP-700",
  subtitle: "Microsoft Fabric Data Engineer",
  enabled: true,
  modules: dp700Modules,
  packs: [dp700IngestPack, dp700SparkPack],
};
