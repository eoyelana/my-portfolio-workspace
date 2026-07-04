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
    "I build and evaluate generative AI systems for regulated financial services, using NLP and LLMs to improve client documentation quality, KYC, identity matching, and fraud detection. Risk management and compliance are built in from the start.",
};

export const methodology: MethodologyStep[] = [
  {
    title: "Frame the regulated banking use case",
    description:
      "Start from a concrete compliance problem such as client documentation quality, KYC, identity matching, or fraud detection, then pin down the risk and regulatory constraints it has to satisfy.",
  },
  {
    title: "Build the NLP and LLM solution",
    description:
      "Apply text analytics and LLMs (Claude and OpenAI APIs) to assess and improve documentation, scoring every note against an explicit quality and compliance rubric.",
  },
  {
    title: "Embed risk and compliance controls",
    description:
      "Bake risk management and compliance checks into the workflow so generated and assessed content stays auditable and defensible rather than merely fluent.",
  },
  {
    title: "Validate and communicate results",
    description:
      "Evaluate solutions to a research standard and communicate findings to stakeholders, from hackathon judges to peer-reviewed publication.",
  },
];

export const snippets: CodeSnippet[] = [
  {
    label: "note_qa.py",
    language: "python",
    code: `def assess_note(note, llm, rubric):
    """Check a client contact note
    against a compliance rubric."""
    # Claude or OpenAI behind one client
    prompt = build_prompt(note, rubric)
    review = llm.complete(prompt)
    return {
        "completeness": review.score,
        "flags": review.flags,
        "edits": review.edits,
    }`,
  },
  {
    label: "quality_rubric.txt",
    language: "text",
    code: `Assess this client contact note for a Swiss private bank.
Check completeness, factual support, and regulatory compliance.
Flag missing KYC details, unsupported claims, and risk indicators.
Return JSON with completeness (1-5), flags, and suggested edits.`,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "RiskOn Hackathon 2025 (Julius Baer)",
    problem:
      "Client contact notes vary in quality, creating compliance and risk exposure for the bank. The challenge asked how AI can help with quality assurance for client contact notes.",
    approach:
      "Built an NLP and LLM solution that applies text analytics to check the quality of client contact notes automatically, surfacing gaps and compliance risks for review.",
    result:
      "Team Winner of the RiskOn Hackathon 2025, sponsored by Julius Baer (Bank), Switzerland.",
  },
  {
    title: "AI-driven risk management in Swiss banking",
    problem:
      "Swiss banks need stronger, AI-enabled approaches to client documentation, identity matching, and fraud detection across the KYC lifecycle.",
    approach:
      "Researched and designed AI-enabled solutions across the KYC lifecycle, grounding them in real risk management and compliance requirements.",
    result:
      "Published as 'Advancing Risk Management in Swiss Banking' with the University of Zürich, Department of Finance (2026).",
  },
];
