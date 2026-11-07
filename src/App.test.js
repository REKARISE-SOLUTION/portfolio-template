import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './components/Contact';

test('copies the email address when the copy button is clicked', async () => {
  const writeText = jest.fn().mockResolvedValue();
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText },
    configurable: true,
  });

  render(<Contact />);

  userEvent.click(screen.getByRole('button', { name: /copy email/i }));

  expect(writeText).toHaveBeenCalledWith('hello@example.com');
  expect(await screen.findByText(/copied!/i)).toBeInTheDocument();
});
