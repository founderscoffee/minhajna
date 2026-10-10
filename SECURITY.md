# Security policy

## Reporting a problem

- **Report it privately,** through GitHub's [private vulnerability reporting](https://github.com/djazairdev/minhajna/security/advisories/new).
- **Never report it in public:** not in an issue, a pull request, a discussion or the teacher group.
- **Include:**
  - what is affected: the app or the server, its version, and the device or browser;
  - how to reproduce the problem, using the demo class or made-up data;
  - what an attacker could do with it.
- **Never include real pupil data,** even to show the problem.

## What happens next

- **We acknowledge your report within three working days** ([PRD §1.9](docs/prd/PRD.md#19-official-builds-releases-the-name-and-security)).
- **We keep you informed** while we fix it, and agree a publication date with you.
- **Critical flaws are fixed within 7 days** ([PRD §6.7](docs/prd/PRD.md#67-the-server-and-its-operators)).
- **After the fix,** we publish an advisory that credits you, unless you'd rather not be named.
- **Please keep the problem private** until the fix ships. Without our agreement, that is no longer than 90 days after your report.

## What is in scope

- The apps, the server, the website, and the build and release process.
- Anything that could expose pupil data or teachers' records, or let someone read, change or forge them.
- An official build or a signed file that doesn't match its source, its checksum or its signature.

For now, this repository holds documents only, and there is no app yet. An app that calls itself Minhajna or Tabachir today is not ours ([README](README.md)).

## Supported versions

Security fixes go into the latest release. Keep the app up to date to receive them.
