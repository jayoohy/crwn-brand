/// <reference types="jest" />
import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("cart icon tests", () => {
  test("uses preloaded state to render", () => {
    const initialCartItems = [
      { id: 1, name: "Item A", imageUrl: "test", price: 10, quantity: 1 },
      { id: 1, name: "Item B", imageUrl: "test", price: 10, quantity: 5 },
    ];
    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });
    const cartIconElement = screen.getByText("6");
    expect(cartIconElement).toBeInTheDocument();
  });

  //   test("uses preloaded state to render", () => {});
});
