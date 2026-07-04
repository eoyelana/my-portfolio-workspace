export type Skill = {
  name: string;
  blurb: string;
};

export type Domain = {
  title: string;
  description: string;
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
    blurb: "Pipelines, services, and tooling for data and LLM workflows.",
  },
  {
    name: "Databricks",
    blurb: "Lakehouse ETL, Delta tables, and transformations at scale.",
  },
  {
    name: "Next.js",
    blurb: "TypeScript app development with the App Router.",
  },
  {
    name: "GCP / Azure",
    blurb: "Cloud-native deployment, orchestration, and storage.",
  },
];

export const domains: Domain[] = [
  {
    title: "GenAI in Banking",
    description:
      "LLM and NLP solutions for client documentation, KYC, and fraud detection in regulated finance.",
    href: "/projects/genai-in-banking",
  },
  {
    title: "Data Pipelines",
    description:
      "Reliable ingestion and transformation with Databricks, Airflow, and SQL.",
    href: "/projects/data-pipelines",
  },
  {
    title: "LLM Evaluation",
    description:
      "Measuring quality, safety, and regressions across model versions.",
    href: "/projects/llm-evaluation",
  },
];

export const socials: Socials = {
  github: "https://github.com/eoyelana",
  linkedin: "https://www.linkedin.com/in/emmanueloyelana",
  email: "mailto:oyelanaemmanuel@rocketmail.com",
  // Interim: no CV is hosted for privacy reasons. Swap back to a local
  // PDF path once a web-safe CV (no birthdate, address, or phone) exists.
  resume: "https://www.linkedin.com/in/emmanueloyelana",
};
