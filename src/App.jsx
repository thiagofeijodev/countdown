import { EmptyState } from './components/EmptyState';
import { useDeadlineDate } from './hooks/useDeadlineDate';
import { Timer } from './components/Timer';
import { OriginalDateTimeDisplay } from './components/OriginalDateTimeDisplay';
import './styles.css';

const App = () => {
  const { error, targetDateTime, updateDate, onCleanDate } = useDeadlineDate();

  if (error) {
    return <EmptyState updateDate={updateDate} />;
  }

  return (
    <div className="container">
      <h1 className="title">Countdown Timer</h1>
      <Timer targetDateTime={targetDateTime} />
      <OriginalDateTimeDisplay targetDateTime={targetDateTime} />
      <div className="button">
        <button onClick={onCleanDate}>Reset</button>
      </div>
    </div>
  );
};

export default App;
