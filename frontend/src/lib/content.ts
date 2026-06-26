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
  // TODO: replace placeholder URLs with real profiles before launch.
  github: string;
  linkedin: string;
  email: string;
};

export const skills: Skill[] = [
  {
    name: "Python",
    blurb: "Pipelines, services, and tooling for data and LLM workflows."
  },
  {
    name: "Databricks",
    blurb: "Lakehouse ETL, Delta tables, and large-scale transformations."
  },
  {
    name: "Next.js",
    blurb: "TypeScript app development with the App Router."
  },
  {
    name: "GCP / Azure",
    blurb: "Cloud-native deployment, storage, and orchestration."
  }
];

export const domains: Domain[] = [
  {
    title: "Generative Engine Optimization",
    description:
      "Making content discoverable and citable by AI search and answer engines.",
    href: "/projects/generative-engine-optimization"
  },
  {
    title: "Data Pipelines",
    description:
      "Reliable ingestion and transformation with Databricks, Airflow, and SQL.",
    href: "/projects/data-pipelines"
  },
  {
    title: "LLM Evaluation",
    description:
      "Measuring quality, safety, and regressions across model versions.",
    href: "/projects/llm-evaluation"
  }
];

export const socials: Socials = {
  github: "https://github.com/eoyelana",
  linkedin: "https://www.linkedin.com/in/emmanueloyelana",
  email: "mailto:oyelanaemmanuel@rocketmail.com"
};
