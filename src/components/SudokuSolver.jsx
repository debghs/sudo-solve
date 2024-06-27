import React, { useState } from 'react';
import SudokuGrid from './SudokuGrid';
import CameraInput from './CameraInput';
import { solveSudoku } from './solveSudoku';

const SudokuSolver = () => {
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill('')));

  const handleCellChange = (row, col, value) => {
    const newGrid = grid.map((r, rowIndex) =>
      r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? value : cell))
    );
    setGrid(newGrid);
  };

  const handleSolve = () => {
    const solvedGrid = solveSudoku(grid);
    setGrid(solvedGrid);
  };

  const handleCapture = () => {
    // Placeholder for ML integration to capture and read the Sudoku grid
  };

  return (
    <div className="sudoku-solver">
      <CameraInput onCapture={handleCapture} />
      <SudokuGrid grid={grid} onCellChange={handleCellChange} />
      <button onClick={handleSolve}>Solve Sudoku</button>
    </div>
  );
};

export default SudokuSolver;
