import type {
  CaseStudy,
  CodeSnippet,
  MethodologyStep,
  ProjectHeader,
} from "@/lib/projects/types";

// TODO: replace placeholder data-pipelines copy with real project content before launch.
export const header: ProjectHeader = {
  eyebrow: "Data Pipelines",
  title: "Moving data reliably, at scale",
  intro:
    "Ingestion, transformation, and orchestration that teams can trust — built on Databricks, Apache Airflow, and SQL across GCP and Azure. Here is how I design and operate them.",
};

export const methodology: MethodologyStep[] = [
  {
    title: "Model the contract",
    description:
      "Define source schemas, freshness, and quality expectations up front so downstream consumers have a stable contract.",
  },
  {
    title: "Build idempotent transforms",
    description:
      "Author Spark/SQL transformations that are safe to re-run, with partitioning and incremental loads for cost control.",
  },
  {
    title: "Orchestrate and backfill",
    description:
      "Schedule DAGs in Airflow with retries, alerting, and clean backfill paths for late or corrected data.",
  },
  {
    title: "Test and monitor",
    description:
      "Add data-quality checks and observability so breakages surface before they reach dashboards or models.",
  },
];

export const snippets: CodeSnippet[] = [
  {
    label: "ingest_dag.py",
    language: "python",
    // TODO: replace with a real Airflow DAG example.
    code: `from airflow.decorators import dag, task


@dag(schedule="@hourly", catchup=False)
def ingest_events():
    @task
    def extract():
        return read_source("events")

    @task
    def load(rows):
        write_delta("bronze.events", rows)

    load(extract())


ingest_events()`,
  },
  {
    label: "transform.sql",
    language: "sql",
    // TODO: replace with a real transformation query.
    code: `MERGE INTO silver.events AS t
USING staging.events AS s
ON t.event_id = s.event_id
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;`,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Lakehouse migration",
    problem:
      "Nightly batch jobs ran for hours and frequently missed SLAs, blocking morning reporting.",
    approach:
      "Re-architected to incremental Delta loads with partition pruning and Airflow-managed backfills.",
    result:
      "TODO: quantify outcome (e.g. pipeline runtime down from X to Y, SLA hit rate to Z%).",
  },
  {
    title: "Cross-cloud ingestion",
    problem:
      "Sources were split across GCP and Azure with no unified, monitored ingestion path.",
    approach:
      "Standardized connectors and quality checks into a single orchestrated framework with alerting.",
    result:
      "TODO: quantify outcome (e.g. N sources onboarded, data incidents down N×).",
  },
];
