import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export const Card = () => {
  const { handleCartUpdate } = useContext(CartContext);
  return (
    <div>
      <button
        onClick={() => {
          handleCartUpdate(1);
        }}
      >
        Buy Now !
      </button>
    </div>
  );
};
