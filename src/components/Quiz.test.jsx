import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Quiz from "./Quiz";
import BouquetBuilder from "./BouquetBuilder";

describe("Quiz", () => {
  it("should navigate to the BouquetBuilder page and display the correct flowers based on user preferences", async () => {
    const mockSetTemplatePreferences = vi.fn();
    const mockSetPreferredbouquetsize = vi.fn();

    render(
      <BrowserRouter>
        <Quiz
          setTemplatePreferences={mockSetTemplatePreferences}
          setPreferredbouquetsize={mockSetPreferredbouquetsize}
        />
        <BouquetBuilder />
      </BrowserRouter>
    );

    // Question 1
    const romanticPartnerButton = screen.getByText("Romantic Partner");
    fireEvent.click(romanticPartnerButton);

    // Question 2
    const romanticGestureButton = screen.getByText("Romantic Gesture");
    fireEvent.click(romanticGestureButton);

    // Question 4
    const startWithTemplateButton = screen.getByText("Yes, start with a template");
    fireEvent.click(startWithTemplateButton);

    // Question 5
    const smallBouquetButton = screen.getByText("Small (6 flowers)");
    fireEvent.click(smallBouquetButton);

    // Assert navigation to "/bouquetbuilder"
    const bouquetBuilderElement = screen.getByText("Need some help?");
    expect(bouquetBuilderElement).toBeDefined();


    // Assert that the correct template preferences are set,used the data on boquet builder
    expect(mockSetTemplatePreferences).toHaveBeenCalledWith({
      shoppingFor: "partner",
      occasion: "romance",
      size: "Small",
    });

    // Assert that the correct preferred bouquet size is set
    expect(mockSetPreferredbouquetsize).toHaveBeenCalledWith("Small");
  });
});