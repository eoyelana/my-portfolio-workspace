import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedDomains from "@/components/FeaturedDomains";
import { socials } from "@/lib/content";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emmanuel Oyelana",
  jobTitle: "Data & AI Engineer",
  url: "https://www.eoyelana.com",
  sameAs: [socials.github, socials.linkedin],
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-24 px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <TechStack />
      <FeaturedDomains />
    </main>
  );
}
