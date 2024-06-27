import React from 'react';
import './SudokuGrid.css';

const SudokuGrid = ({ grid, onCellChange }) => {
  const handleChange = (row, col, e) => {
    const value = e.target.value;
    // Allow only numbers (1-9) or empty string (to clear cell)
    if (/^[1-9]?$/.test(value)) {
      onCellChange(row, col, value);
    }
    // If the input is invalid, do nothing (prevent updating the grid state)
  };

  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              value={cell}
              onChange={(e) => handleChange(rowIndex, colIndex, e)}
              className="sudoku-cell"
              maxLength="1" // Limit input to one character
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
