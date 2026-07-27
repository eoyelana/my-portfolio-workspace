import type { MetadataRoute } from "next";
import { domains, homeUpdated } from "@/lib/content";

const BASE_URL = "https://www.eoyelana.com";

/**
 * Only `lastModified` is emitted, on purpose.
 *
 * Google states it ignores `<changefreq>` and `<priority>` outright, and uses
 * `<lastmod>` only "if it's consistently and verifiably accurate". The previous
 * version of this file emitted exactly the two ignored fields and omitted the
 * used one.
 *
 * Dates come from `content.ts`, set by hand when a page's content actually
 * changes. Deliberately not `new Date()`: build time would mark every page as
 * changed on every deploy, which is the fastest way to make Google distrust the
 * field permanently.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: homeUpdated },
    ...domains.map((domain) => ({
      url: `${BASE_URL}${domain.href}`,
      lastModified: domain.updated,
    })),
  ];
}
