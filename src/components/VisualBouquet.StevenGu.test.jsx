import { describe, it, expect, beforeEach, test } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import BouquetBuilder from "./BouquetBuilder";
import { BrowserRouter } from "react-router-dom";

const userPreferences = {
  shoppingFor: "all",
  occasion: "all",
};

const templatePreferences = null;
const preferredBouquetsize = "Small";

describe("VisualBouquet tests", () => {
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

  // note: this is the case because the image being rendered appears in the flower shop component and the visual bouquet and has the same alt text.
  describe("A container does not appear initially", () => {
    test("A container does not appear initially", async () => {
      const wrapElements = await screen.findAllByAltText("White Wrap");
      expect(wrapElements.length).toBe(1);
    });
  });
});
