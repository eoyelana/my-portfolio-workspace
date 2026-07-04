import type { MethodologyStep as MethodologyStepData } from "@/lib/projects/types";

type MethodologyStepProps = MethodologyStepData & {
  index: number;
};

export default function MethodologyStep({
  index,
  title,
  description,
}: MethodologyStepProps) {
  return (
    <li className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 text-sm font-semibold text-white">
        {index + 1}
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="text-balance text-lg font-semibold text-zinc-50">
          {title}
        </h3>
        <p className="max-w-prose text-pretty text-base leading-7 text-zinc-400">
          {description}
        </p>
      </div>
    </li>
  );
}
