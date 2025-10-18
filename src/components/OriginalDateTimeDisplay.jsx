import * as styles from './OriginalDateTimeDisplay.module.css';

export const OriginalDateTimeDisplay = ({ targetDateTime }) => {
  return (
    <div className={styles.selectedDate}>
      {targetDateTime.toLocaleString(undefined, {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short',
      })}
    </div>
  );
};
