import type {
  CaseStudy,
  CodeSnippet,
  MethodologyStep,
  ProjectHeader
} from "@/lib/projects/types";

export const header: ProjectHeader = {
  eyebrow: "Data Pipelines",
  title: "Governed data pipelines for regulated industries",
  intro:
    "End-to-end ETL/ELT across clinical research and enterprise IoT - built with SQL, Python, dbt, Spark, Airflow, and Databricks on Azure, GCP, and AWS, and wrapped in the data-quality controls, lineage, and audit-readiness that regulated work demands."
};

export const methodology: MethodologyStep[] = [
  {
    title: "Model the data and its contracts",
    description:
      "Design efficient data models and schemas, and translate business requirements into validated KPIs with explicit data-governance standards before any pipeline is built."
  },
  {
    title: "Build validated ETL/ELT",
    description:
      "Engineer SQL and Python pipelines with dbt, Spark, and Databricks to ingest, clean, and standardise data from APIs, databases, and enterprise systems."
  },
  {
    title: "Embed data-quality controls",
    description:
      "Author Data Validation Plans and SOPs and build data-quality monitoring frameworks, embedding validation logic and controls across SQL-based workflows for audit-readiness."
  },
  {
    title: "Govern, review, and report",
    description:
      "Run independent code reviews for traceable, compliant pipelines and surface data-quality metrics in governed dashboards (SQL, Power BI, DAX)."
  }
];

export const snippets: CodeSnippet[] = [
  {
    label: "transform.py",
    language: "python",
    code: `from pyspark.sql import functions as F


def standardise_events(df):
    """Clean and standardise raw events on Databricks before load."""
    return (
        df.dropDuplicates(["event_id"])
        .withColumn("ingested_at", F.current_timestamp())
        .filter(F.col("event_id").isNotNull())
    )`
  },
  {
    label: "dq_test.sql",
    language: "sql",
    code: `-- Data-quality control: no nulls or duplicate keys reach the silver layer
SELECT event_id, COUNT(*) AS occurrences
FROM silver.events
GROUP BY event_id
HAVING COUNT(*) > 1 OR event_id IS NULL;`
  }
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Clinical-trial data engineering at Metronomia",
    problem:
      "Complex clinical-trial data needed reliable, auditable ETL under GxP, ICH-GCP, 21 CFR Part 11, and CDISC/SDTM, with full traceability for regulators.",
    approach:
      "Engineered end-to-end ETL pipelines and data models in SQL and Python, built data-quality monitoring frameworks, authored Data Validation Plans and SOPs, and conducted independent code reviews as a second-line control.",
    result:
      "Improved processing speed and reliability by ~30% and cut project turnaround by ~20% through standardised, dashboard-tracked data-quality processes."
  },
  {
    title: "Enterprise IoT BI at Nexxiot AG",
    problem:
      "An enterprise IoT / logistics business needed a trustworthy pipeline running all the way from SQL extraction to governed reporting.",
    approach:
      "Developed ETL pipelines to ingest, clean, and standardise data from APIs, databases, and enterprise systems; designed efficient data models; and authored advanced SQL and DAX to turn requirements into validated KPIs while defining data-governance standards and quality controls.",
    result:
      "A governed reporting layer with validated KPIs and a single, controlled source of truth for the business."
  }
];
