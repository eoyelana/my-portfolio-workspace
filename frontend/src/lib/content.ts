export type Skill = {
  name: string;
  blurb: string;
};

export type Domain = {
  title: string;
  description: string;
  proof?: string;
  href: string;
};

export type Socials = {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
};

export const skills: Skill[] = [
  {
    name: "Python",
    blurb:
      "My first tool for most problems: ETL, LLM integrations, and small services.",
  },
  {
    name: "Databricks",
    blurb: "Lakehouse ETL, Delta tables, and Spark transformations.",
  },
  {
    name: "SQL",
    blurb:
      "Data modelling, transformations, and quality gates. Still the sharpest tool for all three.",
  },
  {
    name: "GCP / Azure / AWS",
    blurb: "Where my pipelines run: mostly Azure and GCP, with some AWS.",
  },
];

export const domains: Domain[] = [
  {
    title: "GenAI in Banking",
    description:
      "LLMs and NLP for client contact notes, KYC, and fraud detection.",
    proof: "Team winner, RiskON 2025 · Contributor, UZH white paper (2026)",
    href: "/projects/genai-in-banking",
  },
  {
    title: "Data Pipelines",
    description:
      "Reliable ingestion and transformation in SQL and Python, with Airflow and Databricks where they fit.",
    proof:
      "Clinical trials at Metronomia · Patient records at GZO · IoT at Nexxiot",
    href: "/projects/data-pipelines",
  },
  {
    title: "LLM Evaluation",
    description:
      "Rubric-based scoring of LLM outputs and regression tracking across model versions.",
    proof: "Nine months of production LLM reviews in German and English",
    href: "/projects/llm-evaluation",
  },
];

export const socials: Socials = {
  github: "https://github.com/eoyelana",
  linkedin: "https://www.linkedin.com/in/emmanueloyelana",
  email: "mailto:oyelanaemmanuel@rocketmail.com",
  resume: "/Emmanuel_Oyelana_CV.pdf",
};
