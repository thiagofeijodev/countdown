import { renderHook, act } from '@testing-library/react';
import { MINUTE, SECOND, useCountdown } from '../useCountdown';

describe('useCountdown', () => {
  const base = new Date('2025-01-01T00:00:00.000Z');

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(base);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns null for null/undefined or past dates', () => {
    const { result: r1 } = renderHook(() => useCountdown(null));
    expect(r1.current).toBeNull();

    const { result: r2 } = renderHook(() => useCountdown(undefined));
    expect(r2.current).toBeNull();

    const past = new Date('2020-01-01T00:00:00.000Z');
    const { result: r3 } = renderHook(() => useCountdown(past));
    expect(r3.current).toBeNull();
  });

  it('calculates exact days/hours/minutes/seconds for a known future date', () => {
    // target = 2025-01-02T03:04:05Z -> 1 day, 3 hours, 4 minutes, 5 seconds after base
    const target = new Date('2025-01-02T03:04:05.000Z');
    const { result } = renderHook(() => useCountdown(target));

    expect(result.current).toBeDefined();
    expect(result.current.days).toBe(1);
    expect(result.current.hours).toBe(3);
    expect(result.current.minutes).toBe(4);
    expect(result.current.seconds).toBe(5);
  });

  it('updates every second and rolls down correctly', () => {
    const target = new Date(base.getTime() + 5 * SECOND); // 5 seconds from base
    const { result } = renderHook(() => useCountdown(target));

    expect(result.current.seconds).toBe(5);

    act(() => jest.advanceTimersByTime(1000));
    expect(result.current.seconds).toBe(4);

    act(() => jest.advanceTimersByTime(2000));
    expect(result.current.seconds).toBe(2);
  });

  it('handles minute and hour boundaries correctly', () => {
    // set target to base + 1 minute + 2 seconds
    const target = new Date(base.getTime() + MINUTE + 2 * SECOND);
    const { result } = renderHook(() => useCountdown(target));

    expect(result.current.minutes).toBe(1);
    expect(result.current.seconds).toBe(2);

    // advance 3 seconds -> should become 0 minutes, 59 seconds
    act(() => jest.advanceTimersByTime(3000));
    expect(result.current.minutes).toBe(0);
    expect(result.current.seconds).toBe(59);
  });

  it('cleans up interval on unmount (no further updates)', () => {
    const target = new Date(base.getTime() + 10 * SECOND);
    const { result, unmount } = renderHook(() => useCountdown(target));

    const snapshot = result.current;
    unmount();

    act(() => jest.advanceTimersByTime(5000));
    // result should not have changed after unmount
    expect(result.current).toEqual(snapshot);
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
