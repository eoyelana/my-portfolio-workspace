import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedDomains from "@/components/FeaturedDomains";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-24 px-6 py-20">
      <Hero />
      <TechStack />
      <FeaturedDomains />
    </main>
  );
}
