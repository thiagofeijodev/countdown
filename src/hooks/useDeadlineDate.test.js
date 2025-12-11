import { renderHook, act } from '@testing-library/react';
import { useDeadlineDate } from './useDeadlineDate';

// Mock window.history
const mockHistory = {
  pushState: jest.fn(),
  replaceState: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();

  // Mock window.history
  Object.defineProperty(window, 'history', {
    value: mockHistory,
    writable: true,
  });
});

describe('useDeadlineDate', () => {
  describe('updateDate functionality', () => {
    it('should update targetDateTime when updateDate is called with valid date', () => {
      const { result } = renderHook(() => useDeadlineDate());

      const newDate = '2025-12-31T23:59:59';

      act(() => {
        result.current.updateDate(newDate);
      });

      expect(result.current.targetDateTime).toEqual(new Date(newDate));
      expect(result.current.error).toBeUndefined();
    });

    it('should update targetDateTime with different date formats', () => {
      const { result } = renderHook(() => useDeadlineDate());

      const testDates = [
        '2025-12-31T23:59:59',
        '2025-12-31T23:59',
        '2025-12-31',
        '2025-12-31T00:00:00.000Z',
      ];

      testDates.forEach((testDate) => {
        act(() => {
          result.current.updateDate(testDate);
        });

        expect(result.current.targetDateTime).toEqual(new Date(testDate));
        expect(result.current.error).toBeUndefined();
      });
    });

    it('should handle updateDate with null value', () => {
      const { result } = renderHook(() => useDeadlineDate());

      act(() => {
        result.current.updateDate(null);
      });

      expect(result.current.error).toBe(
        'No date parameter found in URL. Add ?date=YYYY-MM-DD to the URL.',
      );
    });

    it('should handle updateDate with empty string', () => {
      const { result } = renderHook(() => useDeadlineDate());

      act(() => {
        result.current.updateDate('');
      });

      expect(result.current.error).toBe(
        'No date parameter found in URL. Add ?date=YYYY-MM-DD to the URL.',
      );
    });

    it('should handle updateDate with invalid date', () => {
      const { result } = renderHook(() => useDeadlineDate());

      act(() => {
        result.current.updateDate('invalid-date');
      });

      expect(result.current.error).toBe('Invalid date format. Please use YYYY-MM-DD format.');
    });

    it('should update URL when updateDate is called with valid date', () => {
      const { result } = renderHook(() => useDeadlineDate());

      const newDate = '2025-12-31T23:59:59';

      act(() => {
        result.current.updateDate(newDate);
      });

      expect(mockHistory.pushState).toHaveBeenCalledWith(
        {},
        '',
        `?date=${new Date(newDate).toISOString()}`,
      );
    });

    it('should update URL when updateDate is called with empty value', () => {
      const { result } = renderHook(() => useDeadlineDate());

      act(() => {
        result.current.updateDate('');
      });

      expect(mockHistory.pushState).toHaveBeenCalledWith({}, '', '?date=');
    });
  });

  describe('onCleanDate functionality', () => {
    it('should clear targetDateTime when onCleanDate is called', () => {
      const { result } = renderHook(() => useDeadlineDate());

      // First set a date
      act(() => {
        result.current.updateDate('2025-12-31T23:59:59');
      });

      // Verify it's set
      expect(result.current.targetDateTime).toEqual(new Date('2025-12-31T23:59:59'));

      // Clear it
      act(() => {
        result.current.onCleanDate();
      });

      expect(result.current.error).toBe(
        'No date parameter found in URL. Add ?date=YYYY-MM-DD to the URL.',
      );
    });

    it('should update URL when onCleanDate is called', () => {
      const { result } = renderHook(() => useDeadlineDate());

      act(() => {
        result.current.onCleanDate();
      });

      expect(mockHistory.pushState).toHaveBeenCalledWith({}, '', '?date=');
    });
  });

  describe('State transitions', () => {
    it('should transition from error to valid date', () => {
      const { result } = renderHook(() => useDeadlineDate());

      // Initial error state (no date set)
      expect(result.current.error).toBe(
        'No date parameter found in URL. Add ?date=YYYY-MM-DD to the URL.',
      );

      // Update to valid date
      act(() => {
        result.current.updateDate('2025-12-31T23:59:59');
      });

      expect(result.current.error).toBeUndefined();
      expect(result.current.targetDateTime).toEqual(new Date('2025-12-31T23:59:59'));
    });

    it('should transition from valid date to error', () => {
      const { result } = renderHook(() => useDeadlineDate());

      // Set valid date first
      act(() => {
        result.current.updateDate('2025-12-31T23:59:59');
      });

      // Verify initial valid state
      expect(result.current.error).toBeUndefined();
      expect(result.current.targetDateTime).toEqual(new Date('2025-12-31T23:59:59'));

      // Update to invalid date
      act(() => {
        result.current.updateDate('invalid-date');
      });

      expect(result.current.error).toBe('Invalid date format. Please use YYYY-MM-DD format.');
    });

    it('should maintain state consistency across multiple updates', () => {
      const { result } = renderHook(() => useDeadlineDate());

      const dates = ['2025-01-01T00:00:00', '2025-06-15T12:30:45', '2025-12-31T23:59:59'];

      dates.forEach((date) => {
        act(() => {
          result.current.updateDate(date);
        });

        expect(result.current.targetDateTime).toEqual(new Date(date));
        expect(result.current.error).toBeUndefined();
      });
    });
  });

  describe('Function memoization', () => {
    it('should memoize onCleanDate function', () => {
      const { result, rerender } = renderHook(() => useDeadlineDate());

      const firstOnCleanDate = result.current.onCleanDate;

      rerender();

      const secondOnCleanDate = result.current.onCleanDate;

      expect(firstOnCleanDate).toBe(secondOnCleanDate);
    });

    it('should memoize updateDate function', () => {
      const { result, rerender } = renderHook(() => useDeadlineDate());

      const firstUpdateDate = result.current.updateDate;

      rerender();

      const secondUpdateDate = result.current.updateDate;

      expect(firstUpdateDate).toBe(secondUpdateDate);
    });
  });

  describe('Edge cases', () => {
    it('should handle leap year dates', () => {
      const { result } = renderHook(() => useDeadlineDate());

      act(() => {
        result.current.updateDate('2024-02-29T12:00:00');
      });

      expect(result.current.targetDateTime).toEqual(new Date('2024-02-29T12:00:00'));
      expect(result.current.error).toBeUndefined();
    });

    it('should handle year boundaries', () => {
      const { result } = renderHook(() => useDeadlineDate());

      act(() => {
        result.current.updateDate('2025-01-01T00:00:00');
      });

      expect(result.current.targetDateTime).toEqual(new Date('2025-01-01T00:00:00'));
      expect(result.current.error).toBeUndefined();
    });

    it('should handle timezone variations', () => {
      const { result } = renderHook(() => useDeadlineDate());

      const utcDate = '2025-12-31T23:59:59.000Z';

      act(() => {
        result.current.updateDate(utcDate);
      });

      expect(result.current.targetDateTime).toEqual(new Date(utcDate));
      expect(result.current.error).toBeUndefined();
    });
  });
});
