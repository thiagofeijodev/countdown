import { render, screen } from '@testing-library/react';
import { OriginalDateTimeDisplay } from './OriginalDateTimeDisplay';

describe('OriginalDateTimeDisplay', () => {
  it('should format and display date', () => {
    const targetDateTime = new Date('2025-12-31T23:59:59.000Z');
    render(<OriginalDateTimeDisplay targetDateTime={targetDateTime} />);

    // The component should render the formatted date
    expect(screen.getByText(/2025/)).toBeInTheDocument();
  });

  it('should handle valid Date object', () => {
    const targetDateTime = new Date('2025-01-01T12:00:00.000Z');
    render(<OriginalDateTimeDisplay targetDateTime={targetDateTime} />);

    expect(screen.getByText(/2025/)).toBeInTheDocument();
  });

  it('should render in a div', () => {
    const targetDateTime = new Date('2025-12-31T23:59:59.000Z');
    const { container } = render(<OriginalDateTimeDisplay targetDateTime={targetDateTime} />);

    const displayDiv = container.firstChild;
    expect(displayDiv.tagName).toBe('DIV');
  });
});
