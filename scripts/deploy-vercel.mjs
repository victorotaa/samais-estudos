/**
 * Publica a pasta site/ no projeto Vercel "samais-estudos" (produção).
 *
 * Uso:
 *   TOK=<vercel_token> node scripts/deploy-vercel.mjs
 *
 * O token NUNCA é versionado — passe sempre por variável de ambiente.
 * Projeto/scope ficam abaixo; ajuste se mudar de team/projeto.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const TOKEN = process.env.TOK;
if (!TOKEN) { console.error("Defina TOK=<vercel_token>"); process.exit(1); }

const TEAM = "team_QR85oPYyf6D6KukWSpRsUpsI";
const PROJECT = "samais-estudos";
const API = "https://api.vercel.com";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "site");

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    statSync(p).isDirectory() ? walk(p, acc) : acc.push(p);
  }
  return acc;
}

const files = walk(ROOT).map((abs) => {
  const buf = readFileSync(abs);
  return { buf, path: relative(ROOT, abs).split("\\").join("/"),
           sha: createHash("sha1").update(buf).digest("hex"), size: buf.length };
});

for (const f of files) {
  const r = await fetch(`${API}/v2/files?teamId=${TEAM}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/octet-stream",
               "x-vercel-digest": f.sha, "Content-Length": String(f.size) },
    body: f.buf,
  });
  if (!r.ok) { console.error("upload falhou", f.path, r.status, await r.text()); process.exit(1); }
}
console.log(`Uploads OK (${files.length} arquivos).`);

const dr = await fetch(`${API}/v13/deployments?teamId=${TEAM}&forceNew=1`, {
  method: "POST",
  headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
  body: JSON.stringify({ name: PROJECT, target: "production",
    projectSettings: { framework: null },
    files: files.map((f) => ({ file: f.path, sha: f.sha, size: f.size })) }),
});
const dj = await dr.json();
if (!dr.ok) { console.error("deployment falhou", dr.status, JSON.stringify(dj)); process.exit(1); }

let state = dj.readyState || dj.status;
for (let i = 0; i < 40 && state !== "READY" && state !== "ERROR"; i++) {
  await new Promise((r) => setTimeout(r, 3000));
  const sj = await (await fetch(`${API}/v13/deployments/${dj.id}?teamId=${TEAM}`,
    { headers: { Authorization: `Bearer ${TOKEN}` } })).json();
  state = sj.readyState || sj.status;
}
console.log(state === "READY" ? "PRONTO ✅ https://samais-estudos.vercel.app" : `Estado: ${state}`);
