// Entry program for the GTA 6 meme X bounty (gta6-meme-x-01).
//
// The entry is the post on X. This program does one thing: it carries
// POST.json, which names that post, from the repository into the output
// directory, where the house reads it. It uses only the Node standard
// library, touches no network and no clock, and reads nothing outside
// the repository directory. Running it twice writes the same bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
const post = readFileSync(join(repoDir, 'POST.json'), 'utf8');
writeFileSync(join(outDir, 'POST.json'), post);
