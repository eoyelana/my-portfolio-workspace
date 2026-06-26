import type {
  CaseStudy,
  CodeSnippet,
  MethodologyStep,
  ProjectHeader,
} from "@/lib/projects/types";

export const header: ProjectHeader = {
  eyebrow: "GenAI in Banking",
  title: "Applying generative AI to Swiss banking",
  intro:
    "I build and evaluate generative-AI systems for regulated financial services — using NLP and LLMs to improve client-documentation quality, KYC, identity matching, and fraud detection, with risk management and compliance built in from the start.",
};

export const methodology: MethodologyStep[] = [
  {
    title: "Frame the regulated banking use case",
    description:
      "Start from a concrete compliance problem — client-documentation quality, KYC, identity matching, or fraud detection — and pin down the risk and regulatory constraints it has to satisfy.",
  },
  {
    title: "Build the NLP / LLM solution",
    description:
      "Apply text analytics and LLMs (Anthropic/Claude and OpenAI APIs) to assess and improve documentation, calling them against an explicit quality and compliance rubric.",
  },
  {
    title: "Embed risk and compliance controls",
    description:
      "Bake risk-management and compliance checks into the workflow so generated and assessed content stays auditable and defensible, not just fluent.",
  },
  {
    title: "Validate and communicate results",
    description:
      "Evaluate solutions to a research standard and communicate findings to stakeholders — from hackathon judges to peer-reviewed publication.",
  },
];

export const snippets: CodeSnippet[] = [
  {
    label: "note_qa.py",
    language: "python",
    code: `def assess_contact_note(note, llm, rubric):
    """Quality-assure a client contact note against a compliance rubric."""
    prompt = build_prompt(note=note, rubric=rubric)
    review = llm.complete(prompt)  # Anthropic/Claude or OpenAI
    return {
        "completeness": review.completeness,
        "compliance_flags": review.flags,
        "suggested_edits": review.edits,
    }`,
  },
  {
    label: "quality_rubric.txt",
    language: "text",
    code: `Assess this client contact note for a Swiss private bank.
Check completeness, factual support, and regulatory compliance.
Flag missing KYC details, unsupported claims, and risk indicators.
Return JSON: {"completeness": 1-5, "flags": [...], "edits": [...]}.`,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "RiskOn Hackathon 2025 — Julius Baer",
    problem:
      "Client contact notes vary in quality, creating compliance and risk exposure for the bank: 'Quality Assurance for Client Contact Notes — how can AI help?'",
    approach:
      "Built an NLP/LLM solution that applies text analytics to automatically quality-assure client contact notes, surfacing gaps and compliance risks for review.",
    result:
      "Team Winner of the RiskOn Hackathon 2025, sponsored by Julius Baer (Bank), Switzerland.",
  },
  {
    title: "AI-driven risk management in Swiss banking",
    problem:
      "Swiss banks need stronger, AI-enabled approaches to client documentation, identity matching, and fraud detection across the KYC lifecycle.",
    approach:
      "Researched and designed AI-enabled solutions for KYC, identity matching, and fraud detection, grounding them in real risk-management and compliance requirements.",
    result:
      "Published as 'Advancing Risk Management in Swiss Banking' with the University of Zürich, Department of Finance (2026).",
  },
];
