import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      <h2>Count: {count}</h2>

      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <button onClick={() => setCount(count + step)}>
        +
      </button>

      <button onClick={() => setCount(count - step)}>
        -
      </button>

      <button
        onClick={() => {
          setCount((c) => c + step);
          setCount((c) => c + step);
        }}
      >
        +2
      </button>

      <button onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
}

export default Counter;