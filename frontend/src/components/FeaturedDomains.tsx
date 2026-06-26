import SectionHeading from "@/components/ui/SectionHeading";
import DomainCard from "@/components/ui/DomainCard";
import { domains } from "@/lib/content";

export default function FeaturedDomains() {
  return (
    <section className="flex flex-col gap-8">
      <SectionHeading eyebrow="Featured Domains" title="Where I focus" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {domains.map((domain) => (
          <DomainCard key={domain.href} {...domain} />
        ))}
      </div>
    </section>
  );
}
