import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutBlock,
  Total,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, totalValue } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutBlock>
          <span>Product</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Description</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Quantity</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Price</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Remove</span>
        </CheckoutBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${totalValue}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
