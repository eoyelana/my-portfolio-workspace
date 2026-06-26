import type { ProjectHeader } from "@/lib/projects/geo";

export default function PageHeader({ eyebrow, title, intro }: ProjectHeader) {
  return (
    <header className="flex flex-col gap-4">
      <span className="text-sm font-medium uppercase tracking-widest text-accent-from">
        {eyebrow}
      </span>
      <h1 className="max-w-3xl bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-zinc-400">{intro}</p>
    </header>
  );
}
