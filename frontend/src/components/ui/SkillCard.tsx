import type { Skill } from "@/lib/content";

export default function SkillCard({ name, blurb }: Skill) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/[.03] p-4 transition-colors hover:border-accent-from/50 hover:bg-white/[.05] sm:p-5">
      <h3 className="text-base font-semibold text-zinc-50 sm:text-lg">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{blurb}</p>
    </div>
  );
}
