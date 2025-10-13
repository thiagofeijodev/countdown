import { useState, useEffect, useMemo } from 'react'
import * as styles from '../styles.css'

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export const Timer = ({ targetDateTime }) => {
  const [now, setNow] = useState(new Date());

  const countdown = useMemo(() => {
    const timeDiff = targetDateTime?.getTime() - now.getTime()
    if (timeDiff <= 0) {
      return null;
    }

    const totalSeconds = Math.floor(timeDiff / SECOND)
    const days = Math.trunc(timeDiff / DAY)
    const hours = Math.trunc((timeDiff - (days * DAY)) / HOUR) % 60
    const minutes = Math.trunc(timeDiff / MINUTE) % 60
    const seconds = totalSeconds % 60

    return {
      days,
      hours,
      minutes,
      seconds,
    }
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
      <div className={styles.expiredBox}>
        <h2 className={styles.expiredTitle}>Time&apos;s Up! ⏰</h2>
        <p className={styles.expiredMessage}>The countdown has reached zero.</p>
      </div>
    )
  }

  return (
    <div className={styles.countdownBox}>
      <div className={styles.timeDisplay}>
        {!!countdown.days && (
          <>
            <div className={styles.timeUnit}>
              <span className={styles.timeValue}>{countdown.days}</span>
              <span className={styles.timeLabel}>days</span>
            </div>
            <div className={styles.separator}>:</div>
          </>
        )}
        {!!countdown.hours && (
          <>
            <div className={styles.timeUnit}>
              <span className={styles.timeValue}>{countdown.hours}</span>
              <span className={styles.timeLabel}>hours</span>
            </div>
            <div className={styles.separator}>:</div>
          </>
        )}
        <div className={styles.timeUnit}>
          <span className={styles.timeValue}>{countdown.minutes}</span>
          <span className={styles.timeLabel}>minutes</span>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.timeUnit}>
          <span className={styles.timeValue}>{countdown.seconds.toString().padStart(2, '0')}</span>
          <span className={styles.timeLabel}>seconds</span>
        </div>
      </div>
    </div>
  )
}
