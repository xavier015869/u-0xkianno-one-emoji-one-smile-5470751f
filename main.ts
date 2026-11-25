// One Emoji, One Smile — u-0xkianno-one-emoji-one-smile-5470751f
//
// The program writes exactly one emoji to /output/entry.txt and nothing
// else: no words, no caption, no explanation.
//
// The chosen emoji is the hugging face. A stranger glancing at a phone
// screen reads open arms at once: a warm, friendly welcome that needs no
// context, the same in any language and at any age. It is a deliberate
// pick rather than the first smiley that comes to mind, and it stays on
// the friendly side of the line — a hug offered, not intimacy or
// flirtation from someone unknown.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EMOJI = "\u{1F917}";

// The gate accepts UTF-8 text of 1 to 8 characters, not only white
// space, and the brief demands exactly one emoji and nothing else.
// Refuse to write anything that does not meet both, so a stray
// newline or an extra character can never slip into the entry.
const characters = [...EMOJI];
if (characters.length !== 1 || EMOJI.trim().length === 0) {
  throw new Error("entry must be exactly one emoji");
}

const outputPath =
  process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, EMOJI, "utf8");
