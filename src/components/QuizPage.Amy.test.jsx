import { describe, it, expect, beforeEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BouquetBuilder from "./BouquetBuilder";
import Quiz from "./Quiz";

describe("Navigation from BouquetBuilder to Quiz", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BouquetBuilder />
        <Quiz />
      </BrowserRouter>
    );
  });

  it("should navigate to the Quiz page when 'Start Quiz' button is clicked", () => {
    // const startQuizButton = screen.getByTestId("start-quiz-bttn");
    const startQuizButton = screen.getByText("Start Quiz"); 
    fireEvent.click(startQuizButton);

    const quizPageText = screen.getByText("Who are you shopping for today?"); 
    expect(quizPageText).toBeDefined();
  });
});
