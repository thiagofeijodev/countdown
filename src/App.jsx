import * as styles from './App.module.css';
import { useDeadlineDate } from './hooks/useDeadlineDate';
import { useEditMode } from './hooks/useEditMode';
import { EmptyState } from './components/EmptyState/EmptyState';
import { Timer } from './components/Timer/Timer';
import { OriginalDateTimeDisplay } from './components/OriginalDateTimeDisplay/OriginalDateTimeDisplay';

const App = () => {
  const { error, targetDateTime, updateDate, onCleanDate } = useDeadlineDate();
  const { isEditing, handleEdit, handleCancelEdit, handleUpdateDate } = useEditMode(updateDate);

  if (error || isEditing) {
    return (
      <div className={styles.content}>
        <EmptyState
          updateDate={handleUpdateDate}
          targetDateTime={targetDateTime}
          onCancel={isEditing ? handleCancelEdit : null}
        />
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Countdown Timer</h1>
      <Timer targetDateTime={targetDateTime} />
      <OriginalDateTimeDisplay targetDateTime={targetDateTime} />
      <div className={styles.button}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={onCleanDate}>Reset</button>
      </div>
    </div>
  );
};

export default App;
