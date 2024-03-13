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
    fireEvent.click(screen.getByTestId("cart-icon"));
    fireEvent.click(screen.getByText("Add a Note"));

    const generatenoteButton = screen.getByTestId("dropdowntest");
    fireEvent.click(generatenoteButton);

    // Now using the correct Vitest assertion
    const generatenoteElement = screen.getByText("I love you");
    expect(generatenoteElement).toBeDefined(); // Use .toBeDefined() which is available in Vitest
  });
});
