import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import {
  addItemToCart,
  clearItem,
  removeItemFromCart,
} from "../../store/cart/cart.action.js";
import {
  CheckoutItemContainer,
  ImageContainer,
  NamenPrice,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemHandler = () => dispatch(clearItem(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NamenPrice>{name}</NamenPrice>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{cartItem.quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <NamenPrice>{price}</NamenPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
