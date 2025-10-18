export const EmptyState = ({ error }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const dateTimeValue = e.target.countdowndate.value;
    if (dateTimeValue) {
      const formattedDate = new Date(dateTimeValue).toISOString();
      window.location.search = `?date=${formattedDate}`;
    }
  };

  return (
    <div className="container">
      <div className="errorBox">
        <h2 className="errorTitle">Error</h2>
        <p className="errorMessage">{error}</p>
        <form className="formCountdowndate" onSubmit={onSubmit}>
          <label htmlFor="countdowndate">Countdown date (date and time):</label>
          <input type="datetime-local" id="countdowndate" name="countdowndate" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
