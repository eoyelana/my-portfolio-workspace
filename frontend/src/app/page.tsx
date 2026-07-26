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

// Entity disambiguation, not decoration. Another Emmanuel Oyelana works in
// wealth operations, so every surface has to carry the same name, title, city
// and specialism. sameAs is the loop an engine can traverse to confirm these
// profiles are one person: the site names them, and each profile names the
// site back. The X handle was already published on the GitHub profile and
// missing here, which left the loop open.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emmanuel Oyelana",
  alternateName: "emmanueloyelana",
  jobTitle: "Data & AI Engineer",
  description:
    "Data & AI Engineer in Zürich. GenAI for regulated finance, governed data pipelines on Databricks, and LLM evaluation aligned to FINMA Guidance 08/2024 and the EU AI Act.",
  url: "https://www.eoyelana.com",
  sameAs: [socials.github, socials.linkedin, socials.x],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zürich",
    addressCountry: "CH",
  },
  knowsAbout: [
    "Generative AI",
    "LLM evaluation",
    "LLMOps",
    "AI governance",
    "Model risk management",
    "EU AI Act",
    "FINMA Guidance 08/2024",
    "NIST AI RMF",
    "Data engineering",
    "Databricks",
    "Apache Spark",
    "dbt",
    "Apache Airflow",
    "Python",
    "SQL",
  ],
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-24 px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replaceAll("<", "\\u003c"),
        }}
      />
      <Hero />
      <TechStack />
      <FeaturedDomains />
    </main>
  );
}
