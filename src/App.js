import React, { useState } from "react";
import "./App.css";

function App() {
  const [sliderValue, setSliderValue] = useState(50);
  const [sliderValue2, setSliderValue2] = useState(50);
  const [textInputValue, setTextInputValue] = useState("");

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
  };

  const handleSliderChange2 = (event) => {
    const value = event.target.value;
    setSliderValue2(value);
  };

  const handleTextInputChange = (event) => {
    const value = event.target.value;
    setTextInputValue(value);
  };

  return (
    <div className="App">
      <h1>Energy Consumption Calculator</h1>
      <div className="container">
        <div>
          <h3>Power (W)</h3>
          <input
            type="range"
            min="0"
            max="3000"
            step="50"
            value={sliderValue}
            onChange={handleSliderChange}
          />
          <p>Selected value: {sliderValue}</p>
        </div>
        <div>
          <h3>Usage Time (h/Day)</h3>
          <input
            type="range"
            min="1"
            max="24"
            value={sliderValue2}
            onChange={handleSliderChange2}
          />
          <p>Selected value: {sliderValue2}</p>
        </div>
        <div>
          Daily consumption: {sliderValue * sliderValue2} Wh (
          {(sliderValue * sliderValue2) / 1000} KWh){" "}
        </div>
        <div>
          <h3>Energy Cost Eur/KWh</h3>
          <input
            type="text"
            value={textInputValue}
            onChange={handleTextInputChange}
          />
          <p>
            Monthly Cost:{" "}
            {(
              ((textInputValue * sliderValue * sliderValue2) / 1000) *
              30
            ).toFixed(2)}{" "}
            Eur.
          </p>
          <p>
            Anual Cost:{" "}
            {(
              ((textInputValue * sliderValue * sliderValue2) / 1000) *
              12 *
              30
            ).toFixed(2)}{" "}
            Eur.
          </p>
          <div>
            Anual consumption:{" "}
            {(((sliderValue * sliderValue2) / 10000) * 30 * 12).toFixed(2)} KWh{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
