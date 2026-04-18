# CLAUDE.md

## What this repo is

Personal LeetCode solutions in TypeScript, mirroring LeetCode's judge environment.

## Environment (must match LeetCode)

- TypeScript `5.7.3` (pinned), Node `22.14.0`
- Flags: `--alwaysStrict --strictBindCallApply --strictFunctionTypes --target ES2024`
- `lodash@4.18.1` + all `@datastructures-js/*` pinned

Don't replace pins with `^` ranges. Don't "upgrade for hygiene" — match LeetCode exactly.

## Layout

```
src/problems/       # archival 2020-era .ts solutions — don't touch
src/problems-2026/  # current solutions as markdown (.md)
src/utils/classes/  # ListNode, TreeNode, Trie (barrel via @/utils/classes)
playground.ts       # local scratch (gitignored)
.claude/commands/   # project slash commands (e.g. /submission)
```

- `baseUrl: ./src`, path alias `@/*`. Prefer barrels over deep imports.
- New solutions: `src/problems-2026/<num>.<Kebab-Title>.md` with `# Title`, `## Complexity`, `## Submission`, `## Code` (fenced typescript code block inside).
- Scaffold new submission files via the `/submission` slash command — don't write them by hand.
- `src/problems/` is archival — never edit.

## Tooling

- Lint/format: [Ultracite](https://www.ultracite.ai/) (Biome). `pnpm check` / `pnpm fix`.
- Package manager: `pnpm`. Don't generate `package-lock.json`.
- Type-check: `npx tsc --noEmit`.

## AI-free practice (important)

The user practices LeetCode here **without AI**. Editor is Zed; `.zed/settings.json` disables Edit Predictions for this workspace.

- **Don't write solutions in `src/problems/` unless explicitly asked** — hints, patterns, clarifying questions only.
- Tooling, config, `src/utils/` work is fine to do directly.
- Don't re-enable AI keys in `.zed/settings.json` or gitignore `.zed/`.

## Also avoid

- Don't reintroduce ESLint/Prettier.
- Don't add tests/CI/framework scaffolding.
- Don't edit archival files under `src/problems/` without being asked.
