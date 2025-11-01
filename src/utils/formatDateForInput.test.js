import { formatDateForInput } from './formatDateForInput';

describe('formatDateForInput', () => {
  it('should format a valid date correctly', () => {
    const date = new Date('2025-12-31T23:59:00.000Z');
    const result = formatDateForInput(date);
    expect(result).toBe('2025-12-31T23:59');
  });

  it('should format date with single digit month and day', () => {
    const date = new Date('2025-01-05T09:00:00.000Z');
    const result = formatDateForInput(date);
    expect(result).toBe('2025-01-05T09:00');
  });

  it('should format date with single digit hours and minutes', () => {
    const date = new Date('2025-01-05T09:05:00.000Z');
    const result = formatDateForInput(date);
    expect(result).toBe('2025-01-05T09:05');
  });

  it('should return empty string for invalid date', () => {
    const result = formatDateForInput(new Date('invalid'));
    expect(result).toBe('');
  });

  it('should return empty string for null', () => {
    const result = formatDateForInput(null);
    expect(result).toBe('');
  });

  it('should return empty string for undefined', () => {
    const result = formatDateForInput(undefined);
    expect(result).toBe('');
  });
});
