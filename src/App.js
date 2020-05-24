import React from "react";
import { add, sub, mul, div } from "./Calculator/Calculator";
function App() {
  return (
    <>
      <ul>
        <li>Additin of two number is:{add(40, 50)}</li>
        <li>Substraction of two number is:{sub(40, 50)}</li>
        <li>Multiplication of two number is:{mul(40, 50)}</li>
        <li>Division of two number is:{div(40, 50)}</li>
      </ul>
    </>
  );
}

export default App;
