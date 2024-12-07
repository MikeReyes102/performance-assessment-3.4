import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers
import Counter from '../components/Counter';


test("Counter increments and resets correctly", () => {
  render(<Counter />);
  const increaseButton = screen.getByText(/Increase \+/i);
  const decreaseButton = screen.getByText(/Decrease -/i);
  const resetButton = screen.getByText(/Reset/i);

  fireEvent.click(increaseButton);
  expect(screen.getByText("1")).toBeInTheDocument();

  fireEvent.click(decreaseButton);
  expect(screen.getByText("0")).toBeInTheDocument();

  fireEvent.click(resetButton);
  expect(screen.getByText("0")).toBeInTheDocument();
});
