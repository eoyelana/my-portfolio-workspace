#!/usr/bin/env node
/**
 * Fails the build when an en or em dash is used as a sentence connector in
 * src/.
 *
 * Why this exists: the house rule bans dashes splicing clauses, and a plain
 * grep for the literal character reported clean for weeks while an en dash sat
 * in the <h1> written as `&ndash;`. Entity forms are invisible to a search for
 * the character. Issue #66 caught it by reading the file, which is not a
 * control.
 *
 * Why it is an allowlist rather than a heuristic: no script can tell a clause
 * splice from a legitimate typographic dash, and pretending otherwise would
 * either block real work or wave through the thing it exists to catch. So
 * every dash is a failure until someone writes down which file it is in and
 * why, and that entry has to survive code review.
 *
 * Wired to `prebuild`, so it runs on every `npm run build` including Vercel's.
 * A guard a human has to remember to run is the failure mode this replaces.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SRC = join(ROOT, "src");
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".css", ".md", ".mdx"];

/**
 * Both characters and every encoding of them that renders as the same glyph.
 * The characters are written as escapes rather than typed, so this file
 * contains no dash it could ever be asked to flag, and so a reader can see
 * which code point each entry means without trusting their font.
 */
const TOKENS = [
  { token: "\u2013", label: "en dash (U+2013)" },
  { token: "\u2014", label: "em dash (U+2014)" },
  { token: "&ndash;", label: "en dash, named entity" },
  { token: "&mdash;", label: "em dash, named entity" },
  { token: "&#8211;", label: "en dash, numeric entity" },
  { token: "&#8212;", label: "em dash, numeric entity" },
  { token: "&#x2013;", label: "en dash, hex entity" },
  { token: "&#x2014;", label: "em dash, hex entity" },
];

/**
 * Exceptions. Each needs a file, the exact token, how many times it may
 * appear, and a reason a future reader can judge. An entry that no longer
 * matches anything is also a failure: a stale allowlist quietly widens.
 */
const ALLOWED = [
  {
    file: "src/components/Hero.tsx",
    token: "&ndash;",
    count: 1,
    reason:
      "Name-tagline separator in the h1 headline lockup, which is typography " +
      "and the author's call, not a clause splice. Settled 25 July 2026, " +
      "re-raised as issue #66 item 2, and the revert stood.",
  },
];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      out.push(...walk(path));
    } else if (EXTENSIONS.some((ext) => entry.endsWith(ext))) {
      out.push(path);
    }
  }
  return out;
}

/** Every occurrence of every token, with the line it sits on. */
function findHits() {
  const hits = [];
  for (const path of walk(SRC)) {
    const file = relative(ROOT, path);
    const lines = readFileSync(path, "utf8").split("\n");
    lines.forEach((text, index) => {
      for (const { token, label } of TOKENS) {
        let from = 0;
        for (;;) {
          const column = text.indexOf(token, from);
          if (column === -1) break;
          hits.push({
            file,
            token,
            label,
            line: index + 1,
            column: column + 1,
          });
          from = column + token.length;
        }
      }
    });
  }
  return hits;
}

const hits = findHits();
const problems = [];

for (const hit of hits) {
  const rule = ALLOWED.find(
    (a) => a.file === hit.file && a.token === hit.token,
  );
  if (!rule) {
    problems.push(
      `${hit.file}:${hit.line}:${hit.column}  ${hit.label} is not allowed here`,
    );
    continue;
  }
  const seen = hits.filter(
    (h) => h.file === hit.file && h.token === hit.token,
  ).length;
  if (seen > rule.count) {
    problems.push(
      `${hit.file}:${hit.line}:${hit.column}  ${hit.label} appears ${seen} times, allowlist permits ${rule.count}`,
    );
  }
}

for (const rule of ALLOWED) {
  const seen = hits.filter(
    (h) => h.file === rule.file && h.token === rule.token,
  ).length;
  if (seen === 0) {
    problems.push(
      `${rule.file}  allowlist entry for ${rule.token} matches nothing. Remove it.`,
    );
  }
}

const unique = [...new Set(problems)];

if (unique.length > 0) {
  console.error("\nDash check failed.\n");
  for (const problem of unique) console.error(`  ${problem}`);
  console.error(
    [
      "",
      "A dash splicing two clauses is banned in this repo's copy. Use a colon,",
      "a comma, or a full stop. Hyphenated compounds (data-quality) are fine and",
      "are not what this checks.",
      "",
      "If the dash is genuinely typographic, add it to ALLOWED in",
      "scripts/check-dashes.mjs with a reason, and expect that entry to be",
      "argued with in review.",
      "",
    ].join("\n"),
  );
  process.exit(1);
}

console.log(
  `Dash check passed. ${hits.length} occurrence(s), all accounted for in the allowlist.`,
);
