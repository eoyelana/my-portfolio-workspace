import type {
  CaseStudy,
  CodeSnippet,
  MethodologyStep,
  ProjectHeader,
} from "@/lib/projects/types";

// TODO: replace placeholder llm-evaluation copy with real project content before launch.
export const header: ProjectHeader = {
  eyebrow: "LLM Evaluation",
  title: "Knowing when a model is actually better",
  intro:
    "Evaluation harnesses that measure quality, safety, and regressions across model and prompt versions — so shipping a change is a decision backed by evidence, not vibes.",
};

export const methodology: MethodologyStep[] = [
  {
    title: "Define the task and metrics",
    description:
      "Pin down what 'good' means per use case — accuracy, faithfulness, safety, latency — before choosing scorers.",
  },
  {
    title: "Curate evaluation sets",
    description:
      "Assemble representative and adversarial examples, including edge cases that production traffic actually hits.",
  },
  {
    title: "Score with judges and checks",
    description:
      "Combine deterministic checks with LLM-as-judge scoring, calibrated against human labels to keep it honest.",
  },
  {
    title: "Gate and track regressions",
    description:
      "Wire evals into CI so model and prompt changes are compared head-to-head and regressions block the release.",
  },
];

export const snippets: CodeSnippet[] = [
  {
    label: "eval_suite.py",
    language: "python",
    // TODO: replace with a real evaluation harness example.
    code: `def evaluate(model, dataset, scorer):
    """Score a model over a dataset and return aggregate metrics."""
    results = []
    for example in dataset:
        output = model.generate(example.prompt)
        results.append(scorer(example, output))
    return {
        "score": sum(r.score for r in results) / len(results),
        "pass_rate": sum(r.passed for r in results) / len(results),
    }`,
  },
  {
    label: "judge_prompt.txt",
    language: "text",
    // TODO: replace with a real LLM-as-judge rubric.
    code: `You are grading an assistant answer against a reference.
Score 1-5 for faithfulness to the source and 1-5 for helpfulness.
Penalize unsupported claims. Return JSON: {"faithfulness": N, "helpfulness": N}.`,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "RAG faithfulness gate",
    problem:
      "Prompt changes shipped on intuition and occasionally regressed answer faithfulness in production.",
    approach:
      "Built a faithfulness eval set with LLM-judge scoring calibrated to human labels, wired into CI as a gate.",
    result:
      "TODO: quantify outcome (e.g. caught N regressions pre-release, faithfulness up to X%).",
  },
  {
    title: "Model upgrade decision",
    problem:
      "A proposed model swap looked better anecdotally but had no head-to-head evidence.",
    approach:
      "Ran both models over the same eval suite across quality, safety, and latency dimensions.",
    result:
      "TODO: quantify outcome (e.g. chose model on +X% quality at comparable latency/cost).",
  },
];
