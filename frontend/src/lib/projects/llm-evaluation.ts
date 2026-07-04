import type {
  CaseStudy,
  CodeSnippet,
  MethodologyStep,
  ProjectHeader,
} from "@/lib/projects/types";

export const header: ProjectHeader = {
  eyebrow: "LLM Evaluation",
  title: "Validating LLMs to a model risk standard",
  intro:
    "I evaluate and validate LLM outputs for truthfulness, robustness, bias, and strict instruction-following. Model output review gets the same rigour as model risk validation, aligned to FINMA Guidance 08/2024 and the EU AI Act.",
};

export const methodology: MethodologyStep[] = [
  {
    title: "Define rule-based evaluation guidelines",
    description:
      "Turn quality expectations for truthfulness, robustness, bias, conciseness, and strict instruction-following into explicit rule-based guidelines, mapped to FINMA 08/2024 and EU AI Act expectations on model risk and explainability.",
  },
  {
    title: "Score outputs and calibrate judgments",
    description:
      "Evaluate model outputs against the rubric and calibrate scoring to improve human-AI alignment, explainability of judgments, and reproducibility of reviews across evaluators.",
  },
  {
    title: "Document for audit-readiness",
    description:
      "Author evaluation documentation and refine evaluation frameworks so findings stay traceable and defensible. This second-line validation mindset carries over from regulated GxP, ICH-GCP, and 21 CFR Part 11 work.",
  },
  {
    title: "Monitor and govern over time",
    description:
      "Track regressions across model and prompt versions and translate governance rules into automated, validated checks so changes are evidenced rather than assumed.",
  },
];

export const snippets: CodeSnippet[] = [
  {
    label: "rubric_eval.py",
    language: "python",
    code: `RUBRIC = [
    "truthfulness",
    "robustness",
    "bias",
    "instruction_following",
]


def evaluate(model, dataset, judge):
    """Score outputs for audit review."""
    rows = []
    for ex in dataset:
        out = model.generate(ex.prompt)
        scores = {
            d: judge(ex, out, d)
            for d in RUBRIC
        }
        row = {"id": ex.id, **scores}
        rows.append(row)
    return rows`,
  },
  {
    label: "judge_prompt.txt",
    language: "text",
    code: `You are validating an assistant
answer against rule-based guidelines.
Rate 1-5 for truthfulness and
instruction-following; flag any bias.
Penalise unsupported claims.
Reward conciseness.
Justify each score in one sentence.
Return JSON with truthfulness,
instruction_following, bias_flag,
and a one-line rationale.`,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "LLM output validation at Outlier",
    problem:
      "LLM outputs needed rigorous, repeatable validation across all four quality dimensions, a discipline directly analogous to model risk review.",
    approach:
      "Evaluated outputs against rule-based guidelines, authored evaluation documentation, and refined the evaluation frameworks. Built scalable multilingual NLP ingestion and ETL workflows in Databricks and Azure, in German and English, to feed the reviews.",
    result:
      "Improved human-AI alignment, explainability of judgments, and reproducibility of reviews across the evaluation programme from January to September 2025.",
  },
  {
    title: "From regulated validation to AI governance",
    problem:
      "AI in financial services demands independent, auditable validation. FINMA 08/2024 and the EU AI Act now require the discipline that GxP, ICH-GCP, and 21 CFR Part 11 established long ago.",
    approach:
      "Translated complex regulatory and data-governance rules into automated, validated checks, backed by Data Validation Plans, SOPs, and independent second-line code reviews.",
    result:
      "A traceable, audit-ready validation framework that maps cleanly onto model risk, explainability, and documentation expectations for LLMs.",
  },
];
