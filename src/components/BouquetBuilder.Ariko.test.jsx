import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BouquetBuilder from "./BouquetBuilder";

describe("BouquetBuilder", () => {
  it("selecting the 'filler' category shows filler flowers", () => {
    render(
      <BrowserRouter>
        <BouquetBuilder userPreferences={{ occasion: "all", shoppingFor: "all" }} />
      </BrowserRouter>
    );

    
    const fillerButton = screen.getByTestId("Filler-button");
    fireEvent.click(fillerButton);

    
    const fillerFlowersElement = screen.getByText("Filler Flowers");
    expect(fillerFlowersElement).toBeDefined();
  });
});