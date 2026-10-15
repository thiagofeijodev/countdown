import { render, screen } from '@testing-library/react';
import { toPng } from 'html-to-image';
import { StaticPngView } from './StaticPngView';

jest.mock('html-to-image', () => ({
  toPng: jest.fn(),
}));

jest.mock('../Timer/Timer', () => ({
  Timer: () => <div data-testid="static-timer" />,
}));

describe('StaticPngView', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    toPng.mockResolvedValue('data:image/png;base64,static-countdown');
  });

  it('renders the generated PNG', async () => {
    render(<StaticPngView targetDateTime={new Date('2025-12-31T23:59:59.000Z')} />);

    expect(await screen.findByRole('img', { name: 'Static countdown PNG' })).toHaveAttribute(
      'src',
      'data:image/png;base64,static-countdown',
    );
    expect(toPng).toHaveBeenCalledWith(expect.any(HTMLElement), {
      pixelRatio: 2,
      skipFonts: true,
    });
    expect(toPng.mock.calls[0][0]).toHaveTextContent('Countdown Timer');
  });
});