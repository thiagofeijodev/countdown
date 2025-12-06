import { useEffect } from 'react';
import * as styles from './App.module.css';
import { useDeadlineDate } from './hooks/useDeadlineDate';
import { useEditMode } from './hooks/useEditMode';
import { EmptyState } from './components/EmptyState/EmptyState';
import { Timer } from './components/Timer/Timer';
import { OriginalDateTimeDisplay } from './components/OriginalDateTimeDisplay/OriginalDateTimeDisplay';
import { Footer } from './components/Footer/Footer';
import { createGoogleTag } from './utils/createGoogleTag';

const App = () => {
  const { error, targetDateTime, updateDate, onCleanDate } = useDeadlineDate();
  const { isEditing, handleEdit, handleCancelEdit, handleUpdateDate } = useEditMode(updateDate);

  useEffect(() => {
    createGoogleTag();
  }, []);

  if (error || isEditing) {
    return (
      <div className={styles.content}>
        <div className={styles.mainWrapper}>
          <EmptyState
            updateDate={handleUpdateDate}
            targetDateTime={targetDateTime}
            onCancel={isEditing ? handleCancelEdit : null}
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <div className={styles.mainWrapper}>
        <h1 className={styles.title}>Countdown Timer</h1>
        <Timer targetDateTime={targetDateTime} />
        <OriginalDateTimeDisplay targetDateTime={targetDateTime} />
        <div className={styles.button}>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={onCleanDate}>Reset</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
