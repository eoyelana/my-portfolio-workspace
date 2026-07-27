import SocialLinks from "@/components/ui/SocialLinks";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-start gap-6 pt-10">
      {/* Decorative purple/blue gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-24 -z-10 h-72 w-72 rounded-full bg-gradient-to-br from-accent-from to-accent-to opacity-20 blur-3xl"
      />
      <p className="text-sm font-medium uppercase tracking-widest text-accent-text">
        Data&nbsp;&amp;&nbsp;AI&nbsp;Engineer &middot;
        Trustworthy&nbsp;AI&nbsp;&amp;&nbsp;Governance
      </p>
      <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
        {/* Settled 25 July 2026, do not re-raise: the dash here is a
            name-tagline separator in a headline lockup, which is typography and
            the author's call, not the banned clause splice. See
            ~/.claude/skills/deslop/SKILL.md:42. It also keeps the h1 verbatim
            with the LinkedIn banner. */}
        Emmanuel Oyelana&nbsp;&ndash; building{" "}
        <span className="bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent">
          GenAI systems
        </span>{" "}
        and the data behind them.
      </h1>
      <p className="max-w-2xl text-pretty text-lg leading-8 text-zinc-400">
        Zürich-based. I build LLM systems for banking use cases and governed
        data pipelines across industries. I evaluate LLM outputs with rubrics
        mapped to FINMA Guidance 08/2024 and the EU AI Act.
      </p>
      <SocialLinks />
    </section>
  );
}
