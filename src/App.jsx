import { EmptyState } from './components/EmptyState';
import { useDeadlineDate } from './hooks/useDeadlineDate';
import { Timer } from './components/Timer';
import './styles.css';

const App = () => {
  const { error, targetDateTime, onCleanDate } = useDeadlineDate();

  if (error) {
    return <EmptyState error={error} />;
  }

  return (
    <div className="container">
      <h1 className="title">Countdown Timer</h1>

      <Timer targetDateTime={targetDateTime} />

      <div className="button">
        <button onClick={onCleanDate}>Reset</button>
      </div>
    </div>
  );
};

export default App;
