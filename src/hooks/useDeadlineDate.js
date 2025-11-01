import { useMemo, useState, useCallback } from 'react';

export const useDeadlineDate = () => {
  // Get the date parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const initialDate = urlParams.get('date');

  // Internal state for the date (can be updated without URL change)
  const [targetDate, setTargetDate] = useState(initialDate);

  // Parse the target date
  const targetDateTime = targetDate ? new Date(targetDate) : null;

  const error = useMemo(() => {
    if (!targetDate) {
      return 'No date parameter found in URL. Add ?date=YYYY-MM-DD to the URL.';
    }

    // Validate the date
    if (isNaN(targetDateTime.getTime())) {
      return 'Invalid date format. Please use YYYY-MM-DD format.';
    }
  }, [targetDateTime, targetDate]);

  const onCleanDate = useCallback(() => {
    setTargetDate('');
    window.history.replaceState({}, '', '?date=');
  }, []);

  const updateDate = useCallback((newDate) => {
    setTargetDate(newDate);

    if (newDate) {
      const dateObj = new Date(newDate);
      if (!isNaN(dateObj.getTime())) {
        const formattedDate = dateObj.toISOString();
        window.history.replaceState({}, '', `?date=${formattedDate}`);
      } else {
        window.history.replaceState({}, '', '?date=');
      }
    } else {
      window.history.replaceState({}, '', '?date=');
    }
  }, []);

  return {
    error,
    onCleanDate,
    updateDate,
    targetDateTime,
  };
};
