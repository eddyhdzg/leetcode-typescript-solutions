// Runtime: 64 ms, faster than 92.40% of JavaScript online submissions for Goat Latin.
// Memory Usage: 36.7 MB, less than 43.76% of JavaScript online submissions for Goat Latin.

function toGoatLatin(S: string): string {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return S.split(' ')
    .map((word, i) =>
      vowels.includes(word[0])
        ? `${word}ma${'a'.repeat(i + 1)}`
        : `${word.slice(1) + word[0]}ma${'a'.repeat(i + 1)}`
    )
    .join(' ');
}
