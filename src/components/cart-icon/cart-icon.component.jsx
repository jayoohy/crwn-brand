import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { CartIconContainer, ShopIcon, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShopIcon src={ShoppingIcon} alt="shopping bag" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
