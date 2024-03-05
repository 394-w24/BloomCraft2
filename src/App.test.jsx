import { describe, expect, test } from "vitest";
import { fireEvent, render, screen} from "@testing-library/react";
import App from "./App";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BouquetBuilder from "./components/BouquetBuilder";
describe("trivial tests", () => {
  test("Login page renders", () => {
    render(<App />);
    expect(screen.getByText("Build Your Own Bouquet")).toBeDefined();

  });

  test("Total price is 0 at bouquetbuilder", () => {
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

    expect(screen.getByText("Total Price: $0.00")).toBeDefined();
  });
});
