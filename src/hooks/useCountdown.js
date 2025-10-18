import { useEffect, useMemo, useState } from 'react';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export const useCountdown = (targetDateTime) => {
  const [now, setNow] = useState(new Date());

  const countdown = useMemo(() => {
    if (!targetDateTime) {
      return null;
    }

    const timeDiff = targetDateTime.getTime() - now.getTime();
    if (timeDiff <= 0) {
      return null;
    }

    const totalSeconds = Math.floor(timeDiff / SECOND);
    const days = Math.trunc(timeDiff / DAY);
    const hours = Math.trunc((timeDiff - days * DAY) / HOUR) % 60;
    const minutes = Math.trunc(timeDiff / MINUTE) % 60;
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [targetDateTime, now]);

  useEffect(() => {
    if (!countdown) return;

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return countdown;
};
