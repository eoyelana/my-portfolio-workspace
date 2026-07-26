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
    "I build and evaluate generative AI systems for regulated financial services, using NLP and LLMs to improve client documentation quality, KYC, identity matching, and fraud detection. Risk and compliance checks are designed in before the first model call.",
};

export const methodology: MethodologyStep[] = [
  {
    title: "Frame the regulated banking use case",
    description:
      "Start from one concrete compliance problem and pin down the risk and regulatory constraints it has to satisfy.",
  },
  {
    title: "Build the NLP and LLM system",
    description:
      "Apply text analytics and LLMs (Claude and OpenAI APIs) to assess and improve documentation, scoring every note against a quality and compliance rubric.",
  },
  {
    title: "Embed risk and compliance controls",
    description:
      "Wire the rubric scores and review flags into the workflow; every note carries its review trail.",
  },
  {
    title: "Validate and communicate results",
    description:
      "Evaluate the work to a research standard and put it in front of people who push back. So far: hackathon judges and UZH researchers.",
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
Check completeness across the 5 W's: who, what, when, where, why.
Flag missing roles, undocumented client requests, and unsupported claims.
Return JSON with completeness (1-5), flags, and suggested edits.`,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "RiskON Hackathon 2025 (Julius Baer)",
    problem:
      "Relationship managers write client contact notes by hand; completeness and quality vary, and poor notes create compliance risk. The RiskON 2025 challenge asked how AI can improve completeness and quality.",
    approach:
      "Built an NLP and LLM pipeline that checks note quality automatically and flags gaps and compliance risks for human review.",
    result: "Team winner.",
  },
  {
    title: "White paper with the UZH Department of Finance",
    problem:
      "RiskON 2025 continued past the hackathon: a research collaboration between Swiss banks and universities on AI for client documentation, identity matching, and fraud detection.",
    approach:
      "Worked the hackathon findings into the joint research and contributed to Chapter 1 of the resulting report.",
    result:
      "Named contributor to the 42-page white paper 'Advancing Risk Management in Swiss Banking' (UZH Department of Finance, 2026).",
  },
];
