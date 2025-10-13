import * as styles from './styles.css'
import { EmptyState } from './components/EmptyState';
import { useDeadlineDate } from './hooks/useDeadlineDate';
import { Timer } from './components/Timer';

const App = () => {
  const { error, targetDateTime, onCleanDate } = useDeadlineDate();

  if (error) {
    return (
      <EmptyState error={error} />
    )
  }

  return (
    <div className={styles?.content}>
      <h1 className={styles.title}>Countdown Timer</h1>

      <Timer targetDateTime={targetDateTime} />

      <div className={styles.button}>
        <button onClick={onCleanDate}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
