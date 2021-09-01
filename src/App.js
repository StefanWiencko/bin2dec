import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { countBin2Dec } from "./features/count/countSlice";

function App() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const decimalValue = useSelector((state) => state.count.value);
  const handleChange = (event) => {
    if (event.target.value.match("[0-1]") || event.target.value === "") {
      setInputVal(event.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(countBin2Dec(inputVal));
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h3>Enter binary number here:</h3>
        <input
          type="text"
          maxLength="8"
          onChange={handleChange}
          value={inputVal}
        />
        <input type="submit" />
      </form>
      <p>Decimal value: {decimalValue}</p>
    </div>
  );
}

export default App;
