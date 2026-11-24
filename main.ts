import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "Out of office until Monday. My inbox has started answering itself, and honestly, it's better at my job than I am.";

function writeEntry(dir: string, text: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), text, "utf8");
}

writeEntry(outDir, line);
