import { socials } from "@/lib/content";

type SocialLink = {
  label: string;
  href: string;
};

const links: SocialLink[] = [
  { label: "GitHub", href: socials.github },
  { label: "LinkedIn", href: socials.linkedin },
  { label: "Email", href: socials.email },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        const isEmail = link.href.startsWith("mailto:");
        return (
          <a
            key={link.label}
            href={link.href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-accent-from/60 hover:bg-white/[.05] hover:text-zinc-50"
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
