import * as styles from '../styles.css'

export const EmptyState = ({ error }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const dateTimeValue = e.target.countdowndate.value;
    if (dateTimeValue) {
      const formattedDate = new Date(dateTimeValue).toISOString();
      window.location.search = `?date=${formattedDate}`;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.errorBox}>
        <h2 className={styles.errorTitle}>Error</h2>
        <p className={styles.errorMessage}>{error}</p>
        <form className={styles.formCountdowndate} onSubmit={onSubmit}>
          <label for="countdowndate">Countdown date (date and time):</label>
          <input type="datetime-local" id="countdowndate" name="countdowndate" />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}
