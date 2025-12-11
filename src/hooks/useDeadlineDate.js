import { useMemo, useState, useCallback, useEffect } from 'react';

export const useDeadlineDate = () => {
  // Get the date parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const initialDate = urlParams.get('date');

  // Internal state for the date (can be updated without URL change)
  const [targetDate, setTargetDate] = useState(initialDate);

  // Listen for back/forward navigation and update state when URL changes
  useEffect(() => {
    const handlePopState = () => {
      const newUrlParams = new URLSearchParams(window.location.search);
      const newDate = newUrlParams.get('date');
      setTargetDate(newDate || '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Parse the target date
  const targetDateTime = targetDate ? new Date(targetDate) : null;

  // Update page title when targetDateTime changes
  useEffect(() => {
    if (targetDateTime) {
      const formattedDate = targetDateTime.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      document.title = `Countdown to ${formattedDate}`;
    } else {
      document.title = 'Countdown Timer';
    }
  }, [targetDateTime]);

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
    window.history.pushState({}, '', '?date=');
  }, []);

  const updateDate = useCallback((newDate) => {
    setTargetDate(newDate);

    if (newDate) {
      const dateObj = new Date(newDate);
      if (!isNaN(dateObj.getTime())) {
        const formattedDate = dateObj.toISOString();
        window.history.pushState({}, '', `?date=${formattedDate}`);
      } else {
        window.history.pushState({}, '', '?date=');
      }
    } else {
      window.history.pushState({}, '', '?date=');
    }
  }, []);

  return {
    error,
    onCleanDate,
    updateDate,
    targetDateTime,
  };
};
