import { describe, expect, test } from "vitest";
import { fireEvent, render, screen} from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BouquetBuilder from "./BouquetBuilder";
import userEvent from '@testing-library/user-event'

describe("bouquetbuilder tests", () => {

  test("selecting the 'container' category shows the possible containers", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BouquetBuilder
                userPreferences={{ occasion: "all", shoppingFor: "all" }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText("Containers")).toBeDefined();
  });

  test("decrementing an item to a quantity of 0 removes the type from the cart", async () => {
    const user = userEvent.setup()

    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BouquetBuilder
                userPreferences={{ occasion: "all", shoppingFor: "all" }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );

    await user.click(screen.getByText("White Wrap"));
    expect(screen.getByRole('i', { className: 'bi bi-dash-circle' })).toBeDefined();
    await user.click(screen.getByRole('i', { className: 'bi bi-dash-circle' }));
    expect(screen.queryByRole('i', { className: 'bi bi-dash-circle' })).toBe(null);
  });
});
