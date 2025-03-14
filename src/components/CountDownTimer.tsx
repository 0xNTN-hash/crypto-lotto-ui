import { useState, useEffect } from 'react';

interface CountdownProps {
  targetTimestamp: string; // Timestamp as a string (e.g., "1710000000")
}

const Countdown = ({ targetTimestamp }: CountdownProps) => {
  const targetTime = parseInt(targetTimestamp, 10) * 1000; // Convert to milliseconds
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetTime - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  if (timeLeft <= 0) {
    return <p>Countdown ended</p>;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <p>
      {days}d {hours}h {minutes}m {seconds}s
    </p>
  );
};

export default Countdown;
