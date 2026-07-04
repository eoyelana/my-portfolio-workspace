import type { MetadataRoute } from "next";
import { domains } from "@/lib/content";

const BASE_URL = "https://www.eoyelana.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Home page + every project route, kept in sync with lib/content.ts
  const paths = ["", ...domains.map((domain) => domain.href)];

  return paths.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
