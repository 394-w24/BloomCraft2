import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import Login from './components/Login';

describe('trivial tests', () => {
    
  test("Total price is 0 at start", () => {
    render(<App />);
    expect(screen.getByText('Bloomcrafter Login')).toBeDefined();
  });

});

// describe('counter tests', () => {
    
//   test("Counter should be 0 at the start", () => {
//     render(<App />);
//     expect(screen.getByText('count is: 0')).toBeDefined();
//   });

//   test("Counter should increment by one when clicked", async () => {
//     render(<App />);
//     const counter = screen.getByRole('button');
//     fireEvent.click(counter);
//     expect(await screen.getByText('count is: 1')).toBeDefined();
//   });

// });