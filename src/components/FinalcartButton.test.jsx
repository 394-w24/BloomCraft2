import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BouquetBuilder from "./BouquetBuilder";

describe("BouquetBuilder", () => {
  it("should go to the final cart when the checkout button is clicked", () => {
    render(
      <BrowserRouter>
        <BouquetBuilder /* add required props here */ />
      </BrowserRouter>
    );

    const cartIconButton = screen.getByTestId("cart-icon");
    fireEvent.click(cartIconButton);

    // Now using the correct Vitest assertion
    const finalCartElement = screen.getByText("Complete Transaction");
    expect(finalCartElement).toBeDefined(); // Use .toBeDefined() which is available in Vitest
  });
});
