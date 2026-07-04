import type { Skill } from "@/lib/content";

export default function SkillCard({ name, blurb }: Skill) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/[.03] p-5 transition-colors hover:border-accent-from/50 hover:bg-white/[.05]">
      <h3 className="text-lg font-semibold text-zinc-50">{name}</h3>
      <p className="mt-2 text-pretty text-base leading-7 text-zinc-400">
        {blurb}
      </p>
    </div>
  );
}
