import { useState, useEffect, useMemo } from 'react';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export const Timer = ({ targetDateTime }) => {
  const [now, setNow] = useState(new Date());

  const countdown = useMemo(() => {
    const timeDiff = targetDateTime?.getTime() - now.getTime();
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

  if (!countdown) {
    return (
      <div className="expiredBox">
        <h2 className="expiredTitle">Time&apos;s Up! ⏰</h2>
        <p className="expiredMessage">The countdown has reached zero.</p>
      </div>
    );
  }

  return (
    <div className="countdownBox">
      <div className="timeDisplay">
        {!!countdown.days && (
          <>
            <div className="timeUnit">
              <span className="timeValue">{countdown.days}</span>
              <span className="timeLabel">days</span>
            </div>
            <div className="separator">:</div>
          </>
        )}
        {!!countdown.hours && (
          <>
            <div className="timeUnit">
              <span className="timeValue">{countdown.hours}</span>
              <span className="timeLabel">hours</span>
            </div>
            <div className="separator">:</div>
          </>
        )}
        <div className="timeUnit">
          <span className="timeValue">{countdown.minutes}</span>
          <span className="timeLabel">minutes</span>
        </div>
        <div className="separator">:</div>
        <div className="timeUnit">
          <span className="timeValue">{countdown.seconds.toString().padStart(2, '0')}</span>
          <span className="timeLabel">seconds</span>
        </div>
      </div>
    </div>
  );
};
