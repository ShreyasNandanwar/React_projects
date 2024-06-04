import React, { useMemo, useState } from "react";
import "./App.css";
const App = () => {
  const [height, setHeight] = useState(167);
  const [weight, setWeight] = useState(76);
  function onWeightChange(e) {
    setWeight(e.target.value);
  }
  function onHeightChange(e) {
    setHeight(e.target.value);
  }

  function onNumberChangeW(e) {
    setWeight(e.target.value);
  }
  function onNumberChangeH(e) {
    setWeight(e.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [height, weight]);

  return (
    <main>
      <h1>BMI Calculator 2024</h1>
      <div className="input-section">
        <div className="weight">
          <p className="output-weight">Your Weight: {weight} kg</p>
          <input
            className="slider-input"
            type="range"
            min="30"
            max="200"
            value={weight}
            onChange={onWeightChange}
          />
          <input
            className="number-input"
            type="number"
            value={weight}
            onChange={onNumberChangeW}
          />
        </div>
        <div className="height">
          <p className="output-weight">Your Height: {height} cm</p>
          <input
            className="slider-input"
            type="range"
            min="130"
            max="200"
            value={height}
            onChange={onHeightChange}
          />
          <input
            className="number-input"
            type="number"
            value={height}
            onChange={onNumberChangeH}
          />
        </div>
      </div>
      <div className="result">
        <p>Your BMI is:</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
