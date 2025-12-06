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

  it('should display hours when hours is 0 but days > 0', () => {
    useCountdown.mockReturnValue({
      days: 1,
      hours: 0,
      minutes: 30,
      seconds: 15,
    });

    render(<Timer targetDateTime={new Date()} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('days')).toBeInTheDocument();
    expect(screen.getByText('00')).toBeInTheDocument();
    expect(screen.getByText('hours')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('should not display minutes when minutes is 0, hours is 0 and days is 0', () => {
    useCountdown.mockReturnValue({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 45,
    });

    render(<Timer targetDateTime={new Date()} />);

    expect(screen.queryByText('days')).not.toBeInTheDocument();
    expect(screen.queryByText('hours')).not.toBeInTheDocument();
    expect(screen.queryByText('minutes')).not.toBeInTheDocument();
    expect(screen.getByText('45')).toBeInTheDocument();
    expect(screen.getByText('seconds')).toBeInTheDocument();
  });

  it('should display minutes when minutes is 0 but hours > 0', () => {
    useCountdown.mockReturnValue({
      days: 0,
      hours: 1,
      minutes: 0,
      seconds: 0,
    });

    render(<Timer targetDateTime={new Date()} />);

    expect(screen.queryByText('days')).not.toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument(); // hours
    const zeros = screen.getAllByText('00');
    expect(zeros).toHaveLength(2); // minutes and seconds
    expect(screen.getByText('hours')).toBeInTheDocument();
    expect(screen.getByText('minutes')).toBeInTheDocument();
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
