import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Timer({ count, onTimeUp }) {
  const minutesLefts = count * 60;
  const [countDown, setTimeLeft] = useState(minutesLefts);

  useEffect(() => {
    if (countDown === 0) {
      onTimeUp();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(countDown - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [countDown]);

  const minutes = Math.floor(countDown / 60);
  const seconds = countDown % 60;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}

Timer.propTypes = {
  count: PropTypes,
  onTimeUp: PropTypes.func,
};
