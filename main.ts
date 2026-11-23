import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "★★★★★ — changes his password, forgets it in seconds, then blames ME for locking him out at 2:47 a.m. Would get locked out again.";

// Gate: the bounty wants exactly one review line, 1-200 chars.
// Fail loudly instead of writing a malformed entry (a stray newline
// or carriage return would turn one review into two lines).
if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.includes("\n") ||
  entry.includes("\r")
) {
  throw new Error("entry must be exactly one line of 1-200 characters");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
