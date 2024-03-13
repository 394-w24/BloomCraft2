import { describe, it, expect, beforeEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import BouquetBuilder from "./BouquetBuilder";
import Quiz from "./Quiz";

describe("Login to Quiz", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/bouquetbuilder" element={<BouquetBuilder />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    );
  });

  describe("Login", () => {
    test("should navigate to the Quiz page when the 'Quiz' button is clicked", () => {
      const quizButton = screen.getByText("Take Our Quiz");
      fireEvent.click(quizButton);

      const appBarElement = screen.getByText("Romantic Partner");
      expect(appBarElement).toBeDefined();
    });
  });

  describe("Login2", () => {
    test("should not navigate to quiz page when the 'Build Your Own Bouquet' button is clicked", async () => {
      const buildBouquetButton = screen.getByText("Friend");
      fireEvent.click(buildBouquetButton);

      const appBarElement = screen.queryByText("Friend");
      expect(appBarElement).toBeNull();
    });
  });
});
