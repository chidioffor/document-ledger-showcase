import { createHash } from "node:crypto";

type LedgerEntry = Readonly<{
  reference: string;
  sha256: string;
  recordedAt: string;
  action: "REGISTERED" | "VERIFIED";
}>;

export function fingerprint(content: string): string {
  return createHash("sha256").update(content, "utf8").digest("hex");
}

export function register(reference: string, syntheticContent: string): LedgerEntry {
  return {
    reference,
    sha256: fingerprint(syntheticContent),
    recordedAt: new Date("2026-01-01T09:00:00Z").toISOString(),
    action: "REGISTERED",
  };
}

const entry = register("demo-document-001", "This is synthetic demonstration content.");
console.log({ ...entry, verified: entry.sha256 === fingerprint("This is synthetic demonstration content.") });
