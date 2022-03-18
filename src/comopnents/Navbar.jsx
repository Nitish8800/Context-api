import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
export const Navbar = () => {
  const cartCount = useContext(CartContext);
  return <div>Cart : {cartCount}</div>;
};
