export const validateSudokuGrid = (grid) => {
    const isValidSet = (numbers) => {
      const seen = new Set();
      for (const num of numbers) {
        if (num !== '' && seen.has(num)) return false;
        seen.add(num);
      }
      return true;
    };
  
    const invalidCells = Array(9).fill().map(() => Array(9).fill(false));
  
    // Validate rows and columns
    for (let i = 0; i < 9; i++) {
      const row = grid[i];
      const col = grid.map(row => row[i]);
      if (!isValidSet(row)) {
        for (let j = 0; j < 9; j++) {
          if (row[j] !== '' && row.filter(x => x === row[j]).length > 1) {
            invalidCells[i][j] = true;
          }
        }
      }
      if (!isValidSet(col)) {
        for (let j = 0; j < 9; j++) {
          if (col[j] !== '' && col.filter(x => x === col[j]).length > 1) {
            invalidCells[j][i] = true;
          }
        }
      }
    }
  
    // Validate 3x3 sub-grids
    for (let r = 0; r < 9; r += 3) {
      for (let c = 0; c < 9; c += 3) {
        const subGrid = [];
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            subGrid.push(grid[r + i][c + j]);
          }
        }
        if (!isValidSet(subGrid)) {
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              const val = grid[r + i][c + j];
              if (val !== '' && subGrid.filter(x => x === val).length > 1) {
                invalidCells[r + i][c + j] = true;
              }
            }
          }
        }
      }
    }
  
    const isValid = invalidCells.flat().every(cell => !cell);
    return { isValid, invalidCells };
  };
  