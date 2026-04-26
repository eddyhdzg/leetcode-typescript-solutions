---
description: Turn playground.ts (or a slug/URL) into a fully populated src/problems-2026/<num>.<Kebab-Title>.md submission
---

Create a LeetCode submission file under `src/problems-2026/` from the user's scratch work.

## Primary input: `playground.ts`

Whenever the user invokes `/submission` with no arguments, a file reference, or mentions their playground, **read `playground.ts`** and parse it. The expected structure (matches what the user pastes from LeetCode's submission page):

```
<num>. <Title>            ← H1 source ("3783. Mirror Distance of an Integer")

<submission URL>          ← leetcode.com/problems/<slug>/submissions/...

<stat value>              ← e.g. "1"  or  "82.77"
<stat unit>               ← "ms" (runtime) or "MB" (memory)
Beats
<beats %>                 ← e.g. "63.16%"


<typescript code>         ← one or more function definitions
```

Lines may have blank gaps. Be forgiving — grab the first `<num>. <Title>` line, the `leetcode.com/problems/<slug>` URL, the stat triplet (value/unit/beats%), and treat everything from the first `function`/`class`/`const`/`type`/`interface` keyword to EOF as the code.

## Alternate input: `$ARGUMENTS`

If the user passes a slug, number+slug, or URL directly (no playground context), fall back to scaffolding an empty template — code/stats/complexity stay blank for them to fill.

## Deriving names

- **Number** — from the H1 line, or `$ARGUMENTS`. Ask once if missing.
- **Slug** — from the URL's `/problems/<slug>/`, or `$ARGUMENTS`. Kebab-case lowercase.
- **Display title** — the slug with each word capitalized, spaces (e.g., `mirror-distance-of-an-integer` → `Mirror Distance Of An Integer`). Use this, not the raw LeetCode title string, so casing matches the existing 2026 files.
- **File stem** — `<num>.<Kebab-Title>` (e.g., `3783.Mirror-Distance-Of-An-Integer`).

## File content

Create `src/problems-2026/<file-stem>.md` with this structure. Fields populated depend on what was parsed:

````md
# <num>. <Display Title>

### <Big-O> - TS with <approach>

## Complexity

- Time: $$<Big-O>$$
- Space: $$<Big-O>$$

## Submission

<stat-label>: <value> <unit> · Beats <beats%>

## Code

```typescript
<code>
```

---

- [https://leetcode.com/u/eddyhdzg/](https://leetcode.com/u/eddyhdzg/)
- [https://leetcode.com/problems/<slug>](https://leetcode.com/problems/<slug>)
````

### Filling rules

- **Stat label**: `Memory` when unit is `MB`, `Runtime` when unit is `ms`. If only one stat is in the playground, use it — don't fabricate the other.
- **Complexity**: infer from the code. Walk the loops and data structures — `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n·m)`, `O(n²)`. Use `$$...$$` and LaTeX (`\log`, `\cdot`). If you truly can't tell, leave blank.
- **Post-title (H3)**: `<Big-O> - TS with <approach>`. Approach is exactly one data structure (`Set()`, `Map()`, `Heap`, `Trie`) or technique (`two pointers`, `sliding window`, `binary search`, `DFS`, `BFS`, `DP`, `string reversal`, `recursion`). No filler like "efficient" or "optimal".
- **Code**: paste verbatim from the playground. Don't reformat, rename, or "fix" bugs — if something looks off (e.g., `Math.max` with one arg), flag it in the reply, don't edit the code.

### If playground input is missing a field

- No stats → leave `Memory:  · Beats` (template default).
- No code → leave the ```typescript``` block empty.
- No H1 number but URL present → ask the user for the number once.

## Hard rules

- Do **not** edit anything under `src/problems/` (archival 2020).
- If the target file already exists, **stop** — do not overwrite. Print the existing path.
- Never re-enable AI in `.zed/settings.json` or gitignore `.zed/`.
- After creating, print the relative path, flag any suspicious code you noticed, and remind the user of anything still blank.
