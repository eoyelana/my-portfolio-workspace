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

export default function DataPipelinesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-16 px-6 py-16">
      <BackLink href="/" label="Back to home" />

      <PageHeader {...header} />

      <section className="flex flex-col gap-8">
        <SectionHeading eyebrow="Approach" title="Methodology" />
        <ol className="flex flex-col gap-6">
          {methodology.map((step, index) => (
            <MethodologyStep key={step.title} index={index} {...step} />
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-8">
        <SectionHeading eyebrow="In Practice" title="Code Snippets" />
        <div className="flex flex-col gap-6">
          {snippets.map((snippet) => (
            <CodeBlock key={snippet.label} {...snippet} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <SectionHeading eyebrow="Results" title="Case Studies" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </section>
    </main>
  );
}
