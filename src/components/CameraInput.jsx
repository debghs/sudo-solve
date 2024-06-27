import React from 'react';

const CameraInput = ({ onCapture }) => {
  return (
    <div className="camera-input">
      <button onClick={onCapture}>Capture Sudoku</button>
      {/* Placeholder for camera feed and ML integration */}
    </div>
  );
};

export default CameraInput;
