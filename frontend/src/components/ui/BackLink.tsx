import Link from "next/link";

type BackLinkProps = {
  href?: string;
  label?: string;
};

export default function BackLink({
  href = "/",
  label = "Back to home",
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
    >
      <span
        aria-hidden="true"
        className="transition-transform group-hover:-translate-x-1"
      >
        ←
      </span>
      {label}
    </Link>
  );
}
