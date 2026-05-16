import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn((prev) => !prev);
  }

  return (
    <button onClick={handleToggle}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;