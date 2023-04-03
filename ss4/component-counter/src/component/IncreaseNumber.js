import { useState } from "react";

function IncreaseNumber() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  const handleIncreaseOneUnit = () => {
    setCount1(count1 + 1);
  };

  const handleIncreaseTwoUnit = () => {
    // setCount2((prev) => prev + 1);
    // setCount2((prev) => prev + 1);
    setCount2(count2 + 2)
  };

  return (
    <>
      <h1>{count1}</h1>
      <button onClick={handleIncreaseOneUnit}>Add 1</button>

      <h1>{count2}</h1>
      <button onClick={handleIncreaseTwoUnit}>Add 2</button>
    </>
  );
}

export default IncreaseNumber;
