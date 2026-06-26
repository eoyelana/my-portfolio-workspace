import type { MetadataRoute } from "next";
import { domains } from "@/lib/content";

const BASE_URL = "https://eoyelana.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Home page + every project route, kept in sync with lib/content.ts
  const paths = ["", ...domains.map((domain) => domain.href)];

  return paths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
