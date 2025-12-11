// brute force approach rotten oragens
function rottenOranges(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let minutes = 0;
  let freshCount = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // Count initial fresh oranges
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) freshCount++;
    }
  }
}
