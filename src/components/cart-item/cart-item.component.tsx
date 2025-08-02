import { FC, memo } from "react";
import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";
import { CartItem as TCartItem } from "../../store/cart/cart.types";

type CartItemprops = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemprops> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
