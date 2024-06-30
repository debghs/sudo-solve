import React, { useRef } from 'react';
import './SudokuGrid.css';

const SudokuGrid = ({ grid, onCellChange, errors }) => {
  const cellRefs = useRef([]);

  const handleChange = (row, col, e) => {
    const value = e.target.value;
    if (/^[1-9]?$/.test(value)) {
      onCellChange(row, col, value);
    }
  };

  const handleKeyDown = (row, col, e) => {
    if (e.key === 'ArrowLeft') {
      if (row > 0) {
        cellRefs.current[(row - 1) * 9 + col].focus();
      }
    } else if (e.key === 'ArrowRight') {
      if (row < 8) {
        cellRefs.current[(row + 1) * 9 + col].focus();
      }
    } else if (e.key === 'ArrowUp') {
      if (col > 0) {
        cellRefs.current[row * 9 + (col - 1)].focus();
      }
    } else if (e.key === 'ArrowLeft') {
      if (col < 8) {
        cellRefs.current[row * 9 + (col + 1)].focus();
      }
    }
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
              onKeyDown={(e) => handleKeyDown(rowIndex, colIndex, e)}
              className={`sudoku-cell ${errors[rowIndex][colIndex] ? 'error' : ''}`}
              maxLength="1"
              ref={(el) => (cellRefs.current[rowIndex * 9 + colIndex] = el)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
