# Technical Evidence Brief — Younghoo Cho

---

## A. DEMETER: Blockchain-Based Cross-Organization Data Sharing Platform

### Overview

DEMETER is a working data infrastructure platform that lets independent organizations share files while keeping a verifiable, traceable history on a shared blockchain. Files stay on each organization's local system. Only fingerprints, provenance declarations, and access decisions are recorded on-chain. Any receiving party can verify a file's origin, trace how it was transformed or combined, and detect untrusted sources — without contacting the original sender.

I designed and built the full system: chaincode contracts, backend API, off-chain data stores, natural language interface, web frontend, local agent, and deployment pipeline.

---

### Problem

Agricultural data flows across farms, labs, advisors, and regulators — but when a file moves from one organization to another, its history is lost. The receiver has no way to confirm where the file came from, whether it was modified, or which sources contributed to a combined report. A central database could solve this, but no single organization has the infrastructure to collect and maintain all agricultural data. What's needed is an infrastructure that records file history on a shared ledger while files remain on each organization's own system.

---

### What I Built

A complete platform — from smart contracts to browser UI — that supports:

- **Origin registration** — anchor a file's SHA-256 fingerprint on-chain with provider identity, metadata, Creative Commons license, and visibility control
- **Cross-organization transfer tracking** — record who sent what to whom, detect gaps in the chain
- **Transformation declaration** — link a derived file to its source (e.g., raw sensor data → normalized analysis)
- **Multi-source integration** — link a combined output to all contributing sources, with recursive graph inspection that returns PASS (all sources verified) or FAIL (untrusted/missing sources detected)
- **Reuse evaluation** — enforce provider-declared license conditions per file (research only, no derivatives, expiration)
- **Access request workflow** — request, approve, fulfill, download — with on-chain transfer record
- **Natural language interface** — 15 intents, deterministic keyword routing + Phi-3 LLM fallback, write confirmation gate
- **Local agent** — watches a folder, auto-detects provenance (origin/transformation/integration), registers on-chain without user input
- **DID authentication** — ECDSA P-256 key pair generation in browser, challenge-response login, no passwords

---

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│  Frontend (Next.js)         Local Agent (Node.js)       │
│  Search · Register · My Files · Inbox · Login           │
│  NLQ chat · Provenance graph · DID auth                 │
├─────────────────────────────────────────────────────────┤
│  Backend API (Express.js, 37 endpoints)                 │
│  dv · ti · si · reuse · search · nlq · identity · share │
│  ┌─────────────────┐  ┌────────────────────────┐       │
│  │ Off-chain stores │  │ Fabric client          │       │
│  │ (JSONL × 4)      │  │ (invoke / query)       │       │
│  └─────────────────┘  └──────────┬─────────────┘       │
├──────────────────────────────────┼──────────────────────┤
│  Hyperledger Fabric 2.x         │                       │
│  3 Go chaincode contracts       │                       │
│  19 on-chain functions           │                       │
│  Immutable ledger (4 orgs)      │                       │
└─────────────────────────────────────────────────────────┘
```

**On-chain (Hyperledger Fabric):** Three Go smart contracts — Dataset (register, verify, transfer, confirm), Transform (declare transformation/integration/redistribution, trace graph), Reuse (evaluate, trace decision chain). All records are immutable and cryptographically linked.

**Off-chain (each organization's environment):** Four JSONL stores holding registration metadata, identities, reuse events, and share requests. Files remain on local systems. A local Node.js agent watches a folder and auto-registers new files with provenance detection.

**Connection mechanism:** The Express.js backend bridges both layers. Registration writes to both the ledger (fingerprint + metadata hash) and the off-chain store (full metadata). Verification reads the on-chain fingerprint and compares it to the presented file hash. The NLQ layer routes natural language queries to the appropriate API endpoint and returns structured results with inline provenance graphs.

---

### Core Capabilities

| Capability | Implementation |
|-----------|---------------|
| File registration | SHA-256 fingerprint on-chain, CC license, visibility (public/conditional/private) |
| Fingerprint verification | On-chain comparison, works without contacting sender |
| Transformation tracing | Declared lineage: input → output, traversable graph |
| Integration inspection | Recursive graph decomposition, PASS/FAIL per source |
| Untrusted source detection | Disputed files flagged without hiding the rest of the trace |
| Reuse enforcement | 7 CC license types, purpose check, expiration, max trace depth |
| Access control | Request → Approve → Fulfill → Download, on-chain transfer record |
| Natural language query | 15 intents, deterministic + LLM, write confirmation gate |
| Local agent | Zero-interaction: detect received files, classify new outputs, auto-register |
| DID authentication | ECDSA P-256 key pair, challenge-response, no central authority |

---

### Implementation Evidence from Code

| Component | Evidence |
|-----------|---------|
| Chaincode | 3 contracts, 19 exported functions (Go) |
| Backend API | 37 REST endpoints across 8 route modules (Node.js/Express) |
| Off-chain stores | 4 JSONL stores with defined schemas |
| Frontend | 7 pages (Next.js App Router, TypeScript) |
| NLQ routing | 15 intents, 3 execution modes, 74-case eval suite (100% accuracy) |
| Provenance graph | Inline React Flow visualization in search results |
| Local agent | 4 modules: watcher, fingerprint, API client, state manager |
| DID auth | Web Crypto API key generation + backend challenge-response verification |
| Demo pipeline | 19-node scenario script (10 origins, 4 transforms, 5 integrations, 4 orgs) |
| Deployment | Hyperledger Fabric via Docker Compose, automated reset + redeploy scripts |

---

### Stack

**Blockchain:** Hyperledger Fabric 2.x, Raft ordering, Go chaincode, X.509 identity model
**Backend:** Node.js, Express.js, SHA-256 (node:crypto)
**Frontend:** Next.js 15, React, TypeScript, React Flow (provenance graphs)
**NLQ:** Deterministic keyword router + Phi-3 via Ollama (local inference)
**Auth:** ECDSA P-256 (Web Crypto API), DID:demeter, challenge-response
**Data:** JSONL off-chain stores, on-chain world state (CouchDB via Fabric)
**Infra:** Docker Compose, bash automation, local Node.js agent

---

### Why This Is Relevant to Industry Roles

This system solves a real problem in agricultural data exchange: files cross organizational boundaries but lose their history. DEMETER demonstrates the ability to design and build a complete data infrastructure platform — from smart contracts to browser UI — that makes shared data verifiable and traceable across independent systems.

The same architecture applies to any domain where files move between organizations and trust matters: supply chain documentation, regulatory compliance, environmental monitoring, food safety records, or multi-party research data.

---

### Resume-Compatible Bullets

- Designed and built a full-stack blockchain data sharing platform (Hyperledger Fabric + Node.js + Next.js) that records file provenance across 4 independent organizations with 19 on-chain functions and 37 REST API endpoints
- Implemented SHA-256 fingerprint verification, transformation lineage tracing, and recursive multi-source integration inspection (PASS/FAIL) with inline provenance graph visualization
- Built a natural language query interface (15 intents, deterministic + LLM routing) with 100% routing accuracy across a 74-case evaluation suite and zero false writes
- Developed a local file agent that auto-detects provenance (origin/transformation/integration) and registers files on-chain without user interaction
- Implemented DID-based authentication with ECDSA P-256 key generation, challenge-response verification, and Creative Commons license enforcement (7 license types)

---

---

## B. Applied Computer Vision for Marine Production Systems

### Automated Feeding Optimization for Aquaculture

Developed computer vision systems for improving productivity in marine fish production through automated, species-specific feeding optimization for olive flounder and stone flounder. The system distinguished fish condition into two categories for feeding-related monitoring and decision support, combining population-level and individual-level analysis.

- **YOLO** for whole-population movement pattern analysis — detecting group feeding behavior and activity levels
- **SAM (Segment Anything Model)** for individual-level fish size estimation and growth monitoring
- Applied to real production environments for species-specific feeding protocol optimization
- Patent filed for the automated feeding system methodology

**How this complements DEMETER:** Demonstrates applied AI/ML engineering in a domain-specific production system — the same pattern of building working systems for agricultural/biological applications, combining sensing, data processing, and decision support.

**Patent evidence:** [https://patents.google.com/patent/KR20190055413A/en]

---

---

## C. Screenshots for Portfolio (from Demo.md)

To make this brief visual, capture these screenshots during the demo:

| # | What to capture | Demo step | Why it matters |
|---|----------------|-----------|---------------|
| 1 | Login page — account selection list | Step 1 | Shows DID auth system |
| 2 | Search — `verify file f1` result (match: true) | Step 6 | Core verification proof |
| 3 | Search — `trace transformation for f11` with graph | Step 3 | Lineage tracing |
| 4 | Search — `decompose integration f18` with PASS graph | Step 4 | Multi-source verified |
| 5 | Search — `decompose integration f19` with f_ext flagged | Step 7 | Disputed source detection |
| 6 | Search — `evaluate reuse of f1 for commercial` → DENY | Step 8 | License enforcement |
| 7 | My Files page — org_farm's registered files | Step 1 | Provider file management |
| 8 | Terminal — demo_setup.sh ALL PASS output | Setup | Infrastructure evidence |
| 9 | Terminal — local agent auto-registering transformation | Step 10 | Zero-interaction provenance |

**Architecture diagram:** Use the poster diagram (already created) or the ASCII diagram from this brief.

---

## D. Unclear Points / Needs Confirmation

1. **Marine CV patent link** — Insert actual patent URL in Section B
2. **Poster diagram** — Can the poster architecture image be used in the portfolio, or is it under embargo too?
3. **Demo video** — Once recorded, add the link in Section C or as a standalone item
4. **Public access date** — When does the embargo lift? The brief can note "source code available upon request" until then
5. **Marine CV — two fish condition categories** — What were the two categories specifically? (e.g., feeding vs. resting? healthy vs. stressed?) This would strengthen the bullet point
