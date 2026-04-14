---
layout: page
title: "DEMETER: Data Sharing and Verification Platform"
description: Blockchain- and LLM-enabled platform for cross-system data exchange, origin verification, and traceable file history.
img: assets/img/demeter-thumbnail.jpg
importance: 1
category: platform
related_publications: true
---

## Overview

DEMETER is a data infrastructure platform that lets independent organizations share files while keeping a verifiable, traceable history on a shared blockchain. Files stay on each organization's local system. Only fingerprints, provenance declarations, and access decisions are recorded on-chain. Any receiving party can verify a file's origin, trace how it was transformed or combined, and detect untrusted sources -- without contacting the original sender.

I designed and built the full system: chaincode contracts, backend API, off-chain data stores, natural language interface, web frontend, local agent, and deployment pipeline.

## Problem

Agricultural data flows across farms, labs, advisors, and regulators -- but when a file moves from one organization to another, its history is lost. The receiver has no way to confirm where the file came from, whether it was modified, or which sources contributed to a combined report. A central database could solve this, but no single organization has the infrastructure to collect and maintain all agricultural data. What's needed is an infrastructure that records file history on a shared ledger while files remain on each organization's own system.

## Architecture

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

## Core Capabilities

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

## Screenshots

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

## Implementation Summary

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

## Stack

**Blockchain:** Hyperledger Fabric 2.x, Raft ordering, Go chaincode, X.509 identity model
**Backend:** Node.js, Express.js, SHA-256 (node:crypto)
**Frontend:** Next.js 15, React, TypeScript, React Flow
**NLQ:** Deterministic keyword router + Phi-3 via Ollama (local inference)
**Auth:** ECDSA P-256 (Web Crypto API), DID:demeter, challenge-response
**Data:** JSONL off-chain stores, on-chain world state (CouchDB via Fabric)
**Infra:** Docker Compose, bash automation, local Node.js agent
