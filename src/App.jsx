import * as styles from './App.module.css';
import { useDeadlineDate } from './hooks/useDeadlineDate';
import { EmptyState } from './components/EmptyState/EmptyState';
import { Timer } from './components/Timer/Timer';
import { OriginalDateTimeDisplay } from './components/OriginalDateTimeDisplay/OriginalDateTimeDisplay';

const App = () => {
  const { error, targetDateTime, updateDate, onCleanDate } = useDeadlineDate();

  if (error) {
    return (
      <div className={styles.content}>
        <EmptyState updateDate={updateDate} />
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Countdown Timer</h1>
      <Timer targetDateTime={targetDateTime} />
      <OriginalDateTimeDisplay targetDateTime={targetDateTime} />
      <div className={styles.button}>
        <button onClick={onCleanDate}>Reset</button>
      </div>
    </div>
  );
};

export default App;
