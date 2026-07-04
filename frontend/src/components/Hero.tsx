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
        Data &amp; AI Engineer · Trustworthy AI &amp; Governance
      </p>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
        Emmanuel Oyelana builds{" "}
        <span className="bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent">
          GenAI systems
        </span>{" "}
        and the data behind them.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-zinc-400">
        I design and ship generative AI applications and the production data
        platforms that power them, from pipelines and orchestration to rigorous
        LLM evaluation.
      </p>
      <SocialLinks />
    </section>
  );
}
