import { render, screen } from '@testing-library/react';
import { Timer } from './Timer';

// Mock the useCountdown hook
jest.mock('../../hooks/useCountdown', () => ({
  useCountdown: jest.fn(),
}));

import { useCountdown } from '../../hooks/useCountdown';

describe('Timer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display countdown when active', () => {
    useCountdown.mockReturnValue({
      days: 1,
      hours: 2,
      minutes: 3,
      seconds: 4,
    });

    render(<Timer targetDateTime={new Date()} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('days')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('hours')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('minutes')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
    expect(screen.getByText('seconds')).toBeInTheDocument();
  });

  it('should display expired message when countdown is null', () => {
    useCountdown.mockReturnValue(null);

    render(<Timer targetDateTime={new Date()} />);

    expect(screen.getByText("Time's Up! ⏰")).toBeInTheDocument();
    expect(screen.getByText('The countdown has reached zero.')).toBeInTheDocument();
  });

  it('should not display days when days is 0', () => {
    useCountdown.mockReturnValue({
      days: 0,
      hours: 2,
      minutes: 3,
      seconds: 4,
    });

    render(<Timer targetDateTime={new Date()} />);

    expect(screen.queryByText('days')).not.toBeInTheDocument();
    expect(screen.getByText('hours')).toBeInTheDocument();
  });

  it('should call useCountdown with targetDateTime', () => {
    const targetDate = new Date('2025-12-31T23:59:59');
    useCountdown.mockReturnValue({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    render(<Timer targetDateTime={targetDate} />);

    expect(useCountdown).toHaveBeenCalledWith(targetDate);
  });
});
