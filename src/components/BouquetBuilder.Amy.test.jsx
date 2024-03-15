import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BouquetBuilder from "./BouquetBuilder";

const userPreferences = {
  shoppingFor: "all",
  occasion: "all",
};

const templatePreferences = null;
const preferredBouquetsize = "Small";

describe("Increment Flower test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BouquetBuilder
          userPreferences={userPreferences}
          templatePreferences={templatePreferences}
          preferredBouquetsize={preferredBouquetsize}
        />
      </BrowserRouter>
    );
  });

  describe("Image appears when clicked", () => {
    test("A container appears when clicked", async () => {
      const wrapButton = screen.getByText("White Wrap");
      fireEvent.click(wrapButton);

      const wrapElements = await screen.findAllByAltText("White Wrap");
      expect(wrapElements.length).toBe(2);
    });
  });

describe("BouquetBuilder", () => {
  it("clicking '+' increments the flower amount by 1", () => {
    const fillerButton = screen.getByTestId("Filler-button");
    fireEvent.click(fillerButton);

    const element = screen.getByText("Daisy");
    fireEvent.click(element);

    const incrementButton = screen.getByTestId("increment-Daisy");
    fireEvent.click(incrementButton);

    const daisyQuantity = screen.getByTestId("quantity-Daisy");
    expect(daisyQuantity.textContent).toBe('2');
  });
});
});
