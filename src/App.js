import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { countBin2Dec } from "./features/count/countSlice";

function App() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.value.match("[0-1]") && inputVal.length !== 8) {
      setInputVal(event.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(countBin2Dec(inputVal));
    const inputArr = inputVal.split("");
    const inputReversedArr = inputArr.reverse();
    const reducer = (acumulator, currentVal) => {};
    return inputReversedArr.reduce(reducer);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h3>Enter binary number here:</h3>
        <input type="text" onChange={handleChange} value={inputVal} />
        <input type="submit" />
      </form>
      <p>Decimal number:{}</p>
    </div>
  );
}

export default App;
