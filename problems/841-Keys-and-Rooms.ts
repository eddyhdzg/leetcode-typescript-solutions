function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Set<number>([]);
  const stack = [0];

  while (stack.length) {
    const curr = stack.shift()!;

    if (!visited.has(curr)) {
      visited.add(curr);
      stack.push(...rooms[curr]);
    }
  }

  return visited.size === rooms.length;
}
