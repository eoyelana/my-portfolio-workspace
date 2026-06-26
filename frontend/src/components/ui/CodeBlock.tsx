import type { CodeSnippet } from "@/lib/projects/types";

export default function CodeBlock({ label, language, code }: CodeSnippet) {
  return (
    <figure className="overflow-hidden rounded-xl border border-white/10 bg-white/[.03]">
      <figcaption className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-xs text-zinc-300">{label}</span>
        <span className="rounded-full bg-white/[.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
          {language}
        </span>
      </figcaption>
      <pre className="overflow-x-auto p-4 text-sm leading-6">
        <code className="font-mono text-zinc-200">{code}</code>
      </pre>
    </figure>
  );
}
