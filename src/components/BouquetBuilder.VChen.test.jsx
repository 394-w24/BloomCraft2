import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BouquetBuilder from "./BouquetBuilder";

describe("BouquetBuilder", () => {
  test("selecting the 'foliage' category shows foliage flowers", () => {
    render(
      <BrowserRouter>
        <BouquetBuilder /* add required props here */ />
      </BrowserRouter>
    );

    const foliageIconButton = screen.getByAltText("Foliage");
    fireEvent.click(foliageIconButton);

    // Now using the correct Vitest assertion
    const finalFoliageElement = screen.getByText("Foliage Flowers");
    expect(finalFoliageElement).toBeDefined(); // Use .toBeDefined() which is available in Vitest
  });
});
