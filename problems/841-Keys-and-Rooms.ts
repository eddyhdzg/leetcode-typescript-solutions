function canVisitAllRooms(rooms: number[][]): boolean {
  const keys = new Set<number>();
  const queue = [0];

  while (queue.length) {
    const curr = queue.shift()!;

    if (!keys.has(curr)) {
      keys.add(curr);
      queue.push(...rooms[curr]);
    }
  }

  return keys.size === rooms.length;
}
