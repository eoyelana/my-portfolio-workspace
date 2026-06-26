import type {
  CaseStudy,
  CodeSnippet,
  MethodologyStep,
  ProjectHeader,
} from "@/lib/projects/types";

// TODO: replace placeholder GEO copy with real project content before launch.
export const header: ProjectHeader = {
  eyebrow: "Generative Engine Optimization",
  title: "Making content the answer engines cite",
  intro:
    "GEO is the practice of structuring content and systems so they surface in AI search and answer engines — not just classic search. Here is how I approach it, with the tooling and results behind it.",
};

export const methodology: MethodologyStep[] = [
  {
    title: "Audit answer-engine visibility",
    description:
      "Measure how often a brand is retrieved and cited across LLM-backed search surfaces, and where coverage gaps sit.",
  },
  {
    title: "Structure content for citation",
    description:
      "Add schema markup, clear claims, and source-able facts so retrievers can extract and attribute passages reliably.",
  },
  {
    title: "Instrument and evaluate",
    description:
      "Build eval harnesses that track citation rate, answer accuracy, and share-of-voice as engines and content evolve.",
  },
  {
    title: "Measure and iterate",
    description:
      "Close the loop with dashboards and regression checks so wins hold as models and ranking behavior shift.",
  },
];

export const snippets: CodeSnippet[] = [
  {
    label: "schema-markup.json",
    language: "json",
    // TODO: replace with a real structured-data example.
    code: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Generative Engine Optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Structuring content so AI answer engines retrieve and cite it."
      }
    }
  ]
}`,
  },
  {
    label: "citation_eval.py",
    language: "python",
    // TODO: replace with a real evaluation snippet.
    code: `def citation_rate(queries, engine, target_domain):
    """Share of answers that cite the target domain."""
    hits = 0
    for q in queries:
        answer = engine.ask(q)
        if any(target_domain in c.url for c in answer.citations):
            hits += 1
    return hits / len(queries)`,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "B2B SaaS knowledge base",
    problem:
      "Strong organic traffic, but the product was almost never cited in AI-generated answers.",
    approach:
      "Restructured docs into question-led pages with schema markup and source-able claims, then tracked citation rate weekly.",
    result:
      "TODO: quantify outcome (e.g. citation rate from X% to Y% over N weeks).",
  },
  {
    title: "Editorial content network",
    problem:
      "High-authority articles were summarized by answer engines without attribution.",
    approach:
      "Added canonical claims, author/entity markup, and an eval suite to monitor share-of-voice across engines.",
    result:
      "TODO: quantify outcome (e.g. attributed answers up N×, measured over the eval set).",
  },
];
