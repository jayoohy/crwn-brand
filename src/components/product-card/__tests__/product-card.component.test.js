import React from "react";
import { fireEvent, screen } from "@testing-library/dom";
import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";

describe("product card tests", () => {
  test("should add the product item when add to cart is clicked", async () => {
    const mockProduct = {
      id: 1,
      imageUrl: "test",
      name: "Item A",
      price: "10",
    };
    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );
    const addToCartButton = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButton);
    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
