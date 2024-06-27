import React from 'react';
import './App.css';
import SudokuSolver from './components/SudokuSolver';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku Solver</h1>
      </header>
      <main>
        <SudokuSolver />
      </main>
    </div>
  );
}

export default App;
