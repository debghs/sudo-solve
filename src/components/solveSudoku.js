export const solveSudoku = (grid) => {
    const isSafe = (grid, row, col, num) => {
      for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num || grid[x][col] === num) {
          return false;
        }
      }
      const startRow = row - (row % 3);
      const startCol = col - (col % 3);
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[i + startRow][j + startCol] === num) {
            return false;
          }
        }
      }
      return true;
    };
  
    const solve = (grid) => {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (grid[row][col] === '') {
            for (let num = 1; num <= 9; num++) {
              if (isSafe(grid, row, col, num.toString())) {
                grid[row][col] = num.toString();
                if (solve(grid)) {
                  return true;
                }
                grid[row][col] = '';
              }
            }
            return false;
          }
        }
      }
      return true;
    };
  
    const newGrid = grid.map(row => row.slice());
    solve(newGrid);
    return newGrid;
  };
  