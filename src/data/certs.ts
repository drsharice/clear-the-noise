export type ModuleItem = { title: string };

export type Cert = {
  id: string;
  label: string;
  subtitle: string;
  enabled: boolean;
  modules: ModuleItem[];
};

export const CERTS: Cert[] = [
  {
    id: "dp700",
    label: "DP-700",
    subtitle: "Microsoft Fabric Data Engineer",
    enabled: true,
    modules: [
      { title: "Ingest data with Microsoft Fabric" },
      { title: "Ingest Data with Dataflows Gen2 in Microsoft Fabric" },
      { title: "Orchestrate processes and data movement with Microsoft Fabric" },
      { title: "Use Apache Spark in Microsoft Fabric" },
      { title: "Work with real-time data in an Event house in Microsoft Fabric" },
      { title: "Implement a Lakehouse with Microsoft Fabric" },
      { title: "Introduction to end-to-end analytics using Microsoft Fabric" },
      { title: "Get started with Lakehouse’s in Microsoft Fabric" },
      { title: "Work with Delta Lake tables in Microsoft Fabric" },
      { title: "Organize a Fabric lakehouse using medallion architecture design" },
      { title: "Implement Real-Time Intelligence with Microsoft Fabric" },
      { title: "Get started with Real-Time Intelligence in Microsoft Fabric" },
      { title: "Use Eventstream in Microsoft Fabric" },
      { title: "Work with real-time data in an Eventhouse in Microsoft Fabric" },
      { title: "Create Real-Time Dashboards with Microsoft Fabric" },
      { title: "Use Activator in Microsoft Fabric" },
      { title: "Implement a data warehouse with Microsoft Fabric" },
      { title: "Get started with data warehouse in Microsoft Fabric" },
      { title: "Load data into a Microsoft Fabric data warehouse" },
      { title: "Query a data warehouse in Microsoft Fabric" },
      { title: "Monitor a Microsoft Fabric data warehouse" },
      { title: "Secure a Microsoft Fabric data warehouse" },
      { title: "Manage a Microsoft Fabric environment" },
      { title: "Implement continuous integration and continuous delivery (CI/CD) in Microsoft Fabric" },
      { title: "Monitor activities in Microsoft Fabric" },
      { title: "Secure data access in Microsoft Fabric" },
      { title: "Administer a Microsoft Fabric environment" }
    ]
  },

  // Future certs (disabled placeholders)
  { id: "dp203", label: "DP-203", subtitle: "Azure Data Engineer", enabled: false, modules: [] },
  { id: "ai102", label: "AI-102", subtitle: "Azure AI Engineer", enabled: false, modules: [] }
];
