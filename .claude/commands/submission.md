---
description: Scaffold a new src/problems-2026/<num>.<Kebab-Title>.md submission file from the template
---

Scaffold a new LeetCode submission file under `src/problems-2026/`.

**Input** (`$ARGUMENTS`) can be any of:
- A LeetCode URL: `https://leetcode.com/problems/minimum-absolute-distance-between-mirror-pairs`
- Problem number + slug: `3761 minimum-absolute-distance-between-mirror-pairs`
- Just the slug: `minimum-absolute-distance-between-mirror-pairs`

From that, derive:
- **Number** (e.g., `3761`) — ask the user once if it wasn't given.
- **Slug** (kebab-case lowercase).
- **Display title** — slug with each word capitalized, spaces.
- **File stem** — `<num>.<Kebab-Title>` (slug with each word capitalized, hyphen-separated).

Create `src/problems-2026/<file-stem>.md` with **exactly** this content:

````md
# <num>. <Display Title>

<!-- Post title: <Big-O> - TS with <approach>. Examples: "O(n) - TS with Set()", "O(n log n) - TS with Heap", "O(n) - TS with two pointers" -->
###

## Complexity

- Time:
- Space:

## Submission

Memory:  · Beats

## Code

```typescript

```

---

- [LeetCode problem](https://leetcode.com/problems/<slug>)
- [File on GitHub](https://github.com/eddyhdzg/leetcode-typescript-solutions/blob/master/src/problems-2026/<file-stem>.md)
- [More LeetCode TypeScript solutions](https://github.com/eddyhdzg/leetcode-typescript-solutions)
````

**Post-title convention:**
- H3 line directly under the H1 title.
- Format: `<Big-O> - TS with <approach>`.
- Big-O tightest accurate bound (`O(n)`, `O(n log n)`, `O(n²)`).
- Approach names exactly one thing: a data structure (`Set()`, `Map()`, `Heap`, `Trie`) or a technique (`two pointers`, `sliding window`, `binary search`, `DFS`, `BFS`, `DP`).
- No filler like "efficient" / "optimal".

**Hard rules:**
- Do **not** write solution code, complexity analysis, or submission stats. User fills those.
- When asked for a title (after user has coded the solution), generate one in the convention above.
- Do **not** edit anything under `src/problems/` (archival 2020).
- If file exists, stop instead of overwriting.
- After creating, print the relative path and one-line reminder.
