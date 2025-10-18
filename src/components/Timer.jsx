import { useCountdown } from '../hooks/useCountdown';

export const Timer = ({ targetDateTime }) => {
  const countdown = useCountdown(targetDateTime);

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
