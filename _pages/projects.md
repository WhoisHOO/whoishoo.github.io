---
layout: page
title: projects
permalink: /projects/
description: Systems I designed and built.
nav: true
nav_order: 3
toc:
  sidebar: left
---

<!-- Jump links -->
<div class="project-nav mb-4">
  <h4>Data Infrastructure</h4>
  <ul>
    <li><a href="#demeter">DEMETER: Data Sharing and Verification Platform</a></li>
  </ul>
  <h4>Applied AI</h4>
  <ul>
    <li><a href="#marine-cv">AI-Based Computer Vision for Marine Production Systems</a></li>
  </ul>
</div>

---

<div id="demeter"></div>

## DEMETER: Data Sharing and Verification Platform

<p class="text-muted">2022 -- 2026 &middot; University of Florida &middot; <code>Hyperledger Fabric</code> <code>Go</code> <code>Node.js</code> <code>Next.js</code> <code>LLM</code></p>

### Overview

DEMETER is a data infrastructure platform that lets independent organizations share files while keeping a verifiable, traceable history on a shared blockchain. Files stay on each organization's local system. Only fingerprints, provenance declarations, and access decisions are recorded on-chain. Any receiving party can verify a file's origin, trace how it was transformed or combined, and detect untrusted sources -- without contacting the original sender.

I designed and built the full system: chaincode contracts, backend API, off-chain data stores, natural language interface, web frontend, local agent, and deployment pipeline.

### Problem

Agricultural data flows across farms, labs, advisors, and regulators -- but when a file moves from one organization to another, its history is lost. The receiver has no way to confirm where the file came from, whether it was modified, or which sources contributed to a combined report. A central database could solve this, but no single organization has the infrastructure to collect and maintain all agricultural data. What's needed is an infrastructure that records file history on a shared ledger while files remain on each organization's own system.

### Architecture

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-architecture.png" title="DEMETER system architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    DEMETER system architecture: Frontend and Local Agent → Backend API → Hyperledger Fabric blockchain.
</div>

**On-chain (Hyperledger Fabric):** Three Go smart contracts -- Dataset (register, verify, transfer, confirm), Transform (declare transformation/integration/redistribution, trace graph), Reuse (evaluate, trace decision chain). All records are immutable and cryptographically linked.

**Off-chain (each organization):** Four JSONL stores holding registration metadata, identities, reuse events, and share requests. Files remain on local systems. A local Node.js agent watches a folder and auto-registers new files with provenance detection.

**Connection:** The Express.js backend bridges both layers. Registration writes to both the ledger (fingerprint + metadata hash) and the off-chain store (full metadata). Verification reads the on-chain fingerprint and compares it to the presented file hash.

### Module Design: DV, TI, SI

DEMETER's verification traceability is built on three independent modules. Each handles a distinct aspect of data provenance and can operate standalone or compose together.

#### DV -- Data Verification

DV establishes the origin identity of a file. When a provider registers a file, DV computes a SHA-256 fingerprint and writes it to the blockchain along with provider identity, metadata hash, Creative Commons license, and visibility level (public, conditional, or private). Any party that later receives the file can verify it against the on-chain record -- without contacting the original provider.

**What DV answers:** *"Is this file authentic? Who registered it? Under what terms?"*

- On-chain fingerprint anchoring (SHA-256)
- Provider identity binding via DID
- License declaration (7 CC license types)
- Visibility control: public / conditional / private
- Dispute mechanism: flag a file as untrusted, propagates through downstream traces

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-dv.png" title="DV module -- file registration and verification" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    DV module: file registration with on-chain fingerprint anchoring and verification flow.
</div>

#### TI -- Transformation Integrity

TI tracks how files change as they move through processing stages. When a researcher produces an output from one or more source files (e.g., raw sensor data → normalized analysis, or multiple datasets → combined report), TI records the declared lineage on-chain as a directed graph.

**What TI answers:** *"Where did this derived file come from? What were its inputs? Is the full chain verified?"*

- Transformation declaration: link output file to its source inputs
- Integration declaration: link output to multiple contributing sources
- Redistribution tracking: record forwarding across organizations
- Recursive graph traversal: trace back to origin through any number of hops
- Integrity check: PASS if all sources are verified, FAIL if any source is missing or disputed

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-ti.png" title="TI module -- transformation and integration tracing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    TI module: transformation lineage graph with recursive integrity inspection.
</div>

#### SI -- Sharing Infrastructure

SI governs how files move between organizations. It handles the full access lifecycle -- request, approval, fulfillment, and delivery -- with every step recorded on-chain. SI also enforces provider-declared reuse conditions: license type, permitted purpose, expiration, and derivative restrictions.

**What SI answers:** *"Can I use this file for my purpose? Who approved the transfer? What conditions apply?"*

- Access request workflow: Request → Approve → Fulfill → Download
- On-chain transfer record for every cross-organization movement
- Reuse evaluation: check purpose against declared license conditions
- Expiration enforcement and derivative restrictions
- Decision chain tracing: audit who approved what and when

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-si.png" title="SI module -- sharing and reuse enforcement" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    SI module: access control workflow and reuse evaluation with license enforcement.
</div>

### Core Capabilities

| Capability | Implementation |
|---|---|
| File registration | SHA-256 fingerprint on-chain, CC license, visibility (public/conditional/private) |
| Fingerprint verification | On-chain comparison, works without contacting sender |
| Transformation tracing | Declared lineage: input → output, traversable graph |
| Integration inspection | Recursive graph decomposition, PASS/FAIL per source |
| Untrusted source detection | Disputed files flagged without hiding the rest of the trace |
| Reuse enforcement | 7 CC license types, purpose check, expiration, max trace depth |
| Access control | Request → Approve → Fulfill → Download, on-chain transfer record |
| Natural language query | 15 intents, deterministic + LLM routing, write confirmation gate |
| Local agent | Auto-detects provenance (origin/transformation/integration), registers on-chain |
| DID authentication | ECDSA P-256 key pair, challenge-response, no central authority |

### Screenshots

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-login.png" title="DID authentication login" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-verify.png" title="Fingerprint verification" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-trace.png" title="Transformation trace" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: DID authentication. Middle: Fingerprint verification result. Right: Transformation trace with provenance graph.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-integration-pass.png" title="Integration decomposition PASS" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-integration-fail.png" title="Disputed source detection" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-reuse.png" title="Reuse evaluation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Integration decomposition (PASS). Middle: Disputed source detection (FAIL). Right: Reuse evaluation -- license enforcement.
</div>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-myfiles.png" title="My Files page" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/demeter-agent.png" title="Local agent" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: My Files management page. Right: Local agent auto-registering transformation.
</div>

### Implementation Summary

| Component | Detail |
|---|---|
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

### Stack

**Blockchain:** Hyperledger Fabric 2.x, Raft ordering, Go chaincode, X.509 identity model
**Backend:** Node.js, Express.js, SHA-256 (node:crypto)
**Frontend:** Next.js 15, React, TypeScript, React Flow
**NLQ:** Deterministic keyword router + Phi-3 via Ollama (local inference)
**Auth:** ECDSA P-256 (Web Crypto API), DID:demeter, challenge-response
**Data:** JSONL off-chain stores, on-chain world state (CouchDB via Fabric)
**Infra:** Docker Compose, bash automation, local Node.js agent

---

<div id="marine-cv"></div>

## AI-Based Computer Vision for Marine Production Systems

<p class="text-muted">2019 -- 2022 &middot; Billion21 &middot; <code>YOLO</code> <code>SAM</code> <code>Python</code> <code>OpenCV</code></p>

### Overview

Developed computer vision systems for improving productivity in marine fish production through automated, species-specific feeding optimization for olive flounder and stone flounder. The system distinguished fish condition into two categories for feeding-related monitoring and decision support, combining population-level and individual-level analysis.

### Approach

- **YOLO** for whole-population movement pattern analysis -- detecting group feeding behavior and activity levels
- **SAM (Segment Anything Model)** for individual-level fish size estimation and growth monitoring
- Applied to real production environments for species-specific feeding protocol optimization
- Patent filed for the automated feeding system methodology

### Screenshots

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/marine-yolo.png" title="YOLO fish detection" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/marine-sam.png" title="SAM size estimation" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/marine-environment.png" title="Production environment" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: YOLO detection output. Middle: SAM segmentation for size estimation. Right: Production environment setup.
</div>

### Stack

**Detection:** YOLO
**Segmentation:** SAM (Segment Anything Model)
**Processing:** Python, OpenCV
**Domain:** Olive flounder, stone flounder -- marine aquaculture

### Relevance

Demonstrates applied AI/ML engineering in a domain-specific production system -- the same pattern of building working systems for agricultural and biological applications, combining sensing, data processing, and decision support.

### Related Patent

Methods for Selecting Spores from Laver Farm Devices. Patent KR102034354B1, 2019.
[Google Patents](https://patents.google.com/patent/KR20190055413A/en)
