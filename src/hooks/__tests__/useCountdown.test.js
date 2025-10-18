import { renderHook, act } from '@testing-library/react';
import { useCountdown } from '../useCountdown';

describe('useCountdown', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return null for past date', () => {
    const pastDate = new Date('2020-01-01T12:00:00.000Z');
    const { result } = renderHook(() => useCountdown(pastDate));

    expect(result.current).toBeNull();
  });

  it('should return null for null target date', () => {
    const { result } = renderHook(() => useCountdown(null));

    expect(result.current).toBeNull();
  });

  it('should return null for undefined target date', () => {
    const { result } = renderHook(() => useCountdown(undefined));

    expect(result.current).toBeNull();
  });

  it('should calculate countdown for future date', () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 5); // 5 minutes from now
    const { result } = renderHook(() => useCountdown(futureDate));

    expect(result.current).toBeDefined();
    expect(result.current.days).toBeGreaterThanOrEqual(0);
    expect(result.current.hours).toBeGreaterThanOrEqual(0);
    expect(result.current.minutes).toBeGreaterThanOrEqual(0);
    expect(result.current.seconds).toBeGreaterThanOrEqual(0);
  });

  it('should update countdown over time', () => {
    const futureDate = new Date(Date.now() + 1000 * 3); // 3 seconds from now
    const { result } = renderHook(() => useCountdown(futureDate));

    const initialSeconds = result.current.seconds;

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBe(initialSeconds - 1);
  });
});
