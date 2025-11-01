import { renderHook, act } from '@testing-library/react';
import { useEditMode } from './useEditMode';

describe('useEditMode', () => {
  const mockUpdateDate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with isEditing as false', () => {
    const { result } = renderHook(() => useEditMode(mockUpdateDate));

    expect(result.current.isEditing).toBe(false);
  });

  it('should set isEditing to true when handleEdit is called', () => {
    const { result } = renderHook(() => useEditMode(mockUpdateDate));

    act(() => {
      result.current.handleEdit();
    });

    expect(result.current.isEditing).toBe(true);
  });

  it('should set isEditing to false when handleCancelEdit is called', () => {
    const { result } = renderHook(() => useEditMode(mockUpdateDate));

    act(() => {
      result.current.handleEdit();
    });

    expect(result.current.isEditing).toBe(true);

    act(() => {
      result.current.handleCancelEdit();
    });

    expect(result.current.isEditing).toBe(false);
  });

  it('should call updateDate and set isEditing to false when handleUpdateDate is called', () => {
    const { result } = renderHook(() => useEditMode(mockUpdateDate));
    const newDate = new Date('2025-12-31T23:59:59.000Z');

    act(() => {
      result.current.handleEdit();
    });

    expect(result.current.isEditing).toBe(true);

    act(() => {
      result.current.handleUpdateDate(newDate);
    });

    expect(mockUpdateDate).toHaveBeenCalledWith(newDate);
    expect(mockUpdateDate).toHaveBeenCalledTimes(1);
    expect(result.current.isEditing).toBe(false);
  });
});
