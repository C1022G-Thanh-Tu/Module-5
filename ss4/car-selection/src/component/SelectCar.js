import { useState, useEffect } from "react";

function SelectCar() {
  const [carName, setCarName] = useState();
  const [carValue, setCarValue] = useState('1');
  const [color, setColor] = useState();
  const [colorValue, setColorValue] = useState('1');

  useEffect(() => {
    handleChooseCarName();
  }, [carValue]);

  useEffect(() => {
    handleChooseColor();
  }, [colorValue]);

  const handleChooseColorValue = (value) => {
    setColorValue(value);
  }

  const handleChooseCarValue = (value) => {
    setCarValue(value);
  };

  const handleChooseCarName = () => {
    switch (carValue) {
      case "1":
        setCarName("Toyota");
        break;
      case "2":
        setCarName("Ford");
        break;
      case "3":
        setCarName("Hyundai");
        break;
      case "4":
        setCarName("Mitsubishi");
        break;
    }
  };

  const handleChooseColor = () => {
    switch (colorValue) {
      case "1":
        setColor("red");
        break;
      case "2":
        setColor("blue");
        break;
      case "3":
        setColor("yellow");
        break;
      case "4":
        setColor("black");
        break;
    }
  };

  return (
    <>
      <h1>Select Your Car</h1>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ width: "116px", display: "inline-block" }}>
          Select a car:
        </label>
        <select
          id="car"
          onChange={(event) => handleChooseCarValue(event.target.value)}
        >
          <option value="1">Toyota</option>
          <option value="2">Ford</option>
          <option value="3">Hyundai</option>
          <option value="4">Mitsubishi</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ width: "116px", display: "inline-block" }}>
          Select a color:
        </label>
        <select id="color" onChange={(event) => handleChooseColorValue(event.target.value)}>
          <option value="1">red</option>
          <option value="2">blue</option>
          <option value="3">yellow</option>
          <option value="4">black</option>
        </select>
      </div>

      <div>
        <h3>
          You selected a {color || ""} - {carName || ""}
        </h3>
      </div>
    </>
  );
}

export default SelectCar;
