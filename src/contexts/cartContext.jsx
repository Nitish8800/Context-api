import { createContext } from "react";
import App from "../App";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  return (
    <CartContext.Provider>
      <App />
    </CartContext.Provider>
  );
};
