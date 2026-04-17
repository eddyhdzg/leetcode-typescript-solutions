# Leetcode TypeScript Solutions by eddyhdzg

[leetcode.com/eddyhdzg](https://leetcode.com/eddyhdzg/)

## 2026 — back at it

Coming back after a couple of years. TS-only now, setup mirrors LeetCode's judge: TypeScript `5.7.3`, target `ES2024`, `lodash@4.17.21`, all `@datastructures-js/*` pinned. Tooling: [Ultracite](https://www.ultracite.ai/) (Biome preset).

## AI-free practice

Practicing without AI is the whole point. `.zed/settings.json` (tracked) turns off Zed's Edit Predictions; plain LSP completions and Biome format-on-save stay on.

## Layout

```
src/problems/       # archival 2020-era .ts solutions — don't edit
src/problems-2026/  # current solutions as markdown
src/utils/classes/  # ListNode, TreeNode, Trie (barrel via @/utils/classes)
playground.ts       # local scratch (gitignored, create as needed)
```

## Scripts

```sh
pnpm install
pnpm check   # lint
pnpm fix     # lint + format
```

## New submissions

Each problem lives at `src/problems-2026/<num>.<Kebab-Title>.md`. Scaffold from the template via the project slash command in Claude Code:

```
/submission 3761 minimum-absolute-distance-between-mirror-pairs
```

It fills in the title, LeetCode URL, and GitHub URL. Complexity, Submission stats, and Code are left blank — **you fill those in yourself**.
