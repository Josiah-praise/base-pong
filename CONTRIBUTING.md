# Contributing to PONG-IT

Thanks for being willing to help improve PONG-IT! To keep the project healthy, we follow a few simple ground rules:

## Communication & collaboration

- Open a GitHub issue before making large changes so maintainers can comment on the direction.
- Keep threads focused (one concern per issue) and tag relevant directories (`backend`, `frontend`, `blockchain`).
- Use the issue templates (`bug`, `enhancement`) to surface reproducible details.

## Branching & commits

- Branch names should follow the pattern `area/short-description` (e.g., `frontend/refactor-game-status`).
- Write descriptive commit messages in the format `type(scope): summary`, where `type` is one of `fix`, `feat`, `docs`, `chore`, `refactor`, `style`, or `test`.
- Keep commits small and atomic so they can be reviewed independently; aim for 3–5 commits per PR.

## Pull requests

- Use the PR template to describe what changed, why, and what manual verification was performed.
- Rebase onto `main` before merging to keep history linear.
- Include test/lint results for the affected area (e.g., `pnpm lint`, `forge test`).
- No breaking changes unless approved by the core team—reference this document when in doubt.

## Quality guidelines

- Keep the linting pipeline green (`pnpm lint`, `pnpm test`, `forge test`, etc.) before requesting review.
- Run formatting tools (`prettier`, `forge fmt`) on touched files.
- Document any new configuration or process in `README.md`, `STARTUP_GUIDE.md`, or the relevant sub-dir README.

## Getting started tasks

1. Read `.github/ISSUE_TEMPLATE/bug_report.md` or `feature_request.md` depending on your goal.
2. Create a branch off `main` and work inside the directory you plan to change (`frontend`, `backend`, `blockchain`).
3. Run the relevant example command from the `scripts/` directory (once created) or the `package.json` scripts to verify behavior.
4. Open a PR and reference this file when describing how to run the new logic or docs.
