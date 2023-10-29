import { useEffect, useState } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const [time, setTime] = useState(secondsRemaining);

  const mins = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        if (time === 0) {
          dispatch({ type: "tick" });
        } else {
          setTime((time) => time - 1);
        }
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch, time]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} : {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
