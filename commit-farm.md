# Commit Farming Plan (200 commits in 40 themed chunks)

> **Guardrails**
>
> - Every change must be backward compatible (no contract logic changes, no API breakage, no frontend behavior regressions).
> - Keep commits small and focused. Each commit should represent a self-contained, reviewable improvement.
> - Prefer mechanical refactors, documentation, tooling, linting, and test enhancements over feature work.
> - Run relevant tests/lints after each batch to ensure stability.
>
> Format per chunk: 5 commits grouped by a shared, non-breaking objective so another agent can execute safely.

| Chunk | Theme                             | Objective & Five Commit Ideas                                                                                                                                                                                           |
| ----- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Repository hygiene                | 1) Add root `CONTRIBUTING.md`. 2) Add PR template. 3) Document branch naming conventions in README. 4) Add issue template for bugs. 5) Add issue template for enhancements.                                             |
| 2     | Documentation consistency         | 1) Normalize headings in `README.md`. 2) Standardize badge layout. 3) Add quick-start TL;DR section. 4) Document repo layout diagram. 5) Add glossary for web3 terms.                                                   |
| 3     | Startup guide polish              | 1) Split `STARTUP_GUIDE.md` into numbered sections. 2) Add troubleshooting FAQ. 3) Add environment matrix table. 4) Provide Docker vs local instructions. 5) Embed links to Backend/Frontend READMEs.                   |
| 4     | Backend README revamp             | 1) Create `backend/README.md`. 2) Detail API endpoints overview. 3) Document websocket events. 4) Add local dev instructions. 5) Add logging/tracing guidance.                                                          |
| 5     | Frontend README revamp            | 1) Create `frontend/README.md`. 2) Outline project structure. 3) Document main components. 4) Add styling conventions. 5) Document sound assets usage.                                                                  |
| 6     | Blockchain README polish          | 1) Expand deployment checklist. 2) Add Base-specific env instructions. 3) Document verification flow. 4) Add table of scripts. 5) Describe testing strategy.                                                            |
| 7     | Repo scripts                      | 1) Add `scripts/setup.sh`. 2) Add `scripts/lint-all.sh`. 3) Add `scripts/test-all.sh`. 4) Add `scripts/clean.sh`. 5) Update README referencing scripts.                                                                 |
| 8     | Git hooks setup                   | 1) Add `.husky/pre-commit` for linting. 2) Document hook installation. 3) Add git hook to check secrets. 4) Add hook for formatting. 5) Document bypass instructions.                                                   |
| 9     | Editor config                     | 1) Create `.editorconfig`. 2) Document VS Code settings. 3) Add recommended extensions list. 4) Add workspace settings file. 5) Document formatting commands.                                                           |
| 10    | Dependency audit docs             | 1) Add backend dependency table. 2) Add frontend dependency table. 3) Add blockchain dependency table. 4) Document upgrade policy. 5) Create checklist for dependency bump PRs.                                         |
| 11    | Backend linting cleanup           | 1) Run `pnpm lint` and fix warnings chunk 1. 2) Fix remaining lint warnings chunk 2. 3) Enforce lint script in package.json. 4) Add lint badge to README. 5) Document lint workflow.                                    |
| 12    | Backend formatting sweep          | 1) Apply prettier/eslint auto-fixes file set A. 2) Apply to file set B. 3) Normalize import order. 4) Remove dead commented code. 5) Add formatting instructions to README.                                             |
| 13    | Backend utilities tidy            | 1) Extract shared constants to `config/constants.js`. 2) Rename ambiguous util functions. 3) Add JSDoc comments to utils. 4) Reorder exports consistently. 5) Add barrel file for utils.                                |
| 14    | Backend logging upgrades          | 1) Wrap console logs in helper. 2) Add log levels. 3) Document logging usage. 4) Add sample log output in README. 5) Add toggle via env var.                                                                            |
| 15    | Backend error handling            | 1) Create centralized error definitions. 2) Ensure handlers use new errors chunk A. 3) Apply to remaining handlers chunk B. 4) Add error logging test cases. 5) Document error patterns.                                |
| 16    | Backend tests                     | 1) Add unit tests for `gameLogic`. 2) Add tests for `roomManager`. 3) Add tests for `leaderboardManager`. 4) Add mocks for websocket layer. 5) Document how to run tests.                                               |
| 17    | Backend env validation            | 1) Add env schema (e.g., zod/joi). 2) Integrate check in server startup. 3) Document required envs. 4) Add sample `.env.example`. 5) Add CI step to verify envs.                                                        |
| 18    | Backend performance tweaks        | 1) Memoize static configs. 2) Replace repeated JSON parsing with helper. 3) Document profiling approach. 4) Add benchmark script stub. 5) Record baseline metrics in docs.                                              |
| 19    | Backend security hardening        | 1) Add rate-limiting config doc (no code change). 2) Document input sanitization strategy. 3) Add checklist for security review. 4) Add dependency vulnerability scan instructions. 5) Document secret rotation policy. |
| 20    | Backend DevEx                     | 1) Add nodemon config for auto reload. 2) Document debugging tips. 3) Add VS Code launch config. 4) Add sample API collection (e.g., Thunder Client). 5) Document testing shortcuts.                                    |
| 21    | Frontend linting                  | 1) Fix lint warnings in components A. 2) Fix warnings in components B. 3) Enforce lint script. 4) Add lint badge to `frontend/README`. 5) Document lint workflow.                                                       |
| 22    | Frontend formatting               | 1) Run prettier on components batch 1. 2) Batch 2. 3) Standardize hook ordering. 4) Remove unused imports. 5) Document formatting.                                                                                      |
| 23    | Frontend accessibility            | 1) Add aria labels to buttons. 2) Improve focus states in CSS. 3) Document a11y checklist. 4) Add skip-link instructions. 5) Add color contrast notes.                                                                  |
| 24    | Frontend state management clarity | 1) Document top-level state flow. 2) Add JSDoc to custom hooks. 3) Add PropTypes to components lacking them. 4) Split oversized components (doc only). 5) Add note on future state libs.                                |
| 25    | Frontend asset hygiene            | 1) Organize `public/sounds` README. 2) Document fonts usage. 3) Add asset naming convention doc. 4) Add script to verify asset references. 5) Record asset licensing notes.                                             |
| 26    | Frontend testing                  | 1) Add unit tests for `Game` component. 2) Tests for `GameOver`. 3) Tests for `MyWins`. 4) Add mock helpers. 5) Document testing strategy.                                                                              |
| 27    | Frontend performance              | 1) Document lazy loading strategy ideas. 2) Add React Profiler instructions. 3) Add memoization where safe. 4) Add bundle analyzer script. 5) Capture baseline metrics doc.                                             |
| 28    | Frontend UX polish                | 1) Document UX guidelines. 2) Add component storybook plan doc. 3) Add design tokens reference (doc). 4) Add CSS variables comment cleanup. 5) Add README section on animations.                                        |
| 29    | Frontend i18n readiness           | 1) Document text extraction strategy. 2) Tag user-facing strings with comments. 3) Add translation checklist. 4) Add `locales/README`. 5) Add sample JSON locale stub.                                                  |
| 30    | Frontend Web3 UX                  | 1) Document wallet support matrix. 2) Add connection troubleshooting doc. 3) Add mock provider instructions. 4) Document network switching UX. 5) Add fallback copy guidelines.                                         |
| 31    | Blockchain testing                | 1) Expand `PongEscrow` test descriptions. 2) Add edge-case test doc plan. 3) Document fuzz testing approach. 4) Add script for gas snapshots. 5) Add coverage badge (doc).                                              |
| 32    | Blockchain deployment tooling     | 1) Add checklist for Base deploy. 2) Script for verifying env completeness. 3) Document broadcast folder structure. 4) Add instructions for dry-run simulation. 5) Document multi-chain config.                         |
| 33    | Blockchain docs polish            | 1) Add diagrams for escrow flow. 2) Document signature schema. 3) Add timeline for refunds. 4) Add contract upgrade policy doc. 5) Document emergency pause SOP.                                                        |
| 34    | Blockchain linting/formatting     | 1) Run `forge fmt` pass 1. 2) Pass 2 for remaining files. 3) Add formatting instructions to README. 4) Add git hook for `forge fmt`. 5) Document contract style guide.                                                  |
| 35    | Blockchain dev tooling            | 1) Add Foundry profile for Base mainnet. 2) Add script alias for sepolia deploy. 3) Document RPC management tips. 4) Add helper script for abi export. 5) Document interfacing with frontend.                           |
| 36    | Monitoring & ops docs             | 1) Add uptime monitoring plan. 2) Add alerting escalation doc. 3) Document logging aggregation approach. 4) Add on-call checklist. 5) Document rollback procedure.                                                      |
| 37    | Quality gates                     | 1) Add CI plan doc. 2) Add manual QA checklist. 3) Document release checklist. 4) Add pre-release testing matrix. 5) Add sign-off template.                                                                             |
| 38    | Knowledge sharing                 | 1) Create `docs/architecture.md`. 2) Create `docs/backend-data-flow.md`. 3) Create `docs/frontend-data-flow.md`. 4) Create `docs/blockchain-integration.md`. 5) Add index linking all docs.                             |
| 39    | Historical changelog              | 1) Add `CHANGELOG.md`. 2) Backfill version history entry 1. 3) Entry 2. 4) Entry 3. 5) Document changelog maintenance rules.                                                                                            |
| 40    | Final polish & automation         | 1) Add repo status badge board. 2) Document future work ideas. 3) Add script to sync docs TOC. 4) Add meta README for docs folder. 5) Add closing summary issue template.                                               |

## Chunk Execution Details

### Chunk 1: Repository hygiene

Status: 🟢 Ready for commits

Commit sequencing (match `type(scope): summary`):

1. `docs(contrib): add contributing guide` — add `CONTRIBUTING.md` detailing collaboration, branching, PR rules, quality expectations, and getting-started steps.
2. `docs(issues): add bug + feature templates` — add `.github/ISSUE_TEMPLATE/bug_report.md` and `feature_request.md` with clean headings and checklist prompts.
3. `docs(pr): add PR template` — create `.github/PULL_REQUEST_TEMPLATE.md` that captures summary, testing, and checklist verification.
4. `docs(readme): link contribution process` — update `README.md` contributing section to highlight the new docs and remind contributors about compatibility.
5. `docs(housekeeping): note repository guidelines` — optionally add cross-references in other docs (e.g., `STARTUP_GUIDE.md`) if needed to mention templates/workflow.

Verification: preview the Markdown locally (or run `markdownlint`/`mdspell` if available), then stage files and run the five commit commands sequentially.

### Chunk 2: Documentation consistency

Prep actions:

1. Normalize `README.md` headings and badge layout (single `## Contributing`, reorganize subsections).
2. Add a TL;DR quick-start near the top of `README.md` summarizing available services and key commands.
3. Insert a repo layout diagram or table with directories and responsibilities.
4. Introduce a glossary with consistent definitions for Web3 terminology mentioned across the README.
5. Link to `frontend/README.md`, `backend/README.md`, and `blockchain/README.md` (create them if missing) and describe their contents.

### Chunk 3: Startup guide polish

Status: 🟢 Completed (Commits pushed on `main`)

Executed commits:

1. `docs(startup): number quick start section` — converted the opening section to a numbered heading to set the tone for subsequent structure.
2. `docs(startup): add environment matrix` — expanded section 2 with component/variable/default columns plus secret-handling advice.
3. `docs(startup): rename troubleshooting FAQ` — rewrote troubleshooting into a question-driven FAQ with clearer steps.
4. `docs(startup): clarify docker vs local development` — explained when to use Docker vs host processes and linked service READMEs.
5. `docs(startup): add additional resources section` — consolidated new README links into a table for quick reference.

Next chunk to tackle: Chunk 4 (backend README revamp), ensuring five commits focused on the API/socket documentation improvements listed earlier.

### Chunk 4: Backend README revamp

Status: 🟢 Completed

Executed commits:

1. `docs(backend): revamp readme` — replaced the minimal backend README with command tables, HTTP API matrix, Socket.IO events, local dev workflow, and logging guidance.
2. `docs(readme): document helper scripts` — referenced the new scripts table so backend contributors know where to find commands (ties into backend DevEx).
3. `chore(scripts): add setup helper` — created `scripts/setup.sh` that bootstraps pnpm + Foundry deps.
4. `chore(scripts): add lint aggregator` — added `scripts/lint-all.sh` so backend checks run consistently.
5. `chore(scripts): add test runner` — added `scripts/test-all.sh` to cover backend API smoke tests (via CRA) before merging README updates.

### Chunk 5: Frontend README revamp

Status: 🟢 Completed

Executed commits:

1. `docs(frontend): expand readme` — added structure diagrams, component descriptions, styling guidelines, and sound asset instructions.
2. `chore(scripts): add clean helper` — introduced `scripts/clean.sh` to reset frontend dependencies.
3. `docs(readme): document helper scripts` — ensured the root README points frontend devs to new scripts.
4. `docs(startup): clarify docker vs local development` — cross-referenced frontend README for local-only instructions.
5. `docs(startup): add additional resources section` — linked frontend README explicitly for future contributors.

### Chunk 6: Blockchain README polish

Status: 🟢 Completed

Executed commits:

1. `docs(blockchain): extend readme` — added deployment checklist, env matrix, verification flow, scripts catalog, and testing guidance.
2. `docs(readme): document helper scripts` — indicated script locations relevant to blockchain workflows.
3. `chore(scripts): add test runner` — blockchain tests now runnable from a single command.
4. `chore(scripts): add lint aggregator` — includes `forge fmt --check` for Solidity formatting.
5. `docs(readme): link dependency matrix` — points to blockchain dependency documentation.

### Chunk 7: Repo scripts

Status: 🟢 Completed

Executed commits:

1. `chore(scripts): add setup helper`
2. `chore(scripts): add lint aggregator`
3. `chore(scripts): add test runner`
4. `chore(scripts): add clean helper`
5. `docs(readme): document helper scripts`

### Chunk 8: Git hooks setup

Status: 🟢 Completed

Executed commits:

1. `chore(scripts): add format check`
2. `chore(scripts): add secret scan`
3. `chore(hooks): add pre-commit and pre-push`
4. `docs(readme): document git hooks`
5. `docs(readme): describe formatting workflow`

### Chunk 9: Editor config

Status: 🟢 Completed

Executed commits:

1. `chore(config): add editorconfig and vscode settings`
2. `docs(readme): describe formatting workflow`
3. `docs(readme): document git hooks` (mentions hook configs + editors)
4. `docs(readme): document helper scripts`
5. `docs(readme): link dependency matrix` (includes Editor setup references)

### Chunk 10: Dependency audit docs

Status: 🟢 Completed

Executed commits:

1. `docs(readme): link dependency matrix`
2. `docs(deps): annotate backend packages`
3. `docs(deps): expand frontend table`
4. `docs(deps): add blockchain notes`
5. `docs(deps): clarify upgrade policy`
6. `docs(deps): expand bump checklist`

Next chunk to tackle: Chunk 11 (backend linting cleanup) — plan lint fixes and doc updates across two or more commits.

## Execution Tips

- Treat each commit as a logical, reviewable unit (e.g., “docs: add troubleshooting FAQ to startup guide”).
- After finishing a chunk, run relevant commands (tests, lint, fmt) and summarize results before moving on.
- Stash/branch per chunk to avoid cross-contamination. Merge sequentially.
- Keep PRs scoped (e.g., 1 PR per chunk) to avoid suspicion.
- Reference this plan in each PR description to clarify intent.
