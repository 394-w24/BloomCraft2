import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import BouquetBuilder from "./BouquetBuilder";

describe("BouquetBuilder", () => {
  it("clicking '-' decrements the flower amount by 1", async () => {
    
    const initialFlowers = [
      { name: "Rose", quantity: 3, type: "Focal" },
      { name: "Lily", quantity: 2, type: "Filler" },
    ];

    
    render(<BouquetBuilder userPreferences={{ occasion: "all", shoppingFor: "all" }} templatePreferences={{}} preferredBouquetsize="Medium" initialFlowers={initialFlowers} />);

    
    const fillerButton = screen.getByText("Filler");
    fireEvent.click(fillerButton);

    
    const decrementButton = screen.getByTestId('decrement-Lily');
    fireEvent.click(decrementButton);

    
    const lilyQuantity = screen.getByTestId('Lily-quantity');
    expect(lilyQuantity).toHaveTextContent('1'); // The expected quantity after decrement
  });
});
