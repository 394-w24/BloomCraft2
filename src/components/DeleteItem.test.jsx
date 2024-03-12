// Import necessary testing utilities
import { render, fireEvent, screen } from "@testing-library/react";
import Cart from "./Cart";
import { describe, it, expect, vi } from "vitest";

describe("Cart", () => {
  it("clicking the trash icon removes all flowers of that type from the cart", async () => {
    // Mock data and functions
    const mockUpdateQuantity = vi.fn();
    const mockItems = [
      { name: "Rose", quantity: 3 },
      { name: "Tulip", quantity: 2 },
    ];

    // Render the Cart component with props
    render(<Cart list={mockItems} updateQuantity={mockUpdateQuantity} />);

    // Find the first trash icon and click it
    const firstTrashIcon = screen.getAllByTestId("delete-icon")[0];
    fireEvent.click(firstTrashIcon);

    // Assert `updateQuantity` was called with the correct arguments
    // Assuming the first item's index is 0 and setting quantity to 0 should remove it
    expect(mockUpdateQuantity).toHaveBeenCalledWith(0, 0);
  });
});
