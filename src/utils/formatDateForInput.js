/**
 * Format date for datetime-local input (YYYY-MM-DDTHH:mm)
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string or empty string if invalid
 */
export const formatDateForInput = (date) => {
  if (!date || isNaN(date.getTime())) {
    return '';
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
