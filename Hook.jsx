import React, { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const SquaredNum = useMemo(() => SquareNum(number), [number]);
  const [counter, setCounter] = useState(0);
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };
  const counterHander = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h2> Welcome to GeeksforGeeks</h2>
      <div></div>
      <input type="number" placeholder="Enter a number" onChange={onChangeHandler}></input>
      <div>Output:{SquaredNum}</div>
      <button onClick={counterHander}>Counter++</button>
      <div>Counter:{counter}</div>
    </div>
  );
}
function SquareNum(number) {
    console.log("Squarring will be done!");
    return Math.pow(number, 2);
}
export default App;
