import type { Metadata } from "next";
import BackLink from "@/components/ui/BackLink";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import MethodologyStep from "@/components/ui/MethodologyStep";
import CodeBlock from "@/components/ui/CodeBlock";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import {
  header,
  methodology,
  snippets,
  caseStudies,
} from "@/lib/projects/data-pipelines";

const DESCRIPTION =
  "Governed ETL and ELT for healthcare and enterprise IoT, built with SQL, Python, dbt, Spark, Airflow, and Databricks, with data-quality controls and lineage.";

export const metadata: Metadata = {
  title: "Data Pipelines",
  description: DESCRIPTION,
  alternates: {
    canonical: "/projects/data-pipelines",
  },
  openGraph: {
    type: "website",
    siteName: "Emmanuel Oyelana",
    title: "Data Pipelines",
    description: DESCRIPTION,
    url: "/projects/data-pipelines",
    images: "/opengraph-image",
  },
};

export default function DataPipelinesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16">
      <BackLink href="/" label="Back to home" />

      <div className="flex flex-col gap-4">
        <PageHeader {...header} />
        <p className="text-sm leading-6 text-zinc-400">
          Certified: Databricks Data Engineer · Apache Spark Developer · dbt
          Fundamentals · Azure Data Fundamentals
        </p>
      </div>

      <section className="flex flex-col gap-8">
        <SectionHeading eyebrow="Approach" title="How I work" />
        <ol className="flex flex-col gap-6">
          {methodology.map((step, index) => (
            <MethodologyStep key={step.title} index={index} {...step} />
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-8">
        <SectionHeading eyebrow="In practice" title="Code snippets" />
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {snippets.map((snippet) => (
            <CodeBlock key={snippet.label} {...snippet} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <SectionHeading eyebrow="Evidence" title="Case studies" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </section>
    </main>
  );
}
