import * as styles from '../styles.css';

export const EmptyState = ({ updateDate }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const dateTimeValue = e.target.countdowndate.value;
    if (dateTimeValue) {
      updateDate(dateTimeValue);
    }
  };

  return (
    <div className={styles.countdownBox}>
      <h1 className={styles.title}>Welcome to Countdown</h1>
      <p className={styles.info}>
        A minimal, ad-free countdown. Pick a date and time below to start counting down — we&apos;ll
        handle the rest.
      </p>

      <form className={styles.formCountdowndate} onSubmit={onSubmit}>
        <label htmlFor={styles.countdowndate}>Countdown date (date and time):</label>

        <label htmlFor="countdowndate">Countdown date (date and time):</label>
        <input type="datetime-local" id="countdowndate" name="countdowndate" />
        <input type="submit" value="Start countdown" />
      </form>

      <p className="example">
        Example: 2025-12-31 23:59 — perfect for New Year&apos;s or project deadlines.
      </p>
    </div>
  );
};
