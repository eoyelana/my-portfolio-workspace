import type { CaseStudy } from "@/lib/projects/types";

type Row = {
  label: string;
  value: string;
};

export default function CaseStudyCard({
  title,
  problem,
  approach,
  result,
}: CaseStudy) {
  const rows: Row[] = [
    { label: "Problem", value: problem },
    { label: "Approach", value: approach },
    { label: "Result", value: result },
  ];

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-6">
      <h3 className="text-balance text-lg font-semibold text-zinc-50">
        {title}
      </h3>
      <dl className="flex flex-col gap-3">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-1">
            <dt className="text-xs font-medium uppercase tracking-wider text-accent-text">
              {row.label}
            </dt>
            <dd className="text-pretty text-base leading-7 text-zinc-400">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
