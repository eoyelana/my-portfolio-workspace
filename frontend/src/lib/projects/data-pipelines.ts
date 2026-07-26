import type {
  CaseStudy,
  CodeSnippet,
  MethodologyStep,
  ProjectHeader,
} from "@/lib/projects/types";

export const header: ProjectHeader = {
  eyebrow: "Data Pipelines",
  title: "Governed data pipelines for regulated industries and enterprise IoT",
  intro:
    "ETL and ELT for clinical research, hospital systems, and enterprise IoT, built in SQL and Python with dbt, Spark, Airflow, and Databricks, on Azure and GCP plus some AWS. Every pipeline ships with data-quality controls, lineage, and audit evidence.",
};

export const methodology: MethodologyStep[] = [
  {
    title: "Model the data and define the KPIs",
    description:
      "Design the data models and schemas, and agree the KPI definitions before any pipeline is built.",
  },
  {
    title: "Build validated ETL/ELT",
    description:
      "Engineer SQL and Python pipelines with dbt, Spark, and Databricks that ingest, clean, and standardise source data.",
  },
  {
    title: "Gate releases on data quality",
    description:
      "Build data-quality monitoring and validation checks into the SQL workflows themselves, so failures surface before reports do.",
  },
  {
    title: "Govern, review, and report",
    description:
      "Run independent code reviews and surface data-quality metrics in dashboards (SQL, Power BI, DAX).",
  },
];

export const snippets: CodeSnippet[] = [
  {
    label: "transform.py",
    language: "python",
    code: `from pyspark.sql import functions as F


def standardise_events(df):
    """Clean and standardise raw events
    before loading to Databricks."""
    key = F.col("event_id")
    ts = F.current_timestamp()
    return (
        df.dropDuplicates(["event_id"])
        .filter(key.isNotNull())
        .withColumn("ingested_at", ts)
    )`,
  },
  {
    label: "dq_test.sql",
    language: "sql",
    code: `-- Data-quality gate: fail the run if
-- silver holds dupes or null keys
SELECT event_id, COUNT(*) AS occurrences
FROM silver.events
GROUP BY event_id
HAVING COUNT(*) > 1 OR event_id IS NULL;`,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Clinical trial data engineering at Metronomia",
    problem:
      "Clinical trial data needed reliable, auditable ETL under GxP, ICH-GCP, 21 CFR Part 11, and CDISC/SDTM, with full traceability for regulators.",
    approach:
      "Engineered ETL pipelines and data models in SQL and Python, authored Data Validation Plans and SOPs, and ran independent code reviews as a second-line control.",
    result:
      "Standardising the data-quality checks and tracking them in dashboards cut rework and shortened project turnaround.",
  },
  {
    title: "Patient record migration at GZO Spital Wetzikon",
    problem:
      "A hospital needed patient records moved into a new Clinical Information System without breaking healthcare compliance or data integrity.",
    approach:
      "Automated extraction and transformation in Python and SQL, and built reconciliation logic across legacy systems, including Navision, to catch duplicates.",
    result:
      "Accurate, reconciled records after migration, with rule-based quality checks and audit-ready documentation.",
  },
  {
    title: "Enterprise IoT BI at Nexxiot AG",
    problem:
      "An enterprise IoT and logistics company needed one pipeline from SQL extraction through to reporting the business could trust.",
    approach:
      "Ingested API and database sources into governed models, and wrote the SQL and DAX behind the reporting KPIs.",
    result:
      "A governed reporting layer in Power BI: validated KPIs and one controlled source for the numbers.",
  },
];
