# Network calls

Every network call that Minhajna's code makes is listed here, with the address, what is sent and why ([engineering rules](docs/contributing/engineering.md#pupil-data-and-privacy), [PRD §1.5](docs/prd/PRD.md#15-pupil-data-and-privacy-rules)). Adding or widening a call is a privacy-sensitive change, and this file changes in the same pull request.

| Part | Address | What is sent | Why |
|---|---|---|---|
| The shared core (`packages/core`) | None | Nothing | The core makes no network calls |

The tests make no network calls either ([engineering rules](docs/contributing/engineering.md#tests)).
