export const EmptyState = () => {
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
      <div className="countdownBox">
        <h1 className="title">Welcome to Countdown</h1>
        <p className="info">
          A minimal, ad-free countdown. Pick a date and time below to start counting down —
          we&apos;ll handle the rest.
        </p>

        <form className="formCountdowndate" onSubmit={onSubmit}>
          <label htmlFor="countdowndate">Select target date and time</label>
          <input type="datetime-local" id="countdowndate" name="countdowndate" />
          <input type="submit" value="Start countdown" />
        </form>

        <p className="example">
          Example: 2025-12-31 23:59 — perfect for New Year&apos;s or project deadlines.
        </p>
      </div>
    </div>
  );
};
