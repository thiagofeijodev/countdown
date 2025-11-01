import * as styles from './EmptyState.module.css';
import * as appStyles from '../../App.module.css';
import { formatDateForInput } from '../../utils/formatDateForInput';

export const EmptyState = ({ updateDate, targetDateTime, onCancel }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dateTimeValue = formData.get('countdowndate');
    if (dateTimeValue && updateDate) {
      updateDate(dateTimeValue);
    }
  };

  const isEditing = !!targetDateTime && !isNaN(targetDateTime.getTime());

  return (
    <div className={appStyles.countdownBox}>
      <h1 className={styles.title}>Welcome to Countdown</h1>
      <p className={styles.info}>
        {isEditing
          ? 'Update your countdown date and time below.'
          : "A minimal, ad-free countdown. Pick a date and time below to start counting down — we'll handle the rest."}
      </p>

      <form className={styles.formCountdowndate} onSubmit={onSubmit}>
        <label htmlFor="countdowndate">Countdown date (date and time):</label>

        <input
          type="datetime-local"
          id="countdowndate"
          name="countdowndate"
          defaultValue={formatDateForInput(targetDateTime)}
        />
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            onClick={onCancel}
            className={styles.cancelButton}
            style={{ display: isEditing && onCancel ? 'block' : 'none' }}
          >
            Cancel
          </button>
          <input
            type="submit"
            value={isEditing ? 'Update countdown' : 'Start countdown'}
            className={styles.submitButton}
          />
        </div>
      </form>

      {!isEditing && (
        <p className={styles.example}>
          Example: 2025-12-31 23:59 — perfect for New Year&apos;s or project deadlines.
        </p>
      )}
    </div>
  );
};
