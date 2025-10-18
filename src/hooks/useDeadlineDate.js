import { useMemo } from 'react';

export const useDeadlineDate = () => {
  // Get the date parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const targetDate = urlParams.get('date');

  // Parse the target date
  const targetDateTime = new Date(targetDate);

  const onCleanDate = () => {
    window.location.search = '';
  };

  const error = useMemo(() => {
    if (!targetDate) {
      return 'No date parameter found in URL. Add ?date=YYYY-MM-DD to the URL.';
    }

    // Validate the date
    if (isNaN(targetDateTime.getTime())) {
      return 'Invalid date format. Please use YYYY-MM-DD format.';
    }
  }, [targetDateTime, targetDate]);

  return {
    error,
    onCleanDate,
    targetDateTime,
  };
};
