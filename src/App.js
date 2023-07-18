import React, { useState } from "react";
import "./App.css";

function App() {
  const [powersliderValue, setSliderValue] = useState(50);
  const [timeSliderValue, setSliderValue2] = useState(1);
  const [energyCostTextInputValue, setTextInputValue] = useState("");

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

  let dailyConsumption = powersliderValue * timeSliderValue;
  let monthlyConsumptionInKWh = dailyConsumption * 30 / 1000;

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
            className="power"
            value={powersliderValue}
            onChange={handleSliderChange}
          />
          <p>Selected value: {powersliderValue}</p>
        </div>
        <div>
          <h3>Usage Time (h/Day)</h3>
          <input
            type="range"
            min="1"
            max="24"
            value={timeSliderValue}
            onChange={handleSliderChange2}
          />
          <p>Selected value: {timeSliderValue}</p>
        </div>
        <div>
          Daily consumption: {dailyConsumption} Wh (
          {dailyConsumption / 1000} kWh){" "}
        </div> 
        <div>
          Monthly Consumption: {monthlyConsumptionInKWh} kWh
        </div>
        <div>
          <h3>Energy Cost (Eur/kWh)</h3>
          <input
            type="text"
            value={energyCostTextInputValue}
            onChange={handleTextInputChange}
          />
          <p>
            Monthly Cost:{" "}
            {(
              ((energyCostTextInputValue * dailyConsumption) / 1000) *
              30
            ).toFixed(2)}{" "}
            Eur.
          </p>
          <p>
            Anual Cost:{" "}
            {(
              ((energyCostTextInputValue * dailyConsumption) / 1000) *
              12 *
              30
            ).toFixed(2)}{" "}
            Eur.
          </p>
          <div>
            Anual consumption:{" "}
            {((dailyConsumption / 10000) * 30 * 12).toFixed(2)} kWh{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
