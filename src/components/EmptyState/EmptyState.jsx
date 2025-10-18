import * as styles from './EmptyState.module.css';
import * as appStyles from '../../App.module.css';

export const EmptyState = ({ updateDate }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dateTimeValue = formData.get('countdowndate');
    if (dateTimeValue && updateDate) {
      updateDate(dateTimeValue);
    }
  };

  return (
    <div className={appStyles.countdownBox}>
      <h1 className={styles.title}>Welcome to Countdown</h1>
      <p className={styles.info}>
        A minimal, ad-free countdown. Pick a date and time below to start counting down — we&apos;ll
        handle the rest.
      </p>

      <form className={styles.formCountdowndate} onSubmit={onSubmit}>
        <label htmlFor="countdowndate">Countdown date (date and time):</label>

        <input type="datetime-local" id="countdowndate" name="countdowndate" />
        <input type="submit" value="Start countdown" />
      </form>

      <p className={styles.example}>
        Example: 2025-12-31 23:59 — perfect for New Year&apos;s or project deadlines.
      </p>
    </div>
  );
};
