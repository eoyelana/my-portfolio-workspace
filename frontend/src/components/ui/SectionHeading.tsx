type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium uppercase tracking-widest text-accent-from">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
