import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(count * 0);
  };

  return (
    <div className=" container my-5 text-center d-flex align-items-center justify-content-center vh-100">
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Counter App</h1>

        <h2>{count}</h2>
        <button className="btn btn-success mx-3" onClick={increment}>
          Increment
        </button>
        <button
          className="btn btn-warning mx-3"
          onClick={decrement}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button
          className="btn btn-secondary mx-3"
          onClick={reset}
          disabled={count === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
