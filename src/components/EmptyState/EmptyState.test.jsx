import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  const mockUpdateDate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render welcome message and form', () => {
    render(<EmptyState updateDate={mockUpdateDate} />);

    expect(screen.getByText('Welcome to Countdown')).toBeInTheDocument();
    expect(screen.getByText(/A minimal, ad-free countdown/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Start countdown' })).toBeInTheDocument();
  });

  it('should call updateDate when form is submitted with valid date', async () => {
    const user = userEvent.setup();
    render(<EmptyState updateDate={mockUpdateDate} />);

    const dateInput = screen.getByLabelText('Countdown date (date and time):');
    const submitButton = screen.getByRole('button', { name: 'Start countdown' });

    await user.type(dateInput, '2025-12-31T23:59');
    await user.click(submitButton);

    expect(mockUpdateDate).toHaveBeenCalledWith('2025-12-31T23:59');
  });

  it('should not call updateDate when form is submitted with empty date', async () => {
    const user = userEvent.setup();
    render(<EmptyState updateDate={mockUpdateDate} />);

    const submitButton = screen.getByRole('button', { name: 'Start countdown' });

    await user.click(submitButton);

    expect(mockUpdateDate).not.toHaveBeenCalled();
  });

  it('should render datetime-local input', () => {
    render(<EmptyState updateDate={mockUpdateDate} />);

    const dateInput = screen.getByLabelText('Countdown date (date and time):');
    expect(dateInput).toHaveAttribute('type', 'datetime-local');
  });

  it('should work without updateDate prop', () => {
    render(<EmptyState />);

    expect(screen.getByText('Welcome to Countdown')).toBeInTheDocument();
  });
});
