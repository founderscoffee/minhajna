# 0003. Contributor terms: DCO sign-off, no CLA

- **Date:** 2026-09-26
- **Status:** Accepted
- **Decided by:** the founder

## Context

Contributors must certify that they have the right to submit their work. The project could also keep the right to relicense the code later, for example to offer the ministry other terms.

## Options

- **DCO (Developer Certificate of Origin):** a "Signed-off-by" line in each commit. Nobody can relicense others' contributions without their consent.
- **CLA (Contributor License Agreement):** contributors grant the project the right to relicense. It adds a signing step, and some contributors distrust it.

## Decision

The DCO 1.1, with no CLA. Every commit is signed off (`git commit -s`), and contributors keep the copyright in their work.

## Consequences

- Nobody can relicense others' contributions without their consent, the founder included. The ministry can use the code under AGPL-3.0-or-later.
- When a data curator commits content that a teacher sent through a form, the curator signs it off, relying on the licence the teacher accepted.
