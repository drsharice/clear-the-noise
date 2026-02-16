import type { Cert } from "../../../game/types";
import { dp700Modules } from "./modules";
import { dp700IngestPack } from "./packs/ingest";
import { dp700SparkPack } from "./packs/spark";
import { dp700LakehousePack } from "./packs/lakehouse";
import { dp700RealtimePack } from "./packs/realtime";
import { dp700WarehousePack } from "./packs/warehouse";
import {dp700GovernancePack} from "./packs/governance";


export const dp700Cert: Cert = {
  id: "dp700",
  label: "DP-700",
  subtitle: "Microsoft Fabric Data Engineer",
  enabled: true,
  modules: dp700Modules,
  packs: [dp700IngestPack, dp700SparkPack, dp700LakehousePack, dp700RealtimePack, dp700WarehousePack, dp700GovernancePack],
};
