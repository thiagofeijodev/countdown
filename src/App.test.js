import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mock the hooks
jest.mock('./hooks/useDeadlineDate', () => ({
  useDeadlineDate: jest.fn(),
}));

jest.mock('./hooks/useEditMode', () => ({
  useEditMode: jest.fn(),
}));

import { useDeadlineDate } from './hooks/useDeadlineDate';
import { useEditMode } from './hooks/useEditMode';

describe('App', () => {
  const mockOnCleanDate = jest.fn();
  const mockUpdateDate = jest.fn();
  const mockHandleEdit = jest.fn();
  const mockHandleCancelEdit = jest.fn();
  const mockHandleUpdateDate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useEditMode.mockReturnValue({
      isEditing: false,
      handleEdit: mockHandleEdit,
      handleCancelEdit: mockHandleCancelEdit,
      handleUpdateDate: mockHandleUpdateDate,
    });
  });

  it('should render EmptyState when there is an error', () => {
    useDeadlineDate.mockReturnValue({
      error: 'No date parameter found in URL. Add ?date=YYYY-MM-DD to the URL.',
      targetDateTime: null,
      onCleanDate: mockOnCleanDate,
      updateDate: mockUpdateDate,
    });

    render(<App />);

    expect(screen.getByText('Welcome to Countdown')).toBeInTheDocument();
  });

  it('should render countdown when no error', () => {
    const mockTargetDateTime = new Date('2025-12-31T23:59:59.000Z');

    useDeadlineDate.mockReturnValue({
      error: undefined,
      targetDateTime: mockTargetDateTime,
      onCleanDate: mockOnCleanDate,
      updateDate: mockUpdateDate,
    });

    render(<App />);

    expect(screen.getByText('Countdown Timer')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });

  it('should call onCleanDate when Reset button is clicked', async () => {
    const user = userEvent.setup();
    const mockTargetDateTime = new Date('2025-12-31T23:59:59.000Z');

    useDeadlineDate.mockReturnValue({
      error: undefined,
      targetDateTime: mockTargetDateTime,
      onCleanDate: mockOnCleanDate,
      updateDate: mockUpdateDate,
    });

    render(<App />);

    const resetButton = screen.getByRole('button', { name: 'Reset' });
    await user.click(resetButton);

    expect(mockOnCleanDate).toHaveBeenCalledTimes(1);
  });

  it('should show edit form when Edit button is clicked', () => {
    const mockTargetDateTime = new Date('2025-12-31T23:59:59.000Z');

    useDeadlineDate.mockReturnValue({
      error: undefined,
      targetDateTime: mockTargetDateTime,
      onCleanDate: mockOnCleanDate,
      updateDate: mockUpdateDate,
    });

    useEditMode.mockReturnValue({
      isEditing: true,
      handleEdit: mockHandleEdit,
      handleCancelEdit: mockHandleCancelEdit,
      handleUpdateDate: mockHandleUpdateDate,
    });

    render(<App />);

    expect(screen.getByText('Welcome to Countdown')).toBeInTheDocument();
    expect(screen.getByText('Update your countdown date and time below.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Update countdown' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('should call handleEdit when Edit button is clicked', async () => {
    const user = userEvent.setup();
    const mockTargetDateTime = new Date('2025-12-31T23:59:59.000Z');

    useDeadlineDate.mockReturnValue({
      error: undefined,
      targetDateTime: mockTargetDateTime,
      onCleanDate: mockOnCleanDate,
      updateDate: mockUpdateDate,
    });

    render(<App />);

    const editButton = screen.getByRole('button', { name: 'Edit' });
    await user.click(editButton);

    expect(mockHandleEdit).toHaveBeenCalledTimes(1);
  });

  it('should call useDeadlineDate hook', () => {
    useDeadlineDate.mockReturnValue({
      error: undefined,
      targetDateTime: new Date('2025-12-31T23:59:59.000Z'),
      onCleanDate: mockOnCleanDate,
      updateDate: mockUpdateDate,
    });

    render(<App />);

    expect(useDeadlineDate).toHaveBeenCalledTimes(1);
  });

  it('should call useEditMode hook', () => {
    useDeadlineDate.mockReturnValue({
      error: undefined,
      targetDateTime: new Date('2025-12-31T23:59:59.000Z'),
      onCleanDate: mockOnCleanDate,
      updateDate: mockUpdateDate,
    });

    render(<App />);

    expect(useEditMode).toHaveBeenCalledWith(mockUpdateDate);
    expect(useEditMode).toHaveBeenCalledTimes(1);
  });
});
