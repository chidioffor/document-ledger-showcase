# Document Ledger — public engineering showcase

> A safe, representative demonstration of my approach to trustworthy document workflows—not the Document Ledger Professional source code.

Document Ledger is shown here as a privacy-first platform-design case study. Its public story is about keeping a document's lifecycle comprehensible: validate its metadata, preserve an integrity record, and make access and change history auditable.

> **Confidentiality notice:** This repository is an independently authored reference to the engineering responsibilities represented by Document Ledger Professional. It does not contain, reproduce, or substitute for the protected client implementation, which remains private under confidentiality obligations.

## What this showcase demonstrates

- **Trustworthy workflows:** document events become an append-only audit trail.
- **Privacy by design:** a ledger stores references and integrity fingerprints—not document contents.
- **Clear product architecture:** a client application, API, storage gateway, and verification boundary each have defined roles.
- **Integrity thinking:** deterministic hashes make tampering detectable without pretending a hash alone solves all governance needs.

## Technology lens

| Area | Representative tools |
| --- | --- |
| Web application | React, Vite, TypeScript |
| API & services | Node.js, TypeScript |
| Data & files | PostgreSQL, object storage |
| Trust integrations | Wallet connectivity, ethers, jsPDF |

## Safe sample code

[`src/ledger.ts`](src/ledger.ts) is an independently authored, in-memory demo. It records synthetic document references and calculates SHA-256 integrity fingerprints locally. It never uploads a file, calls a chain, connects a wallet, or accesses a private system.

```bash
npm run demo
```

## Architecture

Read [the public-safe architecture notes](docs/architecture.md) for the lifecycle model and the security choices this kind of product calls for.

For an additional public-safe reference to the wallet connection and permissions workflow, see [verification and wallet workflow](docs/verification-and-wallet-workflow.md).

## Boundaries

This repository intentionally excludes application source, document samples, customer information, access-control rules, storage credentials, blockchain configuration, deployment instructions, and production schemas. It is demonstration material, not a document custody service.

© Chidiebere Offor. Demonstration material; no licence to use the Document Ledger name or underlying private implementation is granted.
