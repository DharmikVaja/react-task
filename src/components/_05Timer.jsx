import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning && time > 0) {
      timerRef.current = setTimeout(() => setTime(time - 1), 1000);
    } else {
      clearTimeout(timerRef.current); // Optional: clear the timer when time reaches 0
    }
    return () => clearTimeout(timerRef.current);
  }, [time, isRunning]);
  const resetTimer = () => {
    setTime(60);
    setTimeout(false);
  };
  const stopTimer = () => {
    clearTimeout(timerRef.current);
    setIsRunning(false);
  };
  const startTimer = () => {
    if (!isRunning && time > 0) {
      setIsRunning(true);
    }
  };
  return (
    <>
      <div>Time left: {time} second</div>
      <div className="gap-y-3">
        <button onClick={resetTimer} className="border-2 border-black">
          Reset countdown
        </button>
        <button
          onClick={isRunning ? stopTimer : startTimer}
          className="border-2 border-black"
        >
          {isRunning ? "Stop time" : "Continue"}
        </button>
      </div>
    </>
  );
};

export default Timer;
