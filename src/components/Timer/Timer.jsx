import * as styles from './Timer.module.css';
import { useCountdown } from '../../hooks/useCountdown';
import * as appStyles from '../../App.module.css';

export const Timer = ({ targetDateTime }) => {
  const countdown = useCountdown(targetDateTime);

  if (!countdown) {
    return (
      <div className={styles.expiredBox}>
        <h2 className={styles.expiredTitle}>Time&apos;s Up! ⏰</h2>
        <p className={styles.expiredMessage}>The countdown has reached zero.</p>
      </div>
    );
  }

  return (
    <div className={appStyles.countdownBox}>
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
        {(!!countdown.days || !!countdown.hours) && (
          <>
            <div className={styles.timeUnit}>
              <span className={styles.timeValue}>
                {countdown.hours.toString().padStart(2, '0')}
              </span>
              <span className={styles.timeLabel}>hours</span>
            </div>
            <div className={styles.separator}>:</div>
          </>
        )}
        {(!!countdown.days || !!countdown.hours || !!countdown.minutes) && (
          <>
            <div className={styles.timeUnit}>
              <span className={styles.timeValue}>
                {countdown.minutes.toString().padStart(2, '0')}
              </span>
              <span className={styles.timeLabel}>minutes</span>
            </div>
            <div className={styles.separator}>:</div>
          </>
        )}
        <div className={styles.timeUnit}>
          <span className={styles.timeValue}>{countdown.seconds.toString().padStart(2, '0')}</span>
          <span className={styles.timeLabel}>seconds</span>
        </div>
      </div>
    </div>
  );
};
