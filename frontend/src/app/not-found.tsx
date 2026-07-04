import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-start justify-center gap-6 px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-accent-text">
        404
      </p>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
        This page does not exist.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-zinc-400">
        The link may be outdated or the address mistyped. Everything current
        lives on the home page.
      </p>
      <Link
        href="/"
        className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-accent-from/60 hover:bg-white/[.05] hover:text-zinc-50"
      >
        Back to home
      </Link>
    </main>
  );
}
