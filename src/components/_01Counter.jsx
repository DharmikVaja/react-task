import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return 0;
    }
  };
  return (
    <>
      <div>
        <button onClick={handleAdd} className="p-2 border-2">
          +
        </button>
        <span>{count}</span>
        <button onClick={handleMinus} className="p-2 border-2">
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
