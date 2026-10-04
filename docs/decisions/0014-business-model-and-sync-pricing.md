# 0014. The business model and how sync is priced

- **Date:** 2026-09-27
- **Status:** Superseded by [0015](0015-national-system-protections-by-design.md) and [0016](0016-non-commercial.md)
- **Decided by:** the founder

## Context

[0006](0006-money-services-not-features.md) decided to charge for services and never for features, and left prices to the PRD's business section. The market sets hard limits:
- free teacher apps are the norm in Algeria, and no Algerian teacher in the research named a price they would pay for one;
- Google Play cannot bill Algerians;
- where teachers do pay, abroad, their main complaints are subscriptions, being charged per device, and paying before the app does anything.

Hosting in Algeria is cheap. The real cost is people's time.

## Options

- **A monthly subscription.** Common abroad, but teachers complain about subscriptions most, and a monthly payment adds friction every month.
- **One lifetime price for sync.** Teachers prefer paying once, but sync costs money to run every year.
- **A price per device.** Teachers ask for one price per account instead.
- **In-app purchase through Google Play.** Not possible, because Google Play cannot bill Algerians.
- **One payment per school year, per account, made on the project's own website.** Chosen.

## Decision

- **Teachers:** every feature is free. Sync is the only paid service for teachers.
- **Sync:**
  - free during the pilot, once its gates are met;
  - after the pilot, one payment per school year, per teacher account, covering all the teacher's devices;
  - the price shown before sync is set up;
  - the pilot tests three prices, 500, 1,000 and 1,500 DA a year, and the price is set from its results.
- **If a payment lapses,** sync stops and nothing else changes. The data stays on the teacher's devices, and exporting stays free.
- **Where teachers pay:** on the project's `.com.dz` website, through channels approved in Algeria: Chargily, CIB, Edahabia and BaridiMob. The Google Play build shows no prices or payment links; the app only signs in.
- **Institutions:** paid deployment, training and support, with a public price list. The state buys through public procurement (Loi 23-12).
- **Other income:** the supporter pass, grants and sponsors, as in [0006](0006-money-services-not-features.md).
- **Where money goes first:** plan-pack curation, then the independent security review, hosting and support.

Details: [PRD §9](../prd/PRD.md#9-business).

## Consequences

- **Selling sync needs a legal entity,** a commercial-register entry and the e-commerce rules of Loi 18-05. The entity is still to be decided (PRD §9.8).
- **Hosting is covered early:** at 1,000 DA a year, fewer than 200 paying teachers cover the servers. Sync income must eventually pay for people's time; until then, grants and institutions do.
- **Google Play's payment rules are checked again before launch,** in case they change for Algeria.
