import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import BouquetBuilder from './BouquetBuilder';
import App from '../App';

describe('trivial tests', () => {
    
  test("Total price is 0 at start", () => {
    render(<App><BouquetBuilder /></App>);
    expect(screen.getByText('Total Price: $0.00')).toBeDefined();
  });

});