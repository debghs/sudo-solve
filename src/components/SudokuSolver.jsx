import React, { useState } from 'react';
import SudokuGrid from './SudokuGrid';
import CameraInput from './CameraInput';
import { solveSudoku } from './solveSudoku';
import { validateSudokuGrid } from './validGrid';

const SudokuSolver = () => {
  const [grid, setGrid] = useState(Array(9).fill().map(() => Array(9).fill('')));
  const [errors, setErrors] = useState(Array(9).fill().map(() => Array(9).fill(false)));
  const [errorMessage, setErrorMessage] = useState('');

  const handleCellChange = (row, col, value) => {
    const newGrid = grid.map((r, rowIndex) =>
      r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? value : cell))
    );
    setGrid(newGrid);
    setErrors(Array(9).fill().map(() => Array(9).fill(false))); // Clear errors on cell change
    setErrorMessage(''); // Clear error message on cell change
  };

  const handleSolve = () => {
    const { isValid, invalidCells } = validateSudokuGrid(grid);
    if (!isValid) {
      setErrors(invalidCells);
      setErrorMessage('Invalid Sudoku grid. Please check the highlighted cells.');
      setTimeout(() => setErrorMessage(''), 3000); // Hide message after 3 seconds
      return;
    }
    const solvedGrid = solveSudoku(grid);
    setGrid(solvedGrid);
    setErrors(Array(9).fill().map(() => Array(9).fill(false))); // Clear errors on solve
    setErrorMessage(''); // Clear error message on solve
  };

  const handleCapture = () => {
    // Placeholder for ML integration to capture and read the Sudoku grid
  };
  return (
    <div className="sudoku-solver">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <SudokuGrid grid={grid} onCellChange={handleCellChange} errors={errors} />
      <div className="button-container">
        <CameraInput onCapture={handleCapture} />
        <button onClick={handleSolve}>Solve Sudoku</button>
      </div>
    </div>
  );
};

export default SudokuSolver;
