import Link from "next/link";
import type { Domain } from "@/lib/content";

export default function DomainCard({ title, description, href }: Domain) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[.03] p-6 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-1 hover:border-accent-to/50 hover:bg-white/[.05]"
    >
      <div>
        <h3 className="text-lg font-semibold text-zinc-50">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-text transition-transform group-hover:translate-x-1">
        Explore
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
